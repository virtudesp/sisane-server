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


function fActividadRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/actividad").to(function () {
        $('#indexContenidoJsp').spinner();
        oActividadControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oActividadModel, oActividadView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oActividadControl.getClassNameActividad());
        return false;
    });

    Path.map("#/actividad/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oActividadControl.list($('#indexContenido'), paramsObject, null, oActividadModel, oActividadView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/actividad/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oActividadControl.view($('#indexContenido'), paramsObject['id'], oActividadModel, oActividadView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/actividad/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oActividadControl.edit($('#indexContenido'), paramsObject['id'], oActividadModel, oActividadView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/actividad/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oActividadControl.new($('#indexContenido'), oActividadModel, oActividadView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/actividad/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oActividadControl.remove($('#indexContenido'), paramsObject['id'], oActividadModel, oActividadView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}