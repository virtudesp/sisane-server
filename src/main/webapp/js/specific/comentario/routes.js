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


function fComentarioRoutes() {

//    Path.map("#/comentario").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('comentario').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //comentarioControl.modalListEventsLoading(comentarioObject, comentarioView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/comentario").to(function () {
        $('#indexContenidoJsp').spinner();
        oComentarioControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oComentarioModel, oComentarioView);
        //comentarioControl.modalListEventsLoading(comentarioObject, comentarioView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oComentarioControl.getClassNameComentario());
        return false;
    });

    Path.map("#/comentario/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oComentarioControl.list($('#indexContenido'), paramsObject, null, oComentarioModel, oComentarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/comentario/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oComentarioControl.view($('#indexContenido'), paramsObject['id'], oComentarioModel, oComentarioView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/comentario/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oComentarioControl.edit($('#indexContenido'), paramsObject['id'], oComentarioModel, oComentarioView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/comentario/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oComentarioControl.new($('#indexContenido'), null,oComentarioModel, oComentarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/comentario/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oComentarioControl.remove($('#indexContenido'), paramsObject['id'], oComentarioModel, oComentarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/comentario/votararriba/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oComentarioControl.remove($('#indexContenido'), paramsObject['id'], oComentarioModel, oComentarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}