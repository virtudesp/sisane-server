var newModule = function () {
    var jsonData;
}
newModule.prototype = Object.create(baseModule.prototype);
newModule.prototype.initialize = function () {   
    $.when(this.getMetaPromise(ausiasFLOW.newModule_class)).done(function (jsonDataReceived) {
        jsonData = jsonDataReceived;
    })
};
newModule.prototype.render = function () {
    if (jsonData.status == "200") {
        return broth.getFormTemplate(this.strClass, jsonData.message);
    } else {
        return broth.notifyException(jsonData.status, jsonData.message);
    }
}
newModule.prototype.fill = function () {
     broth.loadFormValues(); //new operation can load forced foreigns
}
newModule.prototype.bind = function () {   
    loadValidationCallbacks(jsonData.message);
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