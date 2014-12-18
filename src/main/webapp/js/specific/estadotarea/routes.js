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


function fEstadotareaRoutes() {

//    Path.map("#/estadotarea").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('estadotarea').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //estadotareaControl.modalListEventsLoading(estadotareaObject, estadotareaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/estadotarea").to(function () {
        $('#indexContenidoJsp').spinner();
        oEstadotareaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oEstadotareaModel, oEstadotareaView);
        //estadotareaControl.modalListEventsLoading(estadotareaObject, estadotareaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        $('#indexContenidoJsp').append(oEstadotareaControl.getClassNameEstadotarea());
        return false;
    });

    Path.map("#/estadotarea/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadotareaControl.list($('#indexContenido'), paramsObject, null, oEstadotareaModel, oEstadotareaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/estadotarea/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadotareaControl.view($('#indexContenido'), paramsObject['id'], oEstadotareaModel, oEstadotareaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/estadotarea/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadotareaControl.edit($('#indexContenido'), paramsObject['id'], oEstadotareaModel, oEstadotareaView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/estadotarea/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadotareaControl.new($('#indexContenido'), null, oEstadotareaModel, oEstadotareaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/estadotarea/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadotareaControl.remove($('#indexContenido'), paramsObject['id'], oEstadotareaModel, oEstadotareaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}