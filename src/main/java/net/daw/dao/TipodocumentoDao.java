/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.sql.Connection;
import net.daw.bean.TipodocumentoBean;

/**
 *
 * @author al037877
 */
public class TipodocumentoDao extends GenericDaoImplementation<TipodocumentoBean> {

    public TipodocumentoDao(Connection pooledConnection) throws Exception {
        super("tipodocumento", pooledConnection);
    }

}
