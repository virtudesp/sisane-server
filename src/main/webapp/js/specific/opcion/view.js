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


var opcionView = function (strClase) {
    this.clase = strClase;
};
opcionView.prototype = new view('opcion');
opcionView.prototype.getClassNameOpcion = function () {
    return this.getClassName() + "Vista";
};
var oOpcionView = new opcionView('opcion');


opcionView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    //botonera += 
    botonera += '</div></div>';
    return botonera;

}
opcionView.prototype.loadFormValues = function (valores, campos) {
//                    $('#opcion_form #titulo').val(valores['titulo']);
//                    $('#opcion_form #contenido').val(valores['contenido']);
//                    $('#opcion_form #alta').val(valores['alta']);
//                    $('#opcion_form #cambio').val(valores['cambio']);
//                    $('#opcion_form #hits').val(valores['hits']);
//                    $('#opcion_form #id_usuario').val(valores['id_usuario']);
//                    $('#opcion_form #etiquetas').val(valores['etiquetas']);
//                    $('#opcion_form #publicado').val(valores['publicado']);
//                    $('#opcion_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

opcionView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#opcion_form #titulo');
//                    valores['contenido'] = $('#opcion_form #contenido');
//                    valores['alta'] = $('#opcion_form #alta');
//                    valores['cambio'] = $('#opcion_form #cambio');
//                    valores['hits'] = $('#opcion_form #hits');
//                    valores['id_usuario'] = $('#opcion_form #id_usuario');
//                    valores['etiquetas'] = $('#opcion_form #etiquetas');
//                    valores['publicado'] = $('#opcion_form #publicado');
//                    valores['portada'] = $('#opcion_form #portada');

    var disabled = $('#opcionForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#opcionForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

opcionView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#opcionForm #obj_pregunta_button').unbind('click');
    $("#opcionForm #obj_pregunta_button").click(function () {
        var oControl = oPreguntaControl;  //para probar dejar opcion
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "opcion");

        
        //$("#opcionForm").append(thisObject.getEmptyModal());
        
        
        
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de pregunta'), "", thisObject.getFormFooter(), true);

        $('#opcionForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oPreguntaModel, oPreguntaView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_pregunta_id').val(id).change();
            $('#obj_pregunta_desc').text(decodeURIComponent(oPreguntaModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oPreguntaModel, oPreguntaView);
        return false;
    });
};

opcionView.prototype.okValidation = function (f) {
    $('#opcionForm').on('success.form.bv', f);
};