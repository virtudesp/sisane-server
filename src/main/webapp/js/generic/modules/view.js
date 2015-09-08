var viewModule = function () {
    var jsonDataViewModule;
}
viewModule.prototype = Object.create(baseModule.prototype);
viewModule.prototype.getViewTemplate_func = function (strClass, jsonDataViewModule) {
    arr_meta_data = _.map(jsonDataViewModule.meta, function (value) {
        return  {meta: value, data: jsonDataViewModule.bean[value.Name]};
    });
    arr_meta_data_table = _.map(arr_meta_data, function (value, key) {
        return  '<tr><td><strong>' + value.meta.Name + '</strong></td><td>' + html.printPrincipal(value) + '</td></tr>';
    });
    return "<table class=\"table table table-bordered table-condensed\">"
            + arr_meta_data_table.join('')
            + '</table>';
};
viewModule.prototype.initialize = function () {
}
viewModule.prototype.getData = function () {
    if (ausiasFLOW.viewModule_paramsObject['id'] && ausiasFLOW.viewModule_class) {
        $.when(this.getOnePromise(ausiasFLOW.viewModule_class, ausiasFLOW.viewModule_paramsObject['id'])).done(function (jsonDataViewModuleReceived) {
            jsonDataViewModule = jsonDataViewModuleReceived;
        })
    }
}
viewModule.prototype.render = function () {
    if (!ausiasFLOW.viewModule_class) {
        return 'ERROR: No class defined';
    }
    if (!ausiasFLOW.viewModule_paramsObject['id']) {
        return 'ERROR: No id defined';
    }
    if (!jsonDataViewModule.message) {
        return 'ERROR: Server communication interrupted';
    }
    return this.getViewTemplate_func(ausiasFLOW.viewModule_class, jsonDataViewModule.message);
}
