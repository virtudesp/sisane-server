/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.ComentarioBean;
import net.daw.dao.ComentarioDao;
import net.daw.helper.Conexion;

/**
 *
 * @author al037684
 */
public class ComentarioGet implements GenericOperation {
 
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                ComentarioDao oComentarioDAO = new ComentarioDao();
                ComentarioBean oComentario = new ComentarioBean();
                oComentario.setId(Integer.parseInt(request.getParameter("id")));
                oComentarioDAO.get(oComentario);                                
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oComentario);                
                //data = new Gson().toJson(oComentario);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("ComentarioGetJson: View Error: " + e.getMessage());
        }
    }
}
