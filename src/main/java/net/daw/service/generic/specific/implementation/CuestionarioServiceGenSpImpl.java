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
import java.sql.Array;
import java.sql.Connection;
import java.util.ArrayList;
import javax.servlet.ServletException;
import net.daw.bean.generic.specific.implementation.CuestionarioBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.DocumentoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.OpcionBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.PreguntaBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.PublicacionBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.CuestionarioDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.DocumentoDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.OpcionDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.PreguntaDaoGenSpImpl;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;
import net.daw.service.generic.implementation.TableServiceGenImpl;

/**
 *
 * @author al038098
 */
public class CuestionarioServiceGenSpImpl extends TableServiceGenImpl {

    public CuestionarioServiceGenSpImpl(String strObject, String pojo, Connection con) {
        super(strObject, "Cuestionario", con);
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

        ArrayList<OpcionBeanGenSpImpl> resultado = new ArrayList<OpcionBeanGenSpImpl>();

        PreguntaDaoGenSpImpl oPreguntaDao = new PreguntaDaoGenSpImpl("pregunta", oConnection);
        OpcionDaoGenSpImpl oOpcionDao = new OpcionDaoGenSpImpl("opcion", oConnection);
        try {
            oConnection.setAutoCommit(false);
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            // Hacemos el filtro de preguntas segun el id de cuestionario
            ArrayList<FilterBeanHelper> alFilter = new ArrayList<FilterBeanHelper>();
            FilterBeanHelper filtro = new FilterBeanHelper();
            filtro.setFilter("id_cuestionario");
            filtro.setFilterOperator("equals");
            filtro.setFilterValue(id.toString());
            alFilter.add(filtro);
            // Hacemos el array de preguntas
            ArrayList<PreguntaBeanGenSpImpl> preguntas = oPreguntaDao.getPage(1000, 1, alFilter, null);
            // Recorremos cada pojo del array
            for (PreguntaBeanGenSpImpl oPreguntaBean : preguntas) {
                //Hacemos el filtro segun el id de la pregunta
                ArrayList<FilterBeanHelper> alFilter2 = new ArrayList<FilterBeanHelper>();
                FilterBeanHelper filtro2 = new FilterBeanHelper();
                filtro2.setFilter("id_pregunta");
                filtro2.setFilterOperator("equals");
                filtro2.setFilterValue(oPreguntaBean.getId().toString());
                alFilter2.add(filtro2);
                // Hacemos el getpage de opcion con el filtro
                ArrayList<OpcionBeanGenSpImpl> opciones = oOpcionDao.getPage(1000, 1, alFilter2, null);
                // Cada pojo encontrado lo metemos en un array externo
                for (OpcionBeanGenSpImpl oOpcionBean : opciones) {
                    resultado.add(oOpcionBean);
                }
            }

            jason = "{\"data\":" + gson.toJson(resultado) + "}";

            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return jason;
    }
}
