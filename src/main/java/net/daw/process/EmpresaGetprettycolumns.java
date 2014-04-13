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
 * @author AntonioNP
 */
public class EmpresaGetprettycolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\",\"N usuario\", \"N empresa\", \"cif\", \"direccion\", \"localidad\", \"provincia\", \"pais\", \"telefono\", \"fax\", \"actividad\", \"nombrecontacto\", \"emailcontacto\", \"validada\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("EmpresaGetpagesJson: View Error: " + e.getMessage());
        }
    }
}
