/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/openAUSIAS
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pListModule = function () {
    var strClass;
    var jsonData;

    var jsonMeta;
    var jsonPage;
    var jsonPages;
    var jsonRegisters = undefined;
    var paramsObject;
    var orderParams;
    var filterParams;
    var systemFilterParams;
    var strUrlFromParamsWithoutPage;
    var strUrlFromParamsWithoutRpp;
    var strUrlFromParamsWithoutOrder;
    var urlWithoutPage;
    var urlWithoutRpp;
}
pListModule.prototype = Object.create(listModule.prototype);
pListModule.prototype.refresh = function () {
    ausiasFLOW.renderPage();
    return false;
};
pListModule.prototype.loadThButtons = function (meta, strClase, UrlFromParamsWithoutOrder) {
    tabla = '<a class="orderAsc" id="' + meta.Name + '" href="#/' + strClase + '/plist/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
    tabla += '<a class="orderDesc" id="' + meta.Name + '" href="#/' + strClase + '/plist/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
    return tabla;
}
//pListModule.prototype.getBodyPageTableFunc = function (meta, page, print_tdValue_function, tdButtons_function, trPopup_function, visibles) {
//
//    //thisObject.jsonPage: es un array de objetos. Cada objeto contiene una fila de la tabla de la petición
//    //thisObject.jsonMeta; es un array de objetos. Every object contains metadata from every object to print in every row
//
//    var matrix_meta_data = _.map(jsonPage, function (oRow, keyRow) {
//        return _.map(jsonMeta, function (oMeta, keyMeta) {
//            return  {meta: oMeta, data: oRow[oMeta.Name]};
//        });
//    });
//    //is an array (rpp) of arrays (rows) of objects
//    //every object contains the data and its metadata
//
//    var arr_meta_data_table_buttons = _.map(matrix_meta_data, function (value, key) {
//        return (_.map(matrix_meta_data[key], function (value2, key2) {
//            return  '<td>' + print_tdValue_function(value2) + '</td>';
//        })
//                )
//                .slice(0, parseInt(visibles - 1))
//                .concat(['<td>' + tdButtons_function(value, strClass) + '</td>']);
//    });
//    //is an array (rpp) of arrays (rows) of strings
//    //every string contains the data of the table cell
//    //there's an additional row to contain the buttons for the operations
//
//    var arr_meta_data_table_buttons_reduced = _.map(arr_meta_data_table_buttons, function (value, key) {
//        return _.reduce(value, function (memo, num) {
//            return memo + num;
//        });
//    });
//    //is an array (rpp) of strings 
//    //where every string is a 
//
//    var str_meta_data_table_buttons_reduced_reduced = _.reduce(arr_meta_data_table_buttons_reduced, function (memo, num) {
//        return memo + '<tr>' + num + '</tr>';
//    });
//    //is a string that conteins the table body
//
//    return str_meta_data_table_buttons_reduced_reduced;
//
////    var tabla = "";
////    $.each(page, function (index, rowValues) {
////        tabla += '<tr>';
////
////
////
////        var numField = 0;
////        //var id;
////        var strClaveAjena;
////        $.each(meta, function (index, metaValue) {
////            //if ("id" == metaValue.Name) {
////            //    id = rowValues[metaValue.Name];
////            //}
////            numField++;
////            if (numField <= thisObject.objParams.vf) {
////                //tabla += '<td>' + thisObject.printValue(value, valor, true) + '</td>';
////                if (metaValue.IsObjForeignKey) {
////                    tabla += '<td data-html="true" data-content="' + trPopup_function(rowValues[metaValue.MyMetaName], rowValues[metaValue.Name], metaValue.ShortName) + '" data-container="body" data-toggle="popover" data-placement="right">' + thisObject.printForeignValues(rowValues[metaValue.MyMetaName], rowValues[metaValue.Name], metaValue.ReferencesTable) + '</td>';
////
////                } else {
////                    if ("id" == metaValue.Name) {
////                        tabla += '<td data-html="true" data-content="' + trPopup_function(meta, rowValues, thisObject.strClase) + '" data-container="body" data-toggle="popover" data-placement="right" title="">' + ns.strings.printValue(metaValue, rowValues[metaValue.Name], true) + '</td>';
////                    } else {
////                        if (!metaValue.IsMetaForeignKey) {
////                            tabla += '<td>' + ns.strings.printValue(metaValue, rowValues[metaValue.Name], true) + '</td>'; // printValue(valoresRegistro, nombreDeCampo, false) 
////                        }
////                    }
////                }
////                //tabla += '<td>' + print_tdValue_function(meta, rowValues[metaValue.Name]) + '</td>';
////            }
////        });
////        tabla += '<td>';
////        tabla += tdButtons_function(rowValues, thisObject.strClase);
////        tabla += '</td>';
////        tabla += '</tr>';
////    });
////    return tabla;
//}

