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
import net.daw.bean.ActividadBean;
import net.daw.dao.ActividadDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author Jacobo
 */
public class ActividadSave implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            ActividadDao oActividadDAO = new ActividadDao();
            ActividadBean oActividad = new ActividadBean();
            Gson gson=  new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oActividad = gson.fromJson(jason, oActividad.getClass());
            Map<String, String> data = new HashMap<>();
            if (oActividad != null) {
                oActividadDAO.set(oActividad);
                data.put("status", "200");
                data.put("message", Integer.toString(oActividad.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("ActividadSaveJson: View Error: " + e.getMessage());
        }
    }
}
