/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.dao.CuestionarioDao;
import net.daw.helper.Conexion;

/**
 *
 * @author rafa
 */
public class CuestionarioGetcolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ArrayList<String> alColumns = null;
        try {
            CuestionarioDao oCuestionarioDAO = new CuestionarioDao();
            alColumns = oCuestionarioDAO.getColumnsNames();
            String data;
            
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.create();
            data = gson.toJson(alColumns);
            data = "{\"data\":" + data + "}";
            
            return data;
        } catch (Exception e) {
            throw new ServletException("CuestionarioGetcolumnsJson: View Error: " + e.getMessage());
        }
    }
}
