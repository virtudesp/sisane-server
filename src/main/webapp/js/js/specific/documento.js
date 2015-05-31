/* 
 * Copyright (C) 2015 rafa
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
//function printDocumentoForeignValues(meta, valor) {
//    if (meta.IsObjForeignKey) {
//        if (valor.id > 0) {
//            if (meta.Name == 'obj_usuario') {
//                strForeignDesc = valor['id'] + ': ' + valor['login'] + ' (' + valor['ciudad'] + ')';
//                return '<a href="#/' + meta.ReferencesTable + '/view/' + valor.id + '">' + ns.strings.clipValue(strForeignDesc) + '</a>';
//            }
//            if (meta.Name == 'obj_tipodocumento') {
//                strForeignDesc = valor['id'] + ': ' + valor['descripcion'];
//                return '<a href="#/' + meta.ReferencesTable + '/view/' + valor.id + '">' + ns.strings.clipValue(strForeignDesc) + '</a>';
//            }
//        } else {
//            return '???';
//        }
//    }
//}
//viewOperation.prototype.printForeignValues = function (meta, valor) {
//    return printDocumentoForeignValues(meta, valor);
//}
//listOperation.prototype.printForeignValues = function (meta, valor) {
//    return printDocumentoForeignValues(meta, valor);
//}
function fDocumentoRoutes() {
    var icon = '<i class="fa fa-file-text-o fa-5x"></i>';
    Path.map("#/documento/new/:url").to(function () {
        ns.login.checkAndUpdateUserConnectionState();
        var paramsObject = ns.param.defaultizeUrlObjectParameters(ns.param.getUrlObjectFromUrlString(this.params['url']));
        $('#broth_title').empty().text('Documento');
        $('#broth_operationicon').empty().append(icon);
        $('#broth_subtitle').empty().text('Nuevo');
        $('#broth_content').empty();
        var oDocumentoNew = new newOperation('documento', $('#broth_content'), paramsObject);
        oDocumentoNew.init();
        oDocumentoNew.prepareData();
        oDocumentoNew.getData();
        oDocumentoNew.loadValues();
        return false;
    });
    Path.map("#/documento/new").to(function () {
        ns.login.checkAndUpdateUserConnectionState();
        var paramsObject = ns.param.defaultizeUrlObjectParameters({});
        $('#broth_title').empty().text('Documento');
        $('#broth_operationicon').empty().append(icon);
        $('#broth_subtitle').empty().text('Nuevo');
        $('#broth_content').empty();

        var oDocumentoNew = new newOperation('documento', $('#broth_content'), paramsObject);

        //documentoNew.init = function () {
        //    $('#zone1').append('<h1>hola</h1>');
        //}
        oDocumentoNew.init();
        oDocumentoNew.prepareData();
        oDocumentoNew.getData();
        return false;
    });
    Path.map("#/documento/edit/:url").to(function () {
        ns.login.checkAndUpdateUserConnectionState();
        var paramsObject = ns.param.defaultizeUrlObjectParameters(ns.param.getUrlObjectFromUrlString(this.params['url']));
        $('#broth_title').empty().text('Documento');
        $('#broth_operationicon').empty().append(icon);
        $('#broth_subtitle').empty().text('Edición');
        $('#broth_content').empty();

        var oDocumentoEdit = new editOperation('documento', $('#broth_content'), paramsObject);
        //documentoEdit.init = function () {
        //    $('#zone1').append('<h1>hola</h1>');
        //}
        oDocumentoEdit.init();
        oDocumentoEdit.prepareData();
        oDocumentoEdit.getData();
        oDocumentoEdit.loadValues();
        return false;
    });
    Path.map("#/documento/view/:id").to(function () {
ns.login.checkAndUpdateUserConnectionState();
        var paramsObject = ns.param.defaultizeUrlObjectParameters(ns.param.getUrlObjectFromUrlString(this.params['url']));
        $('#broth_title').empty().text('Documento');
        $('#broth_operationicon').empty().append(icon);
        $('#broth_subtitle').empty().text('Detalle');
        $('#broth_content').empty();

        var oDocumentoView = new viewOperation('documento', $('#broth_content'), paramsObject);
        //documentoEdit.init = function () {
        //    $('#zone1').append('<h1>hola</h1>');
        //}
        oDocumentoView.init();
        oDocumentoView.prepareData();
        oDocumentoView.getData();

        return false;
    });
    
    
    
    Path.map("#/documento/list/:url").to(function () {
        ns.login.checkAndUpdateUserConnectionState();
        var paramsObject = ns.param.defaultizeUrlObjectParametersForLists(ns.param.getUrlObjectFromUrlString(this.params['url']));
        $('#broth_title').empty().text('Documento');
        $('#broth_operationicon').empty().append(icon);
        $('#broth_subtitle').empty().text('Listado');
        $('#broth_content').empty();
        var oDocumentoList = new listOperation('documento', $('#broth_content'), paramsObject);
        //documentoEdit.init = function () {
        //    $('#zone1').append('<h1>hola</h1>');
        //}
        oDocumentoList.init();
        oDocumentoList.prepareData();
        oDocumentoList.getData();

        return false;
    });
}