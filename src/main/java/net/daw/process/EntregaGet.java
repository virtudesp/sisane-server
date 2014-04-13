/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author al037805
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.bean.EntregaBean;
import net.daw.dao.EntregaDao;
import net.daw.helper.Conexion;


public class EntregaGet implements GenericOperation {
    
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;
        try {
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                EntregaDao oEntregaDAO = new EntregaDao();
                EntregaBean oEntrega = new EntregaBean();
                oEntrega.setId(Integer.parseInt(request.getParameter("id")));
                oEntregaDAO.get(oEntrega);
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oEntrega);
                
                
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("EntregaGetJson: View Error: " + e.getMessage());
        }
    }
    
}
