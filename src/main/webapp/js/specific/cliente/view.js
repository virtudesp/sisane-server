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


var clienteView = function (strClase) {
    this.clase = strClase;
};
clienteView.prototype = new view('cliente');
clienteView.prototype.getClassNameCliente = function () {
    return this.getClassName() + "Vista";
};
var oClienteView = new clienteView('cliente');


clienteView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
clienteView.prototype.loadFormValues = function (valores, campos) {
//                    $('#cliente_form #titulo').val(valores['titulo']);
//                    $('#cliente_form #contenido').val(valores['contenido']);
//                    $('#cliente_form #alta').val(valores['alta']);
//                    $('#cliente_form #cambio').val(valores['cambio']);
//                    $('#cliente_form #hits').val(valores['hits']);
//                    $('#cliente_form #id_usuario').val(valores['id_usuario']);
//                    $('#cliente_form #etiquetas').val(valores['etiquetas']);
//                    $('#cliente_form #publicado').val(valores['publicado']);
//                    $('#cliente_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

clienteView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#cliente_form #titulo');
//                    valores['contenido'] = $('#cliente_form #contenido');
//                    valores['alta'] = $('#cliente_form #alta');
//                    valores['cambio'] = $('#cliente_form #cambio');
//                    valores['hits'] = $('#cliente_form #hits');
//                    valores['id_usuario'] = $('#cliente_form #id_usuario');
//                    valores['etiquetas'] = $('#cliente_form #etiquetas');
//                    valores['publicado'] = $('#cliente_form #publicado');
//                    valores['portada'] = $('#cliente_form #portada');

    var disabled = $('#clienteForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#clienteForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

clienteView.prototype.doEventsLoading = function () {
    var thisObject = this;
   

   
};

clienteView.prototype.okValidation = function (f) {
    $('#clienteForm').on('success.form.bv', f);
};