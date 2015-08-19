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
var viewOperation = function (strClase, strPlace, objParams) {
    editOperation.call(this, strClase, strPlace, objParams);
};
viewOperation.prototype = Object.create(editOperation.prototype);
viewOperation.prototype.constructor = viewOperation;

//viewOperation.prototype.printTemplate2 = function () {
//    var thisObject = this;
//    var viewTable = "";
//
//
//
//
//    //$(place).append(oView.getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames()));
//    viewTable = "<table class=\"table table table-bordered table-condensed\">";
//    $.each(this.jsonMeta, function (index, value) {
//        if (!value.IsMetaForeignKey) {
//            //this.strPlace.append("Tabla..");
//            viewTable += '<tr><td><strong>' + value.Description + '</strong></td>';
//            if (value.IsObjForeignKey) {
//                viewTable += '<td>' + thisObject.printForeignValues(thisObject.jsonData[value.MyMetaName], thisObject.jsonData[value.Name], value.ReferencesTable) + '</td>';
//            } else {
//                viewTable += '<td>' + ns.strings.printValue(value, thisObject.jsonData[value.Name], true) + '</td>'; // printValue(valoresRegistro, nombreDeCampo, false) 
//            }
//        }
//    });
//    viewTable += '</table>';
//    this.strPlace.append(viewTable);
//    this.strPlace.append('<p>');
//    this.strPlace.append('<a class="btn btn-primary" role="button" href="#/' + this.strClase + '/edit/' + this.objParams['id'] + '">Editar</a>   ');
//    this.strPlace.append('<a class="btn btn-danger" role="button" href="#/' + this.strClase + '/remove/' + this.objParams['id'] + '">Borrar</a>');
//    this.strPlace.append('</p>');
//};
//
//
//
//
//
//viewOperation.prototype.printTemplate3 = function () {
//    var thisObject = this;
//
//
//
//
//
//    var headers = [];
//    var content = [];
//    var rows = 0;
//    _.each(thisObject.jsonMeta, function (oMeta) {
//
//        headers.push(oMeta.Name)
//
//        oContent = thisObject.jsonData[oMeta.Name];
//        if (_.isObject(oContent)) {
//            content.push(oContent.id);
//        } else {
//            content.push(oContent);
//        }
//
//    });
//
//    tabled_header = _.map(headers, function (value, key) {
//        return '<td>' + value + '</td>';
//    });
//
//    tabled_content = _.map(content, function (value, key) {
//        return '<td>' + value + '</td>';
//    });
//
//    viewTable = "<table class=\"table table table-bordered table-condensed\">";
//    viewTable += '<tr>' + tabled_header.join() + '</tr>';
//    viewTable += '<tr>' + tabled_content.join() + '</tr>';
//
//    this.strPlace.append(viewTable);
//
//};
//
//viewOperation.prototype.printTemplate4 = function () {
//    var thisObject = this;
//
//    var headers = [];
//    var content = [];
//    var rows = 0;
//
//    _.each(thisObject.jsonMeta, function (oMeta) {
//
//        headers.push(oMeta.Name)
//
//        oContent = thisObject.jsonData[oMeta.Name];
//        if (_.isObject(oContent)) {
//            content.push(oContent.id);
//        } else {
//            content.push(oContent);
//        }
//    });
//
//    tabled_header = _.map(headers, function (value, key) {
//        return '<tr><td><strong>' + value + '</strong></td>';
//    });
//
//    tabled_content = _.map(content, function (value, key) {
//        return '<td>' + value + '</td></tr>';
//    });
//
//    tabled_content_trimmed = _.map(tabled_content, function (value) {
//        if (value.length > 30)
//            return value.substr(0, 30) + " ...";
//        else
//            return value;
//    });
//
//    tabled_data = _.zip(tabled_header, tabled_content_trimmed);
//
//    tabled_content_join_objects = _.map(tabled_data, function (value, key) {
//        return value[0] + value[1];
//    });
//
//    viewTable = "<table class=\"table table table-bordered table-condensed\">";
//    viewTable += tabled_content_join_objects.join('');
//    viewTable += '</table>';
//
//    this.strPlace.append(viewTable);
//
//};


viewOperation.prototype.printTemplate = function () {
   

};
