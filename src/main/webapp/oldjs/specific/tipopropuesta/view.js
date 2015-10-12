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


var tipopropuestaView = function (strClase) {
    this.clase = strClase;
};
tipopropuestaView.prototype = new view('tipopropuesta');
tipopropuestaView.prototype.getClassNameTipopropuesta = function () {
    return this.getClassName() + "Vista";
};
var oTipopropuestaView = new tipopropuestaView('tipopropuesta');


tipopropuestaView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
tipopropuestaView.prototype.loadFormValues = function (valores, campos) {
//                    $('#tipopropuesta_form #titulo').val(valores['titulo']);
//                    $('#tipopropuesta_form #contenido').val(valores['contenido']);
//                    $('#tipopropuesta_form #alta').val(valores['alta']);
//                    $('#tipopropuesta_form #cambio').val(valores['cambio']);
//                    $('#tipopropuesta_form #hits').val(valores['hits']);
//                    $('#tipopropuesta_form #id_usuario').val(valores['id_usuario']);
//                    $('#tipopropuesta_form #etiquetas').val(valores['etiquetas']);
//                    $('#tipopropuesta_form #publicado').val(valores['publicado']);
//                    $('#tipopropuesta_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

tipopropuestaView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#tipopropuesta_form #titulo');
//                    valores['contenido'] = $('#tipopropuesta_form #contenido');
//                    valores['alta'] = $('#tipopropuesta_form #alta');
//                    valores['cambio'] = $('#tipopropuesta_form #cambio');
//                    valores['hits'] = $('#tipopropuesta_form #hits');
//                    valores['id_usuario'] = $('#tipopropuesta_form #id_usuario');
//                    valores['etiquetas'] = $('#tipopropuesta_form #etiquetas');
//                    valores['publicado'] = $('#tipopropuesta_form #publicado');
//                    valores['portada'] = $('#tipopropuesta_form #portada');

    var disabled = $('#tipopropuestaForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#tipopropuestaForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

tipopropuestaView.prototype.doEventsLoading = function () {
    var thisObject = this;
   

   
};

tipopropuestaView.prototype.okValidation = function (f) {
    $('#tipopropuestaForm').on('success.form.bv', f);
};