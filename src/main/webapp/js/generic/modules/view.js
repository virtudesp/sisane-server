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
viewModule.prototype.getViewTemplate_nofunc = function (strClass, jsonMeta) {
    var thisObject = this;
    var viewTable = "";
    viewTable = "<table class=\"table table table-bordered table-condensed\">";
    $.each(this.jsonMeta, function (index, value) {
        if (!value.IsMetaForeignKey) {
            viewTable += '<tr><td><strong>' + value.Description + '</strong></td>';
            if (value.IsObjForeignKey) {
                viewTable += '<td>' + thisObject.printForeignValues(thisObject.jsonDataViewModule[value.MyMetaName], thisObject.jsonDataViewModule[value.Name], value.ReferencesTable) + '</td>';
            } else {
                viewTable += '<td>' + ns.strings.printValue(value, thisObject.jsonDataViewModule[value.Name], true) + '</td>'; // printValue(valoresRegistro, nombreDeCampo, false) 
            }
        }
    });
    viewTable += '</table>';
    viewTable += ('<p>');
    viewTable += ('<a class="btn btn-primary" role="button" href="#/' + this.strClase + '/edit/' + this.objParams['id'] + '">Editar</a>   ');
    viewTable += ('<a class="btn btn-danger" role="button" href="#/' + this.strClase + '/remove/' + this.objParams['id'] + '">Borrar</a>');
    viewTable += ('</p>');
    return viewTable;
}
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
