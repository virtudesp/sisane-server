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


var entregaView = function (strClase) {
    this.clase = strClase;
};
entregaView.prototype = new view('entrega');
entregaView.prototype.getClassNameEntrega = function () {
    return this.getClassName() + "Vista";
};
var oEntregaView = new entregaView('entrega');


entregaView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
entregaView.prototype.loadFormValues = function (valores, campos) {
//                    $('#entrega_form #titulo').val(valores['titulo']);
//                    $('#entrega_form #contenido').val(valores['contenido']);
//                    $('#entrega_form #alta').val(valores['alta']);
//                    $('#entrega_form #cambio').val(valores['cambio']);
//                    $('#entrega_form #hits').val(valores['hits']);
//                    $('#entrega_form #id_usuario').val(valores['id_usuario']);
//                    $('#entrega_form #etiquetas').val(valores['etiquetas']);
//                    $('#entrega_form #publicado').val(valores['publicado']);
//                    $('#entrega_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

entregaView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#entrega_form #titulo');
//                    valores['contenido'] = $('#entrega_form #contenido');
//                    valores['alta'] = $('#entrega_form #alta');
//                    valores['cambio'] = $('#entrega_form #cambio');
//                    valores['hits'] = $('#entrega_form #hits');
//                    valores['id_usuario'] = $('#entrega_form #id_usuario');
//                    valores['etiquetas'] = $('#entrega_form #etiquetas');
//                    valores['publicado'] = $('#entrega_form #publicado');
//                    valores['portada'] = $('#entrega_form #portada');

    var disabled = $('#entregaForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#entregaForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

entregaView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#entregaForm #obj_documento_button').unbind('click');
    $("#entregaForm #obj_documento_button").click(function () {
        var oControl = oDocumentoControl;  //para probar dejar entrega
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "entrega");

        $("#entregaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de documento'), "", thisObject.getFormFooter(), true);

        $('#entregaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oDocumentoModel, oDocumentoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_documento_id').val(id).change();
            $('#obj_documento_desc').text(decodeURIComponent(oDocumentoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oDocumentoModel, oDocumentoView);
        return false;
    });
    $('#entregaForm #obj_actividad_button').unbind('click');
    $("#entregaForm #obj_actividad_button").click(function () {
        var oControl = oActividadControl;

        $("#entregaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de actividad'), "", thisObject.getFormFooter(), true);

        $('#entregaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oActividadModel, oActividadView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_actividad_id').val(id).change();
            $('#obj_actividad_desc').text(decodeURIComponent(oActividadModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oActividadModel, oActividadView);
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

        $('#entregaForm').append(thisObject.getEmptyModal());

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

entregaView.prototype.okValidation = function (f) {
    $('#entregaForm').on('success.form.bv', f);
};