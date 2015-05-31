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
var listOperation = function (strClase, strPlace, objParams) {

    this.strClase = strClase;
    this.strPlace = strPlace;
    this.objParams = objParams;

    this.jsonMeta = 'error';
    this.jsonPage = 'error';
    this.jsonPages = 'error';
    this.jsonRegisters = 'error';

    this.urlRequest = urlJson + '?ob=' + this.strClase;
    this.objParams = objParams;
};
listOperation.prototype = Object.create(baseOperation.prototype);
listOperation.prototype.constructor = listOperation;
listOperation.prototype.prepareData = function () {

    if (this.objParams.order) {
        orderParams = '&order=' + this.objParams.order + '&ordervalue=' + this.objParams.ordervalue;
    } else {
        orderParams = "";
    }
    if (this.objParams.filter) {
        filterParams = "&filter=" + this.objParams.filter + "&filteroperator=" + this.objParams.filteroperator + "&filtervalue=" + this.objParams.filtervalue;
    } else {
        filterParams = "";
    }
    if (this.objParams.systemfilter) {
        systemfilterParams = "&systemfilter=" + this.objParams.systemfilter + "&systemfilteroperator=" + this.objParams.systemfilteroperator + "&systemfiltervalue=" + this.objParams.systemfiltervalue;
    } else {
        systemfilterParams = "";
    }
    this.gettingData = ns.ajax.callSync(this.urlRequest + '&op=getaggregateviewsome' + '&rpp=' + this.objParams.rpp + '&page=' + this.objParams.page + filterParams + orderParams + systemfilterParams, 'GET', '');
};
listOperation.prototype.pickData = function () {
    this.jsonMeta = this.jsonData.message.data.meta;
    this.jsonPage = this.jsonData.message.data.page.list;
    this.jsonPages = this.jsonData.message.data.pages.data;
    this.jsonRegisters = this.jsonData.message.data.registers.data;
}


listOperation.prototype.postPickData = function () {
    if (parseInt(this.objParams["page"]) > parseInt(this.jsonMeta.length)) {
        this.objParams["page"] = parseInt(this.jsonMeta.length);
    }
    if (this.objParams.vf) {
        if (this.jsonMeta.length < this.objParams["vf"]) {
            this.objParams["vf"] = this.jsonMeta.length;
        }
    }
}

listOperation.prototype.printValue = function (meta, valor) {
    return ns.view.printValue(meta, valor, true);
}
listOperation.prototype.loadButtons = function (rowValues, strClase) {
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + rowValues.id + '"  href="#/' + strClase + '/view/' + rowValues.id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + rowValues.id + '"  href="#/' + strClase + '/edit/' + rowValues.id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + rowValues.id + '"  href="#/' + strClase + '/remove/' + rowValues.id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';

    return botonera;
};








