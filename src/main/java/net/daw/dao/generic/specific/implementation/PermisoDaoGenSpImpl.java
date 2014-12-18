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
import java.sql.SQLException;
import net.daw.bean.generic.specific.implementation.PermisoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipooperacionBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipousuarioBeanGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.helper.ExceptionBooster;

public class PermisoDaoGenSpImpl extends TableDaoGenImpl<PermisoBeanGenSpImpl> implements TableDaoInterface<PermisoBeanGenSpImpl>, ViewDaoInterface<PermisoBeanGenSpImpl>, MetaDaoInterface {

    

    public PermisoDaoGenSpImpl(String strObject, Connection pooledConnection) throws Exception {
        super(strObject, "Permiso", pooledConnection);
       
    }

    public int getPermissionId(PermisoBeanGenSpImpl oPermisoBean) throws SQLException {
        int id = 0;
        try {
            String strIdTipoU = oPermisoBean.getId_tipousuario().toString();
            String strIdTipoO = oPermisoBean.getId_tipooperacion().toString();
            id = Integer.parseInt(oMysql.getIdByTwoValues("permiso", "id_tipousuario", strIdTipoU, "id_tipooperacion", strIdTipoO));

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ": ERROR: " + ex.getMessage()));
        }
        return id;

    }

    public boolean hasPermission(PermisoBeanGenSpImpl oPermisoBean) throws SQLException {
        boolean permiso = false;
        try {
            int id = this.getPermissionId(oPermisoBean);
            if (oMysql.existsOne(strTabla, id)) {
                if (Integer.parseInt(oMysql.getOne("permiso", "permitido", id))==1) {
                    permiso = true;
                } else {
                    permiso = false;
                }
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ": ERROR: " + ex.getMessage()));
        }
        return permiso;

    }
}
