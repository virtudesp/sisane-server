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

import net.daw.service.publicinterface.TableServiceInterface;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.lang.reflect.Constructor;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.dao.generic.implementation.TableDaoGenImpl;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.ParameterCook;

public abstract class TableServiceGenImpl extends ViewServiceGenImpl implements TableServiceInterface {

    public TableServiceGenImpl(HttpServletRequest request) {
        super(request);
    }

    @Override
    public String remove() throws Exception {
        Integer id = ParameterCook.prepareId(oRequest);
        String resultado = null;
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);
            BeanGenImpl oGenericBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Bean").newInstance();
            Constructor c = Class.forName("net.daw.dao.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Dao").getConstructor(Connection.class);
            TableDaoGenImpl oGenericDao = (TableDaoGenImpl) c.newInstance(oConnection);
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
            resultado = gson.toJson(data);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        } finally {
            oConnection.close();
        }
        return resultado;
    }

    @Override
    public String set() throws Exception {
        String jason = ParameterCook.prepareJson(oRequest);
        String resultado = null;
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);
            BeanGenImpl oGenericBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Bean").newInstance();
            Constructor c = Class.forName("net.daw.dao.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Dao").getConstructor(Connection.class);
            TableDaoGenImpl oGenericDao = (TableDaoGenImpl) c.newInstance(oConnection);
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").excludeFieldsWithoutExposeAnnotation().create();
            oGenericBean = gson.fromJson(jason, oGenericBean.getClass());
            Map<String, String> data = new HashMap<>();
            if (oGenericBean != null) {
                oGenericBean = (BeanGenImpl) (BeanInterface) oGenericDao.set(oGenericBean);
                data.put("status", "200");
                data.put("message", Integer.toString(oGenericBean.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            resultado = gson.toJson(data);
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        } finally {
            oConnection.commit();
        }
        return resultado;
    }

}
