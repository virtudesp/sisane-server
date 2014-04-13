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
import net.daw.bean.FollowerBean;
import net.daw.dao.FollowerDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author rafa
 */
public class FollowerSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            FollowerDao oFollowerDAO = new FollowerDao();
            FollowerBean oFollower = new FollowerBean();
            Gson gson = new Gson();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oFollower = gson.fromJson(jason, oFollower.getClass());
            Map<String, String> data = new HashMap<>();
            if (oFollower != null) {
                oFollower = oFollowerDAO.set(oFollower);
                data.put("status", "200");
                data.put("message", Integer.toString(oFollower.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("FollowerSaveJson: View Error: " + e.getMessage());
        }
    }
}
