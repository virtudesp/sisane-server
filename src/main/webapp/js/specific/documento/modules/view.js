var documentoView = function () {
//    this.render = function () {
//        console.log('vic')
//    }
    //viewModule.call(this, url, strClass);
};
//viewModule.call(documentoView.prototype);

documentoView.prototype = Object.create(viewModule.prototype);
//documentoView.prototype.constructor = documentoView;






//var documentoView = function (url, strClass) {
//
//
//};
//documentoView.prototype = Object.create(viewModule.prototype);
//
////documentoList.prototype = Object.create(listModule);
////documentoList.prototype = listModule;
////documentoList.call(listModule.prototype);
////
////
//console.log('hola');
////documentolist.prototype.constructor = documentolist;