/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.IncidenciasBean;
import net.daw.dao.IncidenciasDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author rafa
 */
public class IncidenciasSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            IncidenciasDao oIncidenciasDAO = new IncidenciasDao();
            IncidenciasBean oIncidencias = new IncidenciasBean();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oIncidencias = gson.fromJson(jason, oIncidencias.getClass());
            Map<String, String> data = new HashMap<>();
            if (oIncidencias != null) {
                oIncidencias = oIncidenciasDAO.set(oIncidencias);
                data.put("status", "200");
                data.put("message", Integer.toString(oIncidencias.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("IncidenciasSaveJson: View Error: " + e.getMessage());
        }
    }
}
