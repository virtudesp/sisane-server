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


var cuestionarioView = function (strClase) {
    this.clase = strClase;
};
cuestionarioView.prototype = new view('cuestionario');
cuestionarioView.prototype.getClassNameCuestionario = function () {
    return this.getClassName() + "Vista";
};
var oCuestionarioView = new cuestionarioView('cuestionario');


cuestionarioView.prototype.loadButtons = function (id) {
//
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';   
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '" href="jsp#/pregunta/list/page=1&id=1&rpp=10&vf=3&systemfilter=id_cuestionario&systemfilteroperator=equals&systemfiltervalue=' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>'; 
    botonera += '</div></div>';
    return botonera;
};
//cuestionarioView.prototype.loadFormValues = function (valores, campos) {
////                    $('#documento_form #titulo').val(valores['titulo']);
////                    $('#documento_form #contenido').val(valores['contenido']);
////                    $('#documento_form #alta').val(valores['alta']);
////                    $('#documento_form #cambio').val(valores['cambio']);
////                    $('#documento_form #hits').val(valores['hits']);
////                    $('#documento_form #id_usuario').val(valores['id_usuario']);
////                    $('#documento_form #etiquetas').val(valores['etiquetas']);
////                    $('#documento_form #publicado').val(valores['publicado']);
////                    $('#documento_form #portada').val(valores['portada']);
//    this.doFillForm(valores, campos);
//};
//
//cuestionarioView.prototype.getFormValues = function () {
//    var valores = [];
////                    valores['titulo'] = $('#documento_form #titulo');
////                    valores['contenido'] = $('#documento_form #contenido');
////                    valores['alta'] = $('#documento_form #alta');
////                    valores['cambio'] = $('#documento_form #cambio');
////                    valores['hits'] = $('#documento_form #hits');
////                    valores['id_usuario'] = $('#documento_form #id_usuario');
////                    valores['etiquetas'] = $('#documento_form #etiquetas');
////                    valores['publicado'] = $('#documento_form #publicado');
////                    valores['portada'] = $('#documento_form #portada');
//
//    var disabled = $('#cuestionariooForm').find(':input:disabled').removeAttr('disabled');
//    valores = $('#cuestionarioForm').serializeObject();
//    disabled.attr('disabled', 'disabled');
//    return valores;
//};



//documentoView.prototype.okValidation = function (f) {
//    $('#documentoForm').on('success.form.bv', f);
//};