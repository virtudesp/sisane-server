/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author Alvaro
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import net.daw.bean.LenguajeBean;
import net.daw.dao.LenguajeDao;
import net.daw.helper.Conexion;


public class LenguajeGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                LenguajeDao oLenguajeDAO = new LenguajeDao();
                LenguajeBean oLenguaje = new LenguajeBean();
                oLenguaje.setId(Integer.parseInt(request.getParameter("id")));
                oLenguajeDAO.get(oLenguaje);
                data = new Gson().toJson(oLenguaje);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("LenguajeGetJson: View Error: " + e.getMessage());
        }
    }
}