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


function fDocumentoRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/documento").to(function () {
        $('#indexContenidoJsp').spinner();
        oDocumentoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oDocumentoModel, oDocumentoView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oDocumentoControl.getClassNameDocumento());
        return false;
    });

    Path.map("#/documento/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentoControl.list($('#indexContenido'), paramsObject, null, oDocumentoModel, oDocumentoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/documento/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentoControl.view($('#indexContenido'), paramsObject['id'], oDocumentoModel, oDocumentoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/documento/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentoControl.edit($('#indexContenido'), paramsObject['id'], oDocumentoModel, oDocumentoView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/documento/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentoControl.new($('#indexContenido'), null, oDocumentoModel, oDocumentoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/documento/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentoControl.new($('#indexContenido'), paramsObject, oDocumentoModel, oDocumentoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/documento/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentoControl.remove($('#indexContenido'), paramsObject['id'], oDocumentoModel, oDocumentoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}