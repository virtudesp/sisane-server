/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.PreguntaBean;
import net.daw.helper.Conexion;

/**
 *
 * @author al037721
 */
public class PreguntaDao extends GenericDaoImplementation<PreguntaBean> {
  
    public PreguntaDao() throws Exception {
        super("pregunta");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de pregunta";
    }
    
}
