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
import net.daw.bean.EntradaBean;
import net.daw.dao.EntradaDao;
import net.daw.helper.Conexion;


public class EntradaGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                EntradaDao oEntradaDAO = new EntradaDao();
                EntradaBean oEntrada = new EntradaBean();
                oEntrada.setId(Integer.parseInt(request.getParameter("id")));
                oEntradaDAO.get(oEntrada);
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oEntrada);
                
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("EntradaGetJson: View Error: " + e.getMessage());
        }
    }
}