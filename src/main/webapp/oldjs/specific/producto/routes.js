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


function fProductoRoutes() {

//    Path.map("#/producto").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('producto').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //productoControl.modalListEventsLoading(productoObject, productoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/producto").to(function () {
        $('#indexContenidoJsp').spinner();
        oProductoControl.listCuadros($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oProductoModel, oProductoView);
        //productoControl.modalListEventsLoading(productoObject, productoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        $('#indexContenidoJsp').append(oProductoControl.getClassNameProducto());
        return false;
    });

    Path.map("#/producto/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProductoControl.listCuadros($('#indexContenido'), paramsObject, null, oProductoModel, oProductoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/producto/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProductoControl.view($('#indexContenido'), paramsObject['id'], oProductoModel, oProductoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/producto/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProductoControl.edit($('#indexContenido'), paramsObject['id'], oProductoModel, oProductoView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/producto/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProductoControl.new($('#indexContenido'), null, oProductoModel, oProductoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/producto/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProductoControl.new($('#indexContenido'), paramsObject, oProductoModel, oProductoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/producto/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProductoControl.remove($('#indexContenido'), paramsObject['id'], oProductoModel, oProductoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/producto/duplicate/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProductoControl.duplicate($('#indexContenido'), paramsObject['id'], oProductoModel, oProductoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}