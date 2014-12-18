/*
 * Copyright (C) July 2014 Rafael Aznar
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



var control = function (strClase) {
    this.clase = strClase;
};
control.prototype.getClassName = function () {
    return this.clase;
};
control.prototype.new = function (place, objParams, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    $(place).append(oView.getPanel("Alta de " + this.clase, oView.getEmptyForm()));
    //id must not be enabled
    $('#id').val('0').attr("disabled", true);
    if (objParams) {
        //soporte de claves ajenas
        var selector = objParams["systemfilter"].replace('id_', 'obj_');
        $('#' + selector + "_id").val(objParams["systemfiltervalue"]).attr("disabled", true);
        $('#' + selector + "_button").attr("disabled", true).hide();
        var oModelo = "o" + objParams["systemfilter"].replace('id_', '').charAt(0).toUpperCase() + objParams["systemfilter"].replace('id_', '').slice(1) + "Model";
        $('#' + selector + '_desc').text(decodeURIComponent(window[oModelo].getMeAsAForeignKey(objParams["systemfiltervalue"])));
        //--
    }
    oView.doEventsLoading();
    $('#submitForm').unbind('click');
    $('#submitForm').click(function () {
        oView.okValidation(function (e) {
            resultado = oModel.setOne({json: JSON.stringify(oView.getFormValues())});
            oView.doResultOperationNotifyToUser(place, resultado["status"], "Se ha creado el registro con id=" + resultado["message"], resultado["message"], true);
            e.preventDefault();
            return false;
        });
    });
};
control.prototype.view = function (place, id, oModel, oView) {
    $(place).empty();
    var oDocumentoModel = oModel;
    oDocumentoModel.loadAggregateViewOne(id);
    $(place).append(oView.getPanel("Detalle de " + this.clase, oView.getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames())));
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/edit/' + id + '">Editar</a>');
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/remove/' + id + '">Borrar</a>');
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/list/' + id + '">Listar</a>');
};
control.prototype.edit = function (place, id, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    $(place).append(oView.getPanel("Edición de " + this.clase, oView.getEmptyForm()));
    var oDocumentoModel = oModel;
    oDocumentoModel.loadAggregateViewOne(id);
    oView.loadFormValues(oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames());
    $('#id').attr("disabled", true);
    oView.doEventsLoading();
    $('#submitForm').unbind('click');
    $('#submitForm').click(function () {
        oView.okValidation(function (e) {
            resultado = oModel.setOne({json: JSON.stringify(oView.getFormValues())});
            oView.doResultOperationNotifyToUser(place, resultado["status"], "Se ha actualizado el registro con id=" + resultado["message"], resultado["message"], true);
            e.preventDefault();
            return false;
        });
    });
};
control.prototype.remove = function (place, id, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    var oDocumentoModel = oModel;
    oDocumentoModel.loadAggregateViewOne(id);
    $(place).append(oView.getPanel("Borrado de " + this.clase, oView.getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames())));
    $(place).append('<div id=\"result\">¿Seguro que desea borrar el registro?</div>');
    $(place).append('<a class="btn btn-danger" id="btnBorrarSi" href="#">Sí, borrar</a>');
    $('#btnBorrarSi').unbind('click');
    $('#btnBorrarSi').click(function (event) {
        resultado = oModel.removeOne(id);
        oView.doResultOperationNotifyToUser(place, resultado["status"], resultado["message"], resultado["message"], false);
        return false;
    });
};
control.prototype.list = function (place, objParams, callback, oModel, oView) {
    var thisObject = this;
    objParams = param().validateUrlObjectParameters(objParams);
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
        //show page links pad
        var strUrlFromParamsWithoutPage = param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["page"]));
        var url = 'jsp#/' + this.clase + '/list/' + strUrlFromParamsWithoutPage;

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
        if (parseInt(objParams["page"]) > parseInt(oDocumentoModel.getCachedPages())) {
            objParams["page"] = parseInt(oDocumentoModel.getCachedPages());
        }
        $("#pagination").empty().append(oView.getSpinner()).html(oView.getPageLinks(url, parseInt(objParams["page"]), parseInt(oDocumentoModel.getCachedPages()), 2));

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
        //regs per page links
        $('#nrpp').empty().append(oView.getRppLinks(objParams));
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
control.prototype.modalListEventsLoading = function (place, objParams, callbackFunction, oModel, oView) {
    var thisObject = this;
    $('.pagination_link').unbind('click');
    $('.pagination_link').click(function (event) {
        //rpp = $( "#rpp option:selected").text();
        objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["page"]);
        objParams["page"] = parseInt($(this).attr('id'));
        thisObject.list(place, objParams, callbackFunction, oModel, oView);
        thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        return false;
    });
    //visible fields select population, setting & event
    $('#selectVisibleFields').unbind('change');
    $("#selectVisibleFields").change(function () {
        objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["vf"]);
        objParams["vf"] = $("#selectVisibleFields option:selected").val();
        thisObject.list(place, objParams, callbackFunction, oModel, oView);
        thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        //window.location.href = "jsp#/" + model('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
        return false;
    });
    $('.rpp_link').unbind('click');
    $('.rpp_link').on('click', function (event) {
        objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["rpp"]);
        objParams["rpp"] = parseInt($(this).attr('id'));
        thisObject.list(place, objParams, callbackFunction, oModel, oView);
        thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        //window.location.href = "jsp#/" + model('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
        return false;
        //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
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
        objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"]);
        objParams["filter"] = $("#selectFilter option:selected").val();
        objParams["filteroperator"] = $("#selectFilteroperator option:selected").val();
        objParams["filtervalue"] = $("#inputFiltervalue").val();
        thisObject.list(place, objParams, callbackFunction, oModel, oView);
        thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        //window.location.href = "jsp#/" + model('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
        return false;
    });

    $('.orderAsc').unbind('click');
    $('.orderAsc').on('click', function (event) {
        objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
        objParams["order"] = $(this).attr('id');
        objParams["ordervalue"] = "asc";
        thisObject.list(place, objParams, callbackFunction, oModel, oView);
        thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        //window.location.href = "jsp#/" + model('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
        return false;
        //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
    });

    $('.orderDesc').unbind('click');
    $('.orderDesc').on('click', function (event) {
        objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
        objParams["order"] = $(this).attr('id');
        objParams["ordervalue"] = "desc";
        thisObject.list(place, objParams, callbackFunction, oModel, oView);
        thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        //window.location.href = "jsp#/" + model('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
        return false;
        //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
    });
    $('#linkQuitarOrden').unbind('click');
    $('#linkQuitarOrden').click(function () {
        objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
        thisObject.list(place, objParams, callbackFunction, oModel, oView);
        thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        return false;
    });
    $('#linkQuitarFiltro').unbind('click');
    $('#linkQuitarFiltro').click(function () {
        objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"]);
        thisObject.list(place, objParams, callbackFunction, oModel, oView);
        thisObject.modalListEventsLoading(place, objParams, callbackFunction, oModel, oView);
        return false;
    });
};
