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


$('#contenido_button').unbind('click');
$('#contenido_button').click(function() {
    cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
    pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
    contenido = '<div class="row"><div class="col-md-6">';
    contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
    contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
    contenido += '</div>';
    loadForm('#modal02', cabecera, contenido, pie, true);
    $('#contenidomodal').val($('#contenido').val());
    creoleParse($('#contenidomodal').val(), $('#textoparseado'));
    $('#contenido').val($('#contenidomodal').val());
    $('#contenidomodal').keyup(function() {
        creoleParse($('#contenidomodal').val(), $('#textoparseado'));
        $('#contenido').val($('#contenidomodal').val());
    });
});