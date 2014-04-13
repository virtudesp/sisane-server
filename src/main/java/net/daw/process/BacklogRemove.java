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
import net.daw.bean.BacklogBean;
import net.daw.dao.BacklogDao;
import net.daw.helper.Conexion;



/**
 *
 * @author Edu
 */
public class BacklogRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            BacklogDao oBacklogDAO = new BacklogDao();
            BacklogBean oBacklog = new BacklogBean();                                           
            oBacklog.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oBacklog != null) {
                oBacklogDAO.remove(oBacklog);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oBacklog.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("BacklogRemoveJson: View Error: " + e.getMessage());
        }
    }
}
