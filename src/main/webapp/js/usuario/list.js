/* 
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */


'use strict';

/* Controllers */

var moduloCliente = angular.module('myApp.clienteControllers', []);



moduloCliente.controller('controlClienteList', function ($scope, $routeParams, serverService) {
    $scope.clase = "cliente";
    $scope.accion = "list";


    $scope.filter = "";
    $scope.filteroperator = "";
    $scope.filtervalue = "";
    $scope.systemfilter = "";
    $scope.systemfilteroperator = "";
    $scope.systemfiltervalue = "";


    $scope.numPagina = $routeParams.numpage;
    $scope.nrpp = $routeParams.numrpp;
    $scope.botoneraNrpp = serverService.getNrppBar($scope.clase, $scope.accion, $scope.numPagina, $scope.nrpp);

    $scope.pages = serverService.getPages($scope.clase, $scope.nrpp, null, null, null, null, null, null).then(function (datos5) {
        $scope.pages = datos5['data'];
        if (parseInt($scope.numPagina) > parseInt($scope.pages))
            $scope.numPagina = $scope.pages;
        //$location.path( "#/clientes/" +$scope.pages + "/" + $scope.pages);
    });

    $scope.$watch('pages', function () {
        $scope.$broadcast('myApp.construirBotoneraPaginas');
    }, true)

    $scope.$on('myApp.construirBotoneraPaginas', function () {
        $scope.botoneraPaginas = serverService.getPaginationBar($scope.clase, $scope.accion, $scope.numPagina, $scope.pages, 2, $scope.nrpp);
    })

    $scope.prettyFieldNames = serverService.getPrettyFieldNames($scope.clase).then(function (datos4) {
        datos4['data'].push('acciones');
        $scope.prettyFieldNames = datos4['data'];
    });

    $scope.clientes = serverService.getPage($scope.clase, $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function (datos3) {
        $scope.clientes = datos3['list'];

    });

    $scope.fieldNames = serverService.getFieldNames($scope.clase).then(function (datos6) {
        $scope.fieldNames = datos6['data'];
        $scope.selectedFilterFieldName = null;
    });


    $scope.$watch('numPagina', function () {
        $scope.$broadcast('myApp.construirPagina');
    }, true)

    $scope.$on('myApp.construirPagina', function () {

        $scope.clientes = serverService.getPage($scope.clase, $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function (datos3) {
            $scope.clientes = datos3['list'];

        });

    })

    $scope.filtrar = function () {
        alert("f")


    };


});