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
 * @author al037684
 */
public class ComentarioGetprettycolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\", \"titulo\", \"contenido\", \"fecha\", \"id_usuario\", \"id_documento\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("ComentarioGetprettycolumnsJson: View Error: " + e.getMessage());
        }
    }
}
