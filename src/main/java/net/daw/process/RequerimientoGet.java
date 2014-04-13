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
import net.daw.bean.RequerimientoBean;
import net.daw.dao.RequerimientoDao;
import net.daw.helper.Conexion;

/**
 *
 * @author al037342
 */
public class RequerimientoGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                RequerimientoDao oRequerimientoDAO = new RequerimientoDao();
                RequerimientoBean oRequerimiento = new RequerimientoBean();
                oRequerimiento.setId(Integer.parseInt(request.getParameter("id")));
                oRequerimientoDAO.get(oRequerimiento);
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oRequerimiento);
                
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("RequerimientoGetJson: View Error: " + e.getMessage());
        }
    }
    
}
