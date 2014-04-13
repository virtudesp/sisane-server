/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 *
 * @author Jordi
 */
public class IncidenciasGetprettycolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\", \"resumen\", \"cambios\", \"estado\", \"repositorio\", \"usuario\", \"fecha alta\", \"fecha resolución\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("IncidenciasGetpagesJson: View Error: " + e.getMessage());
        }
    }
}
