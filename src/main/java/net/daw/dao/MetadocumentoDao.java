/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.MetadocumentoBean;
import net.daw.helper.Conexion;
/**
 *
 * @author al037431
 */
public class MetadocumentoDao extends GenericDaoImplementation<MetadocumentoBean> {
  
    public MetadocumentoDao() throws Exception {
        super("metadocumento");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de metadocumento";
    }
    
}
