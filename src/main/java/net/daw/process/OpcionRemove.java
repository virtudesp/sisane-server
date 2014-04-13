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
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;
import net.daw.bean.OpcionBean;
import net.daw.dao.OpcionDao;

/**
 *
 * @author al037213
 */
public class OpcionRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            OpcionDao oOpcionDAO = new OpcionDao();
            OpcionBean oOpcion = new OpcionBean();                                           
            oOpcion.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();            
            if (oOpcion != null) {
                oOpcionDAO.remove(oOpcion);    
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oOpcion.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("OpcionRemoveJson: View Error: " + e.getMessage());
        }
    }
}

