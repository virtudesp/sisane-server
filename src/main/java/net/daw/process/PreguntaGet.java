 /*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author al037721
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import net.daw.bean.PreguntaBean;
import net.daw.dao.PreguntaDao;
import net.daw.helper.Conexion;


public class PreguntaGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                PreguntaDao oPreguntaDAO = new PreguntaDao();
                PreguntaBean oPregunta = new PreguntaBean();
                oPregunta.setId(Integer.parseInt(request.getParameter("id")));
                oPreguntaDAO.get(oPregunta);
                data = new Gson().toJson(oPregunta);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("PreguntaGetJson: View Error: " + e.getMessage());
        }
    }
}