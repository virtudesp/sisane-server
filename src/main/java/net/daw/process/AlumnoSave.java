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
import net.daw.bean.AlumnoBean;
import net.daw.dao.AlumnoDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author rafa
 */
public class AlumnoSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            AlumnoDao oAlumnoDAO = new AlumnoDao();
            AlumnoBean oAlumno = new AlumnoBean();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oAlumno = gson.fromJson(jason, oAlumno.getClass());
            Map<String, String> data = new HashMap<>();
            if (oAlumno != null) {
                oAlumno = oAlumnoDAO.set(oAlumno);
                data.put("status", "200");
                data.put("message", Integer.toString(oAlumno.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("AlumnoSaveJson: View Error: " + e.getMessage());
        }
    }
}
