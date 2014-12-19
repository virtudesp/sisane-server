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


var amistadView = function (strClase) {
    this.clase = strClase;
};
amistadView.prototype = new view('amistad');
amistadView.prototype.getClassNameAmistad = function () {
    return this.getClassName() + "Vista";
};
var oAmistadView = new amistadView('amistad');

amistadView.prototype.loadButtons = function (id, id_usuario_1) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    
    if (myuser == id_usuario_1) {
        botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    }
    
    botonera += '</div></div>';
    return botonera;

}
amistadView.prototype.loadFormValues = function (valores, campos) {
//                    $('#amistad_form #titulo').val(valores['titulo']);
//                    $('#amistad_form #contenido').val(valores['contenido']);
//                    $('#amistad_form #alta').val(valores['alta']);
//                    $('#amistad_form #cambio').val(valores['cambio']);
//                    $('#amistad_form #hits').val(valores['hits']);
//                    $('#amistad_form #id_usuario').val(valores['id_usuario']);
//                    $('#amistad_form #etiquetas').val(valores['etiquetas']);
//                    $('#amistad_form #publicado').val(valores['publicado']);
//                    $('#amistad_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

amistadView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#amistad_form #titulo');
//                    valores['contenido'] = $('#amistad_form #contenido');
//                    valores['alta'] = $('#amistad_form #alta');
//                    valores['cambio'] = $('#amistad_form #cambio');
//                    valores['hits'] = $('#amistad_form #hits');
//                    valores['id_usuario'] = $('#amistad_form #id_usuario');
//                    valores['etiquetas'] = $('#amistad_form #etiquetas');
//                    valores['publicado'] = $('#amistad_form #publicado');
//                    valores['portada'] = $('#amistad_form #portada');

    var disabled = $('#amistadForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#amistadForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

amistadView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#amistadForm #obj_usuario_button').unbind('click');
    $("#amistadForm #obj_usuario_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar amistad
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "amistad");

        $("#amistadForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#amistadForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#amistadForm #obj_amistad_button').unbind('click');
    $("#amistadForm #obj_amistad_button").click(function () {
        var oControl = oAmistadControl;

        $("#amistadForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de  de amistad'), "", thisObject.getFormFooter(), true);

        $('#amistadForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oAmistadModel, oAmistadView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_amistad_id').val(id).change();
            $('#obj_amistad_desc').text(decodeURIComponent(oAmistadModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oAmistadModel, oAmistadView);
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

        $('#amistadForm').append(thisObject.getEmptyModal());

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

amistadView.prototype.okValidation = function (f) {
    $('#amistadForm').on('success.form.bv', f);
};


amistadView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#amistadForm #obj_usuario_1_button').unbind('click');
    $("#amistadForm #obj_usuario_1_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#amistadForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#amistadForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_1_id').val(id).change();
            $('#obj_usuario_1_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#amistadForm #obj_usuario_2_button').unbind('click');
    $("#amistadForm #obj_usuario_2_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#amistadForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#amistadForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_2_id').val(id).change();
            $('#obj_usuario_2_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
};

amistadView.prototype.printValue = function (value, valor, recortar) {
    var thisObject = this;
    var strResult = "";
    if (/obj_usuario_/.test(valor)) {
        if (value[valor].id > 0) {
            val = valor.substring(4);
            val = val.substring(0, val.length-2);
            strResult = '<a href="jsp#/' + 'redsocialperfil' + '/list/systemfilter=id_usuario&systemfilteroperator=equals&systemfiltervalue=' + value[valor].id + '&page=1&id=1&rpp=10&vf=4&order=fechacreacion&ordervalue=desc' + '">' + value[valor].login.charAt(0).toUpperCase() + value[valor].login.slice(1)+ '</a>';
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

            };
    };
    return strResult;
};
