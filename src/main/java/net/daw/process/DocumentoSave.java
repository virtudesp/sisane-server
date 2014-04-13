/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.DocumentoBean;
import net.daw.dao.DocumentoDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;



/**
 *
 * @author Alvaro
 */
public class DocumentoSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            DocumentoDao oDocumentoDAO = new DocumentoDao();
            DocumentoBean oDocumento = new DocumentoBean();
            Gson gson=  new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oDocumento = gson.fromJson(jason, oDocumento.getClass());
            Map<String, String> data = new HashMap<>();
            if (oDocumento != null) {
                oDocumento = oDocumentoDAO.set(oDocumento);
                data.put("status", "200");
                data.put("message", Integer.toString(oDocumento.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("DocumentoSaveJson: View Error: " + e.getMessage());
        }
    }
}
