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
var newModule = function () {
    var parametersObject;
    var jsonData;
    var strClass;
}
newModule.prototype = Object.create(baseModule.prototype);
function setForeign(prop, objParams) {
    promise.getOne(prop, objParams[prop]).done(function (jsonDataViewModuleReceived) {
        $('#obj_' + prop + '_desc').html(html.printObject2(prop, jsonDataViewModuleReceived.message));
    })
}
newModule.prototype.loadFormValues = function (objParams) {
    if (objParams) { //soporte claves ajenas pte revision
        for (var prop in objParams) {
            if (objParams.hasOwnProperty(prop)) {
                $('#obj_' + prop).val(objParams[prop]).attr("disabled", true);
                $('#obj_' + prop + "_button").attr("disabled", true).hide();
                setForeign(prop, objParams);
            }
        }
    }
}
newModule.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#documentoForm #obj_usuario_button').unbind('click');
    $("#documentoForm #obj_usuario_button").click(function () {
        //var oControl = oUsuarioControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#documentoForm").append(modal.getEmptyModal());
        modal.loadModal('#modal01', modal.getModalHeader('Elección de usuario'), "", modal.getModalFooter(), true);
        $('#documentoForm').append(modal.getEmptyModal());
        ausiasFLOW.pListModule_paramsObject = [];
        ausiasFLOW.pListModule_paramsObject["vf"] = "4";
        ausiasFLOW.pListModule_class = 'documento';
        var module = ausiasFLOW.initialize(component_eplist().list, $('#modal-body'));
        ausiasFLOW.bindCallback(module, function (id) {
            $('#obj_usuario').val(id).change();
            promise.getOne("usuario", id).done(function (jsonDataViewModuleReceived) {
                $('#obj_usuario_desc').html(html.printObject2('usuario', jsonDataViewModuleReceived.message));
            })
            $('#modal01').modal('hide');
        });
        return false;
    });

    $('#undefinedForm #obj_tipodocumento_button').unbind('click');
    $("#undefinedForm #obj_tipodocumento_button").click(function () {
        //var oControl = oTipodocumentoControl;

        $("#undefinedForm").append(modal.getEmptyModal());
        modal.loadModal('#modal01', modal.getModalHeader('Elección de tipo de documento'), "", modal.getModalFooter(), true);

        $('#undefinedForm').append(modal.getEmptyModal());

//        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipodocumentoModel, oTipodocumentoView);
//        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
//            $('#obj_tipodocumento_id').val(id).change();
//            $('#obj_tipodocumento_desc').text(decodeURIComponent(oTipodocumentoModel.getMeAsAForeignKey(id)));
//            $('#modal01').modal('hide');
//
//        },oTipodocumentoModel, oTipodocumentoView);
        return false;
    });

};
newModule.prototype.initialize = function () {
    parametersObject = ausiasFLOW.newModule_paramsObject;
    strClass = ausiasFLOW.newModule_class;

};
newModule.prototype.getPromise = function () {
    return promise.getMeta(ausiasFLOW.newModule_class);
}
newModule.prototype.getData = function (jsonDataReceived) {
    if (jsonDataReceived.status == "200") {
        jsonData = jsonDataReceived;
    } else {
        //informar error
    }
};
newModule.prototype.render = function () {
    if (jsonData.status == "200") {
        return form.getFormTemplate(strClass, jsonData.message);
    } else {
        return broth.notifyException(jsonData.status, jsonData.message);
    }
}
newModule.prototype.fill = function () {
    $('#id').val('0').attr("disabled", true);
    this.loadFormValues(parametersObject); //new operation can load forced foreigns & no foreigns
}
newModule.prototype.bind = function () {
    var thisObject = this;
    validation.loadValidationCallbacks(jsonData.message);
    this.doEventsLoading();
    $('#submitForm').unbind('click');
    $('#submitForm').click(function (e) {
        promise.setOne(strClass, {json: JSON.stringify(form.getFormValues(strClass))}).done(function (result) {
            if (result["status"] == "200") {
                resultadoMessage = 'Se ha creado el registro con id=' + result["message"];
            } else {
                resultadoMessage = "ERROR: No se ha creado el registro";
            }
            var mensaje = "<h5>Código: " + result["status"] + "</h5><h5>" + resultadoMessage + "</h5>";
            modal.loadModalNotify($('#broth_modal'), mensaje, function () {
                window.location.href = "#/" + strClass + "/view/" + result["message"];
                $('#broth_modal').empty();
            }, function () {
                $('#broth_content').empty();
                $('#broth_modal').empty();
            });
        });
        e.preventDefault();
        return false;
    });
}
//var newOperation = function (url) {
//    ns.login.checkAndUpdateUserConnectionState();
//    var paramsObject;
//    if (url) {
//        paramsObject = ns.param.defaultizeUrlObjectParameters(ns.param.getUrlObjectFromUrlString(url));
//    } else {
//        paramsObject = ns.param.defaultizeUrlObjectParameters({});
//    }
//    $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Nuevo'));
//    $.when(broth.getMetaPromise(strClass)).done(function (jsonData) {
//        if (jsonData.status == "200") {
//            $('#broth_content').empty().html(broth.getFormTemplate(strClass, jsonData.message));
//            loadValidationCallbacks(jsonData.message);
//            broth.loadFormValues(); //new operation can load forced foreigns
//            $('#submitForm').unbind('click');
//            $('#submitForm').click(function (notificationPlace) {
//                //oView.okValidation(function (e) { //disparar todas las validaciones
//                result = broth.setOne({json: JSON.stringify(oView.getFormValues())});
//                broth.doResultOperationNotifyToUser($('#broth_content'), result["status"], 'Se ha creado el registro con id=' + result["message"], result["message"], true);
//                e.preventDefault();
//                return false;
//                //});
//            });
//        } else {
//            $('#broth_content').empty().html(broth.notifyException(jsonData.status, jsonData.message));
//        }
//    })
//}