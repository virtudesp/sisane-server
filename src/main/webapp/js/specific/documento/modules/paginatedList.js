
var documentoPaginatedList = function () {


};
documentoPaginatedList.prototype = new pListModule();

//documentoList.prototype = Object.create(pListModule);
//documentoList.prototype = pListModule;
//documentoList.call(pListModule.prototype);
//
//
//console.log('hola');
//documentolist.prototype.constructor = documentolist;
documentoPaginatedList.prototype.loadButtons = function (rowValues, strClass) {
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + rowValues[0].data + '"  href="#/' + strClass + '/view/' + rowValues[0].data + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + rowValues[0].data + '"  href="#/' + strClass + '/edit/' + rowValues[0].data + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + rowValues[0].data + '"  href="#/' + strClass + '/remove/' + rowValues[0].data + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '<a class="btn btn-default abc" id="' + rowValues[0].data + '"  href="#/' + strClass + '/abc/' + rowValues[0].data + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';

    return botonera;
};

//pte

documentoPaginatedList.prototype.bind = function () {
    thisObject = this;
    pListModule.prototype.bind.call(this);
    //pListModule.call(this);
    $('.btn.btn-default.abc').unbind('click');
    $('.btn.btn-default.abc').click(function (event) {
        //console.log(ausiasFLOW.contador);      
        
        ausiasFLOW.viewModule_paramsObject['id']=parseInt($(this).attr('id'));
        
        
        
//        if (ausiasFLOW.id) {
//            ausiasFLOW.id++;
//        } else {
//            ausiasFLOW.id = 2;
//        }
        ausiasFLOW.flowRender();
        return false;
    });
}