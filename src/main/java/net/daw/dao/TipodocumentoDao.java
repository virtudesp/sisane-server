/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.DocumentoBean;
import net.daw.bean.TipodocumentoBean;


/**
 *
 * @author al037877
 */
public class TipodocumentoDao extends GenericDaoImplementation<TipodocumentoBean> {

    public TipodocumentoDao() throws Exception {
        super("tipodocumento");
    }

}
