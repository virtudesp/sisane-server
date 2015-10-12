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


var preguntaView = function (strClase) {
    this.clase = strClase;
};
preguntaView.prototype = new view('pregunta');
preguntaView.prototype.getClassNamePregunta = function () {
    return this.getClassName() + "Vista";
};
var oPreguntaView = new preguntaView('pregunta');


preguntaView.prototype.getBodyPageTable = function (page, fieldNames, visibleFields, tdbuttons) {
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
                tabla += '<td>';
                if(valor == "descripcion"){
                    tabla += '<a href="jsp#/opcion/list/' + 'systemfilter=id_pregunta&systemfilteroperator=equals&systemfiltervalue=' + value.id + '">' + thisObject.printValue(value, valor, true) + '</a>';
                }else{
                    tabla += thisObject.printValue(value, valor, true);
                }
                tabla += '</td>';
            }
        });
        tabla += '<td>';
        tabla += tdbuttons(id);
        tabla += '</td>';
        tabla += '</tr>';
    });
    return tabla;
};


preguntaView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
preguntaView.prototype.loadFormValues = function (valores, campos) {
//                    $('#pregunta_form #titulo').val(valores['titulo']);
//                    $('#pregunta_form #contenido').val(valores['contenido']);
//                    $('#pregunta_form #alta').val(valores['alta']);
//                    $('#pregunta_form #cambio').val(valores['cambio']);
//                    $('#pregunta_form #hits').val(valores['hits']);
//                    $('#pregunta_form #id_usuario').val(valores['id_usuario']);
//                    $('#pregunta_form #etiquetas').val(valores['etiquetas']);
//                    $('#pregunta_form #publicado').val(valores['publicado']);
//                    $('#pregunta_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

preguntaView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#pregunta_form #titulo');
//                    valores['contenido'] = $('#pregunta_form #contenido');
//                    valores['alta'] = $('#pregunta_form #alta');
//                    valores['cambio'] = $('#pregunta_form #cambio');
//                    valores['hits'] = $('#pregunta_form #hits');
//                    valores['id_usuario'] = $('#pregunta_form #id_usuario');
//                    valores['etiquetas'] = $('#pregunta_form #etiquetas');
//                    valores['publicado'] = $('#pregunta_form #publicado');
//                    valores['portada'] = $('#pregunta_form #portada');

    var disabled = $('#preguntaForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#preguntaForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

preguntaView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#preguntaForm #obj_cuestionario_button').unbind('click');
    $("#preguntaForm #obj_cuestionario_button").click(function () {
        var oControl = oPreguntaControl;  //para probar dejar pregunta
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "pregunta");

        $("#preguntaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#preguntaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oPreguntaModel, oPreguntaView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_cuestionario_id').val(id).change();
            $('#obj_cuestionario_desc').text(decodeURIComponent(oCuestionarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oPreguntaModel, oPreguntaView);
        return false;
    });
    
};

preguntaView.prototype.okValidation = function (f) {
    $('#preguntaForm').on('success.form.bv', f);
};