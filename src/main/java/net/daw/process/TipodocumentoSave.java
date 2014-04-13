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
import net.daw.bean.TipodocumentoBean;
import net.daw.dao.TipodocumentoDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;

/**
 *
 * @author Jacobo
 */
public class TipodocumentoSave implements GenericOperation {
    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            TipodocumentoDao oTipodocumentoDAO = new TipodocumentoDao();
            TipodocumentoBean oTipodocumento = new TipodocumentoBean();
            Gson gson = new Gson();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oTipodocumento = gson.fromJson(jason, oTipodocumento.getClass());
            Map<String, String> data = new HashMap<>();
            if (oTipodocumento != null) {
                oTipodocumentoDAO.set(oTipodocumento);
                data.put("status", "200");
                data.put("message", Integer.toString(oTipodocumento.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("TipodocumentoSaveJson: View Error: " + e.getMessage());
        }
    }
}
