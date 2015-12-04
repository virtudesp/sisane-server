'use strict';

var appName = 'AjaxStockNg';



// Declare app level module which depends on filters, and services
var openAusias = angular.module('myApp', [
    'ngRoute',
    //'myApp.filters',
    'services',
    //'myApp.directives',
    'usuarioControllers'
    //'ngSanitize' //http://stackoverflow.com/questions/9381926/insert-html-into-view-using-angularjs
]);

        openAusias.config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/usuario/view/:id', {templateUrl: 'js/usuario/view.html', controller: 'UsuarioViewController'});
                /*
                $routeProvider.when('/usuario/list/:numpage/:numrpp', {templateUrl: 'specific/documento/templates/clientelist.jsp', controller: 'controlClienteList'});
                $routeProvider.when('/usuario/edit/:id', {templateUrl: 'partials/clienteedit.jsp', controller: 'controlClienteEdit'});
                $routeProvider.when('/usuario/remove/:id', {templateUrl: 'partials/clienteremove.jsp', controller: 'controlClienteRemove'});
                $routeProvider.when('/usuario/compra/:id/:numpage/:numrpp', {templateUrl: 'partials/clientecompra.jsp', controller: 'controlClienteCompra'});
*/
                //claves ajenas: usar un módulo compartido para apuntarse la url de llamada: http://stackoverflow.com/questions/12008908/how-can-i-pass-variables-between-controllers-in-angularjs
                //ejemplo claves ajenas con objeto promesa: http://stackoverflow.com/questions/14530251/angular-js-model-relationships

/*
                $routeProvider.when('/producto/list/:numpage/:numrpp', {templateUrl: 'partials/productolist.jsp', controller: 'controlProductoList'});
                $routeProvider.when('/producto/view/:id', {templateUrl: 'partials/productoview.jsp', controller: 'controlProductoView'});
                $routeProvider.when('/producto/edit/:id', {templateUrl: 'partials/productoedit.jsp', controller: 'controlProductoEdit'});

                $routeProvider.when('/tipoproducto/list/:numpage/:numrpp', {templateUrl: 'partials/tipoproductolist.jsp', controller: 'controlTipoproductoList'});
                $routeProvider.when('/tipoproducto/view/:id', {templateUrl: 'partials/tipoproductoview.jsp', controller: 'controlTipoproductoView'});
                $routeProvider.when('/tipoproducto/selection/:numpage/:numrpp', {templateUrl: 'partials/tipoproductoselection.jsp', controller: 'controlTipoproductoSelection'});

                $routeProvider.when('/view2', {templateUrl: 'partials/partial2.jsp', controller: 'MyCtrl2'});
                */
                //$routeProvider.otherwise({redirectTo: '/view1'});
            }]);