pListModule.prototype.getRegistersInfo = function (regs) {
    return html.dom('p', "Mostrando una consulta de " + regs + " registros.");
};
pListModule.prototype.getOrderInfo = function (objParams) {
    if (objParams['order']) {
        strOrder = "<p><small>Contenido ordenado por " + objParams["order"] + " (" + objParams["ordervalue"] + ') <a href="#/' + strClass + '/plist/' + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"])) + '" id="linkQuitarOrden">(Quitar orden)</a></small></p>';
    } else {
        strOrder = "<p>Contenido no ordenado</p>";
    }
    ;
    return strOrder;
};
pListModule.prototype.getFilterInfo = function (objParams) {
    if (objParams['filter']) {
        strFilter = "<p><small>Contenido filtrado (" + objParams ['filter'] + " " + objParams['filteroperator'] + " " + objParams['filtervalue'] + ') <a href="#/' + strClass + '/plist/' + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"])) + '" id="linkQuitarFiltro">(Quitar filtro)</small></a></p>';
    } else {
        strFilter = "<p>Contenido no filtrado</p>";
    }
    return strFilter;
};
//pListModule.prototype.loadButtons = function (rowValues, strClass) {
//    var botonera = "";
//    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
//    botonera += '<a class="btn btn-default view" id="' + rowValues[0].data + '"  href="#/' + strClass + '/view/' + rowValues[0].data + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
//    botonera += '<a class="btn btn-default edit" id="' + rowValues[0].data + '"  href="#/' + strClass + '/edit/' + rowValues[0].data + '"><i class="glyphicon glyphicon-pencil"></i></a>';
//    botonera += '<a class="btn btn-default remove" id="' + rowValues[0].data + '"  href="#/' + strClass + '/remove/' + rowValues[0].data + '"><i class="glyphicon glyphicon-remove"></i></a>';
//    botonera += '</div></div>';
//
//    return botonera;
//};

//pListModule.prototype.loadThButtons = function (meta, strClase, UrlFromParamsWithoutOrder) {
//    tabla = '<a class="orderAsc" id="' + meta.Name + '" href="#/' + strClase + '/plist/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
//    tabla += '<a class="orderDesc" id="' + meta.Name + '" href="#/' + strClase + '/plist/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
//    return tabla;
//}
//pListModule.prototype.loadPopups = function (meta, rowValues, strClase) {
//    var botonera = "";
//
//    botonera += "<p><b>(" + rowValues.id + ') ' + strClase + '</b></p>';
//    $.each(meta, function (name, metavalue) {
//        if (!metavalue.IsMetaForeignKey && !metavalue.IsObjForeignKey) {
//
//            botonera += '<i>' + metavalue.ShortName + '</i>: ' + ns.strings.printPlainValue(metavalue, rowValues[metavalue.Name], true) + "<br/>"
//        }
//        if (metavalue.IsObjForeignKey) {
//
//        }
////        if (typeof value === 'string') {
////            botonera += '<i>' + name + '</i>: ' + ns.strings.escapeHtml(value) + "<br/>";
////        } else {
////            botonera += '<i>' + name + '</i>: ' + value + "<br/>";
////        }
//    })
//
//    return botonera;
//};

