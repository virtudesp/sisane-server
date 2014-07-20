/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.ActividadBean;
import net.daw.bean.UsuarioBean;

/**
 *
 * @author Jacobo
 */
public class ActividadDao extends GenericDaoImplementation<ActividadBean> {
    public ActividadDao() throws Exception {        
        super("actividad");
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de actividad";
    }



}
