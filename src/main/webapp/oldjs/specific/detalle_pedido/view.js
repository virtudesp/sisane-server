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


var detalle_pedidoView = function (strClase) {
    this.clase = strClase;
};
detalle_pedidoView.prototype = new view('detalle_pedido');
detalle_pedidoView.prototype.getClassNameDetalle_pedido = function () {
    return this.getClassName() + "Vista";
};
var oDetalle_pedidoView = new detalle_pedidoView('detalle_pedido');


detalle_pedidoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
detalle_pedidoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#detalle_pedido_form #titulo').val(valores['titulo']);
//                    $('#detalle_pedido_form #contenido').val(valores['contenido']);
//                    $('#detalle_pedido_form #alta').val(valores['alta']);
//                    $('#detalle_pedido_form #cambio').val(valores['cambio']);
//                    $('#detalle_pedido_form #hits').val(valores['hits']);
//                    $('#detalle_pedido_form #id_usuario').val(valores['id_usuario']);
//                    $('#detalle_pedido_form #etiquetas').val(valores['etiquetas']);
//                    $('#detalle_pedido_form #publicado').val(valores['publicado']);
//                    $('#detalle_pedido_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

detalle_pedidoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#detalle_pedido_form #titulo');
//                    valores['contenido'] = $('#detalle_pedido_form #contenido');
//                    valores['alta'] = $('#detalle_pedido_form #alta');
//                    valores['cambio'] = $('#detalle_pedido_form #cambio');
//                    valores['hits'] = $('#detalle_pedido_form #hits');
//                    valores['id_usuario'] = $('#detalle_pedido_form #id_usuario');
//                    valores['etiquetas'] = $('#detalle_pedido_form #etiquetas');
//                    valores['publicado'] = $('#detalle_pedido_form #publicado');
//                    valores['portada'] = $('#detalle_pedido_form #portada');

    var disabled = $('#detalle_pedidoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#detalle_pedidoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

detalle_pedidoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#detalle_pedidoForm #obj_usuario_button').unbind('click');
    $("#detalle_pedidoForm #obj_usuario_button").click(function () {
        var oControl = oDetalle_pedidoControl;  //para probar dejar detalle_pedido
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "detalle_pedido");

        $("#detalle_pedidoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#detalle_pedidoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oDetalle_pedidoModel, oDetalle_pedidoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oDetalle_pedidoModel, oDetalle_pedidoView);
        return false;
    });
    $('#detalle_pedidoForm #obj_tipodetalle_pedido_button').unbind('click');
    $("#detalle_pedidoForm #obj_tipodetalle_pedido_button").click(function () {
        var oControl = oDetalle_pedidoControl;

        $("#detalle_pedidoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de detalle_pedido'), "", thisObject.getFormFooter(), true);

        $('#detalle_pedidoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oDetalle_pedidoModel, oDetalle_pedidoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipodetalle_pedido_id').val(id).change();
            $('#obj_tipodetalle_pedido_desc').text(decodeURIComponent(oTipodetalle_pedidoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oDetalle_pedidoModel, oDetalle_pedidoView);
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

        $('#detalle_pedidoForm').append(thisObject.getEmptyModal());

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

detalle_pedidoView.prototype.okValidation = function (f) {
    $('#detalle_pedidoForm').on('success.form.bv', f);
};