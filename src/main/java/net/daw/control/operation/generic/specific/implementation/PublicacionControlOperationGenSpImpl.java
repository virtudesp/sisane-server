/*
 * Copyright (C) 2014 al038513
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
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.control.operation.generic.implementation.ControlOperationGenImpl;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;
import net.daw.helper.ParameterCooker;
import net.daw.service.generic.specific.implementation.PublicacionServiceGenSpImpl;
import net.daw.service.specific.implementation.ProductoServiceSpImpl;

/**
 *
 * @author al038513
 */
public class PublicacionControlOperationGenSpImpl extends ControlOperationGenImpl {

    private PublicacionServiceGenSpImpl oPublicacionService = (PublicacionServiceGenSpImpl) oService;
    private ConnectionInterface DataConnectionSource = null;
    private Connection oConnection = null;
    
    public PublicacionControlOperationGenSpImpl(HttpServletRequest request) throws Exception {
        super(request);
        oService.setPojo("Publicacion");
        oService.setSource("SELECT p.id as id, pe.id_usuario as id_usuario FROM proveedor p, detalle_pedido d, pedido pe WHERE p.id=d.id_producto AND pe.id=d.id_pedido");
                
        DataConnectionSource = new BoneConnectionPoolImpl();
            oConnection = DataConnectionSource.newConnection();
            UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
            ArrayList<FilterBeanHelper> alFilter = ParameterCooker.prepareFilter(request);
            oPublicacionService = new PublicacionServiceGenSpImpl(ParameterCooker.prepareObject(request), ParameterCooker.prepareObject(request), oConnection);
            oPublicacionService.setPojo("publicacion");
            if (!ParameterCooker.prepareOperation(request).equals("set")) {
                try {
                    if (alFilter.get(0).getFilter().equals("id_usuario") && alFilter.get(0).getFilterOperator().equals("equals")) {
                        oPublicacionService.setSource("SELECT distinct p.* FROM publicacion p INNER JOIN amistad a WHERE p.id_usuario = " + alFilter.get(0).getFilterValue());
                    }
                } catch (Exception ex) {
                    oPublicacionService.setSource("SELECT distinct p.* FROM publicacion p INNER JOIN amistad a WHERE p.id_usuario = a.id_usuario_2 AND a.id_usuario_1 = " + user.getId() + " OR p.id_usuario = " + user.getId());
                }
            }
    
    }

    @Override
    public String set(HttpServletRequest request) throws Exception {
        String result = "";
        if (perm) {
            UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
            
            result = oPublicacionService.set(ParameterCooker.prepareJson(request), user.getId(), user.getId_tipousuario());
            closeDB();
        } else {
            result = "error";
        }
        return result;
    }

    public String duplicate(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            if (perm) {
                result = oPublicacionService.duplicate(ParameterCooker.prepareId(request));
                closeDB();
            } else {
                result = "Error, su usuario no tiene permisos para realizar esta operación.";
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return result;
    }

}
