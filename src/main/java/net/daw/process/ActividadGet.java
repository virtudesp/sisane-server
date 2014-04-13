/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.daw.bean.ActividadBean;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.dao.ActividadDao;
import net.daw.helper.Conexion;

/**
 *
 * @author al037877
 */

public class ActividadGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                ActividadDao oActividadDAO = new ActividadDao();
                ActividadBean oActividad = new ActividadBean();
                oActividad.setId(Integer.parseInt(request.getParameter("id")));
                oActividadDAO.get(oActividad);                                
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oActividad);     
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("ActividadGetJson: View Error: " + e.getMessage());
        }
    }
}