//pListModule.prototype.getHeaderPageTableFunc = function (jsonMeta, strClass, UrlFromParamsWithoutOrder, visibles, acciones) {
//    thisObject = this;
//    acciones = typeof (acciones) != 'undefined' ? acciones : true;
//
////    arr_meta_data = _.map(thisObject.jsonMeta, function (value) {
////        return  {meta: value, data: thisObject.jsonPage[value.Name]};
////    });
//
//    arr_meta_data_tableHeader = _.map(jsonMeta, function (oMeta, key) {
//        if (oMeta.IsId) {
//            return '<th class="col-md-1">'
//                    + oMeta.UltraShortName
//                    + '<br />'
//                    + thisObject.loadThButtons(oMeta, ausiasFLOW.pListModule_class, UrlFromParamsWithoutOrder)
//                    + '</th>';
//        } else {
//            return  '<th>'
//                    + oMeta.UltraShortName
//                    + '<br />'
//                    + thisObject.loadThButtons(oMeta, ausiasFLOW.pListModule_class, UrlFromParamsWithoutOrder)
//                    + '</th>';
//        }
//    });
//    //visibles
//    if (visibles) {
//        arr_meta_data_tableHeader_visibles = arr_meta_data_tableHeader.slice(0, parseInt(visibles - 1));
//    } else {
//        arr_meta_data_tableHeader_visibles = arr_meta_data_tableHeader;
//    }
//    if (acciones) {
//        arr_meta_data_tableHeader_visibles_acciones = arr_meta_data_tableHeader_visibles.concat(['<th class="col-md-2">Acciones </th>']);
//    } else {
//        arr_meta_data_tableHeader_visibles_acciones = arr_meta_data_tableHeader_visibles;
//    }
//    return '<tr>' + arr_meta_data_tableHeader_visibles_acciones.join('') + '</tr>';
//}
////

