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
import net.daw.bean.PreguntaBean;
import net.daw.dao.PreguntaDao;
import net.daw.helper.Conexion;

/**
 *
 * @author al037721
 */
public class PreguntaRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            PreguntaDao oPreguntaDAO = new PreguntaDao();
            PreguntaBean oPregunta = new PreguntaBean();                                           
            oPregunta.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();            
            if (oPregunta != null) {
                oPreguntaDAO.remove(oPregunta);    
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oPregunta.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("PreguntaRemoveJson: View Error: " + e.getMessage());
        }
    }
}

