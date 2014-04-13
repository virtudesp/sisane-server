/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import net.daw.bean.RequerimientoBean;
import net.daw.helper.Conexion;

/**
 *
 * @author al037342
 */
public class RequerimientoDao extends GenericDaoImplementation<RequerimientoBean> {

    public RequerimientoDao() throws Exception {
        super( "requerimiento");
    }

}
