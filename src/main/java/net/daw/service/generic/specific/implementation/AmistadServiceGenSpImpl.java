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
import java.util.HashMap;
import java.util.Map;
import net.daw.bean.generic.specific.implementation.AmistadBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.AmistadDaoGenSpImpl;
import net.daw.helper.ExceptionBooster;

public class AmistadServiceGenSpImpl extends TableServiceGenImpl {

    public AmistadServiceGenSpImpl(String strObject, String pojo, Connection con) {
        super(strObject, "amistad", con);
    }
    
    public String agregarAmigo(int id_usuario_1, int id_usuario_2) throws Exception {
        String resultado = null;
        try {
            oConnection.setAutoCommit(false);
         
            AmistadDaoGenSpImpl oAmigoDAO = new AmistadDaoGenSpImpl(strObjectName, oConnection); 
            AmistadBeanGenSpImpl oAmigo = new AmistadBeanGenSpImpl();
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
    
    public String removeAmigo(int id_usuario_1, int id_usuario_2) throws Exception {
        String resultado = null;
        try {
            oConnection.setAutoCommit(false);
            AmistadDaoGenSpImpl oAmigoDAO = new AmistadDaoGenSpImpl(strObjectName, oConnection);
            AmistadBeanGenSpImpl oAmigo = new AmistadBeanGenSpImpl();
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

    public String existeAmigo(int id_usuario_1, int id_usuario_2) throws Exception {
        String resultado = null;
        try {
            oConnection.setAutoCommit(false);
            AmistadDaoGenSpImpl oAmigoDAO = new AmistadDaoGenSpImpl(strObjectName, oConnection);
            AmistadBeanGenSpImpl oAmigo = new AmistadBeanGenSpImpl();
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
