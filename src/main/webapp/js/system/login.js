'use strict';
moduloSistema.controller('LoginController', ['$scope', '$routeParams', '$location', 'serverService', 'sessionService',
    function ($scope, $routeParams, $location, serverService, sessionService) {

        $scope.title = "Formulario de entrada al sistema";
        $scope.icon = "fa-file-text-o";

        $scope.user = {};
        $scope.user.username = 'rafael';
        $scope.user.password = 'rafael';



        $scope.login = function () {

            serverService.getDataFromPromise(serverService.getLoginPromise($scope.user.username, $scope.user.password)).then(function (response) {
                if (response) {
                    sessionService.setSessionActive();
                    sessionService.setUsername(response.message);
                    $location.path('home');
                } else {
                    sessionService.setSessionInactive();
                    sessionService.setUsername('');
                }
            });
        };

    }
]
        );


