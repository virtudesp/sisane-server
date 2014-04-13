/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.daw.bean.VotodocumentoBean;

import com.google.gson.Gson;
import net.daw.dao.VotodocumentoDao;
import net.daw.helper.Conexion;

/**
 *
 * @author al037877
 */

public class VotodocumentoGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                VotodocumentoDao oVotodocumentoDAO = new VotodocumentoDao();
                VotodocumentoBean oVotodocumento = new VotodocumentoBean();
                oVotodocumento.setId(Integer.parseInt(request.getParameter("id")));
                oVotodocumento = oVotodocumentoDAO.get(oVotodocumento);
                data = new Gson().toJson(oVotodocumento);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("VotodocumentoGetJson: View Error: " + e.getMessage());
        }
    }
}
