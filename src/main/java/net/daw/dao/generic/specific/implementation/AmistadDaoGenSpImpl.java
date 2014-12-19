/*
 * Copyright (C) July 2014 Rafael Aznar
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package net.daw.dao.generic.specific.implementation;

import net.daw.dao.generic.implementation.TableDaoGenImpl;
import java.sql.Connection;
import net.daw.bean.generic.specific.implementation.AmistadBeanGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.helper.ExceptionBooster;

public class AmistadDaoGenSpImpl extends TableDaoGenImpl<AmistadBeanGenSpImpl> {

    public AmistadDaoGenSpImpl(String strObject, Connection pooledConnection) throws Exception {
        super(strObject, strObject, pooledConnection);
    }



    public AmistadBeanGenSpImpl agregarAmigo(AmistadBeanGenSpImpl oAmigoBean) throws Exception {
        try {
            oMysql.agregarAmigo(oAmigoBean.getId_usuario_1(), oAmigoBean.getId_usuario_2());

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":agregarAmigo ERROR: " + ex.getMessage()));
        }
        return oAmigoBean;
    }

    public AmistadBeanGenSpImpl removeAmigo(AmistadBeanGenSpImpl oAmigoBean) throws Exception {
        try {
            oMysql.removeAmigo(oAmigoBean.getId_usuario_1(), oAmigoBean.getId_usuario_2());

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":removeAmigo ERROR: " + ex.getMessage()));
        }
        return oAmigoBean;
    }
    
    public Boolean existeAmigo(AmistadBeanGenSpImpl oAmigoBean) throws Exception {
        int oAmigo = 0;
        Boolean amigo = false;
        try {
            oAmigo = oMysql.existeAmigo(oAmigoBean.getId_usuario_1(), oAmigoBean.getId_usuario_2());
            if (oAmigo > 0) {
                amigo = true;
            } else {
                amigo = false;
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":existeAmigo ERROR: " + ex.getMessage()));
        }
        return amigo;
    }
}
