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
import net.daw.bean.CuestionarioBean;
import net.daw.dao.CuestionarioDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;



/**
 *
 * @author rafa
 */
public class CuestionarioSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            CuestionarioDao oCuestionarioDAO = new CuestionarioDao();
            CuestionarioBean oCuestionario = new CuestionarioBean();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oCuestionario = gson.fromJson(jason, oCuestionario.getClass());
            Map<String, String> data = new HashMap<>();
            if (oCuestionario != null) {
                oCuestionario = oCuestionarioDAO.set(oCuestionario);
                data.put("status", "200");
                data.put("message", Integer.toString(oCuestionario.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("CuestionarioSaveJson: View Error: " + e.getMessage());
        }
    }
}
