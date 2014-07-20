/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.EntradaBean;
import net.daw.helper.Conexion;

/**
 *
 * @author José
 */
public class EntradaDao extends GenericDaoImplementation<EntradaBean> {

    public EntradaDao() throws Exception {
        super( "entrada");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de entrada";
    }

}
