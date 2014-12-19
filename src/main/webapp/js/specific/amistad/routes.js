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


function fAmistadRoutes() {

//    Path.map("#/amistad").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('amistad').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //amistadControl.modalListEventsLoading(amistadObject, amistadView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });


    Path.map("#/amistad").to(function () {
        $('#indexContenidoJsp').spinner();
        oAmistadControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oAmistadModel, oAmistadView);
        //amistadControl.modalListEventsLoading(amistadObject, amistadView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oAmistadControl.getClassNameAmistad());
        return false;
    });

    Path.map("#/amistad/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmistadControl.list($('#indexContenido'), paramsObject, null, oAmistadModel, oAmistadView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/amistad/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmistadControl.view($('#indexContenido'), paramsObject['id'], oAmistadModel, oAmistadView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/amistad/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmistadControl.edit($('#indexContenido'), paramsObject['id'], oAmistadModel, oAmistadView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/amistad/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmistadControl.new($('#indexContenido'), null, oAmistadModel, oAmistadView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/amistad/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmistadControl.new($('#indexContenido'), paramsObject, oAmistadModel, oAmistadView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/amistad/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oAmistadControl.remove($('#indexContenido'), paramsObject['id'], oAmistadModel, oAmistadView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}