listOperation.prototype.loadPopups = function (meta, rowValues, strClase) {
    var botonera = "";




    botonera += "<p><b>(" + rowValues.id + ') ' + strClase + '</b></p>';
    $.each(meta, function (name, metavalue) {
        if (!metavalue.IsMetaForeignKey && !metavalue.IsObjForeignKey) {

            botonera += '<i>' + metavalue.ShortName + '</i>: ' + ns.strings.printPlainValue(metavalue,rowValues[metavalue.Name],true) + "<br/>"
        }
        if (metavalue.IsObjForeignKey){
            
        }
//        if (typeof value === 'string') {
//            botonera += '<i>' + name + '</i>: ' + ns.strings.escapeHtml(value) + "<br/>";
//        } else {
//            botonera += '<i>' + name + '</i>: ' + value + "<br/>";
//        }
    })

    return botonera;
};
listOperation.prototype.getRegistersInfo = function (regs) {
    return "<p>Mostrando una consulta de " + regs + " registros.</p>";
};
listOperation.prototype.getOrderInfo = function (objParams) {
    if (objParams['order']) {
        strOrder = "<p><small>Contenido ordenado por " + objParams["order"] + " (" + objParams["ordervalue"] + ') <a href="#/' + this.strClase + '/list/' + ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"])) + '" id="linkQuitarOrden">(Quitar orden)</a></small></p>';
    } else {
        strOrder = "<p>Contenido no ordenado</p>";
    }
    ;
    return strOrder;
};
listOperation.prototype.getFilterInfo = function (objParams) {
    if (objParams['filter']) {
        strFilter = "<p><small>Contenido filtrado (" + objParams ['filter'] + " " + objParams['filteroperator'] + " " + objParams['filtervalue'] + ') <a href="#/' + this.strClase + '/list/' + ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"])) + '" id="linkQuitarFiltro">(Quitar filtro)</small></a></p>';
    } else {
        strFilter = "<p>Contenido no filtrado</p>";
    }
    return strFilter;
};
listOperation.prototype.printTemplate = function () {
    thisObject = this;
    info = '<p><div class="row">';
    info += '<div class="col-lg-3 col-md-3 col-sm-12">'
    info += this.getRegistersInfo(this.jsonRegisters);
    info += this.getOrderInfo(this.objParams);
    info += this.getFilterInfo(this.objParams);
    info += '</div>';
    info += '<div class="col-lg-6  col-md-6 col-sm-8 text-center">'
    var strUrlFromParamsWithoutPage = ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(this.objParams, ["page"]));
    var url = '#/' + this.strClase + '/list/' + strUrlFromParamsWithoutPage;
    //info += ns.html.panel.getPanel('panelPaginacion', 'Paginación',ns.html.buttonBars.getPageLinks(url, parseInt(this.objParams["page"]), parseInt(this.jsonPages), 2));
    info += 'Paginación: <br/>' + ns.html.buttonBars.getPageLinks(url, parseInt(this.objParams["page"]), parseInt(this.jsonPages), 2);
    info += '</div>'
    info += '<div class="col-lg-3  col-md-3 col-sm-4 text-center">';
    var strUrlFromParamsWithoutPage = ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(this.objParams, ["rpp"]));
    var url = '#/' + this.strClase + '/list/' + strUrlFromParamsWithoutPage;
    info += 'Registros por página: <br/>' + ns.html.buttonBars.getRppLinks(url, this.objParams['rpp']);
    info += '</div>'
    info += '</div></p>'

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
    strVisibleFields += '</div>'


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


    strNewButton = '<div class="row">';
    strNewButton += '<div class="col-md-12 text-center">';
    strNewButton += '<p>'
    strNewButton += '<br/>'
    strNewButton += '<a class="btn btn-primary" href="jsp#/<%=strNombreMantenimiento%>/new">Crear un nuevo ' + this.strClase + '</a>'
    strNewButton += '</p>'
    strNewButton += '</div>'
    strNewButton += '</div>'


    this.strPlace.append(ns.html.tab.getTab([
        {'name': 'Consulta', 'content': info},
        {'name': 'Campos visibles', 'content': strVisibleFields},
        {'name': 'Filtro de servidor', 'content': strFilterForm},
        {'name': 'Filtro de cliente', 'content': strFilterFormClient},
        {'name': 'Nuevo registro', 'content': strNewButton}
    ]) + '<div id="tablePlace"></div>');





    //visible fields
    $('#selectVisibleFields').empty()
    this.populateSelectVisibleFieldsBox($('#selectVisibleFields'), this.jsonMeta.length);
    $("#selectVisibleFields").val(thisObject.objParams["vf"]);
    $('#selectVisibleFields').unbind('change');
    $("#selectVisibleFields").change(function () {
        window.location.href = "#/" + thisObject.strClase + "/list/" + ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(thisObject.objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
        return false;
    });




    //filter
    ns.html.form.populateSelectBox($('#selectFilter'), ns.arrays.getArrayFromMultiSlicedArray('Name', this.jsonMeta), ns.arrays.getArrayFromMultiSlicedArray('ShortName', this.jsonMeta));
    $('#btnFiltrar').unbind('click');
    $("#btnFiltrar").click(function (event) {
        var filter = $("#selectFilter option:selected").val();
        var filteroperator = $("#selectFilteroperator option:selected").val();
        var filtervalue = $("#inputFiltervalue").val();
        window.location.href = '#/' + thisObject.strClase + '/list/' + ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(thisObject.objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
        return false;
    });

    //filter client
    ns.html.form.populateSelectBox($('#selectFilterClient'), ns.arrays.getArrayFromMultiSlicedArray('Name', this.jsonMeta), ns.arrays.getArrayFromMultiSlicedArray('ShortName', this.jsonMeta));
    $('#btnFiltrarClient').unbind('click');
    $("#btnFiltrarClient").click(function (event) {
        var filtervalue = $("#inputFiltervalueClient").val();
        //pte  -> reconstruir this.jsonPage con /word/.test(str)
        var arrayFiltered = ns.arrays.filterArray(filtervalue, thisObject.jsonPage);
        //window.location.href = '#/' + thisObject.strClase + '/list/' + ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(thisObject.objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;

        var strUrlFromParamsWithoutPage = ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(thisObject.objParams, ["order", "ordervalue"]));

        var strTable = ns.html.table.getTable(
                thisObject.getHeaderPageTable(thisObject.jsonMeta, 'documento', strUrlFromParamsWithoutPage),
                thisObject.getBodyPageTable(thisObject.jsonMeta, arrayFiltered, thisObject.printValue, thisObject.loadButtons)
                );
        $('#tablePlace').empty().append(strTable);


        return false;
    });
    //.........

    var strUrlFromParamsWithoutPage = ns.param.getUrlStringFromParamsObject(ns.param.getUrlObjectFromParamsWithoutParamArray(this.objParams, ["order", "ordervalue"]));

    strTable = ns.html.table.getTable(
            this.getHeaderPageTable(this.jsonMeta, 'documento', strUrlFromParamsWithoutPage),
            this.getBodyPageTable(this.jsonMeta, this.jsonPage, this.printValue, this.loadButtons, this.loadPopups)
            );
    $('#tablePlace').empty().append(strTable);



    $("[data-toggle='popover']").popover({trigger: "hover"});
}
listOperation.prototype.populateSelectVisibleFieldsBox = function (place, numFields) {
    ns.html.form.populateSelectBox(place, ns.util.getIntegerArray(1, numFields));
};
listOperation.prototype.thButtons = function (meta, strClase, UrlFromParamsWithoutOrder) {
    tabla = '<a class="orderAsc" id="' + meta.Name + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
    tabla += '<a class="orderDesc" id="' + meta.Name + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
    return tabla;
}
listOperation.prototype.printForeignValues = function (meta, valor,name) {
    return ns.view.printObjectValue(meta, valor,name);
}
listOperation.prototype.getHeaderPageTable = function (meta, clase, UrlFromParamsWithoutOrder, acciones) {
    thisObject = this;
    acciones = typeof (acciones) != 'undefined' ? acciones : true;
    var numField = 0; //visible field counter
    var tabla = "";
    if (meta !== null) {
        tabla += '<tr>';
        $.each(meta, function (index, metaValue) {
            numField++; //field counter
            if (numField <= thisObject.objParams.vf) {
                if (metaValue) {
                    if (metaValue.IsId) {
                        tabla += '<th class="col-md-1">' + metaValue.UltraShortName;
                        tabla += '<br />';
                        tabla += thisObject.thButtons(metaValue, thisObject.strClase, UrlFromParamsWithoutOrder);
                        tabla += '</th>';
                    } else {
                        if (!metaValue.IsMetaForeignKey) {
                            tabla += '<th>' + metaValue.UltraShortName;
                            tabla += '<br />';
                            tabla += thisObject.thButtons(metaValue, thisObject.strClase, UrlFromParamsWithoutOrder);
                            tabla += '</th>';
                        }
                    }
                }

            }
        });
        if (acciones)
            tabla += '<th class="col-md-2">Acciones </th>';
        tabla += '</tr>';
    }
    return tabla;
}

