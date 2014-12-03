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


function fTemaRoutes() {

//    Path.map("#/tema").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tema').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //temaControl.modalListEventsLoading(temaObject, temaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tema").to(function () {
        $('#indexContenidoJsp').spinner();
        oTemaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTemaModel, oTemaView);
        //temaControl.modalListEventsLoading(temaObject, temaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTemaControl.getClassNameTema());
        return false;
    });

    Path.map("#/tema/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTemaControl.list($('#indexContenido'), paramsObject, null, oTemaModel, oTemaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tema/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTemaControl.view($('#indexContenido'), paramsObject['id'], oTemaModel, oTemaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tema/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTemaControl.edit($('#indexContenido'), paramsObject['id'], oTemaModel, oTemaView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/tema/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTemaControl.new($('#indexContenido'), null, oTemaModel, oTemaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tema/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTemaControl.remove($('#indexContenido'), paramsObject['id'], oTemaModel, oTemaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}