/* 
 * Copyright (C) 2014 rafa
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


function fDetalle_pedidoRoutes() {

//    Path.map("#/detalle_pedido").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('detalle_pedido').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //detalle_pedidoControl.modalListEventsLoading(detalle_pedidoObject, detalle_pedidoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/detalle_pedido").to(function () {
        $('#indexContenidoJsp').spinner();
        oDetalle_pedidoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oDetalle_pedidoModel, oDetalle_pedidoView);
        //detalle_pedidoControl.modalListEventsLoading(detalle_pedidoObject, detalle_pedidoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oDetalle_pedidoControl.getClassNameDetalle_pedido());
        return false;
    });

    Path.map("#/detalle_pedido/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDetalle_pedidoControl.list($('#indexContenido'), paramsObject, null, oDetalle_pedidoModel, oDetalle_pedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/detalle_pedido/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDetalle_pedidoControl.view($('#indexContenido'), paramsObject['id'], oDetalle_pedidoModel, oDetalle_pedidoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/detalle_pedido/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDetalle_pedidoControl.edit($('#indexContenido'), paramsObject['id'], oDetalle_pedidoModel, oDetalle_pedidoView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/detalle_pedido/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDetalle_pedidoControl.new($('#indexContenido'), oDetalle_pedidoModel, oDetalle_pedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/detalle_pedido/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDetalle_pedidoControl.remove($('#indexContenido'), paramsObject['id'], oDetalle_pedidoModel, oDetalle_pedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}