/*
 * Copyright (C) 2014 a021008858z
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

import javax.servlet.http.HttpServletRequest;
import net.daw.control.operation.generic.implementation.ControlOperationGenImpl;

/**
 *
 * @author a021008858z
 */
public class UsuarioProveedorControlOperationGenSpimpl extends ControlOperationGenImpl {

    public UsuarioProveedorControlOperationGenSpimpl(HttpServletRequest request) throws Exception {
        super(request);

        oService.setPojo("UsuarioProveedor");
        oService.setSource("SELECT p.id as id, pe.id_usuario as id_usuario FROM proveedor p, detalle_pedido d, pedido pe WHERE p.id=d.id_producto AND pe.id=d.id_pedido");
    }
}
