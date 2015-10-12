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


function fTipotareaRoutes() {

//    Path.map("#/tipotarea").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tipotarea').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //tipotareaControl.modalListEventsLoading(tipotareaObject, tipotareaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tipotarea").to(function () {
        $('#indexContenidoJsp').spinner();
        oTipotareaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTipotareaModel, oTipotareaView);
        //tipotareaControl.modalListEventsLoading(tipotareaObject, tipotareaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        $('#indexContenidoJsp').append(oTipotareaControl.getClassNameTipotarea());
        return false;
    });

    Path.map("#/tipotarea/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotareaControl.list($('#indexContenido'), paramsObject, null, oTipotareaModel, oTipotareaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipotarea/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotareaControl.view($('#indexContenido'), paramsObject['id'], oTipotareaModel, oTipotareaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tipotarea/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotareaControl.edit($('#indexContenido'), paramsObject['id'], oTipotareaModel, oTipotareaView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/tipotarea/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotareaControl.new($('#indexContenido'), null, oTipotareaModel, oTipotareaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipotarea/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipotareaControl.remove($('#indexContenido'), paramsObject['id'], oTipotareaModel, oTipotareaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}