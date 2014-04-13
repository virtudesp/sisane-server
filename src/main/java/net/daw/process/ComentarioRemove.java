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
import net.daw.bean.ComentarioBean;
import net.daw.dao.ComentarioDao;
import net.daw.helper.Conexion;

/**
 *
 * @author al037684
 */
public class ComentarioRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            ComentarioDao oComentarioDAO = new ComentarioDao();
            ComentarioBean oComentario = new ComentarioBean();                                           
            oComentario.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oComentario != null) {
                oComentarioDAO.remove(oComentario);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oComentario.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("ComentarioRemoveJson: View Error: " + e.getMessage());
        }
    }
}
