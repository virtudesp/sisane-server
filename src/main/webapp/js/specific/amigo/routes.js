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


function fAmigoRoutes() {

//    Path.map("#/amigo").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('amigo').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //amigoControl.modalListEventsLoading(amigoObject, amigoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/amigo").to(function () {
        $('#indexContenidoJsp').spinner();
        oAmigoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oAmigoModel, oAmigoView);
        //amigoControl.modalListEventsLoading(amigoObject, amigoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oAmigoControl.getClassNameAmigo());
        return false;
    });

    Path.map("#/amigo/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmigoControl.list($('#indexContenido'), paramsObject, null, oAmigoModel, oAmigoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/amigo/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmigoControl.view($('#indexContenido'), paramsObject['id'], oAmigoModel, oAmigoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/amigo/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmigoControl.edit($('#indexContenido'), paramsObject['id'], oAmigoModel, oAmigoView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/amigo/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmigoControl.new($('#indexContenido'), null, oAmigoModel, oAmigoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/amigo/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmigoControl.new($('#indexContenido'), paramsObject, oAmigoModel, oAmigoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/amigo/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmigoControl.remove($('#indexContenido'), paramsObject['id'], oAmigoModel, oAmigoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}