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


var tipousuarioView = function (strClase) {
    this.clase = strClase;
};
tipousuarioView.prototype = new view('tipousuario');
tipousuarioView.prototype.getClassNameTipousuario = function () {
    return this.getClassName() + "Vista";
};
var oTipousuarioView = new tipousuarioView('tipousuario');


tipousuarioView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
tipousuarioView.prototype.loadFormValues = function (valores, campos) {
//                    $('#tipousuario_form #titulo').val(valores['titulo']);
//                    $('#tipousuario_form #contenido').val(valores['contenido']);
//                    $('#tipousuario_form #alta').val(valores['alta']);
//                    $('#tipousuario_form #cambio').val(valores['cambio']);
//                    $('#tipousuario_form #hits').val(valores['hits']);
//                    $('#tipousuario_form #id_usuario').val(valores['id_usuario']);
//                    $('#tipousuario_form #etiquetas').val(valores['etiquetas']);
//                    $('#tipousuario_form #publicado').val(valores['publicado']);
//                    $('#tipousuario_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

tipousuarioView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#tipousuario_form #titulo');
//                    valores['contenido'] = $('#tipousuario_form #contenido');
//                    valores['alta'] = $('#tipousuario_form #alta');
//                    valores['cambio'] = $('#tipousuario_form #cambio');
//                    valores['hits'] = $('#tipousuario_form #hits');
//                    valores['id_usuario'] = $('#tipousuario_form #id_usuario');
//                    valores['etiquetas'] = $('#tipousuario_form #etiquetas');
//                    valores['publicado'] = $('#tipousuario_form #publicado');
//                    valores['portada'] = $('#tipousuario_form #portada');

    var disabled = $('#tipousuarioForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#tipousuarioForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

tipousuarioView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#tipousuarioForm #obj_usuario_button').unbind('click');
    $("#tipousuarioForm #obj_usuario_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar tipousuario
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "tipousuario");

        $("#tipousuarioForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#tipousuarioForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#tipousuarioForm #obj_tipotipousuario_button').unbind('click');
    $("#tipousuarioForm #obj_tipotipousuario_button").click(function () {
        var oControl = oTipousuarioControl;

        $("#tipousuarioForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de tipousuario'), "", thisObject.getFormFooter(), true);

        $('#tipousuarioForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipousuarioModel, oTipousuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipotipousuario_id').val(id).change();
            $('#obj_tipotipousuario_desc').text(decodeURIComponent(oTipotipousuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTipousuarioModel, oTipousuarioView);
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

        $('#tipousuarioForm').append(thisObject.getEmptyModal());

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

tipousuarioView.prototype.okValidation = function (f) {
    $('#tipousuarioForm').on('success.form.bv', f);
};