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


function fTipoproductoRoutes() {

//    Path.map("#/tipoproducto").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tipoproducto').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //tipoproductoControl.modalListEventsLoading(tipoproductoObject, tipoproductoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tipoproducto").to(function () {
        $('#indexContenidoJsp').spinner();
        oTipoproductoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTipoproductoModel, oTipoproductoView);
        //tipoproductoControl.modalListEventsLoading(tipoproductoObject, tipoproductoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTipoproductoControl.getClassNameTipoproducto());
        return false;
    });

    Path.map("#/tipoproducto/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoproductoControl.list($('#indexContenido'), paramsObject, null, oTipoproductoModel, oTipoproductoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipoproducto/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoproductoControl.view($('#indexContenido'), paramsObject['id'], oTipoproductoModel, oTipoproductoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tipoproducto/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoproductoControl.edit($('#indexContenido'), paramsObject['id'], oTipoproductoModel, oTipoproductoView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/tipoproducto/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoproductoControl.new($('#indexContenido'), null, oTipoproductoModel, oTipoproductoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipoproducto/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoproductoControl.remove($('#indexContenido'), paramsObject['id'], oTipoproductoModel, oTipoproductoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}