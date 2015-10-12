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


function fPreguntaRoutes() {

//    Path.map("#/pregunta").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('pregunta').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //preguntaControl.modalListEventsLoading(preguntaObject, preguntaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/pregunta").to(function () {
        $('#indexContenidoJsp').spinner();
        oPreguntaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oPreguntaModel, oPreguntaView);
        //preguntaControl.modalListEventsLoading(preguntaObject, preguntaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oPreguntaControl.getClassNamePregunta());
        return false;
    });

    Path.map("#/pregunta/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPreguntaControl.list($('#indexContenido'), paramsObject, null, oPreguntaModel, oPreguntaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/pregunta/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPreguntaControl.view($('#indexContenido'), paramsObject['id'], oPreguntaModel, oPreguntaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/pregunta/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPreguntaControl.edit($('#indexContenido'), paramsObject['id'], oPreguntaModel, oPreguntaView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/pregunta/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPreguntaControl.new($('#indexContenido'), oPreguntaModel, oPreguntaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/pregunta/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPreguntaControl.remove($('#indexContenido'), paramsObject['id'], oPreguntaModel, oPreguntaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}