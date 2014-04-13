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
import net.daw.bean.FollowerBean;
import net.daw.dao.FollowerDao;
import net.daw.helper.Conexion;


public class FollowerGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
               FollowerDao oFollowerDAO = new FollowerDao();
                FollowerBean oFollower = new FollowerBean();
                oFollower.setId(Integer.parseInt(request.getParameter("id")));
                oFollowerDAO.get(oFollower);
                data = new Gson().toJson(oFollower);
                
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("FollowerGetJson: View Error: " + e.getMessage());
        }
    }
}