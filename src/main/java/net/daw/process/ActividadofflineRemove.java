/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author Javi Bonet
 */

import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.ActividadofflineBean;
import net.daw.dao.ActividadofflineDao;
import net.daw.helper.Conexion;


public class ActividadofflineRemove implements GenericOperation{
    
    
     @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            ActividadofflineDao oActividadofflineDAO = new ActividadofflineDao();
            ActividadofflineBean oActividadoffline = new ActividadofflineBean();                                           
            oActividadoffline.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oActividadoffline != null) {
                oActividadofflineDAO.remove(oActividadoffline);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oActividadoffline.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("ActividadofflineRemoveJson: View Error: " + e.getMessage());
        }
    }
    }
    
    
    
    
    
    

