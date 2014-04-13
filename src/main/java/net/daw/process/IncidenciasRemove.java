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
import net.daw.bean.IncidenciasBean;
import net.daw.dao.IncidenciasDao;
import net.daw.helper.Conexion;



/**
 *
 * @author rafa
 */
public class IncidenciasRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            IncidenciasDao oIncidenciasDAO = new IncidenciasDao();
            IncidenciasBean oIncidencias = new IncidenciasBean();                                           
            oIncidencias.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oIncidencias != null) {
                oIncidenciasDAO.remove(oIncidencias);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oIncidencias.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("IncidenciasRemoveJson: View Error: " + e.getMessage());
        }
    }
}
