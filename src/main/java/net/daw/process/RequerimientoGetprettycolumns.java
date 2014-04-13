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
 * @author al037342
 */
public class RequerimientoGetprettycolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\", \"enunciado\", \"fecha alta\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("RequerimientoGetpagesJson: View Error: " + e.getMessage());
        }
    }
}
