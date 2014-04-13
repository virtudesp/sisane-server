 /*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author al037570
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.daw.bean.OpcionBean;
import com.google.gson.Gson;
import net.daw.dao.OpcionDao;
import net.daw.helper.Conexion;

public class OpcionGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                OpcionDao oOpcionDAO = new OpcionDao();
                OpcionBean oOpcion = new OpcionBean();
                oOpcion.setId(Integer.parseInt(request.getParameter("id")));
                oOpcionDAO.get(oOpcion);
                data = new Gson().toJson(oOpcion);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("OpcionGetJson: View Error: " + e.getMessage());
        }
    }
}