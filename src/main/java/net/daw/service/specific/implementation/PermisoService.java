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
package net.daw.service.specific.implementation;

import net.daw.service.generic.implementation.TableServiceGenImpl;
import java.sql.Connection;
import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.specific.implementation.ObjetoBean;
import net.daw.bean.specific.implementation.OperacionBean;
import net.daw.bean.specific.implementation.PermisoBean;
import net.daw.bean.specific.implementation.TipousuarioBean;
import net.daw.bean.specific.implementation.UsuarioBean;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.dao.specific.implementation.ObjetoDao;
import net.daw.dao.specific.implementation.OperacionDao;
import net.daw.dao.specific.implementation.PermisoDao;
import net.daw.helper.statics.ExceptionBooster;

public class PermisoService extends TableServiceGenImpl {

    public PermisoService(HttpServletRequest request) {
        super(request);
    }

    public boolean hasPermission(String strOperacion, String strObjeto, UsuarioBean oUsuario) throws SQLException {
        boolean permiso = false;
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);
            
            ObjetoBean oObjetoBean = new ObjetoBean();
            oObjetoBean.setDescripcion(strObjeto);
            ObjetoDao oObjetoDao = new ObjetoDao(oConnection);
            oObjetoBean.setId(oObjetoDao.getId(oObjetoBean));

            OperacionDao oOperacionDao = new OperacionDao(oConnection);
            OperacionBean oOperacionBean = new OperacionBean();
            oOperacionBean.setDescripcion(strOperacion);
            oOperacionBean.setId_objeto(oObjetoBean.getId());
            oOperacionBean.setId(oOperacionDao.getOperationId(oOperacionBean));
            oOperacionDao.get(oOperacionBean, 1);

            //TipousuarioBean oTipoUsuarioBean = oUsuario.getObj_tipousuario();
            //int idTipousuario = oTipoUsuarioBean.getId();
            //int idTipooperacion = oOperacionBean.getId_tipooperacion();

//            PermisoBean oPermisoBean = new PermisoBean();
//            oPermisoBean.setId_tipooperacion(idTipooperacion);
//            oPermisoBean.setId_tipousuario(idTipousuario);
//            PermisoDao oPermisoDao = new PermisoDao(oConnection);
//            permiso = oPermisoDao.hasPermission(oPermisoBean);

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ": ERROR: " + ex.getMessage()));
        } finally {
            oConnection.close();
        }
        return permiso;
    }

}
