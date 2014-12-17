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


function fPublicacionRoutes() {

//    Path.map("#/publicacion").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('publicacion').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //publicacionControl.modalListEventsLoading(publicacionObject, publicacionView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });


    Path.map("#/publicacion").to(function () {
        $('#indexContenidoJsp').spinner();
        oPublicacionControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oPublicacionModel, oPublicacionView);
        //publicacionControl.modalListEventsLoading(publicacionObject, publicacionView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oPublicacionControl.getClassNamePublicacion());
        return false;
    });

    Path.map("#/publicacion/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPublicacionControl.list($('#indexContenido'), paramsObject, null, oPublicacionModel, oPublicacionView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/publicacion/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPublicacionControl.view($('#indexContenido'), paramsObject['id'], oPublicacionModel, oPublicacionView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/publicacion/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPublicacionControl.edit($('#indexContenido'), paramsObject['id'], oPublicacionModel, oPublicacionView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/publicacion/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPublicacionControl.new($('#indexContenido'), null, oPublicacionModel, oPublicacionView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/publicacion/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPublicacionControl.new($('#indexContenido'), paramsObject, oPublicacionModel, oPublicacionView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/publicacion/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPublicacionControl.remove($('#indexContenido'), paramsObject['id'], oPublicacionModel, oPublicacionView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/publicacion/duplicate/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPublicacionControl.duplicate($('#indexContenido'), paramsObject['id'], oPublicacionModel, oPublicacionView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}