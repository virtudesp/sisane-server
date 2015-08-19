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
    var dataFromServer = $.Deferred();
    var icon = '<i class="fa fa-file-text-o fa-5x"></i>';
    var fillDocumentoPageHeader = _.partial(html.getPageHeader, icon, 'Documento', _);
    var strClass = 'documento';


//    var editOperation = function (url) {
//        ns.login.checkAndUpdateUserConnectionState();
//        var paramsObject;
//        if (url) {
//            paramsObject = parameter.defaultizeUrlObjectParameters(parameter.getUrlObjectFromUrlString(url));
//        } else {
//            paramsObject = parameter.defaultizeUrlObjectParameters({});
//        }
//        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Edición'));
//        //var oDocumentoEdit = new editOperation('documento', $('#broth_content'), paramsObject);
//        $.when(broth.getOnePromise(strClass, paramsObject['id'])).done(function (jsonData) {
//            if (jsonData.status == "200") {
//                $('#broth_content').html(broth.getFormTemplate(strClass, jsonData.message.meta));
//                ns.html.form.doFillForm(jsonData.message.meta, jsonData.message.bean);
//                //****
//                loadValidationCallbacks(jsonData.message.meta);
//                $('#id').attr("disabled", true);
//                $('#submitForm').unbind('click');
//                $('#submitForm').click(function (e) {
//                    //oView.okValidation(function (e) {
//                    var result = broth.setOne(strClass, {json: JSON.stringify(broth.getFormValues(strClass))});
//                    broth.doResultOperationNotifyToUser($('#broth_content'), result["status"], broth.actionEditOkMessage(result["message"]), result["message"], true);
//                    e.preventDefault();
//                    return false;
//                    //});
//                });
//            } else {
//                $('#broth_content').html(oDocumentoEdit.notifyException(jsonData.status, jsonData.message));
//            }
//        })
//    }
//    var viewOperation = function (url) {
//        ns.login.checkAndUpdateUserConnectionState();
//        var paramsObject = parameter.defaultizeUrlObjectParameters(parameter.getUrlObjectFromUrlString(url));
//        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Detalle'));
//        $.when(broth.getOnePromise(strClass, paramsObject['id'])).done(function (jsonData) {
//            $('#broth_content').html(broth.getViewTemplate_func(strClass, jsonData.message));
//        })
//    }