pListModule.prototype.informationTemplate = function (infor, paging, rpp) {
    var strInfo = html.dom('div', infor, 'class="col-lg-3 col-md-3 col-sm-12"');
    var strPaging = html.dom('div', 'Paginación: <br/>' + paging, 'class="col-lg-6  col-md-6 col-sm-8 text-center"');
    var strRpp = html.dom('div', 'Registros por página: <br/>' + rpp, 'class="col-lg-3  col-md-3 col-sm-4 text-center"');
    return html.dom('p', html.dom('div', strInfo + strPaging + strRpp, 'class="row"'));
}
pListModule.prototype.visibleFieldsTemplate = function () {
    strVisibleFields = '<div class="row">';
    strVisibleFields += '<div class="col-md-12 text-center">'
    strVisibleFields += '<p>'
    strVisibleFields += '<p>Campos visibles:</p>'
    strVisibleFields += '<form class="navbar-form" role="form" action="Controller" method="post" id="visibleFieldsForm">'
    strVisibleFields += '<select id="selectVisibleFields" class="form-control" name="filter" width="80" style="width: 70px">'
    strVisibleFields += '</select>'
    strVisibleFields += '</form>'
    strVisibleFields += '</p>'
    strVisibleFields += '</div>'
    strVisibleFields += '</div>';
    return strVisibleFields;
}
pListModule.prototype.filterFormTemplate = function () {
    var selectFilter = html.dom('select', '', 'id="selectFilter" class="form-control" name="filter" style="width: 160px"');
    var selectFilterOperatorOptions = "";
    selectFilterOperatorOptions += html.dom('option', 'contiene', 'value="like"');
    selectFilterOperatorOptions += html.dom('option', 'no contiene', 'value="notlike"');
    selectFilterOperatorOptions += html.dom('option', 'es igual a', 'value="equals"');
    selectFilterOperatorOptions += html.dom('option', 'es distinto de', 'value="notequalto"');
    selectFilterOperatorOptions += html.dom('option', 'es menor que', 'value="less"');
    selectFilterOperatorOptions += html.dom('option', 'es menor o igual que', 'value="lessorequal"');
    selectFilterOperatorOptions += html.dom('option', 'es mayor que', 'value="greater"');
    selectFilterOperatorOptions += html.dom('option', 'es mayor o igual que', 'value="greaterorequal"');
    var selectFilterOperator = html.dom('select', selectFilterOperatorOptions, 'id="selectFilteroperator" class="form-control" name="filteroperator" width="80" style="width: 200px"');
    var inputFiltervalue = html.dom('input', '', 'id="inputFiltervalue" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value=""  width="100" style="width: 140px" placeholder="Valor"');
    var submit = html.dom('input', '', 'type="submit" class="btn" id="btnFiltrar" name="btnFiltrar" value="Filtrar"');
    var strFormContent = selectFilter + selectFilterOperator + inputFiltervalue + submit;
    var strForm = html.dom('form', strFormContent, 'class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm"');
    return html.dom('div', html.dom('div', html.dom('p', strForm), 'col-md-12'), 'row');
}
pListModule.prototype.filterFormClientTemplate = function () {
    var strFormContent = html.dom('input', '', 'id="inputFiltervalueClient" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value=""  width="100" style="width: 140px" placeholder="Valor"');
    strFormContent += html.dom('input', '', 'type="submit" class="btn" id="btnFiltrarClient" name="btnFiltrarClient" value="Filtrar"');
    var strForm = html.dom('form', strFormContent, 'class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm"')
    return html.dom('div', html.dom('div', html.dom('p', strForm), 'col-md-12'), 'row');
}
pListModule.prototype.newTemplate = function (strClass) {
    strNewButton = '<div class="row">';
    strNewButton += '<div class="col-md-12 text-center">';
    strNewButton += '<p>'
    strNewButton += '<br/>'
    strNewButton += '<a class="btn btn-primary" href="#/' + strClass + '/new">Crear un nuevo ' + strClass + '</a>'
    strNewButton += '</p>'
    strNewButton += '</div>'
    strNewButton += '</div>'
    return strNewButton;
}
pListModule.prototype.defaultizeUrlObjectParametersForPaginatedLists = function (objParams) {
    if (typeof objParams["page"] == 'undefined')
        objParams["page"] = 1;
    if (typeof objParams["rpp"] == 'undefined')
        objParams["rpp"] = 10;
    if (typeof objParams["vf"] == 'undefined')
        objParams["vf"] = 10;
    return objParams;
}
pListModule.prototype.initialize = function () {
    //var thisObject = this;

    //**** prepare params

    //paramsObject = ns.param.defaultizeUrlObjectParametersForPaginatedLists(ns.param.getUrlObjectFromUrlString(this.url));
    strClass = ausiasFLOW.pListModule_class;
    paramsObject = this.defaultizeUrlObjectParametersForPaginatedLists(ausiasFLOW.pListModule_paramsObject);
    orderParams = parameter.printOrderParamsInUrl(ausiasFLOW.pListModule_paramsObject);
    filterParams = parameter.printFilterParamsInUrl(ausiasFLOW.pListModule_paramsObject);
    systemFilterParams = parameter.printSystemFilterParamsInUrl(ausiasFLOW.pListModule_paramsObject);
    strUrlFromParamsWithoutPage = parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(ausiasFLOW.pListModule_paramsObject, ["page"]));
    strUrlFromParamsWithoutRpp = parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(ausiasFLOW.pListModule_paramsObject, ["rpp"]));
    strUrlFromParamsWithoutOrder = parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(ausiasFLOW.pListModule_paramsObject, ["order", "ordervalue"]));
    urlWithoutPage = '#/' + ausiasFLOW.pListModule_class + '/' + ausiasFLOW.pListModule_frontOperation + '/' + strUrlFromParamsWithoutPage;
    urlWithoutRpp = '#/' + ausiasFLOW.pListModule_class + '/' + ausiasFLOW.pListModule_frontOperation + '/' + strUrlFromParamsWithoutRpp;
    //****
};

pListModule.prototype.getPromise = function () {
    if (strClass && paramsObject && paramsObject.rpp && paramsObject.page) {
        return promise.getSome(strClass, paramsObject.rpp, paramsObject.page, filterParams, orderParams, systemFilterParams);
    }

}

pListModule.prototype.getData = function (jsonDataReturned) {
    if (jsonDataReturned) {
        if (jsonDataReturned.status == "200") {
            jsonData = jsonDataReturned;
            if (parseInt(paramsObject["page"]) > parseInt(jsonData.message.pages.data)) {
                paramsObject["page"] = parseInt(jsonData.message.pages.data);
            }
            if (paramsObject.vf) {
                if (jsonData.message.meta.length < paramsObject["vf"]) {
                    paramsObject["vf"] = jsonData.message.meta.length;
                }
            }
        } else {
            //informar del error
        }
    } else {
        //informar del error
    }
}

