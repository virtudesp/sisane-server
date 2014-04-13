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
import net.daw.bean.UsuarioBean;
import net.daw.dao.UsuarioDao;
import net.daw.helper.Conexion;



/**
 *
 * @author Alvaro
 */
public class UsuarioRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            UsuarioDao oUsuarioDAO = new UsuarioDao();
            UsuarioBean oUsuario = new UsuarioBean();                                           
            oUsuario.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oUsuario != null) {
                oUsuarioDAO.remove(oUsuario);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oUsuario.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("UsuarioRemoveJson: View Error: " + e.getMessage());
        }
    }
}
