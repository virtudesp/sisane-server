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
 * @author Jacobo
 */
public class TipodocumentoGetprettycolumns implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\", \"descripcion\", \"¿privado?\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("TipodocumentoGetprettycolumnsJson: View Error: " + e.getMessage());
        }
    }
}
