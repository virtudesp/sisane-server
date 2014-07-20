/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.DocumentoBean;
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


    @Override
    public String getDescription(int id) throws Exception {
        TipodocumentoBean oTipodocumentoBean = new TipodocumentoBean();
        oTipodocumentoBean.setId(id);
        oTipodocumentoBean = this.get(oTipodocumentoBean);
        String description;
        if (oTipodocumentoBean.getDescripcion().length() > 20) {
            description = oTipodocumentoBean.getDescripcion().substring(0, 19) + "...";
        } else {
            description = oTipodocumentoBean.getDescripcion();
        }
        return description;
    }

}
