/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author Diana Ortega
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import net.daw.bean.EstadoBean;
import net.daw.dao.EstadoDao;
import net.daw.helper.Conexion;


public class EstadoGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                EstadoDao oEstadoDAO = new EstadoDao();
                EstadoBean oEstado = new EstadoBean();
                oEstado.setId(Integer.parseInt(request.getParameter("id")));
                oEstadoDAO.get(oEstado);
                data = new Gson().toJson(oEstado);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("EstadoGetJson: View Error: " + e.getMessage());
        }
    }
}