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


function fRespuestaRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/respuesta").to(function () {
        $('#indexContenidoJsp').spinner();
        oRespuestaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oRespuestaModel, oRespuestaView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oRespuestaControl.getClassNameRespuesta());
        return false;
    });

    Path.map("#/respuesta/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRespuestaControl.list($('#indexContenido'), paramsObject,null,  oRespuestaModel, oRespuestaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/respuesta/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRespuestaControl.view($('#indexContenido'), paramsObject['id'],null, oRespuestaModel, oRespuestaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/respuesta/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRespuestaControl.edit($('#indexContenido'), paramsObject['id'],null, oRespuestaModel, oRespuestaView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/respuesta/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRespuestaControl.new($('#indexContenido'),null, oRespuestaModel, oRespuestaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/respuesta/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRespuestaControl.remove($('#indexContenido'), paramsObject['id'], oRespuestaModel, oRespuestaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}