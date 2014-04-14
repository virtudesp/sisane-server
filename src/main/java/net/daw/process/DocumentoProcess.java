/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import net.daw.bean.DocumentoBean;
import net.daw.bean.GenericBeanInterface;
import net.daw.dao.DocumentoDao;
import net.daw.dao.GenericDaoInterface;
import net.daw.helper.TextParser;

/**
 *
 * @author rafa
 */
public class DocumentoProcess extends GenericProcessImplementation<DocumentoBean, DocumentoDao> {

    //pte: http://remysharp.com/2008/04/01/wiki-to-html-using-javascript/
    //http://randomactsofcoding.blogspot.com.es/2009/08/parsewikijs-javascript-wiki-parsing.html
    //http://www.ivan.fomichev.name/2008/04/javascript-creole-10-wiki-markup-parser.html
    //http://web-tec.info/WikiParser/
    //http://jscreole.sourceforge.net/
    
        @Override
    public String get(DocumentoBean oBean, DocumentoDao oDao) throws Exception {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String data;
        try {
        
            oBean = (DocumentoBean) (GenericBeanInterface) oDao.get(oBean);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.create();
            oBean.setPresentacion(TextParser.textDecode(oBean.getPresentacion()));
            data = gson.toJson(oBean);
            return data;

        } catch (Exception e) {
            throw new ServletException("GetJson: View Error: " + e.getMessage());
        }

    }
    
     @Override
    public String save(String jason, DocumentoBean oBean, DocumentoDao oDao) throws Exception {     
        try {
            Gson gson = new Gson();
            Map<String, String> data = new HashMap<>();
            if (oBean != null) {
                oBean.setPresentacion(TextParser.textEncode(TextParser.toHtml(oBean.getContenido(), "")));
                oBean = (DocumentoBean) (GenericBeanInterface) oDao.set(oBean);
                data.put("status", "200");
                data.put("message", Integer.toString(oBean.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("SaveJson: View Error: " + e.getMessage());
        }
    }
    
}
