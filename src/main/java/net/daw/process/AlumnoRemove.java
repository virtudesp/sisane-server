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
import net.daw.bean.AlumnoBean;
import net.daw.dao.AlumnoDao;
import net.daw.helper.Conexion;



/**
 *
 * @author rafa
 */
public class AlumnoRemove implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            AlumnoDao oAlumnoDAO = new AlumnoDao();
            AlumnoBean oAlumno = new AlumnoBean();                                           
            oAlumno.setId(Integer.parseInt(request.getParameter("id")));            
            Map<String, String> data = new HashMap<>();
            if (oAlumno != null) {
                oAlumnoDAO.remove(oAlumno);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oAlumno.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;        
        } catch (Exception e) {
            throw new ServletException("AlumnoRemoveJson: View Error: " + e.getMessage());
        }
    }
}
