var newModule = function () {
    var parametersObject;
    var jsonData;
    var strClass;
}
newModule.prototype = Object.create(baseModule.prototype);
newModule.prototype.loadFormValues = function (objParams) {

    if (objParams) { //soporte claves ajenas pte revision
        var selector;
        selector = objParams["systemfilter"];
        if (selector) {
            if (selector.split("_").length - 1 >= 2) {
                selector = selector.replace('id_', 'obj_');
                selector2 = selector.substring(0, selector.lastIndexOf('_'))
                selector3 = selector2.replace('obj_', '');
            } else {
                selector = selector.replace('id_', 'obj_');
                selector2 = selector;
                selector3 = selector2.replace('obj_', '')
            }
            $('#' + selector + "_id").val(objParams["systemfiltervalue"]).attr("disabled", true);
            $('#' + selector + "_button").attr("disabled", true).hide();
            var oModelo = "o" + selector3.charAt(0).toUpperCase() + selector3.slice(1) + "Model";
            $('#' + selector + '_desc').text(decodeURIComponent(window[oModelo].getMeAsAForeignKey(objParams["systemfiltervalue"])));
        }
    }
}
newModule.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#documentoForm #obj_usuario_button').unbind('click');
    $("#documentoForm #obj_usuario_button").click(function () {
        //var oControl = oUsuarioControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#documentoForm").append(ns.html.modal.getEmptyModal());
        broth.loadForm('#modal01', ns.html.form.getFormHeader('Elección de usuario'), "", ns.html.form.getFormFooter(), true);
        $('#documentoForm').append(ns.html.modal.getEmptyModal());
        ausiasFLOW.pListModule_paramsObject = [];
        ausiasFLOW.pListModule_paramsObject["vf"] = "4";
        ausiasFLOW.pListModule_class = 'documento';
        var module = ausiasFLOW.initialize(component_eplist().list, $('#modal-body'));
        ausiasFLOW.bindCallback(module, function (id) {
            $('#obj_usuario').val(id).change();
            $.when(thisObject.getOnePromise("usuario", id)).done(function (jsonDataViewModuleReceived) {                
                $('#obj_usuario_desc').html(html.printObject2('usuario', jsonDataViewModuleReceived.message));
            })
            $('#modal01').modal('hide');
        });
        return false;
    });

    $('#undefinedForm #obj_tipodocumento_button').unbind('click');
    $("#undefinedForm #obj_tipodocumento_button").click(function () {
        //var oControl = oTipodocumentoControl;

        $("#undefinedForm").append(ns.html.modal.getEmptyModal());
        broth.loadForm('#modal01', ns.html.form.getFormHeader('Elección de tipo de documento'), "", ns.html.form.getFormFooter(), true);

        $('#undefinedForm').append(ns.html.modal.getEmptyModal());

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
newModule.prototype.getData = function () {
    $.when(this.getMetaPromise(ausiasFLOW.newModule_class)).done(function (jsonDataReceived) {
        jsonData = jsonDataReceived;
    })
};
newModule.prototype.render = function () {
    if (jsonData.status == "200") {
        return broth.getFormTemplate(strClass, jsonData.message);
    } else {
        return broth.notifyException(jsonData.status, jsonData.message);
    }
}
newModule.prototype.fill = function () {
    $('#id').val('0').attr("disabled", true);
    this.loadFormValues(parametersObject); //new operation can load forced foreigns & no foreigns
}
newModule.prototype.bind = function () {
    loadValidationCallbacks(jsonData.message);
    this.doEventsLoading();
    $('#submitForm').unbind('click');
    $('#submitForm').click(function (notificationPlace) {
        //oView.okValidation(function (e) { //disparar todas las validaciones
        result = broth.setOne({json: JSON.stringify(oView.getFormValues())});
        broth.doResultOperationNotifyToUser($('#broth_content'), result["status"], 'Se ha creado el registro con id=' + result["message"], result["message"], true);
        e.preventDefault();
        return false;
        //});
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