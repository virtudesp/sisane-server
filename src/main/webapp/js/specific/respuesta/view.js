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


var respuestaView = function (strClase) {
    this.clase = strClase;
};
respuestaView.prototype = new view('respuesta');
respuestaView.prototype.getClassNameRespuesta = function () {
    return this.getClassName() + "Vista";
};
var oRespuestaView = new respuestaView('respuesta');


respuestaView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
respuestaView.prototype.loadFormValues = function (valores, campos) {
//                    $('#respuesta_form #titulo').val(valores['titulo']);
//                    $('#respuesta_form #contenido').val(valores['contenido']);
//                    $('#respuesta_form #alta').val(valores['alta']);
//                    $('#respuesta_form #cambio').val(valores['cambio']);
//                    $('#respuesta_form #hits').val(valores['hits']);
//                    $('#respuesta_form #id_usuario').val(valores['id_usuario']);
//                    $('#respuesta_form #etiquetas').val(valores['etiquetas']);
//                    $('#respuesta_form #publicado').val(valores['publicado']);
//                    $('#respuesta_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

respuestaView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#respuesta_form #titulo');
//                    valores['contenido'] = $('#respuesta_form #contenido');
//                    valores['alta'] = $('#respuesta_form #alta');
//                    valores['cambio'] = $('#respuesta_form #cambio');
//                    valores['hits'] = $('#respuesta_form #hits');
//                    valores['id_usuario'] = $('#respuesta_form #id_usuario');
//                    valores['etiquetas'] = $('#respuesta_form #etiquetas');
//                    valores['publicado'] = $('#respuesta_form #publicado');
//                    valores['portada'] = $('#respuesta_form #portada');

    var disabled = $('#respuestaForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#respuestaForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

respuestaView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#respuestaForm #obj_usuario_button').unbind('click');
    $("#respuestaForm #obj_usuario_button").click(function () {
        var oControl = oRespuestaControl;  //para probar dejar respuesta
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "respuesta");

        $("#respuestaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#respuestaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oRespuestaModel, oRespuestaView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oRespuestaModel, oRespuestaView);
        return false;
    });
        var thisObject = this;
    $('#respuestaForm #obj_pregunta_button').unbind('click');
    $("#respuestaForm #obj_pregunta_button").click(function () {
        var oControl = oRespuestaControl;  //para probar dejar respuesta
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "respuesta");

        $("#respuestaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de pregunta'), "", thisObject.getFormFooter(), true);

        $('#respuestaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oRespuestaModel, oRespuestaView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_pregunta_id').val(id).change();
            $('#obj_pregunta_desc').text(decodeURIComponent(oPreguntaModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oRespuestaModel, oRespuestaView);
        return false;
    });
        var thisObject = this;
    $('#respuestaForm #obj_opcion_button').unbind('click');
    $("#respuestaForm #obj_opcion_button").click(function () {
        var oControl = oRespuestaControl;  //para probar dejar respuesta
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "respuesta");

        $("#respuestaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de opción'), "", thisObject.getFormFooter(), true);

        $('#respuestaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oRespuestaModel, oRespuestaView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_opcion_id').val(id).change();
            $('#obj_opcion_desc').text(decodeURIComponent(oOpcionModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oRespuestaModel, oRespuestaView);
        return false;
    });
    
};

respuestaView.prototype.okValidation = function (f) {
    $('#respuestaForm').on('success.form.bv', f);
};