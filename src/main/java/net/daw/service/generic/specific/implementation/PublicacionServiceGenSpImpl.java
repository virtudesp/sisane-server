/*
 * Copyright (C) 2014 al038513
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.daw.bean.generic.specific.implementation.AmistadBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.PublicacionBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.PublicacionDaoGenSpImpl;
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.EncodingUtilHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;
import net.daw.service.generic.implementation.TableServiceGenImpl;

/**
 *
 * @author al038513
 */
public class PublicacionServiceGenSpImpl extends TableServiceGenImpl {

    public PublicacionServiceGenSpImpl(String strObject, String pojo, Connection con) {
        super(strObject, "publicacion", con);
    }

    public String duplicate(Integer id) throws Exception {
        String jason = null;
        PublicacionBeanGenSpImpl oPublicacion = new PublicacionBeanGenSpImpl();
        UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();

        try {
            oConnection.setAutoCommit(false);
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            jason = this.get(id);
            oPublicacion = gson.fromJson(jason, oPublicacion.getClass());
            oUsuario = oPublicacion.getObj_usuario();
            oPublicacion.setId(0);
            oPublicacion.setId_usuario(oUsuario.getId());
            jason = gson.toJson(oPublicacion);
            jason = this.set(jason);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return jason;
    }

    public String set(String jason, int id_usuario, int id_tipousuario) throws Exception {
        String resultado = null;
        try {
            oConnection.setAutoCommit(false);
            PublicacionDaoGenSpImpl oPublicacionDAO = new PublicacionDaoGenSpImpl(strObjectName, oConnection);
            PublicacionBeanGenSpImpl oPublicacion = new PublicacionBeanGenSpImpl();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy HH:mm:ss").create();
            jason = EncodingUtilHelper.decodeURIComponent(jason);
            oPublicacion = gson.fromJson(jason, oPublicacion.getClass());
            if (oPublicacion.getId_usuario() == id_usuario || id_tipousuario == 1) {
                oPublicacion = oPublicacionDAO.set(oPublicacion);
                Map<String, String> data = new HashMap<>();
                data.put("status", "200");
                data.put("message", Integer.toString(oPublicacion.getId()));
                resultado = gson.toJson(data);
            } else {
                Map<String, String> data = new HashMap<>();
                data.put("status", "500");
                data.put("message", "Error, el usuario no coincide con el que hay en sesión.");
                resultado = gson.toJson(data);                
            }
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return resultado;
    }
    
    public String agregarAmigo(String jason) throws Exception {
        String resultado = null;
        try {
            oConnection.setAutoCommit(false);
            PublicacionDaoGenSpImpl oPublicacionDAO = new PublicacionDaoGenSpImpl(strObjectName, oConnection);
            AmistadBeanGenSpImpl oAmistad = new AmistadBeanGenSpImpl();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy HH:mm:ss").create();
            jason = EncodingUtilHelper.decodeURIComponent(jason);
            oAmistad = gson.fromJson(jason, oAmistad.getClass());
            oAmistad = oPublicacionDAO.agregarAmigo(oAmistad);
            Map<String, String> data = new HashMap<>();
            data.put("status", "200");
            data.put("message", Integer.toString(oAmistad.getId()));
            resultado = gson.toJson(data);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return resultado;
    }

    @Override
    public String get(Integer id) throws Exception {
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            PublicacionDaoGenSpImpl oPublicacionDAO = new PublicacionDaoGenSpImpl(strObjectName, oConnection);
            PublicacionBeanGenSpImpl oPublicacion = new PublicacionBeanGenSpImpl(id);
            oPublicacion = oPublicacionDAO.get(oPublicacion, AppConfigurationHelper.getJsonDepth());
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy HH:mm:ss");
            Gson gson = gsonBuilder.create();
            data = gson.toJson(oPublicacion);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            PublicacionDaoGenSpImpl oPublicacionDAO = new PublicacionDaoGenSpImpl(strObjectName, oConnection);
            List<PublicacionBeanGenSpImpl> oPublicacions = oPublicacionDAO.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy HH:mm:ss");
            Gson gson = gsonBuilder.create();
            data = gson.toJson(oPublicacions);
            data = "{\"list\":" + data + "}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return data;
    }
    
    public String getPageComentarioAmigo(int id_usuario, int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            PublicacionDaoGenSpImpl oPublicacionDAO = new PublicacionDaoGenSpImpl(strObjectName, oConnection);
            List<PublicacionBeanGenSpImpl> oPublicacions = oPublicacionDAO.getPageComentarioAmigo(id_usuario, intRegsPerPag, intPage, alFilter, hmOrder);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy HH:mm:ss");
            Gson gson = gsonBuilder.create();
            data = gson.toJson(oPublicacions);
            data = "{\"list\":" + data + "}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return data;
    }
    
    public String getPagesComentarioAmigo(int id_usuario, int intRegsPerPag, ArrayList<FilterBeanHelper> alFilter) throws Exception {
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            PublicacionDaoGenSpImpl oPublicacionDAO = new PublicacionDaoGenSpImpl(strObjectName, oConnection);
            int pages = oPublicacionDAO.getPagesComentarioAmigo(id_usuario, intRegsPerPag, alFilter);
            data = "{\"data\":\"" + Integer.toString(pages) + "\"}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPages ERROR: " + ex.getMessage()));
        }
        return data;
    }
    
    public String getComentarioAmigo(int id_usuario, int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            String columns = this.getColumns();
            String prettyColumns = this.getPrettyColumns();
            //String types = this.getTypes();
            String page = this.getPageComentarioAmigo(id_usuario, intRegsPerPag, intPage, alFilter, hmOrder);
            String pages = this.getPagesComentarioAmigo(id_usuario, intRegsPerPag, alFilter);
            String registers = this.getCount(alFilter);
            data = "{\"data\":{"
                    + "\"columns\":" + columns
                    + ",\"prettyColumns\":" + prettyColumns
                    // + ",\"types\":" + types
                    + ",\"page\":" + page
                    + ",\"pages\":" + pages
                    + ",\"registers\":" + registers
                    + "}}";
            oConnection.commit();

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getAggregateViewSome ERROR: " + ex.getMessage()));
        }
        return data;
    }
}
