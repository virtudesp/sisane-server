/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Locale;
import net.daw.bean.DocumentoBean;

/**
 *
 * @author rafa
 */
public class DocumentoDao extends GenericDaoImplementation<DocumentoBean> {

    public DocumentoDao() throws Exception {
        super("documento");
    }

    @Override
    public String getDescription(int id) throws Exception {
        DocumentoBean oDocumentoBean = new DocumentoBean();
        oDocumentoBean.setId(id);
        oDocumentoBean = this.get(oDocumentoBean);
        String description;
        if (oDocumentoBean.getTitulo().length() > 20) {
            description = oDocumentoBean.getTitulo().substring(0, 19) + "...";
        } else {
            description = oDocumentoBean.getTitulo();
        }
        description += " (" + oDocumentoBean.getHits().toString() + " hits)";
        return description;
    }

}
