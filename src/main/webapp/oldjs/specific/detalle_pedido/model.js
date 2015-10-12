/* 
 * Copyright (C) 2014 raznara
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

var detalle_pedidoModel = function (strClase) {
    this.clase = strClase;
};
detalle_pedidoModel.prototype = new model('detalle_pedido');
detalle_pedidoModel.prototype.getClassNameDetalle_pedido = function () {
    return this.getClassName() + "Modelo";
};
var oDetalle_pedidoModel = new detalle_pedidoModel('detalle_pedido');
