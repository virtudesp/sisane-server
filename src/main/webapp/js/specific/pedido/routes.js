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


function fPedidoRoutes() {

//    Path.map("#/pedido").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('pedido').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //pedidoControl.modalListEventsLoading(pedidoObject, pedidoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/pedido").to(function () {
        $('#indexContenidoJsp').spinner();
        oPedidoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oPedidoModel, oPedidoView);
        //pedidoControl.modalListEventsLoading(pedidoObject, pedidoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oPedidoControl.getClassNamePedido());
        return false;
    });

    Path.map("#/pedido/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPedidoControl.list($('#indexContenido'), paramsObject, null, oPedidoModel, oPedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/pedido/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPedidoControl.view($('#indexContenido'), paramsObject['id'], oPedidoModel, oPedidoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/pedido/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPedidoControl.edit($('#indexContenido'), paramsObject['id'], oPedidoModel, oPedidoView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/pedido/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPedidoControl.new($('#indexContenido'), null,oPedidoModel, oPedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/pedido/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPedidoControl.remove($('#indexContenido'), paramsObject['id'], oPedidoModel, oPedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    
        Path.map("#/pedido/pedidousuario/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPedidoControl.list($('#indexContenido'), paramsObject['id'], oPedidoModel, oPedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}