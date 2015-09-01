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

var documentosautorList = function () {
    var jsonData;
//    this.render = function () {
//        console.log('vic')
//    }
    //viewModule.call(this, url, strClass);
};
//viewModule.call(documentoView.prototype);

documentosautorList.prototype = Object.create(listModule.prototype);

documentosautorList.prototype.loadButtons = function (rowValues, strClass) {
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + rowValues[0].data.bean.id + '"  href="#/autordocumento/plist/page=1&rpp=10&systemfilter' + rowValues[0].data.bean.id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
   // botonera += '<a class="btn btn-default edit" id="' + rowValues[0].data.bean.id + '"  href="#/autor/edit/' + rowValues[0].data.bean.id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    //botonera += '<a class="btn btn-default remove" id="' + rowValues[0].data.bean.id + '"  href="#/autor/remove/' + rowValues[0].data.bean.id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';

    return botonera;
};
documentosautorList.prototype.initialize = function () {
    var thisObject = this;

    //**** prepare params
    //paramsObject = ns.param.defaultizeUrlObjectParametersForLists(ns.param.getUrlObjectFromUrlString(this.url));
    this.prepareParams();
    //****
    if (paramsObject) {
        $.when(this.getAllPromise(ausiasFLOW.listModule_class, "", "", "")).done(function (jsonDataReturned) {
            if (jsonDataReturned.status == "200") {

                jsonData = jsonDataReturned;

//                if (paramsObject.vf) {
//                    if (jsonData.message.meta.length < paramsObject["vf"]) {
//                        paramsObject["vf"] = jsonData.message.meta.length;
//                    }
//                }
            }
        })
    }
};