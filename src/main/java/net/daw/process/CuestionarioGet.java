/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author rafa
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.bean.CuestionarioBean;
import net.daw.dao.CuestionarioDao;
import net.daw.helper.Conexion;


public class CuestionarioGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                CuestionarioDao oCuestionarioDAO = new CuestionarioDao();
                CuestionarioBean oCuestionario = new CuestionarioBean();
                oCuestionario.setId(Integer.parseInt(request.getParameter("id")));
                oCuestionarioDAO.get(oCuestionario);
              
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oCuestionario);      
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("CuestionarioGetJson: View Error: " + e.getMessage());
        }
    }
}