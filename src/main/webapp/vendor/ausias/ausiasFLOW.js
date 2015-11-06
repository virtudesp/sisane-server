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
    ausiasFLOW.reset = function () {
        componentsList = [];
        return ausiasFLOW;
    };
    ausiasFLOW.renderComponent = function (oComponent) {
        var json;
        if ('initialize' in oComponent) {
            oComponent.initialize(oComponent);
        }
        if ('getPromise' in oComponent) {
            //in the case the component needs to retrieve data from server
            //get the promise, execute and continue the process
            var promise = oComponent.getPromise();
            promise.done(function (json) {
                if ('getData' in oComponent) {
                    oComponent.getData(json);
                }
                if ('render' in oComponent) {
                    var renderization = oComponent.render();
                    if ($(oComponent.place).html() != $('<div/>').html(renderization).html()) {
                        oComponent.place.empty().append(renderization);
                    }
                }
                if ('fill' in oComponent) {
                    oComponent.fill();
                }
                if ('bind' in oComponent) {
                    oComponent.bind();
                }
                if ('bindAll' in oComponent) {
                    oComponent.bindAll();
                }
                if (oComponent.callbackFunction && 'bindCallback' in oComponent) {
                    oComponent.bindCallback(oComponent.callbackFunction);
                }
            }).fail(function () {
                throw new Error("Couldn't get server data");
            })
        } else {
            if ('getData' in oComponent) {
                oComponent.getData();
            }
            if ('render' in oComponent) {
                var renderization = oComponent.render();
                if ($(oComponent.place).html() != $('<div/>').html(renderization).html()) {
                    oComponent.place.empty().append(renderization);
                }
            }
            if ('fill' in oComponent) {
                oComponent.fill();
            }
            if ('bind' in oComponent) {
                oComponent.bind();
            }
            if ('bindAll' in oComponent) {
                oComponent.bindAll();
            }
            if (oComponent.callbackFunction && 'bindCallback' in oComponent) {
                oComponent.bindCallback(oComponent.callbackFunction);
            }
        }
    };
    ausiasFLOW.initialize = function () {
        //create a new component
        var oComponent = new arguments[0];
        //every component is asigned an id
        oComponent.id_module = componentsList.length;
        //fishing other configuration information
        oComponent.place = arguments[1];         //place to be rendered
        oComponent.strOb = arguments[2];         //object
        oComponent.strOp = arguments[3];         //module name
        oComponent.strParams = arguments[4];     //parameters for the component
        //specifies the callback operation
        //in the case the component is going to be used to select one object
        //and perform the specified callback operation over it 
        oComponent.callbackFunction = arguments[5];
        //add the new component @ the end of the list
        componentsList.push(oComponent);
        //begin the process of ordered method calling 
        this.renderComponent(oComponent);
        return oComponent;
    };
