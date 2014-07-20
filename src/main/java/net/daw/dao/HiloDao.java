/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.HiloBean;
import net.daw.helper.Conexion;

/**
 *
 * @author José
 */
public class HiloDao extends GenericDaoImplementation<HiloBean> {

    public HiloDao() throws Exception {
        super( "hilo");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de hilo";
    }

}
