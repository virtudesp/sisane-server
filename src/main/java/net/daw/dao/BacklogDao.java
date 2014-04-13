/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package net.daw.dao;
import net.daw.bean.BacklogBean;
import net.daw.helper.Conexion;

/**
 *
 * @author al037602
 */
public class BacklogDao extends GenericDaoImplementation<BacklogBean> {
    
        public BacklogDao( ) throws Exception {
        super( "backlog");
    }
    
}