listOperation.prototype.getBodyPageTable = function (meta, page, print_tdValue_function, tdButtons_function, trPopup_function) {
    var thisObject = this;
    var tabla = "";
    $.each(page, function (index, rowValues) {
        tabla += '<tr>';



        var numField = 0;
        //var id;
        var strClaveAjena;
        $.each(meta, function (index, metaValue) {
            //if ("id" == metaValue.Name) {
            //    id = rowValues[metaValue.Name];
            //}
            numField++;
            if (numField <= thisObject.objParams.vf) {
                //tabla += '<td>' + thisObject.printValue(value, valor, true) + '</td>';
                if (metaValue.IsObjForeignKey) {
                    tabla += '<td data-html="true" data-content="' + trPopup_function(rowValues[metaValue.MyMetaName], rowValues[metaValue.Name], metaValue.ShortName) + '" data-container="body" data-toggle="popover" data-placement="right">' + thisObject.printForeignValues(rowValues[metaValue.MyMetaName], rowValues[metaValue.Name],metaValue.ReferencesTable) + '</td>';

                } else {
                    if ("id" == metaValue.Name) {
                        tabla += '<td data-html="true" data-content="' + trPopup_function(meta, rowValues, thisObject.strClase) + '" data-container="body" data-toggle="popover" data-placement="right" title="">' + ns.strings.printValue(metaValue, rowValues[metaValue.Name], true) + '</td>';
                    } else {
                        if (!metaValue.IsMetaForeignKey) {
                            tabla += '<td>' + ns.strings.printValue(metaValue, rowValues[metaValue.Name], true) + '</td>'; // printValue(valoresRegistro, nombreDeCampo, false) 
                        }
                    }
                }
                //tabla += '<td>' + print_tdValue_function(meta, rowValues[metaValue.Name]) + '</td>';
            }
        });
        tabla += '<td>';
        tabla += tdButtons_function(rowValues, thisObject.strClase);
        tabla += '</td>';
        tabla += '</tr>';
    });
    return tabla;
}

















