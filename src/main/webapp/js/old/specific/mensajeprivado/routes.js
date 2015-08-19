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


function fMensajeprivadoRoutes() {

//    Path.map("#/mensajeprivado").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('mensajeprivado').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //mensajeprivadoControl.modalListEventsLoading(mensajeprivadoObject, mensajeprivadoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/mensajeprivado").to(function () {
        $('#indexContenidoJsp').spinner();
        oMensajeprivadoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oMensajeprivadoModel, oMensajeprivadoView);
        //mensajeprivadoControl.modalListEventsLoading(mensajeprivadoObject, mensajeprivadoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oMensajeprivadoControl.getClassNameMensajeprivado());
        return false;
    });

    Path.map("#/mensajeprivado/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMensajeprivadoControl.list($('#indexContenido'), paramsObject, null, oMensajeprivadoModel, oMensajeprivadoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/mensajeprivado/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMensajeprivadoControl.view($('#indexContenido'), paramsObject['id'], oMensajeprivadoModel, oMensajeprivadoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/mensajeprivado/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMensajeprivadoControl.edit($('#indexContenido'), paramsObject['id'], oMensajeprivadoModel, oMensajeprivadoView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/mensajeprivado/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMensajeprivadoControl.new($('#indexContenido'), null, oMensajeprivadoModel, oMensajeprivadoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/mensajeprivado/new/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMensajeprivadoControl.new($('#indexContenido'), paramsObject['id'], oMensajeprivadoModel, oMensajeprivadoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/mensajeprivado/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMensajeprivadoControl.remove($('#indexContenido'), paramsObject['id'], oMensajeprivadoModel, oMensajeprivadoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}