/*
 * Copyright (C) July 2014 Rafael Aznar
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package net.daw.service.generic.implementation;

import net.daw.service.publicinterface.ViewServiceInterface;
import net.daw.service.publicinterface.TableServiceInterface;
import net.daw.service.publicinterface.MetaServiceInterface;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.lang.reflect.Constructor;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import net.daw.bean.generic.implementation.GenericBeanImpl;
import net.daw.bean.publicinterface.BeanInterface;
import net.daw.dao.generic.implementation.GenericTableDaoImpl;

public abstract class GenericTableServiceImpl extends GenericViewServiceImpl implements TableServiceInterface, ViewServiceInterface, MetaServiceInterface {

    public GenericTableServiceImpl(String ob, Connection con) {
        super(ob, con);
    }

    @Override
    public String remove(Integer id) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            GenericBeanImpl oGenericBean = (GenericBeanImpl) Class.forName("net.daw.bean.implementation." + strObjectName + "BeanImpl").newInstance();
            Constructor c = Class.forName("net.daw.dao.implementation." + strObjectName + "DaoImpl").getConstructor(Connection.class);
            GenericTableDaoImpl oGenericDao = (GenericTableDaoImpl) c.newInstance(oConnection);
            oGenericBean.setId(id);
            Map<String, String> data = new HashMap<>();
            if (oGenericBean != null) {
                oGenericDao.remove(oGenericBean);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oGenericBean.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("RemoveJson: View Error: " + e.getMessage());
        } finally {
            oConnection.commit();
        }
    }

    @Override
    public String save(String jason) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            GenericBeanImpl oGenericBean = (GenericBeanImpl) Class.forName("net.daw.bean.implementation." + strObjectName + "BeanImpl").newInstance();
            Constructor c = Class.forName("net.daw.dao.implementation." + strObjectName + "DaoImpl").getConstructor(Connection.class);
            GenericTableDaoImpl oGenericDao = (GenericTableDaoImpl) c.newInstance(oConnection);
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").excludeFieldsWithoutExposeAnnotation().create();
            oGenericBean = gson.fromJson(jason, oGenericBean.getClass());
            Map<String, String> data = new HashMap<>();
            if (oGenericBean != null) {
                oGenericBean = (GenericBeanImpl) (BeanInterface) oGenericDao.set(oGenericBean);
                data.put("status", "200");
                data.put("message", Integer.toString(oGenericBean.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("SaveJson: View Error: " + e.getMessage());
        } finally {
            oConnection.commit();
        }

    }
}
