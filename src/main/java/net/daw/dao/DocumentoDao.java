/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.sql.Connection;
import net.daw.bean.DocumentoBean;

/**
 *
 * @author rafa
 */
public class DocumentoDao extends GenericDaoImpl<DocumentoBean> {

    public DocumentoDao(Connection pooledConnection) throws Exception {
        super("documento", pooledConnection);
    }

//    @Override
//    public String getDescription(int id) throws Exception {
//        DocumentoBean oDocumentoBean = new DocumentoBean();
//        oDocumentoBean.setId(id);
//        oDocumentoBean = this.get(oDocumentoBean);
//        String description;
//        if (oDocumentoBean.getTitulo().length() > 20) {
//            description = oDocumentoBean.getTitulo().substring(0, 19) + "...";
//        } else {
//            description = oDocumentoBean.getTitulo();
//        }
//        description += " (" + oDocumentoBean.getHits().toString() + " hits)";
//        return description;
//    }
}
