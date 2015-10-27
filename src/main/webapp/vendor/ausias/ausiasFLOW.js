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
    ausiasFLOW.initialize = function () {
        var userModule = arguments[0];
        var placeSelector = arguments[1];
        var strOb = arguments[2];
        var strOp = arguments[3];
        var strParams = arguments[4];
        var bindAllCallbackFunction = arguments[5];
        var oComponent = new userModule;
        oComponent.id_module = componentsList.length;
        oComponent.place = placeSelector;

        oComponent.strOb = strOb;
        oComponent.strOp = strOp;
        oComponent.strParams = strParams;

        oComponent.callbackFunction = bindAllCallbackFunction;



        componentsList.push(oComponent);
        if ('initialize' in oComponent) {
            oComponent.initialize(oComponent);
        }
        if ('getPromise' in oComponent) {
            var promise = oComponent.getPromise();
            promise.done(function (json) {
                if ('getData' in oComponent) {
                    oComponent.getData(json);
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
                if ('bindAll' in oComponent) {
                    oComponent.bindAll();
                }
                if (bindAllCallbackFunction && 'bindCallback' in oComponent) {
                    oComponent.bindCallback(bindAllCallbackFunction);
                }
            }).fail(function () {
                //informar error
            })
        } else {
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
            if ('bindAll' in oComponent) {
                oComponent.bindAll();
            }
            if (bindAllCallbackFunction && 'bindCallback' in oComponent) {
                oComponent.bindCallback(bindAllCallbackFunction);
            }
        }
        return oComponent;
    };
    ausiasFLOW.renderComponent = function (oComponent) {
        if ('initialize' in componentsList[oComponent.id_module]) {
            componentsList[oComponent.id_module].initialize(oComponent);
        }
        if ('getPromise' in componentsList[oComponent.id_module]) {
            var promise = componentsList[oComponent.id_module].getPromise();
            promise.done(function (json) {
                if ('getData' in componentsList[oComponent.id_module]) {
                    componentsList[oComponent.id_module].getData(json);
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
                if ('bindAll' in oComponent) {
                    oComponent.bindAll();
                }
                if (componentsList[oComponent.id_module].callbackFunction && 'bindCallback' in oComponent) {
                    oComponent.bindCallback(componentsList[oComponent.id_module].callbackFunction);
                }
            }).fail(function () {
                //informar error
            })
        } else {
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
            if ('bindAll' in oComponent) {
                oComponent.bindAll();
            }
            if (componentsList[oComponent.id_module].callbackFunction && 'bindCallback' in oComponent) {
                oComponent.bindCallback(componentsList[oComponent.id_module].callbackFunction);
            }
        }
    };
    ausiasFLOW.getId = function (p) {
        return p.id_module;
    }
    ausiasFLOW.flowRender = function () { //render with reload ajax call
        componentsList.forEach(function (oComponent) {
            //console.log("========================");
            //console.log("num:    " + entry.id_module);
            //console.log("dom:    " + $(entry.place).html());
            //console.log("render: " + $('<div/>').html(entry.render()).html()); 
            if ('initialize' in oComponent) {
                oComponent.initialize(oComponent);
            }
            if ('getPromise' in oComponent) {
                var promise = oComponent.getPromise();
                promise.done(function (json) {
                    if ('getData' in oComponent) {
                        oComponent.getData(json);
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
                    if ('bindAll' in oComponent) {
                        oComponent.bindAll();
                    }
                    if (oComponent.callbackFunction && 'bindCallback' in oComponent) {
                        oComponent.bindCallback(oComponent.callbackFunction);
                    }
                }).fail(function () {
                    //informar error
                })
            } else {
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
                if ('bindAll' in oComponent) {
                    oComponent.bindAll();
                }
                if (oComponent.callbackFunction && 'bindCallback' in oComponent) {
                    oComponent.bindCallback(oComponent.callbackFunction);
                }
            }
        });
    };
    ausiasFLOW.getComponent = function (name) {
        var dev = null;
        componentsList.forEach(function (oComponent) {
            if (oComponent.strOp == name) {
                dev = oComponent;
            }
        });
        return dev;
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