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
import net.daw.bean.AlumnoBean;
import net.daw.dao.AlumnoDao;


public class AlumnoGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                AlumnoDao oAlumnoDAO = new AlumnoDao();
                AlumnoBean oAlumno = new AlumnoBean();
                oAlumno.setId(Integer.parseInt(request.getParameter("id")));
                oAlumnoDAO.get(oAlumno);
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oAlumno);
                
                
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("AlumnoGetJson: View Error: " + e.getMessage());
        }
    }
}