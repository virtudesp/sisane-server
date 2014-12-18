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
package net.daw.service.generic.specific.implementation;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.service.generic.implementation.TableServiceGenImpl;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.generic.specific.implementation.RespuestaBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.RespuestaDaoGenSpImpl;
import net.daw.helper.ExceptionBooster;

public class RespuestaServiceGenSpImpl extends TableServiceGenImpl {

    public RespuestaServiceGenSpImpl(String strObject, String pojo, Connection con) {
        super(strObject, pojo, con);
    }

    public String setForm(Integer id, String jason) throws Exception {
        Map<Object, Object> nombreMap = new HashMap<Object, Object>();
        ArrayList<String> preguntas = new ArrayList<String>();
        String resultado = "";
        try {
            oConnection.setAutoCommit(false);
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();

            nombreMap = gson.fromJson(jason, nombreMap.getClass());
            preguntas = (ArrayList) nombreMap.get("preguntas");

            Map<String, String> data = new HashMap<>();
            data.put("status", "200");

            for (Integer i = 0; i < preguntas.size(); i++) {
                String pregunta = "pregunta_" + preguntas.get(i);
                Integer opcion = Integer.parseInt(nombreMap.get(pregunta).toString());

                RespuestaBeanGenSpImpl oRespuesta = new RespuestaBeanGenSpImpl();
                oRespuesta.setId(0);
                oRespuesta.setId_usuario(id);
                oRespuesta.setId_pregunta(Integer.parseInt(preguntas.get(i)));
                oRespuesta.setId_opcion(opcion);

                RespuestaDaoGenSpImpl oRespuestaDao = new RespuestaDaoGenSpImpl("Respuesta", oConnection);
                oRespuestaDao.set(oRespuesta);

                resultado += oRespuesta.getId() + ", ";
            }
            data.put("message", resultado);
            resultado = gson.toJson(data);
            oConnection.commit();

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return resultado;
    }
}
