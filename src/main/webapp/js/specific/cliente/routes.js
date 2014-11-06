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


function fClienteRoutes() {

//    Path.map("#/cliente").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('cliente').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //clienteControl.modalListEventsLoading(clienteObject, clienteView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/cliente").to(function () {
        $('#indexContenidoJsp').spinner();
        oClienteControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oClienteModel, oClienteView);
        //clienteControl.modalListEventsLoading(clienteObject, clienteView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        $('#indexContenidoJsp').append(oClienteControl.getClassNameCliente());
        return false;
    });

    Path.map("#/cliente/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oClienteControl.list($('#indexContenido'), paramsObject, null, oClienteModel, oClienteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/cliente/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oClienteControl.view($('#indexContenido'), paramsObject['id'], oClienteModel, oClienteView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/cliente/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oClienteControl.edit($('#indexContenido'), paramsObject['id'], oClienteModel, oClienteView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/cliente/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oClienteControl.new($('#indexContenido'), oClienteModel, oClienteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/cliente/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oClienteControl.remove($('#indexContenido'), paramsObject['id'], oClienteModel, oClienteView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}