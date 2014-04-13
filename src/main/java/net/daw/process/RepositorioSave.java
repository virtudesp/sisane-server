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
import net.daw.bean.RepositorioBean;
import net.daw.dao.RepositorioDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author al037431
 */
public class RepositorioSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            RepositorioDao oRepositorioDAO = new RepositorioDao();
            RepositorioBean oRepositorio = new RepositorioBean();            
            Gson gson=  new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oRepositorio = gson.fromJson(jason, oRepositorio.getClass());
            Map<String, String> data = new HashMap<>();
            if (oRepositorio != null) {
                oRepositorio = oRepositorioDAO.set(oRepositorio);
                data.put("status", "200");
                data.put("message", Integer.toString(oRepositorio.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("RepositorioSaveJson: View Error: " + e.getMessage());
        }
    }
}

