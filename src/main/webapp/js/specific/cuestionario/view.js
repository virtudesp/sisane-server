/* 
 * Copyright (C) 2014 raznara
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


var cuestionarioView = function (strClase) {
    this.clase = strClase;
};
cuestionarioView.prototype = new view('cuestionario');
cuestionarioView.prototype.getClassNameCuestionario = function () {
    return this.getClassName() + "Vista";
};
var oCuestionarioView = new cuestionarioView('cuestionario');
cuestionarioView.prototype.loadButtons = function (id) {
//
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;
};
cuestionarioView.prototype.getBodyPageTable = function (page, fieldNames, visibleFields, tdbuttons) {
    var thisObject = this;
    var tabla = "";
    $.each(page, function (index, value) {
        tabla += '<tr>';
        var numField = 0;
        var id;
        var strClaveAjena;
        $.each(fieldNames, function (index, valor) {
            if ("id" == valor) {
                id = value[valor];
            }
            ;
            numField++;
            if (numField <= visibleFields) {
                tabla += '<td>';
                if ("tipo" == valor) {
                    tabla += '<a href="jsp#/pregunta/list/systemfilter=id_cuestionario&systemfilteroperator=equals&systemfiltervalue=' + value.id + '">';
                    tabla += thisObject.printValue(value, valor, true);
                    tabla += "</a>";
                } else {
                    tabla += thisObject.printValue(value, valor, true);
                }
                tabla += '</td>';
            }
        });
        tabla += '<td>';
        tabla += tdbuttons(id);
        tabla += '</td>';
        tabla += '</tr>';
    });
    return tabla;
};