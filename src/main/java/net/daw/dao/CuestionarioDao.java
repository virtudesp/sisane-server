/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.CuestionarioBean;
import net.daw.helper.Conexion;

/**
 *
 * @author Alvaro
 */
public class CuestionarioDao extends GenericDaoImplementation<CuestionarioBean> {

    public CuestionarioDao() throws Exception {
        super( "cuestionario");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de cuestionario";
    }




}
