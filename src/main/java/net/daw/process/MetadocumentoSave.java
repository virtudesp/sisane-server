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
import net.daw.bean.MetadocumentoBean;
import net.daw.dao.MetadocumentoDao;
import net.daw.helper.Conexion;
import net.daw.helper.EncodingUtil;


/**
 *
 * @author al037431
 */
public class MetadocumentoSave implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            MetadocumentoDao oMetadocumentoDAO = new MetadocumentoDao();
            MetadocumentoBean oMetadocumento = new MetadocumentoBean();
            Gson gson=  new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            String jason = request.getParameter("json");
            jason = EncodingUtil.decodeURIComponent(jason);
            oMetadocumento = gson.fromJson(jason, oMetadocumento.getClass());
            Map<String, String> data = new HashMap<>();
            if (oMetadocumento != null) {
                oMetadocumento = oMetadocumentoDAO.set(oMetadocumento);
                data.put("status", "200");
                data.put("message", Integer.toString(oMetadocumento.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("MetadocumentoSaveJson: View Error: " + e.getMessage());
        }
    }
}

