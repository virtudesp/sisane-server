/* 
 * Copyright (C) 2014 rafa
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

//http://bootstrapvalidator.com/
//https://github.com/Eonasdan/bootstrap-datetimepicker 

var viewSpecific = function(clase) {
    return {
        loadFormValues: function(valores) {
            switch (clase) {
                case 'documento':
                    $('#documento_form #titulo').val(valores['titulo']);
                    $('#documento_form #contenido').val(valores['contenido']);
                    $('#documento_form #alta').val(valores['alta']);
                    $('#documento_form #cambio').val(valores['cambio']);
                    $('#documento_form #hits').val(valores['hits']);
                    $('#documento_form #id_usuario').val(valores['id_usuario']);
                    $('#documento_form #etiquetas').val(valores['etiquetas']);
                    $('#documento_form #publicado').val(valores['publicado']);
                    $('#documento_form #portada').val(valores['portada']);
                    break;
                default:
                    alert("Ha ocuurido un error de cliente en viewSpecific");
            }
        },
        getFormValues: function() {
            switch (clase) {
                case 'documento':
                    var valores = [];
                    valores['titulo'] = $('#documento_form #titulo');
                    valores['contenido'] = $('#documento_form #contenido');
                    valores['alta'] = $('#documento_form #alta');
                    valores['cambio'] = $('#documento_form #cambio');
                    valores['hits'] = $('#documento_form #hits');
                    valores['id_usuario'] = $('#documento_form #id_usuario');
                    valores['etiquetas'] = $('#documento_form #etiquetas');
                    valores['publicado'] = $('#documento_form #publicado');
                    valores['portada'] = $('#documento_form #portada');
                    return valores;
                    break;
                default:
                    alert("Ha ocuurido un error de cliente en viewSpecific");
            }
        },
        doEventsLoading: function() {
            switch (clase) {
                case 'documento':
                    $('#documentoForm #obj_usuario_button').unbind('click');
                    $("#documentoForm #obj_usuario_button").click(function() {
                        var documentoObject = objeto('usuario');
                        var documentoView = vista('usuario');
                        var objControl = control_documento();  //para probar dejar documento
                        documentoView.cargaModalBuscarClaveAjenaNuevo(objControl, param().defaultizeUrlObjectParameters({}), $('#obj_usuario_id'), $('#obj_usuario_desc'), 'usuario')
                        return false;
                    });
                    $('#documentoForm #obj_tipodocumento_button').unbind('click');
                    $("#documentoForm #obj_tipodocumento_button").click(function() {
                        var documentoObject = objeto('tipodocumento');
                        var documentoView = vista('tipodocumento');
                        var objControl = control_documento();  //para probar dejar documento
                        documentoView.cargaModalBuscarClaveAjenaNuevo(objControl, param().defaultizeUrlObjectParameters({}), $('#obj_tipodocumento_id'), $('#obj_tipodocumento_desc'), 'tipodocumento')
                        return false;
                    });
                    break;
                default:
                    alert("Ha ocuurido un error de cliente en viewSpecific");
            }
        },
        loadButtons: function(id) {
            switch (clase) {
                case 'documento':
                    var botonera = "";
                    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + objeto('documento').getName() + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
                    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + objeto('documento').getName() + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
                    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + objeto('documento').getName() + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
                    botonera += '</div></div>';
                    return botonera;
                    break;
                default:
                    alert("Ha ocuurido un error de cliente en viewSpecific");
            }
        }
    }
}
