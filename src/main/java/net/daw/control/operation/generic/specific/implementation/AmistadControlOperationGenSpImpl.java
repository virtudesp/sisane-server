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
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.control.operation.generic.implementation.ControlOperationGenImpl;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.ParameterCooker;
import net.daw.service.generic.specific.implementation.AmistadServiceGenSpImpl;

public class AmistadControlOperationGenSpImpl extends ControlOperationGenImpl {

    private ConnectionInterface DataConnectionSource = null;
    private Connection oConnection = null;
    private AmistadServiceGenSpImpl oAmistadService = null;

    public AmistadControlOperationGenSpImpl(HttpServletRequest request) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, Exception {
        super(request);
        DataConnectionSource = new BoneConnectionPoolImpl();
        oConnection = DataConnectionSource.newConnection();
        oAmistadService = new AmistadServiceGenSpImpl(ParameterCooker.prepareObject(request), ParameterCooker.prepareObject(request), oConnection);
    }

    public String agregarAmigo(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            if (perm) {
                UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
                int id_usuario_1 = user.getId();
                int id_usuario_2 = ParameterCooker.prepareId(request);
                if (id_usuario_1 != id_usuario_2) {
                    result = oAmistadService.agregarAmigo(id_usuario_1, id_usuario_2);
                } else {
                    result = "Error, un usuario no puede agregarse a sí miismo.";
                }
                closeDB();
            } else {
                result = "Error, su usuario no tiene permisos para realizar esta operación.";
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":agregarAmigo ERROR: " + ex.getMessage()));
        }
        return result;
    }

    public String removeAmigo(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            if (perm) {
                UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
                result = oAmistadService.removeAmigo(user.getId(), ParameterCooker.prepareId(request));
                closeDB();
            } else {
                result = "Error, su usuario no tiene permisos para realizar esta operación.";
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":removeAmigo ERROR: " + ex.getMessage()));
        }
        return result;
    }

    public String existeAmigo(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            if (perm) {
                UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
                result = oAmistadService.existeAmigo(user.getId(), ParameterCooker.prepareId(request));
                closeDB();
            } else {
                result = "Error, su usuario no tiene permisos para realizar esta operación.";
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":existeAmigo ERROR: " + ex.getMessage()));
        }
        return result;
    }

}
