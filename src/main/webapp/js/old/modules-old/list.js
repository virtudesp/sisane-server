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

    this.urlRequest = broth.getAppUrl() + '?ob=' + this.strClase;
    //  this.objParams = objParams;
};
listOperation.prototype = Object.create(baseOperation.prototype);
listOperation.prototype.constructor = listOperation;
listOperation.prototype.prepareData = function () {
  
    //this.gettingData = ns.ajax.callSync(this.urlRequest + '&op=getaggregateviewsome' + '&rpp=' + objParams.rpp + '&page=' + this.objParams.page + filterParams + orderParams + systemfilterParams, 'GET', '');
};
















listOperation.prototype.printForeignValues = function (meta, valor, name) {
    return ns.view.printObjectValue(meta, valor, name);
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