pListModule.prototype.render = function () {
    //var paramsObject = ausiasFLOW.pListModule_paramsObject;
    if (!strClass) {
        return "error: No class defined in paginatedList module";
    }
    if (!paramsObject) {
        return "error: No params defined in paginatedList module";
    }
    if (jsonData) {
        if (jsonData.status != "200") {
            return "error: Invalid status code returned by the server";
        }
    } else {
        return "error: Lost server connection";
    }

    strGeneralInformation = this.informationTemplate(
            this.getRegistersInfo(jsonData.message.registers.message) + this.getOrderInfo(paramsObject) + this.getFilterInfo(paramsObject),
            pagination.getPageLinks(urlWithoutPage, parseInt(paramsObject["page"]), parseInt(jsonData.message.pages.message), 2),
            pagination.getRppLinks(urlWithoutRpp, paramsObject['rpp'])
            );
    strVisibleFields = this.visibleFieldsTemplate();
    strFilterForm = this.filterFormTemplate();
    strFilterFormClient = this.filterFormClientTemplate();
    strNewButton = this.newTemplate(ausiasFLOW.pListModule_class);

    //console.log(this.loadButtons('2','1'))   //??

    strTable = table.getTable(
            this.getHeaderPageTableFunc(jsonData.message.meta.message, ausiasFLOW.pListModule_class, strUrlFromParamsWithoutOrder, paramsObject.vf),
            this.getBodyPageTableFunc(jsonData.message.meta.message, jsonData.message.page.message, html.printPrincipal, this.loadButtons, this.loadPopups, paramsObject.vf)
            );
    return tab.getTab([
        {'name': 'Consulta', 'content': strGeneralInformation},
        {'name': 'Campos visibles', 'content': strVisibleFields},
        {'name': 'Filtro de servidor', 'content': strFilterForm},
        {'name': 'Filtro de cliente', 'content': strFilterFormClient},
        {'name': 'Nuevo registro', 'content': strNewButton}
    ]) + '<div id="tablePlace">' + strTable + '</div>';

};
pListModule.prototype.bind = function () {
    thisObject = this;
    //visible fields
    $('#selectVisibleFields').empty()
    form.populateSelectBox($('#selectVisibleFields'), ns.util.getIntegerArray(1, jsonData.message.meta.message.length))
    $("#selectVisibleFields").val(paramsObject["vf"]);
    $('#selectVisibleFields').unbind('change');
    $("#selectVisibleFields").change(function () {
        window.location.href = "#/" + ausiasFLOW.pListModule_class + "/plist/" + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
        return false;
    });
    //filter
    form.populateSelectBox($('#selectFilter'), array.getArrayFromMultiSlicedArray('Name', jsonData.message.meta.message), array.getArrayFromMultiSlicedArray('ShortName', jsonData.message.meta.message));
    $('#btnFiltrar').unbind('click');
    $("#btnFiltrar").click(function (event) {
        var filter = $("#selectFilter option:selected").val();
        var filteroperator = $("#selectFilteroperator option:selected").val();
        var filtervalue = $("#inputFiltervalue").val();
        window.location.href = '#/' + ausiasFLOW.pListModule_class + '/plist/' + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
        return false;
    });
    //filter client
    form.populateSelectBox($('#selectFilterClient'), array.getArrayFromMultiSlicedArray('Name', jsonData.message.meta.message), array.getArrayFromMultiSlicedArray('ShortName', jsonData.message.meta.message));
    $('#btnFiltrarClient').unbind('click');
    $("#btnFiltrarClient").click(function (event) {
        var filtervalue = $("#inputFiltervalueClient").val();
        //pte  -> reconstruir this.jsonPage con /word/.test(str)
        var arrayFiltered = array.filterArray(filtervalue, jsonData.message.page.message);
        //window.location.href = '#/' + thisObject.strClase + '/plist/' + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(thisObject.objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;

        var strUrlFromParamsWithoutPage = parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]));


