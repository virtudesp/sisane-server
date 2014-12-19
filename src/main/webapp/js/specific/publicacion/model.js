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

var publicacionModel = function (strClase) {
    this.clase = strClase;
};
publicacionModel.prototype = new model('publicacion');
publicacionModel.prototype.getClassNamePublicacion = function () {
    return this.getClassName() + "Modelo";
};

publicacionModel.prototype.duplicateOne = function (id) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=duplicate&id=' + id, 'GET', '')).done(function (data) {
        feedback = data;
    });
    return feedback;
};
var oPublicacionModel = new publicacionModel('publicacion');


publicacionModel.prototype.loadAggregateViewSome = function (objParams) {
    if (objParams.order) {
        orderParams = '&order=' + objParams.order + '&ordervalue=' + objParams.ordervalue;
    } else {
        orderParams = "";
    }
    if (objParams.filter) {
        filterParams = "&filter=" + objParams.filter + "&filteroperator=" + objParams.filteroperator + "&filtervalue=" + objParams.filtervalue;
    } else {
        filterParams = "";
    }
    if (objParams.systemfilter) {
        systemfilterParams = "&systemfilter=" + objParams.systemfilter + "&systemfilteroperator=" + objParams.systemfilteroperator + "&systemfiltervalue=" + objParams.systemfiltervalue;
    } else {
        systemfilterParams = "";
    }
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getcomentarioamigo' + filterParams + '&rpp=' + objParams.rpp + orderParams + '&page=' + objParams.page + systemfilterParams, 'GET', '')).done(function (data) {
        pagina_objs = data; //decodeURI htmlDecode
    });
    //return pagina_objs;
    this.cFieldNames = pagina_objs.data.columns;
    this.cCountFields = this.cFieldNames.length;
    this.cPrettyFieldNames = pagina_objs.data.prettyColumns;
    this.cPrettyFieldNamesAcciones = this.cPrettyFieldNames;
    this.cPrettyFieldNamesAcciones.push("acciones");
    this.cPage = pagina_objs.data.page.list;
    this.cPages = pagina_objs.data.pages.data;
    this.cRegisters = pagina_objs.data.registers.data;
};
publicacionModel.prototype.getPages = function (rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
    if (filter) {
        filterParams = "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
    } else {
        filterParams = "";
    }
    if (systemfilter) {
        systemfilterParams = "&systemfilter=" + systemfilter + "&systemfilteroperator=" + systemfilteroperator + "&systemfiltervalue=" + systemfiltervalue;
    } else {
        systemfilterParams = "";
    }
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getpagescomentarioamigo' + filterParams + '&rpp=' + rpp + systemfilterParams, 'GET', '')).done(function (data) {
        pages = data['data'];
    });
    this.cPages = pages;
    return pages;
};