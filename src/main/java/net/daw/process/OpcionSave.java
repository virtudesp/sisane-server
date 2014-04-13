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
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;
import net.daw.bean.OpcionBean;
import net.daw.dao.OpcionDao;

/**
 *
 * @author rafa
 */
public class OpcionSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            OpcionDao oOpcionDAO = new OpcionDao();
            OpcionBean oOpcion = new OpcionBean();
            Gson gson = new Gson();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oOpcion = gson.fromJson(jason, oOpcion.getClass());
            Map<String, String> data = new HashMap<>();
            if (oOpcion != null) {
                oOpcion = oOpcionDAO.set(oOpcion);
                data.put("status", "200");
                data.put("message", Integer.toString(oOpcion.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("OpcionSaveJson: View Error: " + e.getMessage());
        }
    }
}
