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
import net.daw.bean.EntradaBean;
import net.daw.dao.EntradaDao;
import net.daw.helper.Conexion;



/**
 *
 * @author rafa
 */
public class EntradaRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            EntradaDao oEntradaDAO = new EntradaDao();
            EntradaBean oEntrada = new EntradaBean();                                           
            oEntrada.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oEntrada != null) {
                oEntradaDAO.remove(oEntrada);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oEntrada.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("EntradaRemoveJson: View Error: " + e.getMessage());
        }
    }
}
