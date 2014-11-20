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


var impuestoView = function (strClase) {
    this.clase = strClase;
};
impuestoView.prototype = new view('impuesto');
impuestoView.prototype.getClassNameImpuesto = function () {
    return this.getClassName() + "Vista";
};
var oImpuestoView = new impuestoView('impuesto');


impuestoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
impuestoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#impuesto_form #titulo').val(valores['titulo']);
//                    $('#impuesto_form #contenido').val(valores['contenido']);
//                    $('#impuesto_form #alta').val(valores['alta']);
//                    $('#impuesto_form #cambio').val(valores['cambio']);
//                    $('#impuesto_form #hits').val(valores['hits']);
//                    $('#impuesto_form #id_usuario').val(valores['id_usuario']);
//                    $('#impuesto_form #etiquetas').val(valores['etiquetas']);
//                    $('#impuesto_form #publicado').val(valores['publicado']);
//                    $('#impuesto_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

impuestoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#impuesto_form #titulo');
//                    valores['contenido'] = $('#impuesto_form #contenido');
//                    valores['alta'] = $('#impuesto_form #alta');
//                    valores['cambio'] = $('#impuesto_form #cambio');
//                    valores['hits'] = $('#impuesto_form #hits');
//                    valores['id_usuario'] = $('#impuesto_form #id_usuario');
//                    valores['etiquetas'] = $('#impuesto_form #etiquetas');
//                    valores['publicado'] = $('#impuesto_form #publicado');
//                    valores['portada'] = $('#impuesto_form #portada');

    var disabled = $('#impuestoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#impuestoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

impuestoView.prototype.doEventsLoading = function () {
    var thisObject = this;
   

   
};

impuestoView.prototype.okValidation = function (f) {
    $('#impuestoForm').on('success.form.bv', f);
};