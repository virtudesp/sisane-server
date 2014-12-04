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


var propuestaView = function (strClase) {
    this.clase = strClase;
};
propuestaView.prototype = new view('propuesta');
propuestaView.prototype.getClassNamePropuesta = function () {
    return this.getClassName() + "Vista";
};
var oPropuestaView = new propuestaView('propuesta');


propuestaView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
propuestaView.prototype.loadFormValues = function (valores, campos) {
//                    $('#propuesta_form #titulo').val(valores['titulo']);
//                    $('#propuesta_form #contenido').val(valores['contenido']);
//                    $('#propuesta_form #alta').val(valores['alta']);
//                    $('#propuesta_form #cambio').val(valores['cambio']);
//                    $('#propuesta_form #hits').val(valores['hits']);
//                    $('#propuesta_form #id_usuario').val(valores['id_usuario']);
//                    $('#propuesta_form #etiquetas').val(valores['etiquetas']);
//                    $('#propuesta_form #publicado').val(valores['publicado']);
//                    $('#propuesta_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

propuestaView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#propuesta_form #titulo');
//                    valores['contenido'] = $('#propuesta_form #contenido');
//                    valores['alta'] = $('#propuesta_form #alta');
//                    valores['cambio'] = $('#propuesta_form #cambio');
//                    valores['hits'] = $('#propuesta_form #hits');
//                    valores['id_usuario'] = $('#propuesta_form #id_usuario');
//                    valores['etiquetas'] = $('#propuesta_form #etiquetas');
//                    valores['publicado'] = $('#propuesta_form #publicado');
//                    valores['portada'] = $('#propuesta_form #portada');

    var disabled = $('#propuestaForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#propuestaForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

propuestaView.prototype.doEventsLoading = function () {
    var thisObject = this;
   

   
};

propuestaView.prototype.okValidation = function (f) {
    $('#propuestaForm').on('success.form.bv', f);
};