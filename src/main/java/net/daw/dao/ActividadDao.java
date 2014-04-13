/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package net.daw.dao;

import net.daw.bean.ActividadBean;

/**
 *
 * @author Jacobo
 */
public class ActividadDao extends GenericDaoImplementation<ActividadBean> {
    public ActividadDao() throws Exception {        
        super("actividad");
    }

}
