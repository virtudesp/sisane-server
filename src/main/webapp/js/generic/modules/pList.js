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
    return "<p>Mostrando una consulta de " + regs + " registros.</p>";
};
pListModule.prototype.getOrderInfo = function (objParams) {
    if (objParams['order']) {
        strOrder = "<p><small>Contenido ordenado por " + objParams["order"] + " (" + objParams["ordervalue"] + ') <a href="#/' + strClass + '/plist/' + this.getUrlStringFromParamsObject(this.getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"])) + '" id="linkQuitarOrden">(Quitar orden)</a></small></p>';
    } else {
        strOrder = "<p>Contenido no ordenado</p>";
    }
    ;
    return strOrder;
};
pListModule.prototype.getFilterInfo = function (objParams) {
    if (objParams['filter']) {
        strFilter = "<p><small>Contenido filtrado (" + objParams ['filter'] + " " + objParams['filteroperator'] + " " + objParams['filtervalue'] + ') <a href="#/' + strClass + '/plist/' + this.getUrlStringFromParamsObject(this.getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"])) + '" id="linkQuitarFiltro">(Quitar filtro)</small></a></p>';
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



    info = '<p>';
    info += '<div class="row">';
    info += '<div class="col-lg-3 col-md-3 col-sm-12">'
    info += infor;
    info += '</div>';
    info += '<div class="col-lg-6  col-md-6 col-sm-8 text-center">'
    //info += ns.html.panel.getPanel('panelPaginacion', 'Paginación',ns.html.buttonBars.getPageLinks(url, parseInt(this.objParams["page"]), parseInt(this.jsonPages), 2));
    info += 'Paginación: <br/>' + paging;
    info += '</div>'
    info += '<div class="col-lg-3  col-md-3 col-sm-4 text-center">';
    info += 'Registros por página: <br/>' + rpp;
    info += '</div>'
    info += '</div>';
    info += '</p>';
    return info;
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
    strFilterForm = '<div class="row">';
    strFilterForm += '<div class="col-md-12">';
    strFilterForm += '<p>'
    strFilterForm += '<form class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm">'
    strFilterForm += '<select id="selectFilter" class="form-control" name="filter" style="width: 160px">'
    strFilterForm += '</select> '
    strFilterForm += '<select id="selectFilteroperator" class="form-control" name="filteroperator" width="80" style="width: 200px">'
    strFilterForm += '<option value="like">contiene</option>'
    strFilterForm += '<option value="notlike">no contiene</option>'
    strFilterForm += '<option value="equals">es igual a</option>'
    strFilterForm += '<option value="notequalto">es distinto de</option>'
    strFilterForm += '<option value="less">es menor que</option>'
    strFilterForm += '<option value="lessorequal">es menor o igual que</option>'
    strFilterForm += '<option value="greater">es mayor que</option>'
    strFilterForm += '<option value="greaterorequal">es mayor o igual que</option>'
    strFilterForm += '</select> '
    strFilterForm += '<input id="inputFiltervalue" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value=""  width="100" style="width: 140px" placeholder="Valor"/> '
    strFilterForm += '<input type="submit" class="btn" id="btnFiltrar" name="btnFiltrar" value="Filtrar " />'
    strFilterForm += '</form>'
    strFilterForm += '</p>'
    strFilterForm += '</div>'
    strFilterForm += '</div>'
    return strFilterForm;
}
pListModule.prototype.filterFormClientTemplate = function () {
    strFilterFormClient = '<div class="row">';
    strFilterFormClient += '<div class="col-md-12">';
    strFilterFormClient += '<p>'
    strFilterFormClient += '<form class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm">'
    strFilterFormClient += '<input id="inputFiltervalueClient" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value=""  width="100" style="width: 140px" placeholder="Valor"/> '
    strFilterFormClient += '<input type="submit" class="btn" id="btnFiltrarClient" name="btnFiltrarClient" value="Filtrar " />'
    strFilterFormClient += '</form>'
    strFilterFormClient += '</p>'
    strFilterFormClient += '</div>'
    strFilterFormClient += '</div>'
    return strFilterFormClient;
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
    orderParams = this.printOrderParamsInUrl(ausiasFLOW.pListModule_paramsObject);
    filterParams = this.printFilterParamsInUrl(ausiasFLOW.pListModule_paramsObject);
    systemFilterParams = this.printSystemFilterParamsInUrl(ausiasFLOW.pListModule_paramsObject);
    strUrlFromParamsWithoutPage = this.getUrlStringFromParamsObject(this.getUrlObjectFromParamsWithoutParamArray(ausiasFLOW.pListModule_paramsObject, ["page"]));
    strUrlFromParamsWithoutRpp = this.getUrlStringFromParamsObject(this.getUrlObjectFromParamsWithoutParamArray(ausiasFLOW.pListModule_paramsObject, ["rpp"]));
    strUrlFromParamsWithoutOrder = this.getUrlStringFromParamsObject(this.getUrlObjectFromParamsWithoutParamArray(ausiasFLOW.pListModule_paramsObject, ["order", "ordervalue"]));
    urlWithoutPage = '#/' + ausiasFLOW.pListModule_class + '/' + ausiasFLOW.pListModule_frontOperation + '/' + strUrlFromParamsWithoutPage;
    urlWithoutRpp = '#/' + ausiasFLOW.pListModule_class + '/' + ausiasFLOW.pListModule_frontOperation + '/' + strUrlFromParamsWithoutRpp;
    //****
};
pListModule.prototype.getData = function () {
    if (strClass && paramsObject && paramsObject.rpp && paramsObject.page) {
        $.when(this.getSomePromise(strClass, paramsObject.rpp, paramsObject.page, filterParams, orderParams, systemFilterParams)).done(function (jsonDataReturned) {
            if (jsonDataReturned) {
                if (jsonDataReturned.status == "200") {

                    jsonData = jsonDataReturned;

//                    jsonMeta = jsonData.message.meta;
//                    jsonPage = jsonData.message.page.list;
//                    jsonPages = jsonData.message.pages.data;
//                    jsonRegisters = jsonData.message.registers.data;

                    if (parseInt(paramsObject["page"]) > parseInt(jsonData.message.pages.data)) {
                        paramsObject["page"] = parseInt(jsonData.message.pages.data);
                    }
                    if (paramsObject.vf) {
                        if (jsonData.message.meta.length < paramsObject["vf"]) {
                            paramsObject["vf"] = jsonData.message.meta.length;
                        }
                    }
                }
            }
        })
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
            this.getRegistersInfo(jsonData.message.registers.data) + this.getOrderInfo(paramsObject) + this.getFilterInfo(paramsObject),
            ns.html.buttonBars.getPageLinks(urlWithoutPage, parseInt(paramsObject["page"]), parseInt(jsonData.message.pages.data), 2),
            ns.html.buttonBars.getRppLinks(urlWithoutRpp, paramsObject['rpp'])
            );
    strVisibleFields = this.visibleFieldsTemplate();
    strFilterForm = this.filterFormTemplate();
    strFilterFormClient = this.filterFormClientTemplate();
    strNewButton = this.newTemplate(ausiasFLOW.pListModule_class);

    //console.log(this.loadButtons('2','1'))   //??

    strTable = ns.html.table.getTable(
            this.getHeaderPageTableFunc(jsonData.message.meta, ausiasFLOW.pListModule_class, strUrlFromParamsWithoutOrder, paramsObject.vf),
            this.getBodyPageTableFunc(jsonData.message.meta, jsonData.message.page.list, html.printPrincipal, this.loadButtons, this.loadPopups, paramsObject.vf)
            );
    return ns.html.tab.getTab([
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
    ns.html.form.populateSelectBox($('#selectVisibleFields'), ns.util.getIntegerArray(1, jsonData.message.meta.length))
    $("#selectVisibleFields").val(paramsObject["vf"]);
    $('#selectVisibleFields').unbind('change');
    $("#selectVisibleFields").change(function () {
        window.location.href = "#/" + ausiasFLOW.pListModule_class + "/plist/" + thisObject.getUrlStringFromParamsObject(thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
        return false;
    });
    //filter
    ns.html.form.populateSelectBox($('#selectFilter'), ns.arrays.getArrayFromMultiSlicedArray('Name', jsonData.message.meta), ns.arrays.getArrayFromMultiSlicedArray('ShortName', jsonData.message.meta));
    $('#btnFiltrar').unbind('click');
    $("#btnFiltrar").click(function (event) {
        var filter = $("#selectFilter option:selected").val();
        var filteroperator = $("#selectFilteroperator option:selected").val();
        var filtervalue = $("#inputFiltervalue").val();
        window.location.href = '#/' + ausiasFLOW.pListModule_class + '/plist/' + thisObject.getUrlStringFromParamsObject(thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
        return false;
    });
    //filter client
    ns.html.form.populateSelectBox($('#selectFilterClient'), ns.arrays.getArrayFromMultiSlicedArray('Name', jsonData.message.meta), ns.arrays.getArrayFromMultiSlicedArray('ShortName', jsonData.message.meta));
    $('#btnFiltrarClient').unbind('click');
    $("#btnFiltrarClient").click(function (event) {
        var filtervalue = $("#inputFiltervalueClient").val();
        //pte  -> reconstruir this.jsonPage con /word/.test(str)
        var arrayFiltered = ns.arrays.filterArray(filtervalue, jsonData.message.page.list);
        //window.location.href = '#/' + thisObject.strClase + '/plist/' + this.getUrlStringFromParamsObject(this.getUrlObjectFromParamsWithoutParamArray(thisObject.objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;

        var strUrlFromParamsWithoutPage = thisObject.getUrlStringFromParamsObject(thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]));


//        console.log(jsonData.message.meta)
//        console.log(strClass)
//        console.log(strUrlFromParamsWithoutPage)
//        console.log(paramsObject.vf)
//        console.log(arrayFiltered)
//        console.log(thisObject.getHeaderPageTableFunc(jsonData.message.meta, strClass, strUrlFromParamsWithoutPage, paramsObject.vf));
//        console.log(thisObject.getBodyPageTableFunc(jsonData.message.meta, arrayFiltered, html.printPrincipal, thisObject.loadButtons, paramsObject.vf));
//


        var strTable = ns.html.table.getTable(
                thisObject.getHeaderPageTableFunc(jsonData.message.meta, strClass, strUrlFromParamsWithoutPage, paramsObject.vf),
                thisObject.getBodyPageTableFunc(jsonData.message.meta, arrayFiltered, html.printPrincipal, thisObject.loadButtons, thisObject.loadPopups, paramsObject.vf)
                );
        $('#broth_content').empty().append(ns.html.tab.getTab([
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
        paramsObject = thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["page"]);
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
        paramsObject = thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["vf"]);
        paramsObject["vf"] = $("#selectVisibleFields option:selected").val();
        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);
        return false;
    });
    $('.rpp_link').unbind('click');
    $('.rpp_link').on('click', function (event) {
        paramsObject = thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["rpp"]);
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
        paramsObject = thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["filter", "filteroperator", "filtervalue"]);
        paramsObject["filter"] = $("#selectFilter option:selected").val();
        paramsObject["filteroperator"] = $("#selectFilteroperator option:selected").val();
        paramsObject["filtervalue"] = $("#inputFiltervalue").val();
        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);
        return false;
    });

    $('.orderAsc').unbind('click');
    $('.orderAsc').on('click', function (event) {
        paramsObject = thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]);
        paramsObject["order"] = $(this).attr('id');
        paramsObject["ordervalue"] = "asc";

        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);

        return false;
    });

    $('.orderDesc').unbind('click');
    $('.orderDesc').on('click', function (event) {
        paramsObject = thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]);
        paramsObject["order"] = $(this).attr('id');
        paramsObject["ordervalue"] = "desc";

        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);

        return false;
        //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
    });
    $('#linkQuitarOrden').unbind('click');
    $('#linkQuitarOrden').click(function () {
        paramsObject = thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]);

        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);

        return false;
    });
    $('#linkQuitarFiltro').unbind('click');
    $('#linkQuitarFiltro').click(function () {
        paramsObject = thisObject.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["filter", "filteroperator", "filtervalue"]);
        ausiasFLOW.pListModule_paramsObject = paramsObject;
        ausiasFLOW.renderComponent(thisObject, true);
        return false;
    });
}