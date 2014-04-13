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
import net.daw.bean.EstadoBean;
import net.daw.dao.EstadoDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;



/**
 *
 * @author Diana Ortega
 */
public class EstadoSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            EstadoDao oEstadoDAO = new EstadoDao();
            EstadoBean oEstado = new EstadoBean();
            Gson gson = new Gson();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oEstado = gson.fromJson(jason, oEstado.getClass());
            Map<String, String> data = new HashMap<>();
            if (oEstado != null) {
                oEstado = oEstadoDAO.set(oEstado);
                data.put("status", "200");
                data.put("message", Integer.toString(oEstado.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("EstadoSaveJson: View Error: " + e.getMessage());
        }
    }
}
