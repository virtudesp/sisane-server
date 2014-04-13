/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author Javier Bonet
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.bean.ActividadofflineBean;
import net.daw.dao.ActividadofflineDao;
import net.daw.helper.Conexion;




public class ActividadofflineGet implements GenericOperation{
    
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                ActividadofflineDao oActividadofflineDAO = new ActividadofflineDao();
                ActividadofflineBean oActividadoffline = new ActividadofflineBean();
                oActividadoffline.setId(Integer.parseInt(request.getParameter("id")));
                oActividadofflineDAO.get(oActividadoffline);
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oActividadoffline);
                
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("ACtividadofflineGetJson: View Error: " + e.getMessage());
        }
    }
    
}
