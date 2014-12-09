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
package net.daw.control.operation.generic.specific.implementation;

import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.generic.specific.implementation.ObjetoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.OperacionBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipousuarioBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.control.operation.generic.implementation.ControlOperationGenImpl;
import net.daw.dao.generic.specific.implementation.ObjetoDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.OperacionDaoGenSpImpl;
import net.daw.service.generic.specific.implementation.PermisoServiceGenSpImpl;

public class PermisoControlOperationGenSpImpl extends ControlOperationGenImpl {

    public PermisoControlOperationGenSpImpl(HttpServletRequest request) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, Exception {
        super(request);
    }
  
    public boolean getPermission(HttpServletRequest request) throws Exception {
        PermisoServiceGenSpImpl oPermiso = new PermisoServiceGenSpImpl(strObject,connection);
        String objeto = request.getParameter("ob");
        String operacion = request.getParameter("op");
        UsuarioBeanGenSpImpl oUsuarioBean = (UsuarioBeanGenSpImpl)request.getSession().getAttribute("usuarioBean");
        return oPermiso.hasPermission(operacion, objeto, oUsuarioBean);
    }
}
