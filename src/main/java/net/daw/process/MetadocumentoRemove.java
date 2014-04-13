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
import net.daw.bean.MetadocumentoBean;
import net.daw.dao.MetadocumentoDao;
import net.daw.helper.Conexion;
/**
 *
 * @author al037431
 */
public class MetadocumentoRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            MetadocumentoDao oMetadocumentoDAO = new MetadocumentoDao();
            MetadocumentoBean oMetadocumento = new MetadocumentoBean();                                           
            oMetadocumento.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oMetadocumento != null) {
                oMetadocumentoDAO.remove(oMetadocumento);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oMetadocumento.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("MetadocumentoRemoveJson: View Error: " + e.getMessage());
        }
    }
}
