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
import net.daw.bean.VotodocumentoBean;
import net.daw.dao.VotodocumentoDao;
import net.daw.helper.Conexion;

/**
 *
 * @author Jacobo
 */
public class VotodocumentoRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            VotodocumentoDao oVotodocumentoDAO = new VotodocumentoDao();
            VotodocumentoBean oVotodocumento = new VotodocumentoBean();                                           
            oVotodocumento.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oVotodocumento != null) {
                oVotodocumentoDAO.remove(oVotodocumento);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oVotodocumento.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("VotodocumentoRemoveJson: View Error: " + e.getMessage());
        }
    }
}
