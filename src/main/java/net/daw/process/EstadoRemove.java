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
import net.daw.bean.EstadoBean;
import net.daw.dao.EstadoDao;
import net.daw.helper.Conexion;



/**
 *
 * @author Diana Ortega
 */
public class EstadoRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            EstadoDao oEstadoDAO = new EstadoDao();
            EstadoBean oEstado = new EstadoBean();                                           
            oEstado.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oEstado != null) {
                oEstadoDAO.remove(oEstado);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oEstado.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("EstadoRemoveJson: View Error: " + e.getMessage());
        }
    }
}
