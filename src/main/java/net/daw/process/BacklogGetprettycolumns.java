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
 * @author Edu
 */
public class BacklogGetprettycolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\", \"enunciado\", \"descripciondetallado\", \"id_requerimiento\", \"fechainicioprevista\", \"fechafinprevista\", \"fechainicio\", \"fechafin\", \"id_usuario\", \"horasduracionprevista\", \"porcentajecompletado\", \"fechaalta\", \"sprint\", \"releasetabla\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("BacklogGetpagesJson: View Error: " + e.getMessage());
        }
    }
}
