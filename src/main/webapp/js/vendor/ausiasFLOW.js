/*!
 * ausiasFLOW Library v1.0, July 2015
 * Copyright (C), Rafael Aznar
 * rafaaznar{at}gmail.com
 * CIPFP Ausias March, Valencia, Spain
 * Free to use & distribute under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function () {
    var ausiasFLOW = window.ausiasFLOW = {};
    var componentsList = [];
    ausiasFLOW.initialize = function () {
        //comprobar al menos que haya dos argumentos
        var userModule = arguments[0];
        var placeSelector = arguments[1];
        //userModule.prototype = Object.create(ParentModule.prototype);
        var oComponent = new userModule;
        oComponent.id_module = componentsList.length;
        oComponent.place = placeSelector;
        componentsList.push(oComponent);
//        return m;
//    }


//        if (arguments.length > 2) {
//            var args = [];
//            for (var i = 2; i < arguments.length; i++) {
//                args.push("arguments[" + i + "]");
//            }
//            var command = "new userModule(" + args.join(",") + ")";
//            var m = eval(command);
//        } else {
//            var m = new userModule;
//        }


//    ausiasFLOW.setup = function (m) { 
        if ('initialize' in oComponent) {
            oComponent.initialize();
        }
        if ('getData' in oComponent) {
            oComponent.getData();
        }
        if ('render' in oComponent) {
            oComponent.place.empty().append(oComponent.render());
        }
        if ('fill' in oComponent) {
            oComponent.fill();
        }
        if ('bind' in oComponent) {
            oComponent.bind();
        }
        //ofrecerse en menus
        //toolbar expose
        //menubar
        //icon
        return oComponent;
    };
    ausiasFLOW.reset = function () {
        componentsList = [];
    };
    ausiasFLOW.renderComponent = function (oComponent, bindAll) {
        if ('initialize' in componentsList[oComponent.id_module]) {
            componentsList[oComponent.id_module].initialize();
        }
        if ('getData' in componentsList[oComponent.id_module]) {
            componentsList[oComponent.id_module].getData();
        }
        if ('render' in componentsList[oComponent.id_module]) {
            //componentsList[oComponent.id_module].place.empty().append(componentsList[oComponent.id_module].render());
            var renderization = componentsList[oComponent.id_module].render();
            if ($(componentsList[oComponent.id_module].place).html() != $('<div/>').html(renderization).html()) {
                //console.log("  -- rendering:    " + entry.id_module);
                componentsList[oComponent.id_module].place.empty().append(renderization);
            }
        }
        if ('bind' in componentsList[oComponent.id_module]) {
            componentsList[oComponent.id_module].bind();
        }
        if (bindAll && 'bindAll' in oComponent) {
            oComponent.bindAll();
        }
//        if (bindAllCallback && 'bindAll' in componentsList[oComponent.id_module]) {
//            componentsList[oComponent.id_module].bindAll(bindAllCallback);
//        }
    };
    ausiasFLOW.getId = function (p) {
        return p.id_module;
    }
    ausiasFLOW.flowRender = function (bindAll) { //render with reload ajax call
        componentsList.forEach(function (oComponent) {
            //console.log("========================");
            //console.log("num:    " + entry.id_module);
            //console.log("dom:    " + $(entry.place).html());
            //console.log("render: " + $('<div/>').html(entry.render()).html()); 
            if ('initialize' in oComponent) {
                oComponent.initialize();

            }
            if ('getData' in oComponent) {
                oComponent.getData();

            }
            if ('render' in oComponent) {
                var renderization = oComponent.render();
                if ($(oComponent.place).html() != $('<div/>').html(renderization).html()) {
                    //console.log("  -- rendering:    " + entry.id_module);
                    oComponent.place.empty().append(renderization);

                }
            }
            if ('bind' in oComponent) {
                oComponent.bind();
            }
            if (bindAll && 'bindAll' in oComponent) {
                oComponent.bindAll();
            }
        });
    };
    ausiasFLOW.renderPage = function () {
        componentsList.forEach(function (oComponent) {
            //console.log("========================");
            //console.log("num:    " + entry.id_module);
            //console.log("dom:    " + $(entry.place).html());
            //console.log("render: " + $('<div/>').html(entry.render()).html()); 
            if ('render' in oComponent) {
                var renderization = oComponent.render();
                if ($(oComponent.place).html() != $('<div/>').html(renderization).html()) {
                    //console.log("  -- rendering:    " + entry.id_module);
                    oComponent.place.empty().append(renderization);
                    if ('bind' in oComponent) {
                        oComponent.bind();
                    }
                }
            }
        });
    };
    ausiasFLOW.bindCallback = function (oComponent, bindAllCallback) {
        if ('bindCallback' in oComponent) {
            oComponent.bindCallback(bindAllCallback);
        }
    }
})();