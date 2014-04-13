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
import net.daw.dao.RepositorioDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;
import net.daw.bean.RepositorioBean;

/**
 *
 * @author al037431
 */
public class RepositorioRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            RepositorioDao oRepositorioDAO = new RepositorioDao();
            RepositorioBean oRepositorio = new RepositorioBean();                                           
            oRepositorio.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oRepositorio != null) {
                oRepositorioDAO.remove(oRepositorio);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oRepositorio.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("RepositorioRemoveJson: View Error: " + e.getMessage());
        }
    }
}

