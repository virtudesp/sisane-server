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
import net.daw.bean.CuestionarioBean;
import net.daw.dao.CuestionarioDao;
import net.daw.helper.Conexion;



/**
 *
 * @author rafa
 */
public class CuestionarioRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            CuestionarioDao oCuestionarioDAO = new CuestionarioDao();
            CuestionarioBean oCuestionario = new CuestionarioBean();                                           
            oCuestionario.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oCuestionario != null) {
                oCuestionarioDAO.remove(oCuestionario);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oCuestionario.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("CuestionarioRemoveJson: View Error: " + e.getMessage());
        }
    }
}
