/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import net.daw.bean.TipodocumentoBean;
import net.daw.helper.Conexion;

/**
 *
 * @author al037877
 */
public class TipodocumentoDao extends GenericDaoImplementation<TipodocumentoBean> {

    public TipodocumentoDao() throws Exception {
        super( "tipodocumento");
    }
}
