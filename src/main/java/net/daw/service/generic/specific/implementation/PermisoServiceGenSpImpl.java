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
package net.daw.service.generic.specific.implementation;

import net.daw.service.generic.implementation.TableServiceGenImpl;
import java.sql.Connection;
import java.sql.SQLException;
import net.daw.bean.generic.specific.implementation.ObjetoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.OperacionBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.PermisoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipousuarioBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.ObjetoDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.OperacionDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.PermisoDaoGenSpImpl;
import net.daw.helper.ExceptionBooster;

public class PermisoServiceGenSpImpl extends TableServiceGenImpl {

    protected Connection oConnection = null;
    protected String strObjectName = null;

    public PermisoServiceGenSpImpl(String strObject,  String pojo, Connection con) {
        super(strObject, pojo, con);
        strObjectName = strObject;
        oConnection = con;
    }

    public boolean hasPermission(String strOperacion, String strObjeto, UsuarioBeanGenSpImpl oUsuario) throws SQLException {
        boolean permiso = false;
        try {
            oConnection.setAutoCommit(false);
            ObjetoBeanGenSpImpl oObjetoBean = new ObjetoBeanGenSpImpl();
            oObjetoBean.setDescripcion(strObjeto);
            ObjetoDaoGenSpImpl oObjetoDao = new ObjetoDaoGenSpImpl("objeto", oConnection);
            oObjetoBean.setId(oObjetoDao.getId(oObjetoBean));

            OperacionDaoGenSpImpl oOperacionDao = new OperacionDaoGenSpImpl("operacion", oConnection);
            OperacionBeanGenSpImpl oOperacionBean = new OperacionBeanGenSpImpl();
            oOperacionBean.setDescripcion(strOperacion);
            oOperacionBean.setId_objeto(oObjetoBean.getId());
            oOperacionBean.setId(oOperacionDao.getOperationId(oOperacionBean));
            oOperacionDao.get(oOperacionBean, 1);

            TipousuarioBeanGenSpImpl oTipoUsuarioBean = oUsuario.getObj_tipousuario();
            int idTipousuario = oTipoUsuarioBean.getId();
            int idTipooperacion = oOperacionBean.getId_tipooperacion();
            
            PermisoBeanGenSpImpl oPermisoBean = new PermisoBeanGenSpImpl();
            oPermisoBean.setId_tipooperacion(idTipooperacion);
            oPermisoBean.setId_tipousuario(idTipousuario);
            PermisoDaoGenSpImpl oPermisoDao = new PermisoDaoGenSpImpl("permiso",oConnection);
            permiso=oPermisoDao.hasPermission(oPermisoBean);
            
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ": ERROR: " + ex.getMessage()));
        }
        return permiso;

    }

}
