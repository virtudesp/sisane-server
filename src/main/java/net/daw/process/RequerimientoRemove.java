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
import net.daw.bean.RequerimientoBean;
import net.daw.dao.RequerimientoDao;
import net.daw.helper.Conexion;

/**
 *
 * @author al037342
 */
public class RequerimientoRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            RequerimientoDao oRequerimientoDAO = new RequerimientoDao();
            RequerimientoBean oRequerimiento = new RequerimientoBean();                                           
            oRequerimiento.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oRequerimiento != null) {
                oRequerimientoDAO.remove(oRequerimiento);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oRequerimiento.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("RequerimientoRemoveJson: View Error: " + e.getMessage());
        }
    }
}