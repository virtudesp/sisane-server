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
import net.daw.bean.EntregaBean;
import net.daw.dao.EntregaDao;
import net.daw.helper.Conexion;
/**
 *
 * @author al037805
 */
public class EntregaRemove implements GenericOperation {
    
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            EntregaDao oEntregaDAO = new EntregaDao();
            EntregaBean oEntrega = new EntregaBean();                                           
            oEntrega.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oEntrega != null) {
                oEntregaDAO.remove(oEntrega);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oEntrega.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("EntregaRemoveJson: View Error: " + e.getMessage());
        }
    }
    
}
