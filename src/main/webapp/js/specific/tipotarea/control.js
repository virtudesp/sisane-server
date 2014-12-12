/* 
 * Copyright (C) 2014 rafa
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

var tipotareaControl = function (strClase) {
    this.clase = strClase;
};
tipotareaControl.prototype = new control('tipotarea');
tipotareaControl.prototype.getClassNameTipotarea = function () {
    return this.getClassName() + "Control";
};
var oTipotareaControl = new tipotareaControl('tipotarea');

tipotareaControl.prototype.list = function (place, objParams, callback, oModel, oView) {
    var thisObject = this;
    objParams = param().validateUrlObjectParameters(objParams);
    //get all data from server in one http call and store it in cache
    var oDocumentoModel = oModel;
    oDocumentoModel.loadAggregateViewSome(objParams);
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



};

tipotareaControl.prototype.edit = function (place, id, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    $(place).append(oView.getPanel("Edición de " + this.clase, oView.getEmptyForm()));
    var oDocumentoModel = oModel;
    oDocumentoModel.loadAggregateViewOne(id);
    oView.loadFormValues(oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames());
    $('#id').attr("disabled", true);
    nombre = $('#nombre').val();
    nombre = nombre.replace("<a href=\"jsp#/post/list/systemfilter=id_tipotarea&systemfilteroperator=equals&systemfiltervalue=" + $('#id').val() + "\">","").replace("</a>","");
    $('#nombre').val(nombre);
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

tipotareaControl.prototype.new = function (place, objParams, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    $(place).append(oView.getPanel("Alta de " + this.clase, oView.getEmptyForm()));
    //id must not be enabled
    $('#id').val('0').attr("disabled", true);
    //soporte de claves ajenas
    //var selector = objParams["systemfilter"].replace('id_', 'obj_');
    //$('#' + selector + "_id").val(objParams["systemfiltervalue"]).attr("disabled", true);
    //$('#' + selector + "_button").attr("disabled", true).hide();
    //var oModelo = "o" + objParams["systemfilter"].replace('id_', '').charAt(0).toUpperCase() + objParams["systemfilter"].replace('id_', '').slice(1) + "Model";
    //$('#' + selector + '_desc').text(decodeURIComponent(window[oModelo].getMeAsAForeignKey(objParams["systemfiltervalue"])));
    //--
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