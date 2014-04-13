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
 * @author rafa
 */
public class AlumnoGetprettycolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"ID\", \"ID Usuario\", \"DNI\", \"Núm. Exp.\", \"Nombre\", \"P. Ape\", "
                    + "\"S. Ape\", \"Sexo\", \"Domicilio\", \"Cod. Postal\", \"Población\", \"Provincia\", "
                    + "\"Teléfono\", \"Em@il\", \"Validado\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("AlumnoGetpagesJson: View Error: " + e.getMessage());
        }
    }
}
