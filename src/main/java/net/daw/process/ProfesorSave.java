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
import net.daw.bean.ProfesorBean;
import net.daw.dao.ProfesorDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author Pedro Benito
 */
public class ProfesorSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            ProfesorDao oProfesorDAO = new ProfesorDao();
            ProfesorBean oProfesor = new ProfesorBean();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oProfesor = gson.fromJson(jason, oProfesor.getClass());
            Map<String, String> data = new HashMap<>();
            if (oProfesor != null) {
                oProfesor = oProfesorDAO.set(oProfesor);
                data.put("status", "200");
                data.put("message", Integer.toString(oProfesor.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("ProfesorSaveJson: View Error: " + e.getMessage());
        }
    }
}
