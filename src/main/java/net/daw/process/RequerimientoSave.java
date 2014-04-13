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
import net.daw.bean.RequerimientoBean;
import net.daw.dao.RequerimientoDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author al037342
 */
public class RequerimientoSave implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            RequerimientoDao oRequerimientoDAO = new RequerimientoDao();
            RequerimientoBean oRequerimiento = new RequerimientoBean();
            Gson gson=  new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oRequerimiento = gson.fromJson(jason, oRequerimiento.getClass());
            Map<String, String> data = new HashMap<>();
            if (oRequerimiento != null) {
                oRequerimientoDAO.set(oRequerimiento);
                data.put("status", "200");
                data.put("message", Integer.toString(oRequerimiento.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("RequerimientoSaveJson: View Error: " + e.getMessage());
        }
    }
}

