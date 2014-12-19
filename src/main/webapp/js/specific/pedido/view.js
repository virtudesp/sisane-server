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


var pedidoView = function (strClase) {
    this.clase = strClase;
};
pedidoView.prototype = new view('pedido');
pedidoView.prototype.getClassNamePedido = function () {
    return this.getClassName() + "Vista";
};
var oPedidoView = new pedidoView('pedido');


pedidoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    //solo cuando sea administrador
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/list/page=1&id=1&rpp=10&vf=4&filter=id&filteroperator=like&filtervalue='+id+'"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
pedidoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#pedido_form #titulo').val(valores['titulo']);
//                    $('#pedido_form #contenido').val(valores['contenido']);
//                    $('#pedido_form #alta').val(valores['alta']);
//                    $('#pedido_form #cambio').val(valores['cambio']);
//                    $('#pedido_form #hits').val(valores['hits']);
//                    $('#pedido_form #id_usuario').val(valores['id_usuario']);
//                    $('#pedido_form #etiquetas').val(valores['etiquetas']);
//                    $('#pedido_form #publicado').val(valores['publicado']);
//                    $('#pedido_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

pedidoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#pedido_form #titulo');
//                    valores['contenido'] = $('#pedido_form #contenido');
//                    valores['alta'] = $('#pedido_form #alta');
//                    valores['cambio'] = $('#pedido_form #cambio');
//                    valores['hits'] = $('#pedido_form #hits');
//                    valores['id_usuario'] = $('#pedido_form #id_usuario');
//                    valores['etiquetas'] = $('#pedido_form #etiquetas');
//                    valores['publicado'] = $('#pedido_form #publicado');
//                    valores['portada'] = $('#pedido_form #portada');

    var disabled = $('#pedidoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#pedidoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

pedidoView.prototype.doEventsLoading = function () {
    var thisObject = this;
   

   
};

pedidoView.prototype.okValidation = function (f) {
    $('#pedidoForm').on('success.form.bv', f);
};