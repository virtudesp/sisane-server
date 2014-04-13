/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author rafa
 */
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.bean.HiloBean;
import net.daw.dao.HiloDao;
import net.daw.helper.Conexion;

public class HiloGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;
        try {
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                HiloDao oHiloDAO = new HiloDao();
                HiloBean oHilo = new HiloBean();
                oHilo.setId(Integer.parseInt(request.getParameter("id")));
                oHiloDAO.get(oHilo);
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oHilo);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("HiloGetJson: View Error: " + e.getMessage());
        }
    }
}
