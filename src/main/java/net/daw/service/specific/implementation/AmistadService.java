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
package net.daw.service.specific.implementation;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.service.generic.implementation.TableServiceGenImpl;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.specific.implementation.AmistadBean;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.dao.specific.implementation.AmistadDao;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.ParameterCook;

public class AmistadService extends TableServiceGenImpl {

    public AmistadService(HttpServletRequest request) {
        super(request);
    }

    public String agregarAmigo() throws Exception {
        int id_usuario_1 = ParameterCook.prepareInt("id_usuario_1", oRequest);
        int id_usuario_2 = ParameterCook.prepareInt("id_usuario_1", oRequest);
        String resultado = null;
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);

            AmistadDao oAmigoDAO = new AmistadDao(oConnection);
            AmistadBean oAmigo = new AmistadBean();
            oAmigo.setId_usuario_1(id_usuario_1);
            oAmigo.setId_usuario_2(id_usuario_2);

            Boolean amigo = oAmigoDAO.existeAmigo(oAmigo);

            if (!amigo) {
                Gson gson = new GsonBuilder().create();
                oAmigo = oAmigoDAO.set(oAmigo);
                Map<String, String> data = new HashMap<>();
                data.put("status", "200");
                data.put("message", Integer.toString(oAmigo.getId()));
                resultado = gson.toJson(data);
            } else {
                Gson gson = new GsonBuilder().create();
                Map<String, String> data = new HashMap<>();
                data.put("status", "500");
                data.put("message", "Error, este usuario ya es tu amigo.");
                resultado = gson.toJson(data);
            }

            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return resultado;
    }

    public String removeAmigo() throws Exception {
        String resultado = null;
        int id_usuario_1 = ParameterCook.prepareInt("id_usuario_1", oRequest);
        int id_usuario_2 = ParameterCook.prepareInt("id_usuario_1", oRequest);
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);
            AmistadDao oAmigoDAO = new AmistadDao(oConnection);
            AmistadBean oAmigo = new AmistadBean();
            oAmigo.setId_usuario_1(id_usuario_1);
            oAmigo.setId_usuario_2(id_usuario_2);
            Gson gson = new GsonBuilder().create();

            oAmigo = oAmigoDAO.removeAmigo(oAmigo);
            Map<String, String> data = new HashMap<>();
            data.put("status", "200");
            data.put("message", Integer.toString(oAmigo.getId()));
            resultado = gson.toJson(data);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return resultado;
    }

    public String existeAmigo() throws Exception {
        String resultado = null;
        int id_usuario_1 = ParameterCook.prepareInt("id_usuario_1", oRequest);
        int id_usuario_2 = ParameterCook.prepareInt("id_usuario_1", oRequest);
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);
            AmistadDao oAmigoDAO = new AmistadDao(oConnection);
            AmistadBean oAmigo = new AmistadBean();
            oAmigo.setId_usuario_1(id_usuario_1);
            oAmigo.setId_usuario_2(id_usuario_2);

            Boolean amigo = oAmigoDAO.existeAmigo(oAmigo);
            resultado = "{\"data\":" + amigo + "}";
            oConnection.commit();

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":existeAmigo ERROR: " + ex.getMessage()));
        }
        return resultado;
    }
}