//    ausiasFLOW.renderComponent = function (oComponent) {
//        if ('initialize' in componentsList[oComponent.id_module]) {
//            componentsList[oComponent.id_module].initialize(oComponent);
//        }
//        if ('getPromise' in componentsList[oComponent.id_module]) {
//            var promise = componentsList[oComponent.id_module].getPromise();
//            promise.done(function (json) {
//                if ('getData' in componentsList[oComponent.id_module]) {
//                    componentsList[oComponent.id_module].getData(json);
//                }
//                if ('render' in componentsList[oComponent.id_module]) {
//                    //componentsList[oComponent.id_module].place.empty().append(componentsList[oComponent.id_module].render());
//                    var renderization = componentsList[oComponent.id_module].render();
//                    if ($(componentsList[oComponent.id_module].place).html() != $('<div/>').html(renderization).html()) {
//                        //console.log("  -- rendering:    " + entry.id_module);
//                        componentsList[oComponent.id_module].place.empty().append(renderization);
//                    }
//                }
//                if ('bind' in componentsList[oComponent.id_module]) {
//                    componentsList[oComponent.id_module].bind();
//                }
//                if ('bindAll' in oComponent) {
//                    oComponent.bindAll();
//                }
//                if (componentsList[oComponent.id_module].callbackFunction && 'bindCallback' in oComponent) {
//                    oComponent.bindCallback(componentsList[oComponent.id_module].callbackFunction);
//                }
//            }).fail(function () {
//                //informar error
//            })
//        } else {
//            if ('getData' in componentsList[oComponent.id_module]) {
//                componentsList[oComponent.id_module].getData();
//            }
//            if ('render' in componentsList[oComponent.id_module]) {
//                //componentsList[oComponent.id_module].place.empty().append(componentsList[oComponent.id_module].render());
//                var renderization = componentsList[oComponent.id_module].render();
//                if ($(componentsList[oComponent.id_module].place).html() != $('<div/>').html(renderization).html()) {
//                    //console.log("  -- rendering:    " + entry.id_module);
//                    componentsList[oComponent.id_module].place.empty().append(renderization);
//                }
//            }
//            if ('bind' in componentsList[oComponent.id_module]) {
//                componentsList[oComponent.id_module].bind();
//            }
//            if ('bindAll' in oComponent) {
//                oComponent.bindAll();
//            }
//            if (componentsList[oComponent.id_module].callbackFunction && 'bindCallback' in oComponent) {
//                oComponent.bindCallback(componentsList[oComponent.id_module].callbackFunction);
//            }
//        }
//    };
    ausiasFLOW.getId = function (p) {
        return p.id_module;
    };
    ausiasFLOW.flowRender = function () { //render with reload ajax call
        componentsList.forEach(function (oComponent) {
            this.renderComponent(oComponent);
//            //console.log("========================");
//            //console.log("num:    " + entry.id_module);
//            //console.log("dom:    " + $(entry.place).html());
//            //console.log("render: " + $('<div/>').html(entry.render()).html()); 
//            if ('initialize' in oComponent) {
//                oComponent.initialize(oComponent);
//            }
//            if ('getPromise' in oComponent) {
//                var promise = oComponent.getPromise();
//                promise.done(function (json) {
//                    if ('getData' in oComponent) {
//                        oComponent.getData(json);
//                    }
//                    if ('render' in oComponent) {
//                        var renderization = oComponent.render();
//                        if ($(oComponent.place).html() != $('<div/>').html(renderization).html()) {
//                            //console.log("  -- rendering:    " + entry.id_module);
//                            oComponent.place.empty().append(renderization);
//                        }
//                    }
//                    if ('bind' in oComponent) {
//                        oComponent.bind();
//                    }
//                    if ('bindAll' in oComponent) {
//                        oComponent.bindAll();
//                    }
//                    if (oComponent.callbackFunction && 'bindCallback' in oComponent) {
//                        oComponent.bindCallback(oComponent.callbackFunction);
//                    }
//                }).fail(function () {
//                    //informar error
//                })
//            } else {
//                if ('getData' in oComponent) {
//                    oComponent.getData();
//                }
//                if ('render' in oComponent) {
//                    var renderization = oComponent.render();
//                    if ($(oComponent.place).html() != $('<div/>').html(renderization).html()) {
//                        //console.log("  -- rendering:    " + entry.id_module);
//                        oComponent.place.empty().append(renderization);
//                    }
//                }
//                if ('bind' in oComponent) {
//                    oComponent.bind();
//                }
//                if ('bindAll' in oComponent) {
//                    oComponent.bindAll();
//                }
//                if (oComponent.callbackFunction && 'bindCallback' in oComponent) {
//                    oComponent.bindCallback(oComponent.callbackFunction);
//                }
//            }
        });
    };
    ausiasFLOW.getComponentByModuleName = function (name) {
        //return the module named 'name'
        var dev = null;
        componentsList.forEach(function (oComponent) {
            if (oComponent.strOp == name) {
                dev = oComponent;
            }
        });
        return dev;
    };
//    ausiasFLOW.renderPage = function () {
//        //
//        componentsList.forEach(function (oComponent) {
//            //console.log("========================");
//            //console.log("num:    " + entry.id_module);
//            //console.log("dom:    " + $(entry.place).html());
//            //console.log("render: " + $('<div/>').html(entry.render()).html()); 
//            if ('render' in oComponent) {
//                var renderization = oComponent.render();
//                if ($(oComponent.place).html() != $('<div/>').html(renderization).html()) {
//                    //console.log("  -- rendering:    " + entry.id_module);
//                    oComponent.place.empty().append(renderization);
//                    if ('bind' in oComponent) {
//                        oComponent.bind();
//                    }
//                }
//            }
//        });
//    };
//    ausiasFLOW.bindCallback = function (oComponent, bindAllCallback) {
//        if ('bindCallback' in oComponent) {
//            oComponent.bindCallback(bindAllCallback);
//        }
//    }
})();