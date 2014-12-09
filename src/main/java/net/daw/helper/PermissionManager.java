/*
 * Copyright (C) 2014 vesprada
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
package net.daw.helper;

import java.sql.Connection;
import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.service.generic.specific.implementation.PermisoServiceGenSpImpl;

/**
 *
 * @author vesprada
 */
public class PermissionManager {

    public PermissionManager() {
    }
    
    public boolean getPermission(HttpServletRequest request, Connection connection) throws SQLException, Exception {
       
        PermisoServiceGenSpImpl oPermiso = new PermisoServiceGenSpImpl("permiso", "Permiso", connection);
        String objeto = request.getParameter("ob");
        String operacion = request.getParameter("op");
        UsuarioBeanGenSpImpl oUsuarioBean = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
        boolean permiso = oPermiso.hasPermission(operacion, objeto, oUsuarioBean);
        return permiso;
    }

}
