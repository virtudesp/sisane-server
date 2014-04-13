/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author al037431
 */
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.daw.bean.RepositorioBean;
import net.daw.dao.RepositorioDao;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.helper.Conexion;

public class RepositorioGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                RepositorioDao oRepositorioDAO = new RepositorioDao();
                RepositorioBean oRepositorio = new RepositorioBean();
                oRepositorio.setId(Integer.parseInt(request.getParameter("id")));
                oRepositorioDAO.get(oRepositorio);                                
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oRepositorio);                
                //data = new Gson().toJson(oRepositorio);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("RepositorioGetJson: View Error: " + e.getMessage());
        }
    }
}