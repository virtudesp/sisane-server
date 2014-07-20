/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var control_documento = function(documentoView) {
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
        $(place).empty().append((documentoView.getObjectTable(id))
                + '<button class="btn btn-primary" id="limpiar">Limpiar</button>');
        $('#limpiar').click(function() {
            $(place).empty();
        });
    }



    function loadModalForm(place, id, action) {

        //set head & foot of modal view. Get empty form to be loaded into the content. Show modal.

        cabecera = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
        if (action == "edit") {
            cabecera += '<h3 id="myModalLabel">Edición de ' + documentoView.getObject().getName() + "</h3>";
        } else {
            cabecera += '<h3 id="myModalLabel">Alta de ' + documentoView.getObject().getName() + "</h3>";
        }
        pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
        loadForm(place, cabecera, documentoView.getEmptyForm(), pie, false);

        //deal with date fields in order datepicker to be shown





        if (action == "edit") {
            documentoView.doFillForm(id);
            $('#id').attr("disabled", true);
        }
        else {
            $('#id').val('0').attr("disabled", true);
        }
//            //when editing load the foreighn keys
        cargaDescripcionClaveAjenaEnFormulario('#id_usuario', '#id_usuario_desc', 'usuario', documentoView.getObject().getPath());
        cargaDescripcionClaveAjenaEnFormulario('#id_tipodocumento', '#id_tipodocumento_desc', 'tipodocumento', documentoView.getObject().getPath());
//        } else {

        //$( '#titulo').focus();
//        }

        //foreign key actions in form

        $('#id_usuario_button').unbind('click');
        $('#id_usuario_button').click(function() {
            cargaModalBuscarClaveAjena('usuario', '#modal02', control_usuario_list, callbackSearchUsuario, documentoView.getObject().getPath());
            function callbackSearchUsuario(id) {
                $('#modal02').modal('hide');
                $('#modal02').data('modal', null);
                $('#id_usuario').val($(this).attr('id'));

                cargaDescripcionClaveAjenaEnFormulario('#id_usuario', '#id_usuario_desc', 'usuario', documentoView.getObject().getPath());
                return false;
            }
            return false;
        });

        //tipodocumento

        $('#id_tipodocumento_button').unbind('click');
        $('#id_tipodocumento_button').click(function() {
            cargaModalBuscarClaveAjena('tipodocumento', '#modal02', control_tipodocumento_list, callbackSearchTipodocumento, documentoView.getObject().getPath());
            function callbackSearchTipodocumento(id) {
                $('#modal02').modal('hide');
                $('#modal02').data('modal', null);
                $('#id_tipodocumento').val($(this).attr('id'));
                cargaDescripcionClaveAjenaEnFormulario('#id_tipodocumento', '#id_tipodocumento_desc', 'tipodocumento', documentoView.getObject().getPath());
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
                enviarDatosUpdateForm(documentoView, prefijo_div);
            }
            return false;
        });
    }

    function removeConfirmationModalForm(place, id) {
        cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" +
                "<h3 id=\"myModalLabel\">Borrado de " + documentoView.getObject().getName() + "</h3>";
        pie = "<div id=\"result\">¿Seguro que desea borrar el registro?</div>" +
                '<button id="btnBorrarSi" class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Sí</button>' +
                '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">No</button>';
        loadForm(place, cabecera, documentoView.getObjectTable(id), pie, false);
        $('#btnBorrarSi').unbind('click');
        $('#btnBorrarSi').click(function() {
            resultado = documentoView.getObject().removeOne(id);
            cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" + "<h3 id=\"myModalLabel\">Respuesta del servidor</h3>";
            pie = "<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button>";
            loadForm('#modal02', cabecera, "Código: " + resultado["status"] + "<br />" + resultado["message"] + "<br />", pie, true);
        });
    }

    function loadModalView(place, id) {
        cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" +
                "<h3 id=\"myModalLabel\">Detalle de " + documentoView.getObject().getName() + "</h3>";
        pie = "<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button>";
        loadForm(place, cabecera, documentoView.getObjectTable(id), pie, true);
    }  //asigación de evento de refresco de la tabla cuando volvemos de una operación en ventana modal



    return {
        new : function(place) {
            //$(place).empty().append("<h1>Alta de " + documentoView.getName() + "</h1>");
            $(place).append(documentoView.getPanel("Alta de documento", documentoView.getEmptyForm()));
            $(place).append('<a class="btn btn-primary" href="jsp#/documento/edit/' + id + '">Guardar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/usuario/list/"' + id + '">Volver</a>');
        },
        view: function(place, id) {
            //$(place).empty().append("<h1>Vista de " + documentoView.getName() + "</h1>");
            $(place).append(documentoView.getPanel("Vista de documento", documentoView.getObjectTable(id)));
            $(place).append('<a class="btn btn-primary" href="jsp#/documento/edit/' + id + '">Editar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/usuario/remove/"' + id + '">Borrar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/usuario/list/"' + id + '">Volver</a>');
        },
        edit: function(place, id) {
            //$(place).empty().append("<h1>Edición de " + documentoView.getName() + "</h1>");
            $(place).append(documentoView.getPanel("Edición de documento", documentoView.getEmptyForm()));

            //documentoForm_load

            $(place).append('<a class="btn btn-primary" href="jsp#/documento/edit/' + id + '">Guardar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/usuario/list/"' + id + '">Volver</a>');
        },
        list: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue) {
            $('#indexContenido').empty().append(documentoView.getPanel("Listado de documento", documentoView.getEmptyList()));
            //muestra la botonera de páginas
            $("#pagination").empty().append(documentoView.getLoading()).html(documentoView.getPageLinks(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));
            //muestra el listado principal
            if (callback) {
                $("#datos").empty().append(documentoView.getLoading()).html(documentoView.getPageTable(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, cargaBotoneraBuscando()));
            } else {
                //$("#datos").empty().append(documentoView.getLoading()).html(documentoView.getPageTable(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, cargaBotoneraMantenimiento()));
                //var visibleFields = 13;
                var fieldNames = documentoView.getObject().getFieldNames();
                var prettyFieldNames = documentoView.getObject().getPrettyFieldNamesAcciones();
                var UrlFromParamsWithoutOrder = documentoView.getUrlFromParamsWithoutOrder(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue);

                $("#tableHeaders").empty().append(documentoView.getLoading()).html(
                        //documentoView.getHeaderPageTable(prettyFieldNames, visibleFields, documentoView.getObject().getName(), UrlFromParamsWithoutOrder)
                                function() {
                                    //var numField = 0; //visible field counter
                                    var tabla = "";
                                    if (prettyFieldNames !== null) {
                                        tabla += '<tr>';
                                        //for(var i=0;i<prettyFieldNames.length;i++){
                                        $.each(prettyFieldNames, function(index, value) {
                                            //numField++; //field counter
                                            //if (numField <= visibleFields) {
                                            if (value === "acciones") {
                                                tabla += '<th class="col-md-2">' + value;
                                                tabla += '</th>';
                                            } else {
                                                if (value === "id") {
                                                    tabla += '<th class="col-md-1">' + value;
                                                } else {
                                                    tabla += '<th>' + value;
                                                }
                                                tabla += '<br />';
                                                tabla += '<a class="orderAsc' + index + '" href="jsp#/documento/list/' + UrlFromParamsWithoutOrder + '&order=' + value + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
                                                tabla += '<a class="orderDesc' + index + '" href="jsp#/documento/list/' + UrlFromParamsWithoutOrder + '&order=' + value + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
                                                tabla += '</th>';
                                            }
                                            //}
                                            //if (numField == visibleFields + 1) {
                                            //    tabla += '<th class="col-md-2">acciones</th>';
                                            //}

                                        });
                                        tabla += '</tr>';
                                    }
                                    return tabla;
                                }
                        );





                        $("#tableBody").empty().append(documentoView.getLoading()).html(function() {
                            page = documentoView.getObject().getPage(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue)['list'];


                            var tabla = "";
                            $.each(page, function(index, value) {
                                tabla += '<tr>';
                                //var numField = 0;
                                var id;
                                var strClaveAjena;
                                $.each(fieldNames, function(index, valor) {
//                                    if ("id" == valor) {
//                                        id = value[valor];
//                                    }
                                    //numField++;
                                    //if (numField <= visibleFields) {
                                    if (/obj_tipodocumento/.test(valor)) {
                                        strClaveAjena = value[valor].id + ": " + value[valor].descripcion;
                                        tabla += '<td>' + strClaveAjena + '</td>';
                                    }
                                    if (/obj_usuario/.test(valor)) {
                                        strClaveAjena = value[valor].id + ": " + value[valor].login;
                                        tabla += '<td>' + strClaveAjena + '</td>';
                                    }                                    
                                    if (!(/obj_/.test(valor))) {
                                        switch (value[valor]) {
                                            case true:
                                                tabla += '<td><i class="glyphicon glyphicon-ok"></i></td>';
                                                break;
                                            case false:
                                                tabla += '<td><i class="glyphicon glyphicon-remove"></i></td>';
                                                break;
                                            default:
                                                var fieldContent = decodeURIComponent(value[valor]);
                                                if (typeof fieldContent == "string") {
                                                    if (value[valor].length > 50) //don't show too long fields
                                                        fieldContent = decodeURIComponent(value[valor]).substr(0, 20) + " ...";
                                                }
                                                tabla += '<td>' + fieldContent + '</td>';
                                        }
                                    }
                                    //}
                                });
                                tabla += '<td><div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                                tabla += '<a class="btn btn-default" href="jsp#/documento/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
                                tabla += '<a class="btn btn-default" href="jsp#/documento/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
                                tabla += '<a class="btn btn-default" href="jsp#/documento/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
                                tabla += '</div></div></td>';
                                tabla += '</tr>';
                            });
                            return tabla;












                            //return documentoView.getBodyPageTable(page, fieldNames, visibleFields, documentoView.getObject().getName(), documentoView.getObject().getPath());
                        });
                    }
            //muestra la frase con el número de registros de la consulta
            $("#registers").empty().append(documentoView.getLoading()).html(documentoView.getRegistersInfo(filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));
            //muestra la frase de estado de la ordenación de la tabla
            $("#order").empty().append(documentoView.getLoading()).html(documentoView.getOrderInfo(order, ordervalue));
            //muestra la frase de estado del filtro de la tabla aplicado
            $("#filter").empty().append(documentoView.getLoading()).html(documentoView.getFilterInfo(filter, filteroperator, filtervalue));
            $('#rpp1').empty().append(documentoView.getRppLinks(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));
            //asignación del evento de filtrado al boton
            $('#btnFiltrar').unbind('click');
            $("#btnFiltrar").click(function(event) {
                filter = $("#selectFilter option:selected").val();
                filteroperator = $("#selectFilteroperator option:selected").val();
                filtervalue = $("#inputFiltervalue").val();

                window.location.href = "jsp#/documento/list/" + documentoView.getUrlFromParamsWithoutFilter(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;

                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
                return false;
            });
            $('#btnDisplayedFields').unbind('click');
            $('#btnDisplayedFields').click(function() {
                $(modalDisplayedFields).modal({
                    keyboard: false
                })
                $('#btnDefaultDisplayedFields').unbind('click');
                $('#btnDefaultDisplayedFields').click(function() {

                });
                $('#btnCloseModalDisplayedFields').unbind('click');
                $('#btnCloseModalDisplayedFields').click(function() {

                });



            });

        },
        modalList: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue) {

            var thisObject = this;

            //controlar que no estemos en una página fuera de órbita

            if (parseInt(pag) > parseInt(documentoView.getObject().getPages(rpp, filter, filteroperator, filtervalue))) {
                pag = documentoView.getObject().getPages(rpp, filter, filteroperator, filtervalue);
            }



            //muestra la botonera de páginas

            $("#pagination").empty().append(documentoView.getLoading()).html(documentoView.getPageLinks(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));

            //muestra el listado principal

            if (callback) {
                $("#datos").empty().append(documentoView.getLoading()).html(documentoView.getPageTable(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, cargaBotoneraBuscando()));
            } else {
                $("#datos").empty().append(documentoView.getLoading()).html(documentoView.getPageTable(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, cargaBotoneraMantenimiento()));
            }

            //muestra la frase con el número de registros de la consulta

            $("#registers").empty().append(documentoView.getLoading()).html(documentoView.getRegistersInfo(filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));
            //$( "#registers").empty().append(documentoView.getLoading()).html('<a href="jsp#/documento/view/1">Ver documento 1</a>');

            //muestra la frase de estado de la ordenación de la tabla

            $("#order").empty().append(documentoView.getLoading()).html(documentoView.getOrderInfo(order, ordervalue));

            //muestra la frase de estado del filtro de la tabla aplicado

            $("#filter").empty().append(documentoView.getLoading()).html(documentoView.getFilterInfo(filter, filteroperator, filtervalue));

            //asignación eventos de la botonera de cada línea del listado principal

            if (callback) {
                $('.btn.btn-default.action01').unbind('click');
                $('.btn.btn-default.action01').click(callback);
            } else {
                $('.btn.btn-default.action01').unbind('click');
                $('.btn.btn-default.action01').click(function() {
                    loadDivView('#datos2', $(this).attr('id'));
                });

                $('.btn.btn-default.action02').unbind('click');
                $('.btn.btn-default.action02').click(function() {
                    loadModalView('#modal01', $(this).attr('id'));
                });

                $('.btn.btn-default.action03').unbind('click');
                $('.btn.btn-default.action03').click(function() {
                    loadModalForm('#modal01', $(this).attr('id'), "edit");
                });

                $('.btn.btn-default.action04').unbind('click');
                $('.btn.btn-default.action04').click(function() {
                    removeConfirmationModalForm('#modal01', $(this).attr('id'));
                });

            }

            $('#rpp1').empty().append(documentoView.getRppLinks(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));

            //asignación de evento del enlace para quitar el orden en el listado principal

            $('#linkQuitarOrden').unbind('click');
            $('#linkQuitarOrden').click(function() {
                thisObject.inicia(pag, null, null, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });

            //asignación de evento del enlace para quitar el filtro en el listado principal

            $('#linkQuitarFiltro').unbind('click');
            $('#linkQuitarFiltro').click(function() {
                thisObject.inicia(pag, order, ordervalue, rpp, null, null, null, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });

            //asignación de eventos de la ordenación por columnas del listado principal

            $.each(documentoView.getObject().getFieldNames(), function(index, valor) {
                $('.orderAsc').unbind('click');
                $('.orderAsc' + index).click(function() {
                    rpp = $("#rpp option:selected").text();
                    thisObject.inicia(pag, valor, "asc", rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
                });
                $('.orderDesc').unbind('click');
                $('.orderDesc' + index).click(function() {
                    rpp = $("#rpp option:selected").text();
                    thisObject.inicia(pag, valor, "desc", rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
                });

            });

            //asignación del evento de click para cambiar de página en la botonera de paginación

//            $( '.pagination_link').unbind('click');
//            $( '.pagination_link').click(function(event) {
//                var id = $(this).attr('id');
//                rpp = $( "#rpp option:selected").text();
//                thisObject.inicia(id, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
//                return false;
//
//            });

            //boton de crear un nuevo elemento
            if (callback) {
                $('#crear').css("display", "none");
            } else {
                $('#crear').unbind('click');
                $('#crear').click(function() {
                    loadModalForm('#modal01', $(this).attr('id'));
                });
            }




            //asignación del evento de filtrado al boton

            $('#btnFiltrar').unbind('click');
            $("#btnFiltrar").click(function(event) {
                filter = $("#selectFilter option:selected").val();
                filteroperator = $("#selectFilteroperator option:selected").val();
                filtervalue = $("#inputFiltervalue").val();

                window.location.href = "jsp#/documento/list/" + documentoView.getUrlFromParamsWithoutFilter(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;

                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
                return false;
            });

            //asigación de evento de refresco de la tabla cuando volvemos de una operación en ventana modal

            $('#modal01').unbind('hidden.bs.modal');
            $('#modal01').on('hidden.bs.modal', function() {
                rpp = $("#rpp option:selected").text();
                thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);

            });

            //asignación del evento de cambio del numero de regs por página

            $('#rpp').unbind('change');
            $('#rpp').on('change', function() {
                rpp = $("#rpp option:selected").text();
                thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });
        }
    };
};
