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
viewOperation.prototype.printForeignValues = function (meta, valor, name) {
    return ns.view.printObjectValue(meta, valor, name);
}
viewOperation.prototype.printTemplate = function () {
    var thisObject = this;
    var viewTable = "";
    //$(place).append(oView.getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames()));
    viewTable = "<table class=\"table table table-bordered table-condensed\">";
    $.each(this.jsonMeta, function (index, value) {
        if (!value.IsMetaForeignKey) {
            //this.strPlace.append("Tabla..");
            viewTable += '<tr><td><strong>' + value.Description + '</strong></td>';
            if (value.IsObjForeignKey) {
                viewTable += '<td>' + thisObject.printForeignValues(thisObject.jsonData[value.MyMetaName], thisObject.jsonData[value.Name], value.ReferencesTable) + '</td>';
            } else {
                viewTable += '<td>' + ns.strings.printValue(value, thisObject.jsonData[value.Name], true) + '</td>'; // printValue(valoresRegistro, nombreDeCampo, false) 
            }
        }
    });
    viewTable += '</table>';
    this.strPlace.append(viewTable);
    this.strPlace.append('<p>');
    this.strPlace.append('<a class="btn btn-primary" role="button" href="#/' + this.strClase + '/edit/' + this.objParams['id'] + '">Editar</a>   ');
    this.strPlace.append('<a class="btn btn-danger" role="button" href="#/' + this.strClase + '/remove/' + this.objParams['id'] + '">Borrar</a>');
    this.strPlace.append('</p>');
};
