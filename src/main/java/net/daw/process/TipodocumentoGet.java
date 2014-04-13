/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.daw.bean.TipodocumentoBean;

import com.google.gson.Gson;
import net.daw.dao.TipodocumentoDao;
import net.daw.helper.Conexion;

/**
 *
 * @author al037877
 */

public class TipodocumentoGet implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;         
        try {            
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                TipodocumentoDao oTipodocumentoDAO = new TipodocumentoDao();
                TipodocumentoBean oTipodocumento = new TipodocumentoBean();
                oTipodocumento.setId(Integer.parseInt(request.getParameter("id")));
                oTipodocumento = oTipodocumentoDAO.get(oTipodocumento);
                data = new Gson().toJson(oTipodocumento);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("TipodocumentoGetJson: View Error: " + e.getMessage());
        }
    }
}
