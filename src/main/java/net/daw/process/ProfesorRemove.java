/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.ProfesorBean;
import net.daw.dao.ProfesorDao;
import net.daw.helper.Conexion;



/**
 *
 * @author Pedro Benito
 */
public class ProfesorRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            ProfesorDao oProfesorDAO = new ProfesorDao();
            ProfesorBean oProfesor = new ProfesorBean();                                           
            oProfesor.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oProfesor != null) {
                oProfesorDAO.remove(oProfesor);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oProfesor.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("ProfesorRemoveJson: View Error: " + e.getMessage());
        }
    }
}
