/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var control_documento = function(path) {
    //contexto privado

    var prefijo_div = "#documento_list ";

    function cargaBotoneraMantenimiento() {
        var botonera = [
            {"class": "btn btn-default action01", "icon": "glyphicon glyphicon-eye-open", "text": ""},
            {"class": "btn btn-default action02", "icon": "glyphicon glyphicon-zoom-in", "text": ""},
            {"class": "btn btn-default action03", "icon": "glyphicon glyphicon-pencil", "text": ""},
            {"class": "btn btn-default action04", "icon": "glyphicon glyphicon-remove", "text": ""}
        ];
        return botonera;
    }

    function cargaBotoneraBuscando() {
        var botonera = [
            {"class": "btn btn-mini action01", "icon": "glyphicon-ok", "text": ""}
        ];
        return botonera;
    }

    function loadDivView(place, id) {
        $(place).empty().append((objView.getObjectTable(id))
                + '<button class="btn btn-primary" id="limpiar">Limpiar</button>');
        $('#limpiar').click(function() {
            $(place).empty();
        });
    }




    function loadModalForm2(title, content) {

        //set head & foot of modal view. Get empty form to be loaded into the content. Show modal.

        cabecera = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';

        cabecera += '<h3 id="myModalLabel">' + title + "</h3>";

        pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
        loadForm('#modal01', cabecera, content, pie, false);
    }




    function loadModalForm(place, id, action) {

        //set head & foot of modal view. Get empty form to be loaded into the content. Show modal.

        cabecera = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
        if (action == "edit") {
            cabecera += '<h3 id="myModalLabel">Edición de ' + objView.getObject().getName() + "</h3>";
        } else {
            cabecera += '<h3 id="myModalLabel">Alta de ' + objView.getObject().getName() + "</h3>";
        }
        pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
        loadForm(place, cabecera, objView.getEmptyForm(), pie, false);

        //deal with date fields in order datepicker to be shown





        if (action == "edit") {
            objView.doFillForm(id);
            $('#id').attr("disabled", true);
        }
        else {
            $('#id').val('0').attr("disabled", true);
        }
//            //when editing load the foreighn keys
        cargaDescripcionClaveAjenaEnFormulario('#id_usuario', '#id_usuario_desc', 'usuario', objView.getObject().getPath());
        cargaDescripcionClaveAjenaEnFormulario('#id_tipodocumento', '#id_tipodocumento_desc', 'tipodocumento', objView.getObject().getPath());
//        } else {

        //$( '#titulo').focus();
//        }

        //foreign key actions in form

        $('#id_usuario_button').unbind('click');
        $('#id_usuario_button').click(function() {
            cargaModalBuscarClaveAjena('usuario', '#modal02', control_usuario_list, callbackSearchUsuario, objView.getObject().getPath());
            function callbackSearchUsuario(id) {
                $('#modal02').modal('hide');
                $('#modal02').data('modal', null);
                $('#id_usuario').val($(this).attr('id'));

                cargaDescripcionClaveAjenaEnFormulario('#id_usuario', '#id_usuario_desc', 'usuario', objView.getObject().getPath());
                return false;
            }
            return false;
        });

        //tipodocumento

        $('#id_tipodocumento_button').unbind('click');
        $('#id_tipodocumento_button').click(function() {
            cargaModalBuscarClaveAjena('tipodocumento', '#modal02', control_tipodocumento_list, callbackSearchTipodocumento, objView.getObject().getPath());
            function callbackSearchTipodocumento(id) {
                $('#modal02').modal('hide');
                $('#modal02').data('modal', null);
                $('#id_tipodocumento').val($(this).attr('id'));
                cargaDescripcionClaveAjenaEnFormulario('#id_tipodocumento', '#id_tipodocumento_desc', 'tipodocumento', objView.getObject().getPath());
                return false;
            }
            return false;
        });

        //preview parser of the content

        $('#contenido_button').unbind('click');
        $('#contenido_button').click(function() {
            cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
            pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
            contenido = '<div class="row"><div class="col-md-6">';
            contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
            contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
            contenido += '</div>';
            loadForm('#modal02', cabecera, contenido, pie, true);
            $('#contenidomodal').val($('#contenido').val());
            creoleParse($('#contenidomodal').val(), $('#textoparseado'));
            $('#contenido').val($('#contenidomodal').val());
            $('#contenidomodal').keyup(function() {
                creoleParse($('#contenidomodal').val(), $('#textoparseado'));
                $('#contenido').val($('#contenidomodal').val());
            });
        });

        //guardar datos

        $('#submitForm').unbind('click');
        $('#submitForm').click(function() {
            if ($('#formulario').valid()) {
                enviarDatosUpdateForm(objView, prefijo_div);
            }
            return false;
        });
    }

    function removeConfirmationModalForm(place, id) {
        cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" +
                "<h3 id=\"myModalLabel\">Borrado de " + objView.getObject().getName() + "</h3>";
        pie = "<div id=\"result\">¿Seguro que desea borrar el registro?</div>" +
                '<button id="btnBorrarSi" class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Sí</button>' +
                '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">No</button>';
        loadForm(place, cabecera, objView.getObjectTable(id), pie, false);
        $('#btnBorrarSi').unbind('click');
        $('#btnBorrarSi').click(function() {
            resultado = objView.getObject().removeOne(id);
            cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" + "<h3 id=\"myModalLabel\">Respuesta del servidor</h3>";
            pie = "<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button>";
            loadForm('#modal02', cabecera, "Código: " + resultado["status"] + "<br />" + resultado["message"] + "<br />", pie, true);
        });
    }

    function loadModalView(place, id, title, content) {
        cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" +
                "<h3 id=\"myModalLabel\">Detalle de " + title + "</h3>";
        pie = "<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button>";

        loadForm(place, cabecera, content, pie, true);
    }  //asigación de evento de refresco de la tabla cuando volvemos de una operación en ventana modal






    return {
        new : function(objModel, objView, place) {
            $(place).empty();
            $(place).append(objView.getPanel("Alta de " + objModel.getName(), objView.getEmptyForm()));
            var buttonsForm = '<div class="form-group"><div class="col-sm-offset-2 col-sm-10">';
            buttonsForm += '<button type="submit" class="btn btn-primary" id="submitForm" href="jsp#/' + objModel.getName() + '/edit/' + id + '">Guardar</button>';
            buttonsForm += '<button type="reset"  class="btn btn-danger"  id="resetForm" href="jsp#/' + objModel.getName() + '/list/' + id + '">Limpiar</button>';
            buttonsForm += '<a class="btn btn-primary"  id="returnForm" href="jsp#/' + objModel.getName() + '/list/' + '">Volver</a>';
            buttonsForm += '</div></div>';
            $("#" + objModel.getName() + 'Form').append(buttonsForm);
        },
        view: function(objModel, objView, place, id) {
            $(place).empty();
            objModel.loadAggregateViewOne(id);
            $(place).append(objView.getPanel("Detalle de " + objModel.getName(), objView.getObjectTable(objModel.getCachedPrettyFieldNames(), objModel.getCachedOne(), objModel.getCachedFieldNames())));
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objModel.getName() + '/edit/' + id + '">Editar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objModel.getName() + '/remove/' + id + '">Borrar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objModel.getName() + '/list/' + id + '">Volver</a>');
        },
        edit: function(objModel, objView, place, id) {
            $(place).empty();
            $(place).append(objView.getPanel("Edición de " + objModel.getName(), objView.getEmptyForm()));
            //documentoForm_load
            var buttonsForm = '<div class="form-group"><div class="col-sm-offset-2 col-sm-10">';
            buttonsForm += '<button type="submit" class="btn btn-primary" id="submitForm" href="jsp#/' + objModel.getName() + '/edit/' + id + '">Guardar</button>';
            buttonsForm += '<button type="reset"  class="btn btn-danger"  id="resetForm" href="jsp#/' + objModel.getName() + '/list/' + id + '">Limpiar</button>';
            buttonsForm += '<a class="btn btn-primary"  id="returnForm" href="jsp#/' + objModel.getName() + '/list/' + '">Volver</a>';
            buttonsForm += '</div></div>';
            $("#" + objModel.getName() + 'Form').append(buttonsForm);
            objModel.loadAggregateViewOne(id);
            objView.doFillForm(objModel.getCachedFieldNames(), objModel.getCachedOne());
            $('#id').attr("disabled", true);


            $('#documentoForm #obj_tipodocumento_button').unbind('click');
            $("#documentoForm #obj_tipodocumento_button").click(function() {
                var documentoObject = objeto('tipodocumento', path);
                var documentoView = vista('tipodocumento', path);
                var objControl = control_tipodocumento(path);
                //$('#indexContenidoJsp').empty();

                //idea: separar la contrucción del listado y los eventos asociados al mismo. En un momento sólo cargamos la contrucción, para utilzar el enrutamiento de cliente
                //en otro momento cargamos ademas los eventos que eliminan el enrutamiento y permiten operar mediante eventos
                //NO y que el documento js no pinte sino que devuelva un string con el html. NO


                cargaModalBuscarClaveAjenaNuevo(path, objModel, objView, objControl, defaultizeUrlObjectParameters({}))

//                loadModalForm2("Seleccionando el tipo de documento",);
//                documentoControl.modalList(documentoObject, documentoView, $('#indexContenido'), defaultizeUrlObjectParameters({}), null)

                //me he quedado cargando este modal para elegir clave ajena

                //documentoControl.modalList(documentoObject, documentoView, $('#indexContenido'), defaultizeUrlObjectParameters({}), null);
                return false;
            });

        },
        remove: function(objModel, objView, place, id) {
            $(place).empty();
            objModel.loadAggregateViewOne(id);
            removeForm = objView.getObjectTable(objModel.getCachedPrettyFieldNames(), objModel.getCachedOne(), objModel.getCachedFieldNames());
            removeForm += '<div id=\"result\">¿Seguro que desea borrar el registro?</div>';
            removeForm += '<button id="btnBorrarSi" class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Sí, borrar</button>';
            removeForm += '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">No</button>';
            $(place).append(objView.getPanel("Borrado de " + objModel.getName(), removeForm));
            //documentoForm_load
//            $(place).append('<a class="btn btn-primary" href="jsp#/' + objModel.getName() + '/edit/' + id + '">Borrar</a>');
//            $(place).append('<a class="btn btn-primary" href="jsp#/' + objModel.getName() + '/list/' + id + '">Volver</a>');
        },
        list: function(objModel, objView, place, objParams, callbackLinkParameters) {
            var strHtmlResult = "";
            //get all data from server in one http call and store it in cache
            objModel.loadAggregateViewSome(objParams);
            objParams = validateUrlObjectParameters(objParams, objModel);
            //get html template from server and show it
            $(place).empty().append(objView.getPanel("Listado de " + objModel.getName(), objView.getEmptyList()));
            //show page links pad
            var strUrlFromParamsWithoutPage = getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ["page"]));
            var url = 'jsp#/' + objModel.getName() + '/list/' + strUrlFromParamsWithoutPage;
            $("#pagination").empty().append(objView.getLoading()).html(objView.getPageLinks(url, parseInt(objParams["page"]), parseInt(objModel.getCachedPages()), 2));
            //visible fields select population, setting & event
            $('#selectVisibleFields').empty().populateSelectBox(getIntegerArray(1, objModel.getCachedCountFields()));
            $("#selectVisibleFields").val(objParams["vf"]);
            $('#selectVisibleFields').unbind('change');
            $("#selectVisibleFields").change(function() {
                window.location.href = "jsp#/" + objModel.getName() + "/list/" + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
            });
            //show the table
            var fieldNames = objModel.getCachedFieldNames();
            var prettyFieldNames = objModel.getCachedPrettyFieldNames();
            var strUrlFromParamsWithoutOrder = getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]));
            var page = objModel.getCachedPage();
            $("#tableHeaders").empty().append(objView.getLoading()).html(objView.getHeaderPageTable(prettyFieldNames, fieldNames, parseInt(objParams["vf"]), strUrlFromParamsWithoutOrder));
            $("#tableBody").empty().append(objView.getLoading()).html(function() {
                return objView.getBodyPageTable(page, fieldNames, parseInt(objParams["vf"]), function(id) {
                    if (callbackLinkParameters) {
                        var botonera = "";
                        botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                        botonera += '<a class="btn btn-default" id="' + id + '"  href="jsp#/' + objModel.getName() + '/view/' + callbackLinkParameters + '=' + id + '"><i class="glyphicon glyphicon-ok"></i></a>';
                        botonera += '</div></div>';
                        return botonera;
                    } else {
                        var botonera = "";
                        botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                        botonera += '<a class="btn btn-default" id="' + id + '"  href="jsp#/' + objModel.getName() + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
                        botonera += '<a class="btn btn-default" id="' + id + '"  href="jsp#/' + objModel.getName() + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
                        botonera += '<a class="btn btn-default" id="' + id + '"  href="jsp#/' + objModel.getName() + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
                        botonera += '</div></div>';
                        return botonera;
                    }
                });
            });
            //show information about the query
            $("#registers").empty().append(objView.getLoading()).html(objView.getRegistersInfo(objModel.getCachedRegisters()));
            $("#order").empty().append(objView.getLoading()).html(objView.getOrderInfo(objParams));
            $("#filter").empty().append(objView.getLoading()).html(objView.getFilterInfo(objParams));
            //regs per page links
            $('#nrpp').empty().append(objView.getRppLinks(objParams));
            //filter population & event
            $('#selectFilter').empty().populateSelectBox(fieldNames, prettyFieldNames);
            $('#btnFiltrar').unbind('click');
            $("#btnFiltrar").click(function(event) {
                filter = $("#selectFilter option:selected").val();
                filteroperator = $("#selectFilteroperator option:selected").val();
                filtervalue = $("#inputFiltervalue").val();
                window.location.href = 'jsp#/' + objModel.getName() + '/list/' + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
                return false;
            });
        },
        modalListEventsLoading: function(objModel, objView, place, objParams, callbackLinkParameters) {
            var thisObject = this;
            $('.pagination_link').unbind('click');
            $('.pagination_link').click(function(event) {
                //rpp = $( "#rpp option:selected").text();
                objParams = getUrlObjectFromParamsWithoutParamArray(objParams, ["page"]);
                objParams["page"] = parseInt($(this).attr('id'));
                thisObject.list(objModel, objView, place, objParams, callbackLinkParameters);
                thisObject.modalListEventsLoading(objModel, objView, place, objParams, callbackLinkParameters);
                return false;
            });
            //visible fields select population, setting & event
            $('#selectVisibleFields').unbind('change');
            $("#selectVisibleFields").change(function() {
                objParams = getUrlObjectFromParamsWithoutParamArray(objParams, ["vf"]);
                objParams["vf"] = $("#selectVisibleFields option:selected").val();
                thisObject.list(objModel, objView, place, objParams, callbackLinkParameters);
                thisObject.modalListEventsLoading(objModel, objView, place, objParams, callbackLinkParameters);
                //window.location.href = "jsp#/" + objModel.getName() + "/list/" + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
            });
            $('.rpp_link').unbind('click');
            $('.rpp_link').on('click', function(event) {
                objParams = getUrlObjectFromParamsWithoutParamArray(objParams, ["rpp"]);
                objParams["rpp"] = parseInt($(this).attr('id'));
                thisObject.list(objModel, objView, place, objParams, callbackLinkParameters);
                thisObject.modalListEventsLoading(objModel, objView, place, objParams, callbackLinkParameters);
                //window.location.href = "jsp#/" + objModel.getName() + "/list/" + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });


            //continuar con los eventos


            //table events
            if (callbackLinkParameters) {
                $('.btn.btn-default.action01').unbind('click');
                $('.btn.btn-default.action01').click(callback);
            } else {
//                $('.btn.btn-default.action01').unbind('click');
//                $('.btn.btn-default.action01').click(function() {
//                    loadDivView('#datos2', $(this).attr('id'));
//                    return false;
//                });

                $('.btn.btn-default.action01').unbind('click');
                $('.btn.btn-default.action01').click(function() {

                    objModel.loadAggregateViewOne($(this).attr('id'));
                    var content = objView.getObjectTable(objModel.getCachedPrettyFieldNames(), objModel.getCachedOne(), objModel.getCachedFieldNames());
                    loadModalView('#modal01', $(this).attr('id'), objModel.getName(), content);
                    return false;
                });

//                $('.btn.btn-default.action02').unbind('click');
//                $('.btn.btn-default.action02').click(function() {
//                    loadModalForm('#modal01', $(this).attr('id'), "edit");
//                    return false;
//                });
//
//                $('.btn.btn-default.action03').unbind('click');
//                $('.btn.btn-default.action03').click(function() {
//                    removeConfirmationModalForm('#modal01', $(this).attr('id'));
//                    return false;
//                });

            }

            //filter event
            $('#btnFiltrar').unbind('click');
            $("#btnFiltrar").click(function(event) {
//                filter = $("#selectFilter option:selected").val();
//                filteroperator = $("#selectFilteroperator option:selected").val();
//                filtervalue = $("#inputFiltervalue").val();
//                window.location.href = 'jsp#/' + objModel.getName() + '/list/' + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
//                return false;
                objParams = getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"]);
                objParams["filter"] = $("#selectFilter option:selected").val();
                objParams["filteroperator"] = $("#selectFilteroperator option:selected").val();
                objParams["filtervalue"] = $("#inputFiltervalue").val();
                thisObject.list(objModel, objView, place, objParams, callbackLinkParameters);
                thisObject.modalListEventsLoading(objModel, objView, place, objParams, callbackLinkParameters);
                //window.location.href = "jsp#/" + objModel.getName() + "/list/" + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
            });

            $('.orderAsc').unbind('click');
            $('.orderAsc').on('click', function(event) {
                objParams = getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
                objParams["order"] = $(this).attr('id');
                objParams["ordervalue"] = "asc";
                thisObject.list(objModel, objView, place, objParams, callbackLinkParameters);
                thisObject.modalListEventsLoading(objModel, objView, place, objParams, callbackLinkParameters);
                //window.location.href = "jsp#/" + objModel.getName() + "/list/" + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });

            $('.orderDesc').unbind('click');
            $('.orderDesc').on('click', function(event) {
                objParams = getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
                objParams["order"] = $(this).attr('id');
                objParams["ordervalue"] = "desc";
                thisObject.list(objModel, objView, place, objParams, callbackLinkParameters);
                thisObject.modalListEventsLoading(objModel, objView, place, objParams, callbackLinkParameters);
                //window.location.href = "jsp#/" + objModel.getName() + "/list/" + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });

            $('#linkQuitarOrden').unbind('click');
            $('#linkQuitarOrden').click(function() {
                objParams = getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]);
                thisObject.list(objModel, objView, place, objParams, callbackLinkParameters);
                thisObject.modalListEventsLoading(objModel, objView, place, objParams, callbackLinkParameters);                
                return false;
            });

            //asignación de evento del enlace para quitar el filtro en el listado principal

            $('#linkQuitarFiltro').unbind('click');
            $('#linkQuitarFiltro').click(function() {
                objParams = getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"]);
                thisObject.list(objModel, objView, place, objParams, callbackLinkParameters);
                thisObject.modalListEventsLoading(objModel, objView, place, objParams, callbackLinkParameters);                
                return false;
            });
        }
    };
};