//
//    getBodyPageTableFunc = function (meta, page, print_tdValue_function, tdButtons_function, trPopup_function, visibles) {
//        var thisObject = this;
//        //thisObject.jsonPage: es un array de objetos. Cada objeto contiene una fila de la tabla de la petición
//        //thisObject.jsonMeta; es un array de objetos. Every object contains metadata from every object to print in every row
//
//        var matrix_meta_data = _.map(thisObject.jsonPage, function (oRow, keyRow) {
//            return _.map(thisObject.jsonMeta, function (oMeta, keyMeta) {
//                return  {meta: oMeta, data: oRow[oMeta.Name]};
//            });
//
//        });
//        //is an array (rpp) of arrays (rows) of objects
//        //every object contains the data and its metadata
//
//
//        var arr_meta_data_table_buttons = _.map(matrix_meta_data, function (value, key) {
//            return (_.map(matrix_meta_data[key], function (value2, key2) {
//                return  '<td>' + print_tdValue_function(value2) + '</td>';
//            })
//                    )
//                    .slice(0, parseInt(visibles - 1))
//                    .concat(['<td>' + tdButtons_function(value, thisObject.strClase) + '</td>']);
//        });
//        //is an array (rpp) of arrays (rows) of strings
//        //every string contains the data of the table cell
//        //there's an additional row to contain the buttons for the operations
//
//
//
//
//        var arr_meta_data_table_buttons_reduced = _.map(arr_meta_data_table_buttons, function (value, key) {
//            return _.reduce(value, function (memo, num) {
//                return memo + num;
//            });
//        });
//        //is an array (rpp) of strings 
//        //where every string is a 
//
//        var str_meta_data_table_buttons_reduced_reduced = _.reduce(arr_meta_data_table_buttons_reduced, function (memo, num) {
//            return memo + '<tr>' + num + '</tr>';
//        });
//        //is a string that conteins the table body
//
//        return str_meta_data_table_buttons_reduced_reduced;
//
//
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
//    }
//    getBodyPageTableNoFunc = function (meta, page, print_tdValue_function, tdButtons_function, trPopup_function) {
//        var thisObject = this;
//        var tabla = "";
//        $.each(page, function (index, rowValues) {
//            tabla += '<tr>';
//
//
//
//            var numField = 0;
//            //var id;
//            var strClaveAjena;
//            $.each(meta, function (index, metaValue) {
//                //if ("id" == metaValue.Name) {
//                //    id = rowValues[metaValue.Name];
//                //}
//                numField++;
//                if (numField <= thisObject.objParams.vf) {
//                    //tabla += '<td>' + thisObject.printValue(value, valor, true) + '</td>';
//                    if (metaValue.IsObjForeignKey) {
//                        tabla += '<td data-html="true" data-content="' + trPopup_function(rowValues[metaValue.MyMetaName], rowValues[metaValue.Name], metaValue.ShortName) + '" data-container="body" data-toggle="popover" data-placement="right">' + thisObject.printForeignValues(rowValues[metaValue.MyMetaName], rowValues[metaValue.Name], metaValue.ReferencesTable) + '</td>';
//
//                    } else {
//                        if ("id" == metaValue.Name) {
//                            tabla += '<td data-html="true" data-content="' + trPopup_function(meta, rowValues, thisObject.strClase) + '" data-container="body" data-toggle="popover" data-placement="right" title="">' + ns.strings.printValue(metaValue, rowValues[metaValue.Name], true) + '</td>';
//                        } else {
//                            if (!metaValue.IsMetaForeignKey) {
//                                tabla += '<td>' + ns.strings.printValue(metaValue, rowValues[metaValue.Name], true) + '</td>'; // printValue(valoresRegistro, nombreDeCampo, false) 
//                            }
//                        }
//                    }
//                    //tabla += '<td>' + print_tdValue_function(meta, rowValues[metaValue.Name]) + '</td>';
//                }
//            });
//            tabla += '<td>';
//            tabla += tdButtons_function(rowValues, thisObject.strClase);
//            tabla += '</td>';
//            tabla += '</tr>';
//        });
//        return tabla;
//    }
//    getRegistersInfo = function (regs) {
//        return "<p>Mostrando una consulta de " + regs + " registros.</p>";
//    };
//    getOrderInfo = function (objParams) {
//        if (objParams['order']) {
//            strOrder = "<p><small>Contenido ordenado por " + objParams["order"] + " (" + objParams["ordervalue"] + ') <a href="#/' + strClass + '/list/' + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"])) + '" id="linkQuitarOrden">(Quitar orden)</a></small></p>';
//        } else {
//            strOrder = "<p>Contenido no ordenado</p>";
//        }
//        ;
//        return strOrder;
//    };
//    getFilterInfo = function (objParams) {
//        if (objParams['filter']) {
//            strFilter = "<p><small>Contenido filtrado (" + objParams ['filter'] + " " + objParams['filteroperator'] + " " + objParams['filtervalue'] + ') <a href="#/' + strClass + '/list/' + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"])) + '" id="linkQuitarFiltro">(Quitar filtro)</small></a></p>';
//        } else {
//            strFilter = "<p>Contenido no filtrado</p>";
//        }
//        return strFilter;
//    };
//    loadButtons = function (rowValues, strClase) {
//        var botonera = "";
//        botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
//        botonera += '<a class="btn btn-default view" id="' + rowValues[0].data + '"  href="#/' + strClase + '/view/' + rowValues[0].data + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
//        botonera += '<a class="btn btn-default edit" id="' + rowValues[0].data + '"  href="#/' + strClase + '/edit/' + rowValues[0].data + '"><i class="glyphicon glyphicon-pencil"></i></a>';
//        botonera += '<a class="btn btn-default remove" id="' + rowValues[0].data + '"  href="#/' + strClase + '/remove/' + rowValues[0].data + '"><i class="glyphicon glyphicon-remove"></i></a>';
//        botonera += '</div></div>';
//
//        return botonera;
//    };
//    getHeaderPageTableNoFunc = function (meta, clase, UrlFromParamsWithoutOrder, acciones) {
//        thisObject = this;
//        acciones = typeof (acciones) != 'undefined' ? acciones : true;
//        var numField = 0; //visible field counter
//        var tabla = "";
//        if (meta !== null) {
//            tabla += '<tr>';
//            $.each(meta, function (index, metaValue) {
//                numField++; //field counter
//                if (numField <= thisObject.objParams.vf) {
//                    if (metaValue) {
//                        if (metaValue.IsId) {
//                            tabla += '<th class="col-md-1">' + metaValue.UltraShortName;
//                            tabla += '<br />';
//                            metaValue
//                            tabla += thisObject.thButtons(metaValue, thisObject.strClase, UrlFromParamsWithoutOrder);
//                            tabla += '</th>';
//                        } else {
//                            if (!metaValue.IsMetaForeignKey) {
//                                tabla += '<th>' + metaValue.UltraShortName;
//                                tabla += '<br />';
//                                tabla += thisObject.thButtons(metaValue, thisObject.strClase, UrlFromParamsWithoutOrder);
//                                tabla += '</th>';
//                            }
//                        }
//                    }
//
//                }
//            });
//            if (acciones)
//                tabla += '<th class="col-md-2">Acciones </th>';
//            tabla += '</tr>';
//        }
//        return tabla;
//    }
//
//    loadThButtons = function (meta, strClase, UrlFromParamsWithoutOrder) {
//        tabla = '<a class="orderAsc" id="' + meta.Name + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
//        tabla += '<a class="orderDesc" id="' + meta.Name + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
//        return tabla;
//    }
//    loadPopups = function (meta, rowValues, strClase) {
//        var botonera = "";
//
//
//
//
//        botonera += "<p><b>(" + rowValues.id + ') ' + strClase + '</b></p>';
//        $.each(meta, function (name, metavalue) {
//            if (!metavalue.IsMetaForeignKey && !metavalue.IsObjForeignKey) {
//
//                botonera += '<i>' + metavalue.ShortName + '</i>: ' + ns.strings.printPlainValue(metavalue, rowValues[metavalue.Name], true) + "<br/>"
//            }
//            if (metavalue.IsObjForeignKey) {
//
//            }
////        if (typeof value === 'string') {
////            botonera += '<i>' + name + '</i>: ' + ns.strings.escapeHtml(value) + "<br/>";
////        } else {
////            botonera += '<i>' + name + '</i>: ' + value + "<br/>";
////        }
//        })
//
//        return botonera;
//    };
//
//    getHeaderPageTableFunc = function (jsonMeta, strClass, UrlFromParamsWithoutOrder, visibles, acciones) {
//        thisObject = this;
//        acciones = typeof (acciones) != 'undefined' ? acciones : true;
//
////    arr_meta_data = _.map(thisObject.jsonMeta, function (value) {
////        return  {meta: value, data: thisObject.jsonPage[value.Name]};
////    });
//
//        arr_meta_data_tableHeader = _.map(jsonMeta, function (oMeta, key) {
//            if (oMeta.IsId) {
//                return '<th class="col-md-1">'
//                        + oMeta.UltraShortName
//                        + '<br />'
//                        + loadThButtons(oMeta, strClass, UrlFromParamsWithoutOrder)
//                        + '</th>';
//            } else {
//                return  '<th>'
//                        + oMeta.UltraShortName
//                        + '<br />'
//                        + loadThButtons(oMeta, strClass, UrlFromParamsWithoutOrder)
//                        + '</th>';
//            }
//        });
//        //visibles
//        if (visibles) {
//            arr_meta_data_tableHeader_visibles = arr_meta_data_tableHeader.slice(0, parseInt(visibles - 1));
//        } else {
//            arr_meta_data_tableHeader_visibles = arr_meta_data_tableHeader;
//        }
//        if (acciones) {
//            arr_meta_data_tableHeader_visibles_acciones = arr_meta_data_tableHeader_visibles.concat(['<th class="col-md-2">Acciones </th>']);
//        } else {
//            arr_meta_data_tableHeader_visibles_acciones = arr_meta_data_tableHeader_visibles;
//        }
//        return '<tr>' + arr_meta_data_tableHeader_visibles_acciones.join('') + '</tr>';
//    }
//    //
//
//    informationTemplate = function (infor, paging, rpp) {
//        info = '<p>';
//        info += '<div class="row">';
//        info += '<div class="col-lg-3 col-md-3 col-sm-12">'
//        info += infor;
//        info += '</div>';
//        info += '<div class="col-lg-6  col-md-6 col-sm-8 text-center">'
//        //info += ns.html.panel.getPanel('panelPaginacion', 'Paginación',ns.html.buttonBars.getPageLinks(url, parseInt(this.objParams["page"]), parseInt(this.jsonPages), 2));
//        info += 'Paginación: <br/>' + paging;
//        info += '</div>'
//        info += '<div class="col-lg-3  col-md-3 col-sm-4 text-center">';
//        info += 'Registros por página: <br/>' + rpp;
//        info += '</div>'
//        info += '</div>';
//        info += '</p>';
//        return info;
//    }
//    visibleFieldsTemplate = function () {
//        strVisibleFields = '<div class="row">';
//        strVisibleFields += '<div class="col-md-12 text-center">'
//        strVisibleFields += '<p>'
//        strVisibleFields += '<p>Campos visibles:</p>'
//        strVisibleFields += '<form class="navbar-form" role="form" action="Controller" method="post" id="visibleFieldsForm">'
//        strVisibleFields += '<select id="selectVisibleFields" class="form-control" name="filter" width="80" style="width: 70px">'
//        strVisibleFields += '</select>'
//        strVisibleFields += '</form>'
//        strVisibleFields += '</p>'
//        strVisibleFields += '</div>'
//        strVisibleFields += '</div>';
//        return strVisibleFields;
//    }
//    filterFormTemplate = function () {
//        strFilterForm = '<div class="row">';
//        strFilterForm += '<div class="col-md-12">';
//        strFilterForm += '<p>'
//        strFilterForm += '<form class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm">'
//        strFilterForm += '<select id="selectFilter" class="form-control" name="filter" style="width: 160px">'
//        strFilterForm += '</select> '
//        strFilterForm += '<select id="selectFilteroperator" class="form-control" name="filteroperator" width="80" style="width: 200px">'
//        strFilterForm += '<option value="like">contiene</option>'
//        strFilterForm += '<option value="notlike">no contiene</option>'
//        strFilterForm += '<option value="equals">es igual a</option>'
//        strFilterForm += '<option value="notequalto">es distinto de</option>'
//        strFilterForm += '<option value="less">es menor que</option>'
//        strFilterForm += '<option value="lessorequal">es menor o igual que</option>'
//        strFilterForm += '<option value="greater">es mayor que</option>'
//        strFilterForm += '<option value="greaterorequal">es mayor o igual que</option>'
//        strFilterForm += '</select> '
//        strFilterForm += '<input id="inputFiltervalue" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value=""  width="100" style="width: 140px" placeholder="Valor"/> '
//        strFilterForm += '<input type="submit" class="btn" id="btnFiltrar" name="btnFiltrar" value="Filtrar " />'
//        strFilterForm += '</form>'
//        strFilterForm += '</p>'
//        strFilterForm += '</div>'
//        strFilterForm += '</div>'
//        return strFilterForm;
//    }
//    filterFormClientTemplate = function () {
//        strFilterFormClient = '<div class="row">';
//        strFilterFormClient += '<div class="col-md-12">';
//        strFilterFormClient += '<p>'
//        strFilterFormClient += '<form class="navbar-form navbar-right" role="form" action="Controller" method="post" id="empresaForm">'
//        strFilterFormClient += '<input id="inputFiltervalueClient" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value=""  width="100" style="width: 140px" placeholder="Valor"/> '
//        strFilterFormClient += '<input type="submit" class="btn" id="btnFiltrarClient" name="btnFiltrarClient" value="Filtrar " />'
//        strFilterFormClient += '</form>'
//        strFilterFormClient += '</p>'
//        strFilterFormClient += '</div>'
//        strFilterFormClient += '</div>'
//        return strFilterFormClient;
//    }
//    newTemplate = function (strClass) {
//        strNewButton = '<div class="row">';
//        strNewButton += '<div class="col-md-12 text-center">';
//        strNewButton += '<p>'
//        strNewButton += '<br/>'
//        strNewButton += '<a class="btn btn-primary" href="#/' + strClass + '/new">Crear un nuevo ' + strClass + '</a>'
//        strNewButton += '</p>'
//        strNewButton += '</div>'
//        strNewButton += '</div>'
//        return strNewButton;
//    }
//    var listOperation = function (url) {
//        ns.login.checkAndUpdateUserConnectionState();
//        //**** prepare params
//        var paramsObject = parameter.defaultizeUrlObjectParametersForLists(parameter.getUrlObjectFromUrlString(url));
//        var orderParams = broth.printOrderParamsInUrl(paramsObject);
//        var filterParams = broth.printFilterParamsInUrl(paramsObject);
//        var systemFilterParams = broth.printSystemFilterParamsInUrl(paramsObject);
//        //***
//        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Listado'));
//        //****
//        $.when(broth.getSomePromise(strClass, paramsObject.rpp, paramsObject.page, filterParams, orderParams, systemFilterParams)).done(function (jsonData) {
//            if (jsonData.status == "200") {
//                //oDocumentoNew.postPickData();
//                jsonMeta = jsonData.message.meta;
//                jsonPage = jsonData.message.page.list;
//                jsonPages = jsonData.message.pages.data;
//                jsonRegisters = jsonData.message.registers.data;
//                if (parseInt(paramsObject["page"]) > parseInt(jsonPages)) {
//                    paramsObject["page"] = parseInt(jsonPages);
//                }
//                if (paramsObject.vf) {
//                    if (jsonMeta.length < paramsObject["vf"]) {
//                        paramsObject["vf"] = jsonMeta.length;
//                    }
//                }
//
//                //oDocumentoList.printTemplate();
//                //RENDER
//
//                var strUrlFromParamsWithoutPage = parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["page"]));
//                var urlWithoutPage = '#/' + strClass + '/list/' + strUrlFromParamsWithoutPage;
//                var strUrlFromParamsWithoutRpp = parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["rpp"]));
//                var urlWithoutRpp = '#/' + strClass + '/list/' + strUrlFromParamsWithoutRpp;
//                var strUrlFromParamsWithoutOrder = parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]));
//
//                strGeneralInformation = informationTemplate(
//                        getRegistersInfo(jsonRegisters) + getOrderInfo(paramsObject) + getFilterInfo(paramsObject),
//                        ns.html.buttonBars.getPageLinks(urlWithoutPage, parseInt(paramsObject["page"]), parseInt(jsonPages), 2),
//                        ns.html.buttonBars.getRppLinks(urlWithoutRpp, paramsObject['rpp'])
//                        );
//
//                strVisibleFields = visibleFieldsTemplate();
//
//                strFilterForm = filterFormTemplate();
//
//                strFilterFormClient = filterFormClientTemplate();
//
//                strNewButton = newTemplate(strClass);
//
//                strTable = ns.html.table.getTable(
//                        getHeaderPageTableFunc(jsonMeta, strClass, strUrlFromParamsWithoutOrder, paramsObject.vf),
//                        getBodyPageTableFunc(jsonMeta, jsonPage, broth.printPrincipal, loadButtons, loadPopups, paramsObject.vf)
//                        );
//
//                $('#broth_content').empty().append(ns.html.tab.getTab([
//                    {'name': 'Consulta', 'content': strGeneralInformation},
//                    {'name': 'Campos visibles', 'content': strVisibleFields},
//                    {'name': 'Filtro de servidor', 'content': strFilterForm},
//                    {'name': 'Filtro de cliente', 'content': strFilterFormClient},
//                    {'name': 'Nuevo registro', 'content': strNewButton}
//                ]) + '<div id="tablePlace">' + strTable + '</div>');
//
//                //---------------------------------------------eventosssss
//                //visible fields
//                $('#selectVisibleFields').empty()
//                ns.html.form.populateSelectBox($('#selectVisibleFields'), ns.util.getIntegerArray(1, jsonMeta.length))
//                $("#selectVisibleFields").val(paramsObject["vf"]);
//                $('#selectVisibleFields').unbind('change');
//                $("#selectVisibleFields").change(function () {
//                    window.location.href = "#/" + strClass + "/list/" + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
//                    return false;
//                });
//
//                //filter
//                ns.html.form.populateSelectBox($('#selectFilter'), ns.arrays.getArrayFromMultiSlicedArray('Name', jsonMeta), ns.arrays.getArrayFromMultiSlicedArray('ShortName', jsonMeta));
//                $('#btnFiltrar').unbind('click');
//                $("#btnFiltrar").click(function (event) {
//                    var filter = $("#selectFilter option:selected").val();
//                    var filteroperator = $("#selectFilteroperator option:selected").val();
//                    var filtervalue = $("#inputFiltervalue").val();
//                    window.location.href = '#/' + strClass + '/list/' + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
//                    return false;
//                });
//
//                //filter client
//                ns.html.form.populateSelectBox($('#selectFilterClient'), ns.arrays.getArrayFromMultiSlicedArray('Name', jsonMeta), ns.arrays.getArrayFromMultiSlicedArray('ShortName', jsonMeta));
//                $('#btnFiltrarClient').unbind('click');
//                $("#btnFiltrarClient").click(function (event) {
//                    var filtervalue = $("#inputFiltervalueClient").val();
//                    //pte  -> reconstruir this.jsonPage con /word/.test(str)
//                    var arrayFiltered = ns.arrays.filterArray(filtervalue, jsonPage);
//                    //window.location.href = '#/' + thisObject.strClase + '/list/' + parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(thisObject.objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
//
//                    var strUrlFromParamsWithoutPage = parameter.getUrlStringFromParamsObject(parameter.getUrlObjectFromParamsWithoutParamArray(paramsObject, ["order", "ordervalue"]));
//
//                    var strTable = ns.html.table.getTable(
//                            getHeaderPageTableFunc(jsonMeta, 'documento', strUrlFromParamsWithoutPage, paramsObject.vf),
//                            getBodyPageTableFunc(jsonMeta, arrayFiltered, broth.printPrincipal, loadButtons, paramsObject.vf)
//                            );
//                    $('#tablePlace').empty().append(strTable);
//
//
//                    return false;
//                });
//                //.........
//                $("[data-toggle='popover']").popover({trigger: "hover"});
//
//            } else {
//                $('#broth_content').html(oDocumentoList.notifyException(jsonData.status, jsonData.message));
//            }
//        })
//        return false;
//
//    };
//    Path.map("#/documento/new/:url").to(function () {
//        newOperation(this.params['url']);
//        return false;
//    });
    Path.map("#/documento/new").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('New'));
        ausiasFLOW.newModule_paramsObject = parameter.defaultizeUrlObjectParameters(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.newModule_frontOperation = 'new';
        ausiasFLOW.newModule_class = 'documento';
        ausiasFLOW.initialize(component_new().new, $('#broth_content'));
        return false;
    });
    Path.map("#/documento/edit/:url").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Edit'));
        ausiasFLOW.editModule_paramsObject = parameter.defaultizeUrlObjectParameters(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.editModule_frontOperation = 'new';
        ausiasFLOW.editModule_class = 'documento';

        ausiasFLOW.initialize(component_edit().edit, $('#broth_content'));

        //editOperation(this.params['url']);
        return false;
    });
    Path.map("#/documento/new/:url").to(function () {
        //$('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Nuevo'));
//        var paramsObject;
//        if (this.url) {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('New'));
        ausiasFLOW.newModule_paramsObject = parameter.defaultizeUrlObjectParameters(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.newModule_frontOperation = 'new';
        ausiasFLOW.newModule_class = 'documento';
//        } else {
//            paramsObject = parameter.defaultizeUrlObjectParameters({});
//        }
        ausiasFLOW.initialize(component_new().new, $('#broth_content'));

        return false;
    });
    Path.map("#/documento/view/:id").to(function () {
        //viewOperation(this.params['url']);
        //ausiasFLOW.initialize(component_view().view, $('#broth_content'), this.params['url'], 'documento');
        //var ausiasFLOW.idview=11;
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('View'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.viewModule_paramsObject = parameter.defaultizeUrlObjectParameters(parameter.getUrlObjectFromUrlString(this.params['url'])); // paramsObject['id'];
        ausiasFLOW.viewModule_frontOperation = 'view';
        ausiasFLOW.viewModule_class = 'documento';
        ausiasFLOW.initialize(component_view().view, $('#broth_content'));
        return false;
    });
    Path.map("#/documento/plist/:url").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Paginated List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.paginatedListModule_paramsObject = parameter.defaultizeUrlObjectParametersForPaginatedLists(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.paginatedListModule_frontOperation = 'plist';
        ausiasFLOW.paginatedListModule_class = 'documento';
        ausiasFLOW.initialize(component_plist().list, $('#broth_content'));
        return false;
    });
    Path.map("#/documento/list").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.listModule_paramsObject = parameter.defaultizeUrlObjectParametersForLists(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.listModule_frontOperation = 'list';
        ausiasFLOW.listModule_class = 'documento';
        ausiasFLOW.initialize(component_list().list, $('#broth_content'));
        return false;
    });
    Path.map("#/documento/list/:url").to(function () {
        //listOperation(this.params['url']);
        //ausiasFLOW.initialize(component_list().list, $('#broth_content'), this.params['url'], 'documento');
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('List'));
        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.listModule_paramsObject = parameter.defaultizeUrlObjectParametersForLists(parameter.getUrlObjectFromUrlString(this.params['url']));
        ausiasFLOW.listModule_frontOperation = 'list';
        ausiasFLOW.listModule_class = 'documento';
        ausiasFLOW.initialize(component_list().list, $('#broth_content'));
        return false;
    });

    //composed operation
    Path.map("#/documento/abc").to(function () {
        //listOperation(this.params['url']);
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Composed operation'));
        $('#broth_content').append('<div id="c1"></div><div id="c2"></div>')
        c = component_table_view();

        //ausiasFLOW.initialize(Block01.list, $('#c1'), this.params['url'], 'documento');
        //ausiasFLOW.frontOperation = 'abc';

        //ns.login.checkAndUpdateUserConnectionState();
        ausiasFLOW.paginatedListModule_paramsObject = parameter.defaultizeUrlObjectParametersForPaginatedLists(parameter.getUrlObjectFromUrlString(this.url));
        ausiasFLOW.paginatedListModule_frontOperation = 'list';
        ausiasFLOW.paginatedListModule_class = 'documento';

        ausiasFLOW.viewModule_paramsObject = parameter.defaultizeUrlObjectParameters(parameter.getUrlObjectFromUrlString(this.url)); // paramsObject['id'];
        ausiasFLOW.viewModule_frontOperation = 'view';
        ausiasFLOW.viewModule_class = 'documento';

        ausiasFLOW.initialize(c.list, $('#c1'));
        ausiasFLOW.initialize(c.view, $('#c2'));

        //ausiasFLOW.initialize(Block01.view, $('#c2'), [1], 'documento'); 
        //falta dato id compartido
        //ausiasFLOW.id = 0;
//        $('.view').click(function (event) {
//            console.log('click');
//            contador++;
//            ausiasFLOW.renderComponent(z.setUrl('contador=' + contador));
//            return false;
//        })
        return false;
    });
}