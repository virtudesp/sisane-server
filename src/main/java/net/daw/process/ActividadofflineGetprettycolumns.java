/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author Javi Bonet
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public class ActividadofflineGetprettycolumns  implements GenericOperation{
    
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\", \"enunciado\", \"fecha\", \"calificacion\", \"evaluacion\", \"activo\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("ACtividadofflineGetpagesJson: View Error: " + e.getMessage());
        }
    }
    
    
}
