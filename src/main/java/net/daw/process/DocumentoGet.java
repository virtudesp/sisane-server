/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

/**
 *
 * @author Alvaro
 */
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
import net.daw.helper.TextParser;

public class DocumentoGet implements GenericOperation {

    private HashMap<String, String> parameters;

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data;
        try {
            if (request.getParameter("id") == null) {
                data = "{\"error\":\"id is mandatory\"}";
            } else {
                DocumentoDao oDocumentoDAO = new DocumentoDao();
                DocumentoBean oDocumento = new DocumentoBean();
                oDocumento.setId(Integer.parseInt(request.getParameter("id")));
                oDocumentoDAO.get(oDocumento);
                oDocumento.setContenido(TextParser.toHtml(oDocumento.getContenido(), ""));
                
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.create();
                data = gson.toJson(oDocumento);
            }
            return data;
        } catch (Exception e) {
            throw new ServletException("DocumentoGetJson: View Error: " + e.getMessage());
        }
    }
}
