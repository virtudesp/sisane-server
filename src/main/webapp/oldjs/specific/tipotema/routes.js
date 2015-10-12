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


function fTipotemaRoutes() {

//    Path.map("#/tipotema").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tipotema').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //tipotemaControl.modalListEventsLoading(tipotemaObject, tipotemaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tipotema").to(function () {
        $('#indexContenidoJsp').spinner();
        oTipotemaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTipotemaModel, oTipotemaView);
        //tipotemaControl.modalListEventsLoading(tipotemaObject, tipotemaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTipotemaControl.getClassNameTipotema());
        return false;
    });

    Path.map("#/tipotema/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotemaControl.list($('#indexContenido'), paramsObject, null, oTipotemaModel, oTipotemaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipotema/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotemaControl.view($('#indexContenido'), paramsObject['id'], oTipotemaModel, oTipotemaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tipotema/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotemaControl.edit($('#indexContenido'), paramsObject['id'], oTipotemaModel, oTipotemaView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/tipotema/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotemaControl.new($('#indexContenido'), null, oTipotemaModel, oTipotemaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipotema/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotemaControl.remove($('#indexContenido'), paramsObject['id'], oTipotemaModel, oTipotemaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}