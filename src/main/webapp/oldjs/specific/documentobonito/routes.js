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


function fDocumentobonitoRoutes() {


    Path.map("#/documentobonito").to(function () {
        $('#indexContenidoJsp').spinner();
        oDocumentobonitoControl.listCuadros($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oDocumentobonitoModel, oDocumentobonitoView);
        //documentobonitoControl.modalListEventsLoading(documentobonitoObject, documentobonitoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oDocumentobonitoControl.getClassNameDocumentobonito());
        return false;
    });

    Path.map("#/documentobonito/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentobonitoControl.listCuadros($('#indexContenido'), paramsObject, null, oDocumentobonitoModel, oDocumentobonitoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/documentobonito/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentobonitoControl.view($('#indexContenido'), paramsObject['id'], oDocumentobonitoModel, oDocumentobonitoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/documentobonito/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentobonitoControl.edit($('#indexContenido'), paramsObject['id'], oDocumentobonitoModel, oDocumentobonitoView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/documentobonito/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentobonitoControl.new($('#indexContenido'), null, oDocumentobonitoModel, oDocumentobonitoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/documentobonito/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentobonitoControl.new($('#indexContenido'), paramsObject, oDocumentobonitoModel, oDocumentobonitoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/documentobonito/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDocumentobonitoControl.remove($('#indexContenido'), paramsObject['id'], oDocumentobonitoModel, oDocumentobonitoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}
