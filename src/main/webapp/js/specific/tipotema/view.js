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


var tipotemaView = function (strClase) {
    this.clase = strClase;
};
tipotemaView.prototype = new view('tipotema');
tipotemaView.prototype.getClassNameTipotema = function () {
    return this.getClassName() + "Vista";
};
var oTipotemaView = new tipotemaView('tipotema');



tipotemaView.prototype.printValue = function (value, valor, recortar) {
    var thisObject = this;
    var strResult = "";
    if (/obj_/.test(valor)) {
        if (value[valor].id > 0) {
            strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + util().getForeign(value[valor]) + '</a>';
        } else {
            strResult = '???';
        }
    } else {
        switch (value[valor]) {
            case true:
                strResult = '<i class="glyphicon glyphicon-ok"></i>';
                break;
            case false:
                strResult = '<i class="glyphicon glyphicon-remove"></i>';
                break;
            default:
                strResult = decodeURIComponent(value[valor]);
                
                if (recortar) 
                    if (strResult.length > 50) //don't show too long fields
                        strResult = strResult.substr(0, 20) + " ...";
                
                if (/nombre/.test(valor)) {
                    strResult = '<a href="jsp#/tema/list/' + 'systemfilter=id_tipotema&systemfilteroperator=equals&systemfiltervalue=' + value.id + '">' + decodeURIComponent(value[valor]) + '</a>';
                }
            };
    };
    return strResult;
};