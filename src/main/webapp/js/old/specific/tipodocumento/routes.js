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


function fTipodocumentoRoutes() {

//    Path.map("#/tipodocumento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tipodocumento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //tipodocumentoControl.modalListEventsLoading(tipodocumentoObject, tipodocumentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tipodocumento").to(function () {
        $('#indexContenidoJsp').spinner();
        oTipodocumentoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTipodocumentoModel, oTipodocumentoView);
        //tipodocumentoControl.modalListEventsLoading(tipodocumentoObject, tipodocumentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTipodocumentoControl.getClassNameTipodocumento());
        return false;
    });

    Path.map("#/tipodocumento/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipodocumentoControl.list($('#indexContenido'), paramsObject, null, oTipodocumentoModel, oTipodocumentoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipodocumento/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipodocumentoControl.view($('#indexContenido'), paramsObject['id'], oTipodocumentoModel, oTipodocumentoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tipodocumento/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipodocumentoControl.edit($('#indexContenido'), paramsObject['id'], oTipodocumentoModel, oTipodocumentoView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/tipodocumento/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipodocumentoControl.new($('#indexContenido'), null, oTipodocumentoModel, oTipodocumentoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/tipodocumento/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipodocumentoControl.new($('#indexContenido'), paramsObject, oTipodocumentoModel, oTipodocumentoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipodocumento/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipodocumentoControl.remove($('#indexContenido'), paramsObject['id'], oTipodocumentoModel, oTipodocumentoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}