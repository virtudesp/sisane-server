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
import net.daw.bean.HiloBean;
import net.daw.dao.HiloDao;
import net.daw.helper.Conexion;



/**
 *
 * @author Alvaro
 */
public class HiloRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            HiloDao oHiloDAO = new HiloDao();
            HiloBean oHilo = new HiloBean();                                           
            oHilo.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oHilo != null) {
                oHiloDAO.remove(oHilo);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oHilo.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("HiloRemoveJson: View Error: " + e.getMessage());
        }
    }
}
