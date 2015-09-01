/*
 * Copyright (C) 2015 rafa
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
var epListModule = function () {
}
epListModule.prototype = Object.create(pListModule.prototype);
epListModule.prototype.loadButtons = function (rowValues, strClass) {
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default selector_button" id="' + rowValues[0].data + '"  href="#"><i class="glyphicon glyphicon-ok"></i></a>';
    botonera += '</div></div>';
    return botonera;
};
epListModule.prototype.bindCallback = function (callbackFunction) {
    $('.btn.btn-default.selector_button').unbind('click');
    $('.btn.btn-default.selector_button').click(function (event) {
        callbackFunction(parseInt($(this).attr('id')))
    });
};