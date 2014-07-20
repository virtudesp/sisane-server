/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.EstadoBean;
import net.daw.helper.Conexion;

/**
 *
 * @author Diana Ortega
 */
public class EstadoDao extends GenericDaoImplementation<EstadoBean> {
    
     public EstadoDao() throws Exception {
        super("estado");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de estado";
    }
    
}
