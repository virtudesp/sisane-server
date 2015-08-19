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


function fPostRoutes() {

//    Path.map("#/post").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('post').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //postControl.modalListEventsLoading(postObject, postView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/post").to(function () {
        $('#indexContenidoJsp').spinner();
        oPostControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oPostModel, oPostView);
        //postControl.modalListEventsLoading(postObject, postView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oPostControl.getClassNamePost());
        return false;
    });

    Path.map("#/post/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPostControl.list($('#indexContenido'), paramsObject, null, oPostModel, oPostView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/post/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPostControl.view($('#indexContenido'), paramsObject['id'], oPostModel, oPostView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/post/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPostControl.edit($('#indexContenido'), paramsObject['id'], oPostModel, oPostView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/post/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPostControl.new($('#indexContenido'), null, oPostModel, oPostView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/post/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPostControl.new($('#indexContenido'), paramsObject, oPostModel, oPostView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/post/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPostControl.remove($('#indexContenido'), paramsObject['id'], oPostModel, oPostView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}