listOperation.prototype.list = function (place, objParams, callback, oModel, oView) {
    var thisObject = this;
    objParams = ns.param.validateUrlObjectParameters(objParams);
    //get all data from server in one http call and store it in cache
    var oDocumentoModel = oModel;
    var strConPermiso = oDocumentoModel.loadAggregateViewSome(objParams);
    if (strConPermiso) {
        //get html template from server and show it


        if (callback) {
            $(place).empty().append(oView.getSpinner()).html(oView.getEmptyList());
        } else {
            $(place).empty().append(oView.getSpinner()).html(oView.getPanel("Listado de " + oModel.getClassName(), oView.getEmptyList()));
        }







        //visible fields select population, setting & event
        $('#selectVisibleFields').empty()
        oView.populateSelectVisibleFieldsBox($('#selectVisibleFields'), oDocumentoModel.getCachedCountFields());
        $('#selectVisibleFields').unbind('change');
        $("#selectVisibleFields").change(function () {
            window.location.href = "jsp#/" + thisObject.clase + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
            return false;
        });


        //show the table
        var fieldNames = oDocumentoModel.getCachedFieldNames();
        if (fieldNames.length < objParams["vf"]) {
            objParams["vf"] = fieldNames.length;
        }
        if (callback) {
            var maximo = Math.max(oDocumentoModel.getCachedCountFields(), 3);
            $("#selectVisibleFields").val(maximo);
        } else {
            $("#selectVisibleFields").val(objParams["vf"]);
        }
        var prettyFieldNames = oDocumentoModel.getCachedPrettyFieldNames();
        var strUrlFromParamsWithoutOrder = param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]));
        var page = oDocumentoModel.getCachedPage();


        //OJOOOOOOO

        if (parseInt(objParams["page"]) > parseInt(oDocumentoModel.getCachedPages())) {
            objParams["page"] = parseInt(oDocumentoModel.getCachedPages());
        }



        $("#tableHeaders").empty().append(oView.getSpinner()).html(oView.getHeaderPageTable(prettyFieldNames, fieldNames, parseInt(objParams["vf"]), strUrlFromParamsWithoutOrder));
        $("#tableBody").empty().append(oView.getSpinner()).html(function () {
            return oView.getBodyPageTable(page, fieldNames, parseInt(objParams["vf"]), function (id) {
                if (callback) {
                    var botonera = "";
                    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                    botonera += '<a class="btn btn-default selector_button" id="' + id + '"  href="#"><i class="glyphicon glyphicon-ok"></i></a>';
                    botonera += '</div></div>';
                    return botonera;
                } else {
                    return oView.loadButtons(id);
                }
                //mejor pasar documento como parametro y crear un repo global de código personalizado
            });
        });



        //show information about the query
        $("#registers").empty().append(oView.getSpinner()).html(oView.getRegistersInfo(oDocumentoModel.getCachedRegisters()));
        $("#order").empty().append(oView.getSpinner()).html(oView.getOrderInfo(objParams));
        $("#filter").empty().append(oView.getSpinner()).html(oView.getFilterInfo(objParams));


        //filter population & event
        $('#selectFilter').empty().populateSelectBox(util().replaceObjxId(fieldNames), prettyFieldNames);
        $('#btnFiltrar').unbind('click');
        $("#btnFiltrar").click(function (event) {
            filter = $("#selectFilter option:selected").val();
            filteroperator = $("#selectFilteroperator option:selected").val();
            filtervalue = $("#inputFiltervalue").val();
            window.location.href = 'jsp#/' + thisObject.clase + '/list/' + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
            return false;
        });

        if (objParams["systemfilter"]) {
            //$('#newButton').prop("href", 'jsp#/' + thisObject.clase + '/new/' + param().getStrSystemFilters(objParams))
            $('#newButton').prop("href", 'jsp#/' + thisObject.clase + '/new/' + 'systemfilter=' + objParams["systemfilter"] + '&systemfilteroperator=' + objParams["systemfilteroperator"] + '&systemfiltervalue=' + objParams["systemfiltervalue"]);
        }
    } else {
        alert("Lo siento pero no tienes permiso para ejecutar esta operación");
    }


};