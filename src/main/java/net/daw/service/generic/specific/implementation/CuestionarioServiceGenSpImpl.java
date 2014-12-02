/*
 * Copyright (C) 2014 al038098
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
package net.daw.service.generic.specific.implementation;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.sql.Connection;
import java.util.ArrayList;
import javax.servlet.ServletException;
import net.daw.bean.generic.specific.implementation.CuestionarioBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.DocumentoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.PreguntaBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.PublicacionBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.CuestionarioDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.DocumentoDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.PreguntaDaoGenSpImpl;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;
import net.daw.service.generic.implementation.TableServiceGenImpl;

/**
 *
 * @author al038098
 */
public class CuestionarioServiceGenSpImpl extends TableServiceGenImpl {

    public CuestionarioServiceGenSpImpl(String strObject, Connection con) {
        super(strObject, con);
    }

    public String getTipoCuestionario(Integer id) throws Exception {
        String data;
        try {
            CuestionarioBeanGenSpImpl oCuestionarioBean = new CuestionarioBeanGenSpImpl();
            oCuestionarioBean.setId(id);
            CuestionarioDaoGenSpImpl oCuestionarioDao = new CuestionarioDaoGenSpImpl(strObjectName, oConnection);
            oCuestionarioBean = oCuestionarioDao.get(oCuestionarioBean, 1);
            return "{\"data\":\"" + oCuestionarioBean.getTipo() + "\"}";
        } catch (Exception e) {
            throw new ServletException("GetContenido: View Error: " + e.getMessage());
        }
    }

    public String getAllPreguntas(Integer id) throws Exception {
        String jason = null;
        ArrayList<FilterBeanHelper> alFilter;
        
        PreguntaBeanGenSpImpl oPreguntaBean = new PreguntaBeanGenSpImpl();
        PreguntaDaoGenSpImpl oPreguntaDao = new PreguntaDaoGenSpImpl("pregunta", oConnection);
        try {
            oConnection.setAutoCommit(false);
            oPreguntaDao.getPage(1000, 1, null, null);
            
            
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return jason;
    }
}
