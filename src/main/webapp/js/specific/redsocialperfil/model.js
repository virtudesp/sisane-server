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

var redsocialperfilModel = function (strClase) {
    this.clase = strClase;
};
redsocialperfilModel.prototype = new model('publicacion');
redsocialperfilModel.prototype.getClassNameRedsocialperfil = function () {
    return this.getClassName() + "Modelo";
};
redsocialperfilModel.prototype.duplicateOne = function (id) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=duplicate&id=' + id, 'GET', '')).done(function (data) {
        feedback = data;
    });
    return feedback;
};
redsocialperfilModel.prototype.agregarAmigo = function (id) {
    $.when(ajax().ajaxCallSync('/ausiasYield2014/json?ob=amistad&op=agregaramigo&id=' + id, 'GET', '')).done(function (data) {
        feedback = data;
    });
    return feedback;
};
redsocialperfilModel.prototype.removeAmigo = function (id) {
    $.when(ajax().ajaxCallSync('/ausiasYield2014/json?ob=amistad&op=removeamigo&id=' + id, 'GET', '')).done(function (data) {
        feedback = data;                           
    });
    return feedback;
};
redsocialperfilModel.prototype.existeAmigo = function (id) {
    $.when(ajax().ajaxCallSync('/ausiasYield2014/json?ob=amistad&op=existeamigo&id=' + id, 'GET', '')).done(function (data) {
        feedback = data;                           
    });
    return feedback;
};
var oRedsocialperfilModel = new redsocialperfilModel('publicacion');

redsocialperfilModel.prototype.getOne = function (id_usuario) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=get&id_usuario=' + id_usuario, 'GET', '')).done(function (data) {
        one = data;
    });
    return one;
};