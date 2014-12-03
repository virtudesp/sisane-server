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


function fOpcionRoutes() {

//    Path.map("#/opcion").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('opcion').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //opcionControl.modalListEventsLoading(opcionObject, opcionView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/opcion").to(function () {
        $('#indexContenidoJsp').spinner();
        oOpcionControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oOpcionModel, oOpcionView);
        //opcionControl.modalListEventsLoading(opcionObject, opcionView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oOpcionControl.getClassNameOpcion());
        return false;
    });

    Path.map("#/opcion/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oOpcionControl.list($('#indexContenido'), paramsObject, null, oOpcionModel, oOpcionView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/opcion/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oOpcionControl.view($('#indexContenido'), paramsObject['id'], oOpcionModel, oOpcionView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/opcion/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oOpcionControl.edit($('#indexContenido'), paramsObject['id'], oOpcionModel, oOpcionView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/opcion/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oOpcionControl.new($('#indexContenido'), oOpcionModel, oOpcionView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/opcion/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oOpcionControl.remove($('#indexContenido'), paramsObject['id'], oOpcionModel, oOpcionView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}