/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.VotodocumentoBean;
import net.daw.helper.Conexion;

/**
 *
 * @author al037877
 */
public class VotodocumentoDao extends GenericDaoImplementation<VotodocumentoBean> {

    public VotodocumentoDao() throws Exception {
        super( "votodocumento");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de votodocumento";
    }
}
