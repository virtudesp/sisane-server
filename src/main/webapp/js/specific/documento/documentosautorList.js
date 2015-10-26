/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/openAUSIAS
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
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
        promise.getAll(ausiasFLOW.listModule_class, "", "", "").done(function (jsonDataReturned) {
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