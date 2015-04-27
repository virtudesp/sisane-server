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
package net.daw.service.specific.implementation;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.sql.Connection;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.specific.implementation.CuestionarioBean;
import net.daw.bean.specific.implementation.OpcionBean;
import net.daw.bean.specific.implementation.PreguntaBean;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.dao.specific.implementation.CuestionarioDao;
import net.daw.dao.specific.implementation.OpcionDao;
import net.daw.dao.specific.implementation.PreguntaDao;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.ParameterCook;
import net.daw.service.generic.implementation.TableServiceGenImpl;

public class CuestionarioService extends TableServiceGenImpl {

    public CuestionarioService(HttpServletRequest request) {
        super(request);
    }

    public String gettipocuestionario(Integer id) throws Exception {
        String data;
        CuestionarioBean oCuestionarioBean = null;
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);
            oCuestionarioBean = new CuestionarioBean();
            oCuestionarioBean.setId(id);
            CuestionarioDao oCuestionarioDao = new CuestionarioDao(oConnection);
            oCuestionarioBean = oCuestionarioDao.get(oCuestionarioBean, 1);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            throw new ServletException("GetContenido: View Error: " + ex.getMessage());
        }
        return "{\"data\":\"" + oCuestionarioBean.getTipo() + "\"}";
    }

    public String getallpreguntas() throws Exception {
        String jason = null;
        Integer id = ParameterCook.prepareId(oRequest);
        ArrayList<OpcionBean> resultado = new ArrayList<OpcionBean>();
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);
            PreguntaDao oPreguntaDao = new PreguntaDao(oConnection);
            OpcionDao oOpcionDao = new OpcionDao(oConnection);

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
            ArrayList<PreguntaBean> preguntas = oPreguntaDao.getPage(1000, 1, alFilter, null);
            // Recorremos cada pojo del array
            for (PreguntaBean oPreguntaBean : preguntas) {
                //Hacemos el filtro segun el id de la pregunta
                ArrayList<FilterBeanHelper> alFilter2 = new ArrayList<FilterBeanHelper>();
                FilterBeanHelper filtro2 = new FilterBeanHelper();
                filtro2.setFilter("id_pregunta");
                filtro2.setFilterOperator("equals");
                filtro2.setFilterValue(oPreguntaBean.getId().toString());
                alFilter2.add(filtro2);
                // Hacemos el getpage de opcion con el filtro
                ArrayList<OpcionBean> opciones = oOpcionDao.getPage(1000, 1, alFilter2, null);
                // Cada pojo encontrado lo metemos en un array externo
                for (OpcionBean oOpcionBean : opciones) {
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
