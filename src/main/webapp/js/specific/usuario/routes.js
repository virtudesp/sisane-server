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


function fUsuarioRoutes() {

//    Path.map("#/usuario").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('usuario').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //usuarioControl.modalListEventsLoading(usuarioObject, usuarioView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/usuario").to(function () {
        $('#indexContenidoJsp').spinner();
        oUsuarioControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oUsuarioModel, oUsuarioView);
        //usuarioControl.modalListEventsLoading(usuarioObject, usuarioView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oUsuarioControl.getClassNameUsuario());
        return false;
    });

    Path.map("#/usuario/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oUsuarioControl.list($('#indexContenido'), paramsObject, null, oUsuarioModel, oUsuarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/usuario/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oUsuarioControl.view($('#indexContenido'), paramsObject['id'], oUsuarioModel, oUsuarioView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/usuario/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oUsuarioControl.edit($('#indexContenido'), paramsObject['id'], oUsuarioModel, oUsuarioView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/usuario/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oUsuarioControl.new($('#indexContenido'), null, oUsuarioModel, oUsuarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/usuario/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oUsuarioControl.new($('#indexContenido'), paramsObject, oUsuarioModel, oUsuarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/usuario/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oUsuarioControl.remove($('#indexContenido'), paramsObject['id'], oUsuarioModel, oUsuarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}