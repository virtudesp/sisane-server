/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import net.daw.bean.DocumentoBean;
import net.daw.helper.Conexion;

/**
 *
 * @author Alvaro
 */
public class DocumentoDao extends GenericDaoImplementation<DocumentoBean> {

    public DocumentoDao() throws Exception {
        super( "documento");
    }

}
