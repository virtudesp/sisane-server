/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author Jordi
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.bean.IncidenciasBean;
import net.daw.dao.IncidenciasDao;
import net.daw.helper.Conexion;


public class IncidenciasGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                IncidenciasDao oIncidenciasDAO = new IncidenciasDao();
                IncidenciasBean oIncidencias = new IncidenciasBean();
                oIncidencias.setId(Integer.parseInt(request.getParameter("id")));
                oIncidenciasDAO.get(oIncidencias);
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oIncidencias);
                
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("IncidenciasGetJson: View Error: " + e.getMessage());
        }
    }
}