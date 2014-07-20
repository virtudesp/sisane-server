/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.ComentarioBean;
import net.daw.helper.Conexion;

/**
 *
 * @author al037684
 */
public class ComentarioDao extends GenericDaoImplementation<ComentarioBean> {   
    
    public ComentarioDao() throws Exception {
        super("comentario");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de comentario";
    }



    
}
