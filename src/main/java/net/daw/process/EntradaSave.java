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
import net.daw.bean.EntradaBean;
import net.daw.dao.EntradaDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author rafa
 */
public class EntradaSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            EntradaDao oEntradaDAO = new EntradaDao();
            EntradaBean oEntrada = new EntradaBean();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oEntrada = gson.fromJson(jason, oEntrada.getClass());
            Map<String, String> data = new HashMap<>();
            if (oEntrada != null) {
                oEntrada = oEntradaDAO.set(oEntrada);
                data.put("status", "200");
                data.put("message", Integer.toString(oEntrada.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("EntradaSaveJson: View Error: " + e.getMessage());
        }
    }
}
