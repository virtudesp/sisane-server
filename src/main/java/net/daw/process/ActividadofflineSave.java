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
import com.google.gson.GsonBuilder;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.ActividadofflineBean;
import net.daw.dao.ActividadofflineDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;


public class ActividadofflineSave implements GenericOperation{
    
      @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            ActividadofflineDao oActividadofflineDAO = new ActividadofflineDao();
            ActividadofflineBean oActividadoffline = new ActividadofflineBean();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oActividadoffline = gson.fromJson(jason, oActividadoffline.getClass());
            Map<String, String> data = new HashMap<>();
            if (oActividadoffline != null) {
                oActividadoffline = oActividadofflineDAO.set(oActividadoffline);
                data.put("status", "200");
                data.put("message", Integer.toString(oActividadoffline.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("ActividadofflineSaveJson: View Error: " + e.getMessage());
        }
    }
  
    
}
