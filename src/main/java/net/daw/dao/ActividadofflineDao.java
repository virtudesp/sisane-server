/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.ActividadofflineBean;
import net.daw.helper.Conexion;

/**
 *
 * @author Javier Bonet
 */
public class ActividadofflineDao extends GenericDaoImplementation<ActividadofflineBean>{
    
    public ActividadofflineDao() throws Exception {
        super("actividadoffline");
    }

 
    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de actividadoffline";
    }


   
    
}
