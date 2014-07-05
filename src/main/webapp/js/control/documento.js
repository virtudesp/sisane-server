/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var control_documento_list = function(documentoView) {
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
        $(prefijo_div + place).empty().append((documentoView.getObjectTable(id))
                + '<button class="btn btn-primary" id="limpiar">Limpiar</button>');
        $(prefijo_div + '#limpiar').click(function() {
            $(prefijo_div + place).empty();
        });
    }

    function loadDivViewInPageContent(place, id) {
        $(place).empty().append("<h1>Vista de " + documentoView.getName() + "</h1>");
        $(place).append((documentoView.getObjectTable(id)));
        $(place).append('<a class="btn btn-primary" href="jsp#/documento/edit/' + id + '">Editar</a>');
        $(place).append('<a class="btn btn-primary" href="jsp#/usuario/remove/"' + id + '">Borrar</a>');
        $(place).append('<a class="btn btn-primary" href="jsp#/usuario/list/"' + id + '">Volver</a>');
    }

    function loadDivEditInPageContent() {
        $(place).empty().append("<h1>Edición de " + documentoView.getName() + "</h1>");
        $(place).append((documentoView.getEmptyForm()));
        $(place).append('<a class="btn btn-primary" href="jsp#/documento/edit/' + id + '">Guardar</a>');
        $(place).append('<a class="btn btn-primary" href="jsp#/usuario/list/"' + id + '">Volver</a>');
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
            $(prefijo_div + '#id').attr("disabled", true);
        }
        else {
            $(prefijo_div + '#id').val('0').attr("disabled", true);
        }
//            //when editing load the foreighn keys
        cargaDescripcionClaveAjenaEnFormulario(prefijo_div + '#id_usuario', prefijo_div + '#id_usuario_desc', 'usuario', documentoView.getObject().getPath());
        cargaDescripcionClaveAjenaEnFormulario(prefijo_div + '#id_tipodocumento', prefijo_div + '#id_tipodocumento_desc', 'tipodocumento', documentoView.getObject().getPath());
//        } else {

        //$(prefijo_div + '#titulo').focus();
