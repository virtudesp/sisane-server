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


function fImpuestoRoutes() {

//    Path.map("#/impuesto").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('impuesto').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //impuestoControl.modalListEventsLoading(impuestoObject, impuestoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/impuesto").to(function () {
        $('#indexContenidoJsp').spinner();
        oImpuestoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oImpuestoModel, oImpuestoView);
        //impuestoControl.modalListEventsLoading(impuestoObject, impuestoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oImpuestoControl.getClassNameImpuesto());
        return false;
    });

    Path.map("#/impuesto/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oImpuestoControl.list($('#indexContenido'), paramsObject, null, oImpuestoModel, oImpuestoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/impuesto/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oImpuestoControl.view($('#indexContenido'), paramsObject['id'], oImpuestoModel, oImpuestoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/impuesto/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oImpuestoControl.edit($('#indexContenido'), paramsObject['id'], oImpuestoModel, oImpuestoView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/impuesto/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oImpuestoControl.new($('#indexContenido'), null, oImpuestoModel, oImpuestoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/impuesto/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oImpuestoControl.new($('#indexContenido'), paramsObject, oImpuestoModel, oImpuestoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/impuesto/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oImpuestoControl.remove($('#indexContenido'), paramsObject['id'], oImpuestoModel, oImpuestoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/impuesto/duplicate/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oImpuestoControl.duplicate($('#indexContenido'), paramsObject['id'], oImpuestoModel, oImpuestoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}