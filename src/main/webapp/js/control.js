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


var control = function(clase) {

    function doSendData() {

//        var disabled = $('#documentoForm').find(':input:disabled').removeAttr('disabled');
//        var jsonObj = [];
//        jsonObj = $('#documentoForm').serializeObject();
//        disabled.attr('disabled', 'disabled');
        //json is sent encoded. be careful of the dates. Dates must be decoded at server side before fill the bean
        //jsonfile = {json: htmlEncode(JSON.stringify(jsonObj))};        
        cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" + "<h3 id=\"myModalLabel\">Respuesta del servidor</h3>";
        pie = "<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button>";
        resultado = objeto(clase).saveOne({json: JSON.stringify(viewSpecific(clase).getFormValues())});
        if (resultado["status"] = "200") {
            mensaje = 'valores actualizados correctamente para el registro con id=' + resultado["message"];
            util().loadForm('#modal01', cabecera, "Código: " + resultado["status"] + "<br />" + mensaje + "<br />", pie, true);
            $('#modal01').on('hidden.bs.modal', function() {
                window.location.href = "jsp#/" + objeto(clase).getName() + "/view/" + resultado["message"];
            })
            //control_documento().view($('#modal01 .modal-body'), parseInt(resultado["message"]));
        } else {
            mensaje = 'el servidor ha retornado el mensaje de error=' + resultado["message"];
            util().loadForm('#modal01', cabecera, "Código: " + resultado["status"] + "<br />" + mensaje + "<br />", pie, true);
        }
        $('#modal01').css({
            'right': '40px',
            'left': '40px',
            'width': 'auto',
            'margin': '0',
            'display': 'block'
        });
    }
    return {
        new : function(place) {
            $(place).empty();
            $(place).append(vista(clase).getPanel("Alta de " + objeto(clase).getName(), vista(clase).getEmptyForm()));
            //id must not be enabled
            $('#id').val('0').attr("disabled", true);
            viewSpecific(clase).doEventsLoading();
            $('#submitForm').unbind('click');
            $('#submitForm').click(function() {
                viewSpecific(clase).okValidation(function(e) {
                    doSendData();
                    e.preventDefault();
                    return false;
                });
//                $('#documentoForm').on('success.form.bv', function(e) {
//                    doSendData();
//                    e.preventDefault();
//                    return false;
//                });
            });
        },
        view: function(place, id) {
            $(place).empty();
            var oDocumentoModel = objeto(clase);
            oDocumentoModel.loadAggregateViewOne(id);
            $(place).append(vista(clase).getPanel("Detalle de " + objeto(clase).getName(), vista(clase).getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames())));
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objeto(clase).getName() + '/edit/' + id + '">Editar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objeto(clase).getName() + '/remove/' + id + '">Borrar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objeto(clase).getName() + '/list/' + id + '">Listar</a>');
        },
        edit: function(place, id) {
            $(place).empty();
            $(place).append(vista(clase).getPanel("Edición de " + objeto(clase).getName(), vista(clase).getEmptyForm()));
            var oDocumentoModel = objeto(clase);
            oDocumentoModel.loadAggregateViewOne(id);
            vista(clase).doFillForm(oDocumentoModel.getCachedFieldNames(), oDocumentoModel.getCachedOne());
            $('#id').attr("disabled", true);
            viewSpecific(clase).doEventsLoading();
            $('#submitForm').unbind('click');
            $('#submitForm').click(function() {
                viewSpecific(clase).okValidation(function(e) {
                    doSendData();
                    e.preventDefault();
                    return false;
                });
//                $('#documentoForm').on('success.form.bv', function(e) {
//                    doSendData();
//                    e.preventDefault();
//                    return false;
//                });
            });
        },
        remove: function(place, id) {
            $(place).empty();
            var oDocumentoModel = objeto(clase);
            oDocumentoModel.loadAggregateViewOne(id);
            $(place).append(vista(clase).getPanel("Borrado de " + objeto(clase).getName(), vista(clase).getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames())));
            $(place).append('<div id=\"result\">¿Seguro que desea borrar el registro?</div>');
            $(place).append('<a class="btn btn-danger" id="btnBorrarSi" href="#">Sí, borrar</a>');

            $('#btnBorrarSi').unbind('click');
            $('#btnBorrarSi').click(function(event) {
                //alert('borrar el ' + id);
                resultado = objeto(clase).removeOne(id);
                cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" + "<h3 id=\"myModalLabel\">Respuesta del servidor</h3>";
                pie = "<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button>";
                if (resultado["status"] = "200") {
                    mensaje = 'Ha sido borrado el registro con id=' + resultado["message"];
                    $(place).append(vista(clase).getEmptyModal());
                    util().loadForm('#modal01', cabecera, "Código: " + resultado["status"] + "<br />" + mensaje + "<br />", pie, true);
                } else {
                    mensaje = 'El registro no ha sido borrado. El servidor ha retornado el mensaje de error=' + resultado["message"];
                    $(place).append(vista(clase).getEmptyModal());
                    util().loadForm('#modal01', cabecera, "Código: " + resultado["status"] + "<br />" + mensaje + "<br />", pie, true);
                }
                $('#modal01').css({
                    'right': '20px',
                    'left': '20px',
                    'width': 'auto',
                    'margin': '0',
                    'display': 'block'
                });

                $('#modal01').on('hidden.bs.modal', function() {
                    $(place).empty();
                })
                return false;
            });

        },
        list: function(place, objParams, callback) {
            objParams = param().validateUrlObjectParameters(objParams);
            //get all data from server in one http call and store it in cache
            var oDocumentoModel = objeto(clase);
            oDocumentoModel.loadAggregateViewSome(objParams);
            //get html template from server and show it
            $(place).empty().append(vista(clase).getPanel("Listado de " + objeto(clase).getName(), vista(clase).getEmptyVList()));
            //show page links pad
            var strUrlFromParamsWithoutPage = param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["page"]));
            var url = 'jsp#/' + objeto(clase).getName() + '/list/' + strUrlFromParamsWithoutPage;
            $("#pagination").empty().append(vista(clase).getLoading()).html(vista(clase).getPageLinks(url, parseInt(objParams["page"]), parseInt(oDocumentoModel.getCachedPages()), 2));
            //visible fields select population, setting & event
            $('#selectVisibleFields').empty().populateSelectBox(getIntegerArray(1, oDocumentoModel.getCachedCountFields()));
            $("#selectVisibleFields").val(objParams["vf"]);
            $('#selectVisibleFields').unbind('change');
            $("#selectVisibleFields").change(function() {
                window.location.href = "jsp#/" + objeto(clase).getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
            });
            //show the table
            var fieldNames = oDocumentoModel.getCachedFieldNames();
            var prettyFieldNames = oDocumentoModel.getCachedPrettyFieldNames();
            var strUrlFromParamsWithoutOrder = param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]));
            var page = oDocumentoModel.getCachedPage();
            $("#tableHeaders").empty().append(vista(clase).getLoading()).html(vista(clase).getHeaderPageTable(prettyFieldNames, fieldNames, parseInt(objParams["vf"]), strUrlFromParamsWithoutOrder));
            $("#tableBody").empty().append(vista(clase).getLoading()).html(function() {
                return vista(clase).getBodyPageTable(page, fieldNames, parseInt(objParams["vf"]), function(id) {
                    if (callback) {
                        var botonera = "";
                        botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                        botonera += '<a class="btn btn-default selector_button" id="' + id + '"  href="#"><i class="glyphicon glyphicon-ok"></i></a>';
                        botonera += '</div></div>';
                        return botonera;
                    } else {
                        return viewSpecific(clase).loadButtons(id);
                    }
                    //mejor pasar documento como parametro y crear un repo global de código personalizado
                });
            });
            //show information about the query
            $("#registers").empty().append(vista(clase).getLoading()).html(vista(clase).getRegistersInfo(oDocumentoModel.getCachedRegisters()));
            $("#order").empty().append(vista(clase).getLoading()).html(vista(clase).getOrderInfo(objParams));
            $("#filter").empty().append(vista(clase).getLoading()).html(vista(clase).getFilterInfo(objParams));
            //regs per page links
            $('#nrpp').empty().append(vista(clase).getRppLinks(objParams));
            //filter population & event
            $('#selectFilter').empty().populateSelectBox(fieldNames, prettyFieldNames);
            $('#btnFiltrar').unbind('click');
            $("#btnFiltrar").click(function(event) {
                filter = $("#selectFilter option:selected").val();
                filteroperator = $("#selectFilteroperator option:selected").val();
                filtervalue = $("#inputFiltervalue").val();
                window.location.href = 'jsp#/' + objeto(clase).getName() + '/list/' + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
                return false;
            });
        },
        modalListEventsLoading: function(place, objParams, callbackFunction) {
            var thisObject = this;
            $('.pagination_link').unbind('click');
            $('.pagination_link').click(function(event) {
                //rpp = $( "#rpp option:selected").text();
                objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["page"]);
                objParams["page"] = parseInt($(this).attr('id'));
                thisObject.list(place, objParams, callbackFunction);
                thisObject.modalListEventsLoading(place, objParams, callbackFunction);
                return false;
            });
            //visible fields select population, setting & event
            $('#selectVisibleFields').unbind('change');
            $("#selectVisibleFields").change(function() {
                objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["vf"]);
                objParams["vf"] = $("#selectVisibleFields option:selected").val();
                thisObject.list(place, objParams, callbackFunction);
                thisObject.modalListEventsLoading(place, objParams, callbackFunction);
                //window.location.href = "jsp#/" + objeto('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
            });
            $('.rpp_link').unbind('click');
            $('.rpp_link').on('click', function(event) {
                objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["rpp"]);
                objParams["rpp"] = parseInt($(this).attr('id'));
                thisObject.list(place, objParams, callbackFunction);
                thisObject.modalListEventsLoading(place, objParams, callbackFunction);
                //window.location.href = "jsp#/" + objeto('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });
            //list events
            if (callbackFunction) {
                $('.btn.btn-default.selector_button').unbind('click');
                $('.btn.btn-default.selector_button').click(function(event) {
                    callbackFunction(parseInt($(this).attr('id')))
                });
            } else {
//                $('.btn.btn-default.action01').unbind('click');
//                $('.btn.btn-default.action01').click(function() {
//                    var oDocumentoModel = objeto('documento');
//                    oDocumentoModel.loadAggregateViewOne($(this).attr('id'));
//                    var content = vista('documento').getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames());
//                    loadModalView('#modal01', $(this).attr('id'), objeto('documento').getName(), content);
//                    return false;
//                });
//                $('.btn.btn-default.action02').unbind('click');
//                $('.btn.btn-default.action02').click(function() {
//                    //edit
//                    return false;
//                });
//
//                $('.btn.btn-default.action03').unbind('click');
//                $('.btn.btn-default.action03').click(function() {
//                    //delete
//                    return false;
//                });

            }

            $('#btnFiltrar').unbind('click');
            $("#btnFiltrar").click(function(event) {
//                filter = $("#selectFilter option:selected").val();
//                filteroperator = $("#selectFilteroperator option:selected").val();
//                filtervalue = $("#inputFiltervalue").val();
//                window.location.href = 'jsp#/' + objeto('documento').getName() + '/list/' + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
//                return false;
                objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"]);
                objParams["filter"] = $("#selectFilter option:selected").val();
                objParams["filteroperator"] = $("#selectFilteroperator option:selected").val();
                objParams["filtervalue"] = $("#inputFiltervalue").val();
                thisObject.list(place, objParams, callbackFunction);
                thisObject.modalListEventsLoading(place, objParams, callbackFunction);
                //window.location.href = "jsp#/" + objeto('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
            });

            $('.orderAsc').unbind('click');
            $('.orderAsc').on('click', function(event) {
                objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
                objParams["order"] = $(this).attr('id');
                objParams["ordervalue"] = "asc";
                thisObject.list(place, objParams, callbackFunction);
                thisObject.modalListEventsLoading(place, objParams, callbackFunction);
                //window.location.href = "jsp#/" + objeto('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });

            $('.orderDesc').unbind('click');
            $('.orderDesc').on('click', function(event) {
                objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
                objParams["order"] = $(this).attr('id');
                objParams["ordervalue"] = "desc";
                thisObject.list(place, objParams, callbackFunction);
                thisObject.modalListEventsLoading(place, objParams, callbackFunction);
                //window.location.href = "jsp#/" + objeto('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });
            $('#linkQuitarOrden').unbind('click');
            $('#linkQuitarOrden').click(function() {
                objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
                thisObject.list(place, objParams, callbackFunction);
                thisObject.modalListEventsLoading(place, objParams, callbackFunction);
                return false;
            });
            $('#linkQuitarFiltro').unbind('click');
            $('#linkQuitarFiltro').click(function() {
                objParams = param().getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"]);
                thisObject.list(place, objParams, callbackFunction);
                thisObject.modalListEventsLoading(place, objParams, callbackFunction);
                return false;
            });
        }
    };
};
