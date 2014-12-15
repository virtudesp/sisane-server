/* 
 * Copyright (C) 2014 raznara
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


var documentobonitoView = function (strClase) {
    this.clase = strClase;
};
documentobonitoView.prototype = new view('documentobonito');
documentobonitoView.prototype.getClassNameDocumentobonito = function () {
    return this.getClassName() + "Vista";
};
var oDocumentobonitoView = new documentobonitoView('documentobonito');


documentobonitoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
documentobonitoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#documentobonito_form #titulo').val(valores['titulo']);
//                    $('#documentobonito_form #contenido').val(valores['contenido']);
//                    $('#documentobonito_form #alta').val(valores['alta']);
//                    $('#documentobonito_form #cambio').val(valores['cambio']);
//                    $('#documentobonito_form #hits').val(valores['hits']);
//                    $('#documentobonito_form #id_usuario').val(valores['id_usuario']);
//                    $('#documentobonito_form #etiquetas').val(valores['etiquetas']);
//                    $('#documentobonito_form #publicado').val(valores['publicado']);
//                    $('#documentobonito_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

documentobonitoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#documentobonito_form #titulo');
//                    valores['contenido'] = $('#documentobonito_form #contenido');
//                    valores['alta'] = $('#documentobonito_form #alta');
//                    valores['cambio'] = $('#documentobonito_form #cambio');
//                    valores['hits'] = $('#documentobonito_form #hits');
//                    valores['id_usuario'] = $('#documentobonito_form #id_usuario');
//                    valores['etiquetas'] = $('#documentobonito_form #etiquetas');
//                    valores['publicado'] = $('#documentobonito_form #publicado');
//                    valores['portada'] = $('#documentobonito_form #portada');

    var disabled = $('#documentobonitoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#documentobonitoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

documentobonitoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#documentobonitoForm #obj_usuario_button').unbind('click');
    $("#documentobonitoForm #obj_usuario_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar documentobonito
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documentobonito");

        $("#documentobonitoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#documentobonitoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#documentobonitoForm #obj_tipodocumentobonito_button').unbind('click');
    $("#documentobonitoForm #obj_tipodocumentobonito_button").click(function () {
        var oControl = oDocumentobonitoControl;

        $("#documentobonitoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de documentobonito'), "", thisObject.getFormFooter(), true);

        $('#documentobonitoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipodocumentoModel, oTipodocumentoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipodocumento_id').val(id).change();
            $('#obj_tipodocumento_desc').text(decodeURIComponent(oTipodocumentoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oTipodocumentoModel, oTipodocumentoView);
        return false;
    });
    $('#contenido_button').unbind('click');
    $('#contenido_button').click(function () {
        //cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
        cabecera = thisObject.getFormHeader('Edición de contenidos');
        //pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';                        
        pie = '<a class="btn btn-primary" href="http://creoleparser.googlecode.com/svn/trunk/creoleparser/test_pages/CheatSheetPlus.html">Sintaxis</a>';
        pie += thisObject.getFormFooter();
        contenido = '<div class="row"><div class="col-md-6">';
        contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
        contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
        contenido += '</div>';

        $('#documentobonitoForm').append(thisObject.getEmptyModal());

        util().loadForm('#modal01', cabecera, contenido, pie, true);
        var texto = $('#contenido').val();
        $('#contenidomodal').val(texto);
        util().creoleParse(texto, $('#textoparseado'));
        $('#contenido').val($('#contenidomodal').val());
        $('#contenidomodal').keyup(function () {
            util().creoleParse($('#contenidomodal').val(), $('#textoparseado'));
            $('#contenido').val($('#contenidomodal').val());
        });
        return false;
    });
};

documentobonitoView.prototype.okValidation = function (f) {
    $('#documentobonitoForm').on('success.form.bv', f);
};



/*List nuevo --------------------!!*/

documentobonitoView.prototype.getBodyPageTable = function (page, fieldNames, visibleFields, tdbuttons) {
    var thisObject = this;
    var tabla = "";
    $.each(page, function (index, value) {
        tabla += '<div id="continente">';
        var numField = 0;
        var id;
        var strClaveAjena;
        $.each(fieldNames, function (index, valor) {
            if ("id" == valor) {
                id = value[valor];
            }
            ;
            numField++;
            if (numField <= 4) {
                tabla += '<div id="contenido' + numField + '">' + thisObject.printValue(value, valor, true) + '</div>';
            }
        });
//        tabla += '<td>';
//        tabla += tdbuttons(id);
//        tabla += '</td>';
        tabla += '</div>';
    });
    return tabla;

};

documentobonitoView.prototype.getEmptyCuadros = function () {
    $.when(ajax().ajaxCallSync(path + '/jsp?ob=' + this.clase + '&op=cuadros&mode=1', 'GET', '')).done(function (data) {
        form = data;
    });
    return form;
};

documentobonitoView.prototype.printValue = function (value, valor) {
    var thisObject = this;
    var strResult = "";
    if (/obj_/.test(valor)) {
        if (value[valor].id > 0) {
            strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + util().getForeign(value[valor]) + '</a>';
        } else {
            strResult = '???';
        }
    } else {
        switch (value[valor]) {
            case true:
                strResult = '<i class="glyphicon glyphicon-ok"></i>';
                break;
            case false:
                strResult = '<i class="glyphicon glyphicon-remove"></i>';
                break;
            default:
                strResult = decodeURIComponent(value[valor]);
                
        }
        ;
    }
    ;
    return strResult;
};



documentobonitoView.prototype.getHeaderPageTable = function (prettyFieldNames, fieldNames, visibleFields, UrlFromParamsWithoutOrder) {
    var strNombreClase = this.clase;
    var numField = 0; //visible field counter
    var tabla = "";
    if (prettyFieldNames !== null) {
        tabla += '<tr>';
        $.each(prettyFieldNames, function (index, value) {
            numField++; //field counter
            if (numField <= visibleFields) {
//                        if (value === "acciones") {
//                            tabla += '<th class="col-md-2">' + value;
//                            tabla += '</th>';
//                        } else {
                if (fieldNames[numField - 1] === "id") {
                    tabla += '<th class="col-md-1">' + value;
                } else {
                    tabla += '<th>' + value;
                }
                ;
                if (fieldNames[numField - 1].substr(0, 4) == "obj_") {
                    fieldName = fieldNames[numField - 1].substring(4);
                    fieldName = "id_" + fieldName;
                } else {
                    fieldName = fieldNames[numField - 1];
                }
                ;
                tabla += '<br />';
                tabla += '<a class="orderAsc" id="' + fieldName + '" href="jsp#/' + strNombreClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + fieldName + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
                tabla += '<a class="orderDesc" id="' + fieldName + '" href="jsp#/' + strNombreClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + fieldName + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
                tabla += '</th>';
            }
        });
        tabla += '<th class="col-md-2">acciones</th>';
        tabla += '</tr>';
    }
    ;
    return null;
};

