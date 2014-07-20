/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.LenguajeBean;
import net.daw.helper.Conexion;

/**
 *
 * @author Alvaro
 */
public class LenguajeDao extends GenericDaoImplementation<LenguajeBean> {

    public LenguajeDao() throws Exception {
        super( "lenguaje");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de lenguaje";
    }

}
