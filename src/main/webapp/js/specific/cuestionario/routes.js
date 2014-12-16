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


function fCuestionarioRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/cuestionario").to(function () {
        $('#indexContenidoJsp').spinner();
        oCuestionarioControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oCuestionarioModel, oCuestionarioView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oCuestionarioControl.getClassNameCuestionario());
        return false;
    });

    Path.map("#/cuestionario/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCuestionarioControl.list($('#indexContenido'), paramsObject, null, oCuestionarioModel, oCuestionarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/cuestionario/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCuestionarioControl.view($('#indexContenido'), paramsObject['id'], oCuestionarioModel, oCuestionarioView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/cuestionario/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCuestionarioControl.edit($('#indexContenido'), paramsObject['id'], oCuestionarioModel, oCuestionarioView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/cuestionario/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCuestionarioControl.new($('#indexContenido'),null, oCuestionarioModel, oCuestionarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/cuestionario/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCuestionarioControl.remove($('#indexContenido'), paramsObject['id'], oCuestionarioModel, oCuestionarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/cuestionario/preguntas/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCuestionarioControl.remove($('#indexContenido'), paramsObject['id'], oCuestionarioModel, oCuestionarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/cuestionario/make/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCuestionarioControl.make($('#indexContenido'), paramsObject['id'], oCuestionarioModel, oRespuestaModel, oCuestionarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

}
