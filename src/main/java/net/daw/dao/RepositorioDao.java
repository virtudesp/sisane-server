/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.RepositorioBean;
import net.daw.helper.Conexion;

/**
 *
 * @author al037431
 */
public class RepositorioDao extends GenericDaoImplementation<RepositorioBean> {
  
    public RepositorioDao() throws Exception {
        super("repositorio");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de repositorio";
    }
}
