/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author al037805
 */

import com.google.gson.Gson;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.dao.EntregaDao;
import net.daw.helper.Conexion;

public class EntregaGetcolumns implements GenericOperation {
    
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ArrayList<String> alColumns = null;
        try {
            EntregaDao oEntregaDAO = new EntregaDao();
            alColumns = oEntregaDAO.getColumnsNames();
            String data = new Gson().toJson(alColumns);
            data = "{\"data\":" + data + "}";
            return data;
            
        } catch (Exception e) {
            throw new ServletException("EntregaGetcolumnsJson: View Error: " + e.getMessage());
        }
    }
    
}
