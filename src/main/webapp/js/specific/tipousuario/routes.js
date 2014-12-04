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


function fTipousuarioRoutes() {

//    Path.map("#/tipousuario").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tipousuario').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //tipousuarioControl.modalListEventsLoading(tipousuarioObject, tipousuarioView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tipousuario").to(function () {
        $('#indexContenidoJsp').spinner();
        oTipousuarioControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTipousuarioModel, oTipousuarioView);
        //tipousuarioControl.modalListEventsLoading(tipousuarioObject, tipousuarioView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTipousuarioControl.getClassNameTipousuario());
        return false;
    });

    Path.map("#/tipousuario/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipousuarioControl.list($('#indexContenido'), paramsObject, null, oTipousuarioModel, oTipousuarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipousuario/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipousuarioControl.view($('#indexContenido'), paramsObject['id'], oTipousuarioModel, oTipousuarioView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tipousuario/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipousuarioControl.edit($('#indexContenido'), paramsObject['id'], oTipousuarioModel, oTipousuarioView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/tipousuario/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipousuarioControl.new($('#indexContenido'), null, oTipousuarioModel, oTipousuarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/tipousuario/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipousuarioControl.new($('#indexContenido'), paramsObject, oTipousuarioModel, oTipousuarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipousuario/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipousuarioControl.remove($('#indexContenido'), paramsObject['id'], oTipousuarioModel, oTipousuarioView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}