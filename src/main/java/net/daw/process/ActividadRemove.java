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
import net.daw.bean.ActividadBean;
import net.daw.dao.ActividadDao;
import net.daw.helper.Conexion;

/**
 *
 * @author Jacobo
 */
public class ActividadRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            ActividadDao oActividadDAO = new ActividadDao();
            ActividadBean oActividad = new ActividadBean();                                           
            oActividad.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oActividad != null) {
                oActividadDAO.remove(oActividad);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oActividad.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("ActividadRemoveJson: View Error: " + e.getMessage());
        }
    }
}
