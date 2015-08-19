/*
 * Copyright (C) July 2014 Rafael Aznar
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

var model = function (strClase) {
    this.clase = strClase;
    this.urlJson = path + '/json?ob=' + strClase;
    this.cFieldNames = null;
    this.cPrettyFieldNames = null;
    this.cPrettyFieldNamesAcciones = null;
    this.cCountFields = null;
    this.cPage = null;
    this.cPages = null;
    this.cRegisters = null;
    this.cOne = null;
};

model.prototype.getClassName = function () {
    return this.clase;
};

model.prototype.loadAggregateViewSome = function (objParams) {
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
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getaggregateviewsome' + filterParams + '&rpp=' + objParams.rpp + orderParams + '&page=' + objParams.page + systemfilterParams, 'GET', '')).done(function (data) {
        pagina_objs = data; //decodeURI htmlDecode
    });
    //return pagina_objs;
    if (pagina_objs.status == "403") {
        return false; 
    } else {
        this.cFieldNames = pagina_objs.data.columns;
        this.cCountFields = this.cFieldNames.length;
        this.cPrettyFieldNames = pagina_objs.data.prettyColumns;
        this.cPrettyFieldNamesAcciones = this.cPrettyFieldNames;
        this.cPrettyFieldNamesAcciones.push("acciones");
        this.cPage = pagina_objs.data.page.list;
        this.cPages = pagina_objs.data.pages.data;
        this.cRegisters = pagina_objs.data.registers.data;
        return true;
    }
};

model.prototype.loadAggregateViewOne = function (id1) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getaggregateviewone&id=' + id1, 'GET', '')).done(function (data) {
        pagina_objs = data;
    });
    this.cFieldNames = pagina_objs.data.columns;
    this.cCountFields = this.cFieldNames.length;
    this.cPrettyFieldNames = pagina_objs.data.prettyColumns;
    this.cOne = pagina_objs.data.data;
};
model.prototype.getCachedOne = function () {
    return this.cOne;
};
model.prototype.getCachedPrettyFieldNames = function () {
    return this.cPrettyFieldNames;
};
model.prototype.getCachedPrettyFieldNamesAcciones = function () {
    return this.cPrettyFieldNamesAcciones;
};
model.prototype.getCachedCountFields = function () {
    return this.cCountFields;
};
model.prototype.getCachedFieldNames = function () {
    return this.cFieldNames;
};
model.prototype.getCachedPage = function () {
    return this.cPage;
};
model.prototype.getCachedPages = function () {
    return this.cPages;
};
model.prototype.getCachedRegisters = function () {
    return this.cRegisters;
};

model.prototype.validateUser = function (user, password) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=validate&user=' + user + "&password=" + password, 'GET', '')).done(function (data) {
        resultado = data['data'];
    });
    return resultado;
};
model.prototype.getGenericOperation = function (operation, id) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=' + operation + "&id=" + id, 'GET', '')).done(function (data) {
        resultado = data['data'];
    });
    return resultado;
};
model.prototype.getPrettyFieldNames = function () {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getprettycolumns', 'GET', '')).done(function (data) {
        prettyFieldNames = data;
        this.cPrettyFieldNames = data;
    });
    return prettyFieldNames;
};
model.prototype.getPrettyFieldNamesAcciones = function () {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getprettycolumns', 'GET', '')).done(function (data) {
        prettyFieldNames = data;
        prettyFieldNames.push("acciones");
        this.cPrettyFieldNamesAcciones = prettyFieldNames;
        //prettyFieldNames = data['data'];
        //prettyFieldNames.push("acciones");
    });
    return prettyFieldNames;
};
model.prototype.getCountFields = function () {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getcolumns', 'GET', '')).done(function (data) {
        //countFields = data['data'].length;
        countFields = data.length;
    });
    this.cCountFields = countFields;
    return countFields;
};
model.prototype.getFieldNames = function () {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getcolumns', 'GET', '')).done(function (data) {
        //fieldNames = data['data'];
        dataFieldNames = data;
        this.cFieldNames = dataFieldNames;
    });
    return dataFieldNames;
};
model.prototype.getMeAsAForeignKey = function (id) {
    //returns the description of this object to be displayed as a foreign key
    return util().getForeign(this.getOne(id));
};
model.prototype.getForeignKey = function (id, campo) {
    registro = this.getOne(id);
    idAjena = registro[campo];
    var modelForeign = campo.split("_")[1].replace(/[0-9]*$/, "");
    var foreignObject = model(modelForeign, path);
    var registroForeign = foreignObject.getOne(idAjena);
    return registroForeign;
};
model.prototype.getPage = function (pagina, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
    if (order) {
        orderParams = '&order=' + order + '&ordervalue=' + ordervalue;
    } else {
        orderParams = "";
    }
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
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getpage' + filterParams + '&rpp=' + rpp + orderParams + '&page=' + pagina + systemfilterParams, 'GET', '')).done(function (data) {
        pagina_objs = data.list; //decodeURI htmlDecode      
    });
    this.cPage = pagina_objs;
    return pagina_objs;
};
model.prototype.getPages = function (rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
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
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getpages' + filterParams + '&rpp=' + rpp + systemfilterParams, 'GET', '')).done(function (data) {
        pages = data['data'];
    });
    this.cPages = pages;
    return pages;
};
model.prototype.getRegisters = function (filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {

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
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getregisters' + filterParams + systemfilterParams, 'GET', '')).done(function (data) {
        regs = data['data'];
    });
    this.cRegisters = regs;
    return regs;
};
model.prototype.getAll = function () {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=getall', 'GET', '')).done(function (data) {
        one = data;
    });
    return one;
};
model.prototype.getOne = function (id1) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=get&id=' + id1, 'GET', '')).done(function (data) {
        one = data;
    });
    return one;
};
model.prototype.setOne = function (jsonfile) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=set', 'GET', jsonfile)).done(function (data) {
        feedback = data;
    });
    return feedback;
};
model.prototype.setGenericOperation = function (operation, jsonfile) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=' + operation, 'GET', jsonfile)).done(function (data) {
        feedback = data;
    });
    return feedback;
};
model.prototype.removeOne = function (id) {
    $.when(ajax().ajaxCallSync(this.urlJson + '&op=remove&id=' + id, 'GET', '')).done(function (data) {
        feedback = data;
    });
    return feedback;
};


