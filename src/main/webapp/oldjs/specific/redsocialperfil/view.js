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


var redsocialperfilView = function (strClase) {
    this.clase = strClase;
};
redsocialperfilView.prototype = new view('publicacion');
redsocialperfilView.prototype.getClassNameRedsocialperfil = function () {
    return this.getClassName() + "Vista";
};
var oRedsocialperfilView = new redsocialperfilView('publicacion');


redsocialperfilView.prototype.loadButtons = function (id, id_usuario) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    
    if (myuser == id_usuario || mylevel == 1) {
        botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
        botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    }
    
    botonera += '</div></div>';
    return botonera;

}
redsocialperfilView.prototype.loadFormValues = function (valores, campos) {
//                    $('#publicacion_form #titulo').val(valores['titulo']);
//                    $('#publicacion_form #contenido').val(valores['contenido']);
//                    $('#publicacion_form #alta').val(valores['alta']);
//                    $('#publicacion_form #cambio').val(valores['cambio']);
//                    $('#publicacion_form #hits').val(valores['hits']);
//                    $('#publicacion_form #id_usuario').val(valores['id_usuario']);
//                    $('#publicacion_form #etiquetas').val(valores['etiquetas']);
//                    $('#publicacion_form #publicado').val(valores['publicado']);
//                    $('#publicacion_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

redsocialperfilView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#publicacion_form #titulo');
//                    valores['contenido'] = $('#publicacion_form #contenido');
//                    valores['alta'] = $('#publicacion_form #alta');
//                    valores['cambio'] = $('#publicacion_form #cambio');
//                    valores['hits'] = $('#publicacion_form #hits');
//                    valores['id_usuario'] = $('#publicacion_form #id_usuario');
//                    valores['etiquetas'] = $('#publicacion_form #etiquetas');
//                    valores['publicado'] = $('#publicacion_form #publicado');
//                    valores['portada'] = $('#publicacion_form #portada');

    var disabled = $('#publicacionForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#publicacionForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

redsocialperfilView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#publicacionForm #obj_usuario_button').unbind('click');
    $("#publicacionForm #obj_usuario_button").click(function () {
        var oControl = oPublicacionControl;  //para probar dejar publicacion
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "publicacion");

        $("#publicacionForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#publicacionForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#publicacionForm #obj_tipopublicacion_button').unbind('click');
    $("#publicacionForm #obj_tipopublicacion_button").click(function () {
        var oControl = oPublicacionControl;

        $("#publicacionForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de publicacion'), "", thisObject.getFormFooter(), true);

        $('#publicacionForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oPublicacionModel, oPublicacionView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipopublicacion_id').val(id).change();
            $('#obj_tipopublicacion_desc').text(decodeURIComponent(oTipopublicacionModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oPublicacionModel, oPublicacionView);
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

        $('#publicacionForm').append(thisObject.getEmptyModal());

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

redsocialperfilView.prototype.okValidation = function (f) {
    $('#publicacionForm').on('success.form.bv', f);
};

redsocialperfilView.prototype.printValue = function (value, valor, recortar) {
    var thisObject = this;
    var strResult = "";
    if (/obj_usuario/.test(valor)) {
        if (value[valor].id > 0) {
            val = valor.substring(4);
            strResult = '<a href="jsp#/' + 'redsocialperfil' + '/list/systemfilter=id_usuario&systemfilteroperator=equals&systemfiltervalue=' + value[valor].id + '&page=1&id=1&rpp=10&vf=4&order=fechacreacion&ordervalue=desc' + '">' + value[valor].id + ":" + value[valor].login + '</a>';
        } else {
            strResult = '???';
        }
    } else if (/obj_/.test(valor)) {
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

                if (recortar)
                    if (strResult.length > 50) //don't show too long fields
                        strResult = strResult.substr(0, 20) + " ...";

        }
        ;
    }
    ;
    return strResult;
};

redsocialperfilView.prototype.getObjectTable = function (nombresCamposBonitos, valoresRegistro, nombresCampos) {
    var thisObject = this;
    nombresCamposBonitos.splice(index, 0);
    valoresRegistro.splice(index, 0);

    var tabla = "<table class=\"table table table-bordered table-condensed\">";
    $.each(nombresCampos, function (index, nombreDeCampo) {
        tabla += '<tr><td><strong>' + nombresCamposBonitos[index] + '</strong></td>';
        tabla += '<td>' + thisObject.printValue(valoresRegistro, nombreDeCampo, false) + '</td>';
    });
    tabla += '</table>';
    return tabla;
};

redsocialperfilView.prototype.doResultOperationNotifyToUser = function (place, resultadoStatus, resultadoMessage, id, mostrar, id_usuario_2) {
    var strNombreClase = this.clase;
    if (resultadoStatus == "200") {
        mensaje = "<h3>La operacion se ha ejecutado con éxito</h3>";
    } else {
        mensaje = "<h3>ERROR</h3>";
        resultadoMessage = "Error, el usuario con ID = " + id_usuario_2 + " usuario ya es tu amigo.";
    }
    mensaje += "<h5>Código: " + resultadoStatus + "</h5><h5>" + resultadoMessage + "</h5>";
    $(place).append(this.getEmptyModal());
    util().loadForm('#modal01', this.getFormHeader('Respuesta del servidor'), mensaje, this.getFormFooter(), true);
    $('#modal01').css({
        'right': '20px',
        'left': '20px',
        'width': 'auto',
        'margin': '10px',
        'display': 'block'
    });

    $('#modal01').on('hidden.bs.modal', function () {
        location.reload();
    })
    ;
};

redsocialperfilView.prototype.getBodyPageTable = function (page, fieldNames, visibleFields, tdbuttons) {
    var thisObject = this;
    var tabla = "";
    $.each(page, function (index, value) {
        tabla += '<tr>';
        var numField = 0;
        var id;
        var strClaveAjena;
        $.each(fieldNames, function (index, valor) {
            if ("id" == valor) {
                id = value[valor];
            }
            ;
            numField++;
            if (numField <= visibleFields) {
                tabla += '<td>' + thisObject.printValue(value, valor, true) + '</td>';
            }
        });
        tabla += '<td>';
        tabla += tdbuttons(id);
        id_elemento++;
        tabla += '</td>';
        tabla += '</tr>';
    });
    return tabla;
};