//        }

        //foreign key actions in form

        $(prefijo_div + '#id_usuario_button').unbind('click');
        $(prefijo_div + '#id_usuario_button').click(function() {
            cargaModalBuscarClaveAjena('usuario', '#modal02', control_usuario_list, callbackSearchUsuario, documentoView.getObject().getPath());
            function callbackSearchUsuario(id) {
                $(prefijo_div + '#modal02').modal('hide');
                $(prefijo_div + '#modal02').data('modal', null);
                $(prefijo_div + '#id_usuario').val($(this).attr('id'));

                cargaDescripcionClaveAjenaEnFormulario('#id_usuario', '#id_usuario_desc', 'usuario', documentoView.getObject().getPath());
                return false;
            }
            return false;
        });

        //tipodocumento

        $(prefijo_div + '#id_tipodocumento_button').unbind('click');
        $(prefijo_div + '#id_tipodocumento_button').click(function() {
            cargaModalBuscarClaveAjena('tipodocumento', '#modal02', control_tipodocumento_list, callbackSearchTipodocumento, documentoView.getObject().getPath());
            function callbackSearchTipodocumento(id) {
                $(prefijo_div + '#modal02').modal('hide');
                $(prefijo_div + '#modal02').data('modal', null);
                $(prefijo_div + '#id_tipodocumento').val($(this).attr('id'));
                cargaDescripcionClaveAjenaEnFormulario('#id_tipodocumento', '#id_tipodocumento_desc', 'tipodocumento', documentoView.getObject().getPath());
                return false;
            }
            return false;
        });

        //preview parser of the content

        $(prefijo_div + '#contenido_button').unbind('click');
        $(prefijo_div + '#contenido_button').click(function() {
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

        $(prefijo_div + '#submitForm').unbind('click');
        $(prefijo_div + '#submitForm').click(function() {
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
        $(prefijo_div + '#btnBorrarSi').unbind('click');
        $(prefijo_div + '#btnBorrarSi').click(function() {
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

    $(prefijo_div + '#modal01').unbind('hidden');
    $(prefijo_div + '#modal01').on('hidden', function() {

        rpp = $(prefijo_div + "#rpp option:selected").text();
        thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
    });

    return {
        viewRegister: function(id) {
            loadDivViewInPageContent('#content', id);
        },
        editRegister: function(id) {
            loadDivEditInPageContent('#content', id);
        },
        inicia: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue) {

            var thisObject = this;

            //controlar que no estemos en una página fuera de órbita

            if (parseInt(pag) > parseInt(documentoView.getObject().getPages(rpp, filter, filteroperator, filtervalue))) {
                pag = documentoView.getObject().getPages(rpp, filter, filteroperator, filtervalue);
            }

            //muestra la botonera de páginas

            $(prefijo_div + "#pagination").empty().append(documentoView.getLoading()).html(documentoView.getPageLinks(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));

            //muestra el listado principal

            if (callback) {
                $(prefijo_div + "#datos").empty().append(documentoView.getLoading()).html(documentoView.getPageTable(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, cargaBotoneraBuscando()));
            } else {
                $(prefijo_div + "#datos").empty().append(documentoView.getLoading()).html(documentoView.getPageTable(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, cargaBotoneraMantenimiento()));
            }

            //muestra la frase con el número de registros de la consulta

            $(prefijo_div + "#registers").empty().append(documentoView.getLoading()).html(documentoView.getRegistersInfo(filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));
            //$(prefijo_div + "#registers").empty().append(documentoView.getLoading()).html('<a href="jsp#/documento/view/1">Ver documento 1</a>');

            //muestra la frase de estado de la ordenación de la tabla

            $(prefijo_div + "#order").empty().append(documentoView.getLoading()).html(documentoView.getOrderInfo(order, ordervalue));

            //muestra la frase de estado del filtro de la tabla aplicado

            $(prefijo_div + "#filter").empty().append(documentoView.getLoading()).html(documentoView.getFilterInfo(filter, filteroperator, filtervalue));

            //asignación eventos de la botonera de cada línea del listado principal

            if (callback) {
                $(prefijo_div + '.btn.btn-default.action01').unbind('click');
                $(prefijo_div + '.btn.btn-default.action01').click(callback);
            } else {
                $(prefijo_div + '.btn.btn-default.action01').unbind('click');
                $(prefijo_div + '.btn.btn-default.action01').click(function() {
                    loadDivView('#datos2', $(this).attr('id'));
                });

                $(prefijo_div + '.btn.btn-default.action02').unbind('click');
                $(prefijo_div + '.btn.btn-default.action02').click(function() {
                    loadModalView('#modal01', $(this).attr('id'));
                });

                $(prefijo_div + '.btn.btn-default.action03').unbind('click');
                $(prefijo_div + '.btn.btn-default.action03').click(function() {
                    loadModalForm('#modal01', $(this).attr('id'), "edit");
                });

                $(prefijo_div + '.btn.btn-default.action04').unbind('click');
                $(prefijo_div + '.btn.btn-default.action04').click(function() {
                    removeConfirmationModalForm('#modal01', $(this).attr('id'));
                });

            }

            $(prefijo_div + '#rpp1').empty().append(documentoView.getRppLinks(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));

            //asignación de evento del enlace para quitar el orden en el listado principal

            $(prefijo_div + '#linkQuitarOrden').unbind('click');
            $(prefijo_div + '#linkQuitarOrden').click(function() {
                thisObject.inicia(pag, null, null, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });

            //asignación de evento del enlace para quitar el filtro en el listado principal

            $(prefijo_div + '#linkQuitarFiltro').unbind('click');
            $(prefijo_div + '#linkQuitarFiltro').click(function() {
                thisObject.inicia(pag, order, ordervalue, rpp, null, null, null, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });

            //asignación de eventos de la ordenación por columnas del listado principal

            $.each(documentoView.getObject().getFieldNames(), function(index, valor) {
                $(prefijo_div + '.orderAsc').unbind('click');
                $(prefijo_div + '.orderAsc' + index).click(function() {
                    rpp = $(prefijo_div + "#rpp option:selected").text();
                    thisObject.inicia(pag, valor, "asc", rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
                });
                $(prefijo_div + '.orderDesc').unbind('click');
                $(prefijo_div + '.orderDesc' + index).click(function() {
                    rpp = $(prefijo_div + "#rpp option:selected").text();
                    thisObject.inicia(pag, valor, "desc", rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
                });

            });

            //asignación del evento de click para cambiar de página en la botonera de paginación

//            $(prefijo_div + '.pagination_link').unbind('click');
//            $(prefijo_div + '.pagination_link').click(function(event) {
//                var id = $(this).attr('id');
//                rpp = $(prefijo_div + "#rpp option:selected").text();
//                thisObject.inicia(id, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
//                return false;
//
//            });

            //boton de crear un nuevo elemento
            if (callback) {
                $(prefijo_div + '#crear').css("display", "none");
            } else {
                $(prefijo_div + '#crear').unbind('click');
                $(prefijo_div + '#crear').click(function() {
                    loadModalForm(prefijo_div + '#modal01', $(this).attr('id'));
                });
            }




            //asignación del evento de filtrado al boton

            $(prefijo_div + '#btnFiltrar').unbind('click');
            $(prefijo_div + "#btnFiltrar").click(function(event) {
                filter = $(prefijo_div + "#selectFilter option:selected").val();
                filteroperator = $(prefijo_div + "#selectFilteroperator option:selected").val();
                filtervalue = $(prefijo_div + "#inputFiltervalue").val();

                window.location.href = "jsp#/documento/list/" + documentoView.getUrlFromParamsWithoutFilter(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) + "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;

                //thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
                return false;
            });

            //asigación de evento de refresco de la tabla cuando volvemos de una operación en ventana modal

            $(prefijo_div + '#modal01').unbind('hidden.bs.modal');
            $(prefijo_div + '#modal01').on('hidden.bs.modal', function() {
                rpp = $(prefijo_div + "#rpp option:selected").text();
                thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);

            });

            //asignación del evento de cambio del numero de regs por página

            $(prefijo_div + '#rpp').unbind('change');
            $(prefijo_div + '#rpp').on('change', function() {
                rpp = $(prefijo_div + "#rpp option:selected").text();
                thisObject.inicia(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue);
            });
        }
    };
};
