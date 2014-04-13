/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package net.daw.process;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.BacklogBean;
import net.daw.dao.BacklogDao;
import net.daw.helper.Conexion;

/**
 *
 * @author Edu
 */
public class BacklogGet implements GenericOperation {
    
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                BacklogDao oBacklogDAO = new BacklogDao();
                BacklogBean oBacklog = new BacklogBean();
                oBacklog.setId(Integer.parseInt(request.getParameter("id")));
                oBacklogDAO.get(oBacklog);
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oBacklog);
                
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("BacklogGetJson: View Error: " + e.getMessage());
        }
    }
    
}
