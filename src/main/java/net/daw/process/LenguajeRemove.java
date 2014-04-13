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
import net.daw.bean.LenguajeBean;
import net.daw.dao.LenguajeDao;
import net.daw.helper.Conexion;



/**
 *
 * @author Alvaro
 */
public class LenguajeRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            LenguajeDao oLenguajeDAO = new LenguajeDao();
            LenguajeBean oLenguaje = new LenguajeBean();                                           
            oLenguaje.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oLenguaje != null) {
                oLenguajeDAO.remove(oLenguaje);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oLenguaje.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("LenguajeRemoveJson: View Error: " + e.getMessage());
        }
    }
}
