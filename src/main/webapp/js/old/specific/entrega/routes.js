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


function fEntregaRoutes() {

//    Path.map("#/entrega").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('entrega').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //entregaControl.modalListEventsLoading(entregaObject, entregaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/entrega").to(function () {
        $('#indexContenidoJsp').spinner();
        oEntregaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oEntregaModel, oEntregaView);
        //entregaControl.modalListEventsLoading(entregaObject, entregaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oEntregaControl.getClassNameEntrega());
        return false;
    });

    Path.map("#/entrega/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEntregaControl.list($('#indexContenido'), paramsObject, null, oEntregaModel, oEntregaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/entrega/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEntregaControl.view($('#indexContenido'), paramsObject['id'], oEntregaModel, oEntregaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/entrega/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEntregaControl.edit($('#indexContenido'), paramsObject['id'], oEntregaModel, oEntregaView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/entrega/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEntregaControl.new($('#indexContenido'), null, oEntregaModel, oEntregaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/entrega/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEntregaControl.new($('#indexContenido'), paramsObject, oEntregaModel, oEntregaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/entrega/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEntregaControl.remove($('#indexContenido'), paramsObject['id'], oEntregaModel, oEntregaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}