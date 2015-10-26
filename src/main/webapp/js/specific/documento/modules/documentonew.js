/* 
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 * AJAX web applications by using Java and jQuery
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
 * 
 */

var documentoNew = function () {
};
documentoNew.prototype = new newModule();
documentoNew.prototype.doEventsLoading = function () {
    $('#documentoForm #obj_usuario_button').unbind('click');
    $("#documentoForm #obj_usuario_button").click(function () {
        $("#documentoForm").append(modal.getEmptyModal());
        modal.loadModal('#modal01', modal.getModalHeader('Elección de usuario'), "", modal.getModalFooter(), true);
        $('#documentoForm').append(modal.getEmptyModal());
        ausiasFLOW.pListModule_paramsObject = [];
        ausiasFLOW.pListModule_paramsObject["vf"] = "4";
        ausiasFLOW.pListModule_class = 'documento';
        var module = ausiasFLOW.initialize(component_documento_ebplist().list, $('#modal-body'),
                function (id) {
                    $('#obj_usuario').val(id).change();
                    promise.getOne("usuario", id).done(function (jsonDataViewModuleReceived) {
                        $('#obj_usuario_desc').html(html.printObject2('usuario', jsonDataViewModuleReceived.message));
                    })
                    $('#modal01').modal('hide');
                }
        );
        return false;
    });
    $('#documentoForm #obj_tipodocumento_button').unbind('click');
    $("#documentoForm #obj_tipodocumento_button").click(function () {
        $("#documentoForm").append(modal.getEmptyModal());
        modal.loadModal('#modal01', modal.getModalHeader('Elección de tipo de documento'), "", modal.getModalFooter(), true);
        $('#documentoForm').append(modal.getEmptyModal());
        ausiasFLOW.pListModule_paramsObject = [];
        ausiasFLOW.pListModule_paramsObject["vf"] = "4";
        ausiasFLOW.pListModule_class = 'documento';
        var module = ausiasFLOW.initialize(component_documento_ebplist().list, $('#modal-body'),
                function (id) {
                    $('#obj_tipodocumento').val(id).change();
                    promise.getOne("tipodocumento", id).done(function (jsonDataViewModuleReceived) {
                        $('#obj_tipodocumento_desc').html(html.printObject2('tipodocumento', jsonDataViewModuleReceived.message));
                    })
                    $('#modal01').modal('hide');
                }
        );
        return false;
    });
};
