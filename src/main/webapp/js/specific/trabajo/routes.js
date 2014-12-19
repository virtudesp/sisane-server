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


function fTrabajoRoutes() {
    

//    Path.map("#/trabajo").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('trabajo').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //trabajoControl.modalListEventsLoading(trabajoObject, trabajoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/trabajo").to(function () {
        $('#indexContenidoJsp').spinner();
        oTrabajoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTrabajoModel, oTrabajoView);
        //trabajoControl.modalListEventsLoading(trabajoObject, trabajoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTrabajoControl.getClassNameTrabajo());
        return false;
    });

    Path.map("#/trabajo/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTrabajoControl.list($('#indexContenido'), paramsObject, null, oTrabajoModel, oTrabajoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/trabajo/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTrabajoControl.view($('#indexContenido'), paramsObject['id'], oTrabajoModel, oTrabajoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/trabajo/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTrabajoControl.edit($('#indexContenido'), paramsObject['id'], oTrabajoModel, oTrabajoView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/trabajo/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTrabajoControl.new($('#indexContenido'), null, oTrabajoModel, oTrabajoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/trabajo/new/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTrabajoControl.new($('#indexContenido'), paramsObject['id'], oTrabajoModel, oTrabajoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/trabajo/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTrabajoControl.remove($('#indexContenido'), paramsObject['id'], oTrabajoModel, oTrabajoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}