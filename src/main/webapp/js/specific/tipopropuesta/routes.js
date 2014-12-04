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


function fTipopropuestaRoutes() {

//    Path.map("#/tipopropuesta").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tipopropuesta').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //tipopropuestaControl.modalListEventsLoading(tipopropuestaObject, tipopropuestaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tipopropuesta").to(function () {
        $('#indexContenidoJsp').spinner();
        oTipopropuestaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTipopropuestaModel, oTipopropuestaView);
        //tipopropuestaControl.modalListEventsLoading(tipopropuestaObject, tipopropuestaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        $('#indexContenidoJsp').append(oTipopropuestaControl.getClassNameTipopropuesta());
        return false;
    });

    Path.map("#/tipopropuesta/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipopropuestaControl.list($('#indexContenido'), paramsObject, null, oTipopropuestaModel, oTipopropuestaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipopropuesta/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipopropuestaControl.view($('#indexContenido'), paramsObject['id'], oTipopropuestaModel, oTipopropuestaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tipopropuesta/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipopropuestaControl.edit($('#indexContenido'), paramsObject['id'], oTipopropuestaModel, oTipopropuestaView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/tipopropuesta/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipopropuestaControl.new($('#indexContenido'), null, oTipopropuestaModel, oTipopropuestaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/tipopropuesta/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipopropuestaControl.new($('#indexContenido'), paramsObject, oTipopropuestaModel, oTipopropuestaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipopropuesta/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipopropuestaControl.remove($('#indexContenido'), paramsObject['id'], oTipopropuestaModel, oTipopropuestaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipopropuesta/duplicate/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipopropuestaControl.duplicate($('#indexContenido'), paramsObject['id'], oTipopropuestaModel, oTipopropuestaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}