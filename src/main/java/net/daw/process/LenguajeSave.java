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
import net.daw.bean.LenguajeBean;
import net.daw.dao.LenguajeDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;



/**
 *
 * @author Alvaro
 */
public class LenguajeSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            LenguajeDao oLenguajeDAO = new LenguajeDao();
            LenguajeBean oLenguaje = new LenguajeBean();
            Gson gson = new Gson();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oLenguaje = gson.fromJson(jason, oLenguaje.getClass());
            Map<String, String> data = new HashMap<>();
            if (oLenguaje != null) {
                oLenguaje = oLenguajeDAO.set(oLenguaje);
                data.put("status", "200");
                data.put("message", Integer.toString(oLenguaje.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("LenguajeSaveJson: View Error: " + e.getMessage());
        }
    }
}
