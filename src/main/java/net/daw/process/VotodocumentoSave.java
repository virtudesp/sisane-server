/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.VotodocumentoBean;
import net.daw.dao.VotodocumentoDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author Jacobo
 */
public class VotodocumentoSave implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            VotodocumentoDao oVotodocumentoDAO = new VotodocumentoDao();
            VotodocumentoBean oVotodocumento = new VotodocumentoBean();
            Gson gson = new Gson();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oVotodocumento = gson.fromJson(jason, oVotodocumento.getClass());
            Map<String, String> data = new HashMap<>();
            if (oVotodocumento != null) {
                oVotodocumentoDAO.set(oVotodocumento);
                data.put("status", "200");
                data.put("message", Integer.toString(oVotodocumento.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("VotodocumentoSaveJson: View Error: " + e.getMessage());
        }
    }
}
