/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author al037431
 */
public class RepositorioGetprettycolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\", \"titulo\", \"contenido\", \"id_usuario\", \"id_lenguaje\", \"id_documento\", \"fecha\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("RepositorioGetprettycolumnsJson: View Error: " + e.getMessage());
        }
    }
}
