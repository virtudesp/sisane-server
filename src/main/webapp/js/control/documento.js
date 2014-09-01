/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var control_documento = function() {
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
        $(place).empty().append((vista('documento').getObjectTable(id))
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
            cabecera += '<h3 id="myModalLabel">Edición de ' + vista('documento').getObject().getName() + "</h3>";
        } else {
            cabecera += '<h3 id="myModalLabel">Alta de ' + vista('documento').getObject().getName() + "</h3>";
        }
        pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
        loadForm(place, cabecera, vista('documento').getEmptyForm(), pie, false);

        //deal with date fields in order datepicker to be shown





        if (action == "edit") {
            vista('documento').doFillForm(id);
            $('#id').attr("disabled", true);
        }
        else {
            $('#id').val('0').attr("disabled", true);
        }
//            //when editing load the foreighn keys
        cargaDescripcionClaveAjenaEnFormulario('#id_usuario', '#id_usuario_desc', 'usuario', vista('documento').getObject().getPath());
        cargaDescripcionClaveAjenaEnFormulario('#id_tipodocumento', '#id_tipodocumento_desc', 'tipodocumento', vista('documento').getObject().getPath());
//        } else {

        //$( '#titulo').focus();
//        }

        //foreign key actions in form

        $('#id_usuario_button').unbind('click');
        $('#id_usuario_button').click(function() {
            cargaModalBuscarClaveAjena('usuario', '#modal02', control_usuario_list, callbackSearchUsuario, vista('documento').getObject().getPath());
            function callbackSearchUsuario(id) {
                $('#modal02').modal('hide');
                $('#modal02').data('modal', null);
                $('#id_usuario').val($(this).attr('id'));

                cargaDescripcionClaveAjenaEnFormulario('#id_usuario', '#id_usuario_desc', 'usuario', vista('documento').getObject().getPath());
                return false;
            }
            return false;
        });

        //tipodocumento

        $('#id_tipodocumento_button').unbind('click');
        $('#id_tipodocumento_button').click(function() {
            cargaModalBuscarClaveAjena('tipodocumento', '#modal02', control_tipodocumento_list, callbackSearchTipodocumento, vista('documento').getObject().getPath());
            function callbackSearchTipodocumento(id) {
                $('#modal02').modal('hide');
                $('#modal02').data('modal', null);
                $('#id_tipodocumento').val($(this).attr('id'));
                cargaDescripcionClaveAjenaEnFormulario('#id_tipodocumento', '#id_tipodocumento_desc', 'tipodocumento', vista('documento').getObject().getPath());
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
                enviarDatosUpdateForm(vista('documento'), prefijo_div);
            }
            return false;
        });
    }

    function removeConfirmationModalForm(place, id) {
        cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" +
                "<h3 id=\"myModalLabel\">Borrado de " + vista('documento').getObject().getName() + "</h3>";
        pie = "<div id=\"result\">¿Seguro que desea borrar el registro?</div>" +
                '<button id="btnBorrarSi" class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Sí</button>' +
                '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">No</button>';
        loadForm(place, cabecera, vista('documento').getObjectTable(id), pie, false);
        $('#btnBorrarSi').unbind('click');
        $('#btnBorrarSi').click(function() {
            resultado = vista('documento').getObject().removeOne(id);
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



    function cargaDescripcionClaveAjenaEnFormulario(lugarID, lugarDesc, objetoClaveAjena, path) {
        if ($(lugarID).val() != "") {
            objInfo = objeto(objetoClaveAjena, path).getOne($(lugarID).val());
            if (objInfo != "" && $(lugarID).val() != 0) {
                props = Object.getOwnPropertyNames(objInfo);
                $(lugarDesc).text(objInfo[props[0]]); //muestra el primer campo
            } else {
                $(lugarDesc).text("???");
            }
        }
    }

    function cargaModalBuscarClaveAjena(strObjetoForeign, strPlace, control, functionCallback, path) {
        var objConsulta = objeto(strObjetoForeign, path);
        var consultaView = vista(objConsulta, path);
        cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Elección</h3>';
        pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
        listado = consultaView.getEmptyList();
        loadForm(strPlace, cabecera, listado, pie, true);
        var consultaControl = control(path);
        consultaControl.inicia(consultaView, 1, null, null, 10, null, null, null, functionCallback, null, null, null);
    }
    ;

    function cargaModalBuscarClaveAjenaNuevo(path, objControl, objParams) {
        //var objConsulta = objeto(strObjetoForeign, path);
        //var consultaView = vista(objConsulta, path);
        cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Elección</h3>';
        pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
        listado = vista('documento').getEmptyList();
        loadForm('#modal01', cabecera, "", pie, true);
        //var consultaControl = control(path);
        //consultaControl.inicia(consultaView, 1, null, null, 10, null, null, null, functionCallback, null, null, null);
        objControl.list(objeto('documento'), vista('documento'), '#modal-body', objParams, null);
    }

    function enviarDatosUpdateForm(view, prefijo_div) {
        var disabled = $(prefijo_div + '#formulario').find(':input:disabled').removeAttr('disabled');
        var jsonObj = [];
        jsonObj = $(prefijo_div + '#formulario').serializeObject();
        disabled.attr('disabled', 'disabled');

        //json is sent encoded. be careful of the dates. Dates must be decoded at server side before fill the bean
        //jsonfile = {json: htmlEncode(JSON.stringify(jsonObj))};
        jsonfile = {json: JSON.stringify(jsonObj)};
        cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" + "<h3 id=\"myModalLabel\">Respuesta del servidor</h3>";
        pie = "<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button>";
        resultado = view.getObject().saveOne(jsonfile);
        if (resultado["status"] = "200") {
            mensaje = 'valores actualizados correctamente para el registro con id=' + resultado["message"];
            loadForm('#modal02', cabecera, "Código: " + resultado["status"] + "<br />" + mensaje + "<br />" + view.getObjectTable(resultado["message"]), pie, true);
        } else {
            mensaje = 'el servidor ha retornado el mensaje de error=' + resultado["message"];
            loadForm('#modal02', cabecera, "Código: " + resultado["status"] + "<br />" + mensaje + "<br />" + view.getObjectTable(resultado["message"]), pie, true);
        }
        $(prefijo_div + '#modal02').css({
            'right': '20px',
            'left': '20px',
            'width': 'auto',
            'margin': '0',
            'display': 'block'
        });
    }

    return {
        new : function(place) {
            $(place).empty();
            $(place).append(vista('documento').getPanel("Alta de " + objeto('documento').getName(), vista('documento').getEmptyForm()));
            var buttonsForm = '<div class="form-group"><div class="col-sm-offset-2 col-sm-10">';
            buttonsForm += '<button type="submit" class="btn btn-primary" id="submitForm" href="jsp#/' + objeto('documento').getName() + '/edit/' + id + '">Guardar</button>';
            buttonsForm += '<button type="reset"  class="btn btn-danger"  id="resetForm" href="jsp#/' + objeto('documento').getName() + '/list/' + id + '">Limpiar</button>';
            buttonsForm += '<a class="btn btn-primary"  id="returnForm" href="jsp#/' + objeto('documento').getName() + '/list/' + '">Volver</a>';
            buttonsForm += '</div></div>';
            $("#" + objeto('documento').getName() + 'Form').append(buttonsForm);
        },
        view: function(place, id) {
            $(place).empty();
            var oDocumentoModel = objeto('documento');

            oDocumentoModel.loadAggregateViewOne(id);
            $(place).append(vista('documento').getPanel("Detalle de " + objeto('documento').getName(), vista('documento').getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), objeto('documento').getCachedFieldNames())));
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objeto('documento').getName() + '/edit/' + id + '">Editar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objeto('documento').getName() + '/remove/' + id + '">Borrar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/' + objeto('documento').getName() + '/list/' + id + '">Volver</a>');
        },
        edit: function(place, id) {
            $(place).empty();
            $(place).append(vista('documento').getPanel("Edición de " + objeto('documento').getName(), vista('documento').getEmptyForm()));
            //documentoForm_load
            var buttonsForm = '<div class="form-group"><div class="col-sm-offset-2 col-sm-10">';
            buttonsForm += '<button type="submit" class="btn btn-primary" id="submitForm" href="jsp#/' + objeto('documento').getName() + '/edit/' + id + '">Guardar</button>';
            buttonsForm += '<button type="reset"  class="btn btn-danger"  id="resetForm" href="jsp#/' + objeto('documento').getName() + '/list/' + id + '">Limpiar</button>';
            buttonsForm += '<a class="btn btn-primary"  id="returnForm" href="jsp#/' + objeto('documento').getName() + '/list/' + '">Volver</a>';
            buttonsForm += '</div></div>';
            $("#" + objeto('documento').getName() + 'Form').append(buttonsForm);
            var oDocumentoModel = objeto('documento');

            oDocumentoModel.loadAggregateViewOne(id);
            vista('documento').doFillForm(oDocumentoModel.getCachedFieldNames(), oDocumentoModel.getCachedOne());
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


                cargaModalBuscarClaveAjenaNuevo(path, objControl, param().defaultizeUrlObjectParameters({}))

//                loadModalForm2("Seleccionando el tipo de documento",);
//                documentoControl.modalList(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null)

                //me he quedado cargando este modal para elegir clave ajena

                //documentoControl.modalList(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
                return false;
            });

        },
        remove: function(place, id) {
            $(place).empty();
            objeto('documento').loadAggregateViewOne(id);
            removeForm = vista('documento').getObjectTable(objeto('documento').getCachedPrettyFieldNames(), objeto('documento').getCachedOne(), objeto('documento').getCachedFieldNames());
            removeForm += '<div id=\"result\">¿Seguro que desea borrar el registro?</div>';
            removeForm += '<button id="btnBorrarSi" class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Sí, borrar</button>';
            removeForm += '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">No</button>';
            $(place).append(vista('documento').getPanel("Borrado de " + objeto('documento').getName(), removeForm));
            //documentoForm_load
//            $(place).append('<a class="btn btn-primary" href="jsp#/' + objeto('documento').getName() + '/edit/' + id + '">Borrar</a>');
//            $(place).append('<a class="btn btn-primary" href="jsp#/' + objeto('documento').getName() + '/list/' + id + '">Volver</a>');
        },
        list: function(place, objParams, callbackLinkParameters) {

            objParams = param().validateUrlObjectParameters(objParams);
            //get all data from server in one http call and store it in cache
            var oDocumentoModel = objeto('documento');
            oDocumentoModel.loadAggregateViewSome(objParams);
            //get html template from server and show it
            $(place).empty().append(vista('documento').getPanel("Listado de " + objeto('documento').getName(), vista('documento').getEmptyList()));
            //show page links pad
            var strUrlFromParamsWithoutPage = param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["page"]));
            var url = 'jsp#/' + objeto('documento').getName() + '/list/' + strUrlFromParamsWithoutPage;
            $("#pagination").empty().append(vista('documento').getLoading()).html(vista('documento').getPageLinks(url, parseInt(objParams["page"]), parseInt(oDocumentoModel.getCachedPages()), 2));
            //visible fields select population, setting & event
            $('#selectVisibleFields').empty().populateSelectBox(getIntegerArray(1, oDocumentoModel.getCachedCountFields()));
            $("#selectVisibleFields").val(objParams["vf"]);
            $('#selectVisibleFields').unbind('change');
            $("#selectVisibleFields").change(function() {
                window.location.href = "jsp#/" + objeto('documento').getName() + "/list/" + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['vf'])) + "&vf=" + $("#selectVisibleFields option:selected").val();
                return false;
            });
            //show the table
            var fieldNames = oDocumentoModel.getCachedFieldNames();
            var prettyFieldNames = oDocumentoModel.getCachedPrettyFieldNames();
            var strUrlFromParamsWithoutOrder = param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"]));
            var page = oDocumentoModel.getCachedPage();
            $("#tableHeaders").empty().append(vista('documento').getLoading()).html(vista('documento').getHeaderPageTable(prettyFieldNames, fieldNames, parseInt(objParams["vf"]), strUrlFromParamsWithoutOrder));
            $("#tableBody").empty().append(vista('documento').getLoading()).html(function() {
                return vista('documento').getBodyPageTable(page, fieldNames, parseInt(objParams["vf"]), function(id) {
                    if (callbackLinkParameters) {
                        var botonera = "";
                        botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                        botonera += '<a class="btn btn-default select" id="' + id + '"  href="jsp#/' + objeto('documento').getName() + '/view/' + callbackLinkParameters + '=' + id + '"><i class="glyphicon glyphicon-ok"></i></a>';
                        botonera += '</div></div>';
                        return botonera;
                    } else {
                        var botonera = "";
                        botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                        botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + objeto('documento').getName() + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
                        botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + objeto('documento').getName() + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
                        botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + objeto('documento').getName() + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
                        botonera += '</div></div>';
                        return botonera;
                    }
                });
            });
            //show information about the query
            $("#registers").empty().append(vista('documento').getLoading()).html(vista('documento').getRegistersInfo(oDocumentoModel.getCachedRegisters()));
            $("#order").empty().append(vista('documento').getLoading()).html(vista('documento').getOrderInfo(objParams));
            $("#filter").empty().append(vista('documento').getLoading()).html(vista('documento').getFilterInfo(objParams));
            //regs per page links
            $('#nrpp').empty().append(vista('documento').getRppLinks(objParams));
            //filter population & event
            $('#selectFilter').empty().populateSelectBox(fieldNames, prettyFieldNames);
            $('#btnFiltrar').unbind('click');
            $("#btnFiltrar").click(function(event) {
                filter = $("#selectFilter option:selected").val();
                filteroperator = $("#selectFilteroperator option:selected").val();
                filtervalue = $("#inputFiltervalue").val();
                window.location.href = 'jsp#/' + objeto('documento').getName() + '/list/' + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ['filter', 'filteroperator', 'filtervalue'])) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
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


            //continuar con los eventos


            //table events
            if (callbackFunction) {
                $('.btn.btn-default.action01').unbind('click');
                $('.btn.btn-default.action01').click(function(event) {
                    callbackFunction(parseInt($(this).attr('id')))
                });
            } else {
//                $('.btn.btn-default.action01').unbind('click');
//                $('.btn.btn-default.action01').click(function() {
//                    loadDivView('#datos2', $(this).attr('id'));
//                    return false;
//                });

                $('.btn.btn-default.action01').unbind('click');
                $('.btn.btn-default.action01').click(function() {
                    var oDocumentoModel = objeto('documento');

                    oDocumentoModel.loadAggregateViewOne($(this).attr('id'));
                    var content = vista('documento').getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames());
                    loadModalView('#modal01', $(this).attr('id'), objeto('documento').getName(), content);
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

            //asignación de evento del enlace para quitar el filtro en el listado principal

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
