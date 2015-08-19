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
    var components = [];
    ausiasFLOW.initialize = function () {
        //comprobar al menos que haya dos argumentos
        var userModule = arguments[0];
        var placeSelector = arguments[1];
        //userModule.prototype = Object.create(ParentModule.prototype);
        var m = new userModule;
        m.id = components.length;
        m.place = placeSelector;
        components.push(m);
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
        if ('initialize' in m) {
            m.initialize();
        }
        if ('render' in m) {
            m.place.empty().append(m.render());
        }
        if ('fill' in m) {
            m.fill();
        }
        if ('bind' in m) {
            m.bind();
        }
        //ofrecerse en menus
        //toolbar expose
        //menubar
        //icon
        return m;
    };

    ausiasFLOW.renderComponent = function (p) {
        if ('render' in components[p.id]) {
            components[p.id].place.empty().append(components[p.id].render());
        }
        if ('bind' in components[p.id]) {
            components[p.id].bind();
        }
    };
    ausiasFLOW.getId = function (p) {
        return p.id;
    }
    ausiasFLOW.renderPage = function () {
        components.forEach(function (entry) {
            //console.log("========================");
            //console.log("num:    " + entry.id);
            //console.log("dom:    " + $(entry.place).html());
            //console.log("render: " + $('<div/>').html(entry.render()).html()); 
            if ('render' in entry) {
                var renderization = entry.render();
                if ($(entry.place).html() != $('<div/>').html(renderization).html()) {
                    //console.log("  -- rendering:    " + entry.id);
                    entry.place.empty().append(renderization);
                    if ('bind' in entry) {
                        entry.bind();
                    }
                }
            }
        });
    };
})();