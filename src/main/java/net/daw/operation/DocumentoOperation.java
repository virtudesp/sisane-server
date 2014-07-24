/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.operation;

import java.sql.Connection;
import javax.servlet.ServletException;
import net.daw.bean.DocumentoBean;
import net.daw.dao.DocumentoDao;

/**
 *
 * @author rafa
 */
public class DocumentoOperation extends GenericOperationImpl {

    public DocumentoOperation(Connection con) {
        super("Documento", con);
    }

    public String getContenido(Integer id) throws Exception {
        String data;
        try {
            DocumentoBean oDocumentoBean = new DocumentoBean();
            oDocumentoBean.setId(id);
            DocumentoDao oDocumentoDao = new DocumentoDao(oConnection);
            oDocumentoBean = oDocumentoDao.get(oDocumentoBean);
            return "{\"data\":\"" + oDocumentoBean.getContenido() + "\"}";
        } catch (Exception e) {
            throw new ServletException("GetContenido: View Error: " + e.getMessage());
        }
    }

    //pte: http://remysharp.com/2008/04/01/wiki-to-html-using-javascript/
    //http://randomactsofcoding.blogspot.com.es/2009/08/parsewikijs-javascript-wiki-parsing.html
    //http://www.ivan.fomichev.name/2008/04/javascript-creole-10-wiki-markup-parser.html
    //http://web-tec.info/WikiParser/
    //http://jscreole.sourceforge.net/
//        @Override
//    public String get(DocumentoBean oBean, DocumentoDao oDao) throws Exception {
//        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//        String data;
//        try {
//        
//            oBean = (DocumentoBean) (GenericBeanInterface) oDao.get(oBean);
//            GsonBuilder gsonBuilder = new GsonBuilder();
//            gsonBuilder.setDateFormat("dd/MM/yyyy");
//            Gson gson = gsonBuilder.create();
//            oBean.setPresentacion(TextParser.textDecode(oBean.getPresentacion()));
//            data = gson.toJson(oBean);
//            return data;
//
//        } catch (Exception e) {
//            throw new ServletException("GetJson: View Error: " + e.getMessage());
//        }
//
//    }
//    
//     @Override
//    public String save(String jason, DocumentoBean oBean, DocumentoDao oDao) throws Exception {     
//        try {
//            Gson gson = new Gson();
//            Map<String, String> data = new HashMap<>();
//            if (oBean != null) {
//                oBean.setPresentacion(TextParser.textEncode(TextParser.toHtml(oBean.getContenido(), "")));
//                oBean = (DocumentoBean) (GenericBeanInterface) oDao.set(oBean);
//                data.put("status", "200");
//                data.put("message", Integer.toString(oBean.getId()));
//            } else {
//                data.put("status", "error");
//                data.put("message", "error");
//            }
//            String resultado = gson.toJson(data);
//            return resultado;
//        } catch (Exception e) {
//            throw new ServletException("SaveJson: View Error: " + e.getMessage());
//        }
//    }
}