//        console.log(jsonData.message.meta)
//        console.log(strClass)
//        console.log(strUrlFromParamsWithoutPage)
//        console.log(paramsObject.vf)
//        console.log(arrayFiltered)
//        console.log(thisObject.getHeaderPageTableFunc(jsonData.message.meta, strClass, strUrlFromParamsWithoutPage, paramsObject.vf));
//        console.log(thisObject.getBodyPageTableFunc(jsonData.message.meta, arrayFiltered, html.printPrincipal, thisObject.loadButtons, paramsObject.vf));
//


        var strTable = table.getTable(
                thisObject.getHeaderPageTableFunc(jsonData.message.meta.message, strClass, strUrlFromParamsWithoutPage, paramsObject.vf),
                thisObject.getBodyPageTableFunc(jsonData.message.meta.message, arrayFiltered, html.printPrincipal, thisObject.loadButtons, thisObject.loadPopups, paramsObject.vf)
                );
        $('#broth_content').empty().append(tab.getTab([
            {'name': 'Consulta', 'content': strGeneralInformation},
            {'name': 'Campos visibles', 'content': strVisibleFields},
            {'name': 'Filtro de servidor', 'content': strFilterForm},
            {'name': 'Filtro de cliente', 'content': strFilterFormClient},
            {'name': 'Nuevo registro', 'content': strNewButton}
        ]) + '<div id="tablePlace">' + strTable + '</div>');

        return false;
    });
    //.........
    $("[data-toggle='popover']").popover({trigger: "hover"});
};






pListModule.prototype.bindAll = function (place, objParams, callbackFunction, oModel, oView) {
    var thisObject = this;
    $('.pagination_link').unbind('click');
    $('.pagination_link').click(function (event) {
        //rpp = $( "#rpp option:selected").text();
        paramsObject = parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["page"]);
        paramsObject["page"] = parseInt($(this).attr('id'));




        //$('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Paginated List'));
        //ns.login.checkAndUpdateUserConnectionState();
        //ausiasFLOW.reset();
        //ausiasFLOW.pListModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);

        ausiasFLOW.pListModule_paramsObject = paramsObject;

        ausiasFLOW.renderComponent(thisObject, true);





        //thisObject.list(place, objParams, callbackFunction, oModel, oView);
        //thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        return false;
    });
    //visible fields select population, setting & event
    $('#selectVisibleFields').unbind('change');
    $("#selectVisibleFields").change(function () {
        paramsObject = parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["vf"]);
        paramsObject["vf"] = $("#selectVisibleFields option:selected").val();
        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);
        return false;
    });
    $('.rpp_link').unbind('click');
    $('.rpp_link').on('click', function (event) {
        paramsObject = parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["rpp"]);
        paramsObject["rpp"] = parseInt($(this).attr('id'));
        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);
        return false;
    });
    //list events
    if (callbackFunction) {
        $('.btn.btn-default.selector_button').unbind('click');
        $('.btn.btn-default.selector_button').click(function (event) {
            callbackFunction(parseInt($(this).attr('id')))
        });
    }
    ;
    $('#btnFiltrar').unbind('click');
    $("#btnFiltrar").click(function (event) {
//                filter = $("#selectFilter option:selected").val();
//                filteroperator = $("#selectFilteroperator option:selected").val();
//                filtervalue = $("#inputFiltervalue").val();
//                window.location.href = 'jsp#/' + model('documento').getName() + '/list/' + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
//                return false;
        paramsObject = parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["filter", "filteroperator", "filtervalue"]);
        paramsObject["filter"] = $("#selectFilter option:selected").val();
        paramsObject["filteroperator"] = $("#selectFilteroperator option:selected").val();
        paramsObject["filtervalue"] = $("#inputFiltervalue").val();
        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);
        return false;
    });

    $('.orderAsc').unbind('click');
    $('.orderAsc').on('click', function (event) {
        paramsObject = parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]);
        paramsObject["order"] = $(this).attr('id');
        paramsObject["ordervalue"] = "asc";

        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);

        return false;
    });

    $('.orderDesc').unbind('click');
    $('.orderDesc').on('click', function (event) {
        paramsObject = parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]);
        paramsObject["order"] = $(this).attr('id');
        paramsObject["ordervalue"] = "desc";

        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);

        return false;
        //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
    });
    $('#linkQuitarOrden').unbind('click');
    $('#linkQuitarOrden').click(function () {
        paramsObject = parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]);

        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);

        return false;
    });
    $('#linkQuitarFiltro').unbind('click');
    $('#linkQuitarFiltro').click(function () {
        paramsObject = parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["filter", "filteroperator", "filtervalue"]);
        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);
        return false;
    });
}