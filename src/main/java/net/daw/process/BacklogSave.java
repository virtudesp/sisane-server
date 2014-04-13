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
import net.daw.bean.BacklogBean;
import net.daw.dao.BacklogDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author Edu
 */
public class BacklogSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            BacklogDao oBacklogDAO = new BacklogDao();
            BacklogBean oBacklog = new BacklogBean();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oBacklog = gson.fromJson(jason, oBacklog.getClass());
            Map<String, String> data = new HashMap<>();
            if (oBacklog != null) {
                oBacklog = oBacklogDAO.set(oBacklog);
                data.put("status", "200");
                data.put("message", Integer.toString(oBacklog.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("BacklogSaveJson: View Error: " + e.getMessage());
        }
    }
}
