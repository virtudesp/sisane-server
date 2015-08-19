var viewModule = function () {
    //baseOperation.call(this, url, strClass);
    //ns.login.checkAndUpdateUserConnectionState();
    var jsonData;

}
viewModule.prototype = Object.create(baseModule.prototype);
viewModule.prototype.initialize = function () {
//     console.log('.........');
//    console.log(ausiasFLOW.viewModule_id);
//    console.log(ausiasFLOW.viewModule_frontOperation);
//    console.log(ausiasFLOW.viewModule_class);



    if (ausiasFLOW.viewModule_paramsObject['id'] && ausiasFLOW.viewModule_class) {
        
        $.when(this.getOnePromise(ausiasFLOW.viewModule_class, ausiasFLOW.viewModule_paramsObject['id'])).done(function (jsonDataReceived) {
            jsonData = jsonDataReceived;
        })
    } else {
        console.log('error: viewModule_id or class viewModule_class')
//        var paramsObject = ns.param.defaultizeUrlObjectParameters(ns.param.getUrlObjectFromUrlString(this.url));
//        id = paramsObject['id'];
//        if (id) {
//            $.when(broth.getOnePromise(this.strClass, id)).done(function (jsonDataReceived) {
//                jsonData = jsonDataReceived;
//
//            })
//        }
    }
}
viewModule.prototype.render = function () {
    // pte de poner elpanel
    //$('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Detalle'));
    //console.log(ausiasFLOW.frontOperation);



    this.initialize();

    if (ausiasFLOW.viewModule_class) {
        return broth.getViewTemplate_func(ausiasFLOW.viewModule_class, jsonData.message);
    } else
        console.log('error: viewModule_class missing')
    return '';

}

//      viewModule.prototype.hola = function () {
//          console.log('hoooollllaaaa')
//    }



//viewModule.prototype.constructor = viewModule