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

var listModule = function () {
    var strClass;
    var jsonData;

    var paramsObject;
    var orderParams;
    var filterParams;
    var systemFilterParams;
    var strUrlFromParamsWithoutOrder;
}
listModule.prototype = Object.create(baseModule.prototype);
listModule.prototype.loadThButtons = function (meta, strClase, UrlFromParamsWithoutOrder) {
    tabla = '<a class="orderAsc" id="' + meta.Name + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
    tabla += '<a class="orderDesc" id="' + meta.Name + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
    return tabla;
}
listModule.prototype.loadButtons = function (rowValues, strClass) {
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + rowValues[0].data + '"  href="#/' + strClass + '/view/' + rowValues[0].data + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + rowValues[0].data + '"  href="#/' + strClass + '/edit/' + rowValues[0].data + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + rowValues[0].data + '"  href="#/' + strClass + '/remove/' + rowValues[0].data + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';

    return botonera;
};
listModule.prototype.loadPopups = function (meta, rowValues, strClase) {
    var botonera = "";

    botonera += "<p><b>(" + rowValues.id + ') ' + strClase + '</b></p>';
    $.each(meta, function (name, metavalue) {
        if (!metavalue.IsObjForeignKey) {

            botonera += '<i>' + metavalue.ShortName + '</i>: ' + ns.strings.printPlainValue(metavalue, rowValues[metavalue.Name], true) + "<br/>"
        }
        if (metavalue.IsObjForeignKey) {

        }
//        if (typeof value === 'string') {
//            botonera += '<i>' + name + '</i>: ' + ns.strings.escapeHtml(value) + "<br/>";
//        } else {
//            botonera += '<i>' + name + '</i>: ' + value + "<br/>";
//        }
    })

    return botonera;
};
listModule.prototype.prepareParams = function () {
    strClass = ausiasFLOW.listModule_class;
    paramsObject = ausiasFLOW.listModule_paramsObject;
    orderParams = this.printOrderParamsInUrl(ausiasFLOW.listModule_paramsObject);
    filterParams = this.printFilterParamsInUrl(ausiasFLOW.listModule_paramsObject);
    systemFilterParams = this.printSystemFilterParamsInUrl(ausiasFLOW.listModule_paramsObject);
    strUrlFromParamsWithoutOrder = this.getUrlStringFromParamsObject(this.getUrlObjectFromParamsWithoutParamArray(ausiasFLOW.listModule_paramsObject, ["order", "ordervalue"]));
}
listModule.prototype.getHeaderPageTableFunc = function (jsonMeta, strClass, UrlFromParamsWithoutOrder, visibles, acciones) {
    thisObject = this;
    acciones = typeof (acciones) != 'undefined' ? acciones : true;
    arr_meta_data_tableHeader = _.map(jsonMeta, function (oMeta, key) {
        if (oMeta.IsId) {
            return '<th class="col-md-1">'
                    + oMeta.UltraShortName
                    + '<br />'
                    + thisObject.loadThButtons(oMeta, strClass, UrlFromParamsWithoutOrder)
                    + '</th>';
        } else {
            return  '<th>'
                    + oMeta.UltraShortName
                    + '<br />'
                    + thisObject.loadThButtons(oMeta, strClass, UrlFromParamsWithoutOrder)
                    + '</th>';
        }
    });
    //visibles
    if (visibles) {
        arr_meta_data_tableHeader_visibles = arr_meta_data_tableHeader.slice(0, parseInt(visibles));
    } else {
        arr_meta_data_tableHeader_visibles = arr_meta_data_tableHeader;
    }
    if (acciones) {
        arr_meta_data_tableHeader_visibles_acciones = arr_meta_data_tableHeader_visibles.concat(['<th class="col-md-2">Acciones </th>']);
    } else {
        arr_meta_data_tableHeader_visibles_acciones = arr_meta_data_tableHeader_visibles;
    }
    return '<tr>' + arr_meta_data_tableHeader_visibles_acciones.join('') + '</tr>';
}
listModule.prototype.getBodyPageTableFunc = function (meta, page, print_tdValue_function, tdButtons_function, trPopup_function, visibles) {
//thisObject.jsonData.message.page.list: es un array de objetos. Cada objeto contiene una fila de la tabla de la petición
//thisObject.jsonData.message.meta; es un array de objetos. Every object contains metadata from every object to print in every row
    var matrix_meta_data = _.map(page, function (oRow, keyRow) {
        return _.map(meta, function (oMeta, keyMeta) {
            return  {meta: oMeta, data: oRow[oMeta.Name]};
        });
    });
    //is an array (rpp) of arrays (rows) of objects
    //every object contains the data and its metadata
    var arr_meta_data_table_buttons = _.map(matrix_meta_data, function (value, key) {
        return (_.map(matrix_meta_data[key], function (value2, key2) {
            return  '<td>' + print_tdValue_function(value2) + '</td>';
        })
                )
                .slice(0, parseInt(visibles))
                .concat(['<td>' + tdButtons_function(value, strClass) + '</td>']);
    });
    //is an array (rpp) of arrays (rows) of strings
    //every string contains the data of the table cell
    //there's an additional row to contain the buttons for the operations
    var arr_meta_data_table_buttons_reduced = _.map(arr_meta_data_table_buttons, function (value, key) {
        return _.reduce(value, function (memo, num) {
            return memo + num;
        });
    });
    //is an array (rpp) of strings 
    //where every string is a ...
    var str_meta_data_table_buttons_reduced_reduced = _.reduce(arr_meta_data_table_buttons_reduced, function (memo, num) {
        return memo + '<tr>' + num + '</tr>';
    });
    //is a string that contains the table body
    return str_meta_data_table_buttons_reduced_reduced;
}

listModule.prototype.initialize = function () {
    var thisObject = this;
    //**** prepare params
    //paramsObject = ns.param.defaultizeUrlObjectParametersForLists(ns.param.getUrlObjectFromUrlString(this.url));
    this.prepareParams();
    //****
};
listModule.prototype.getData = function () {
    if (paramsObject) {
        $.when(this.getAllPromise(ausiasFLOW.listModule_class, filterParams, orderParams, systemFilterParams)).done(function (jsonDataReturned) {
            if (jsonDataReturned) {
                if (jsonDataReturned.status == "200") {


                    jsonData = jsonDataReturned;


//                    if (paramsObject.vf) {
//                        if (jsonData.message.meta.length < paramsObject["vf"]) {
//                            paramsObject["vf"] = jsonData.message.meta.length;
//                        }
//                    }
                }
            }
        })
    }
};
listModule.prototype.render = function () {
    var paramsObject = ausiasFLOW.listModule_paramsObject;
    if (jsonData.message.registers.data) {
        strTable = ns.html.table.getTable(
                this.getHeaderPageTableFunc(jsonData.message.meta, ausiasFLOW.listModule_class, strUrlFromParamsWithoutOrder, 99),
                this.getBodyPageTableFunc(jsonData.message.meta, jsonData.message.page.list, html.printPrincipal, this.loadButtons, this.loadPopups, 99)
                );
        return '<div id="tablePlace">' + strTable + '</div>';
    }
};