'use strict';
moduloSistema.controller('LogoutController', ['$scope', '$routeParams', '$location', 'serverService', 'sessionService',
    function ($scope, $routeParams, $location, serverService, sessionService) {

        $scope.title = "Bye";
        $scope.icon = "fa-file-text-o";


        serverService.getDataFromPromise(serverService.getLogoutPromise()).then(function (response) {
            if (response) {
                sessionService.setSessionInactive();
                sessionService.setUsername('');

                $location.path('home');
            } else {
                sessionService.setSessionInactive();
                sessionService.setUsername('');
            }
        });

    }
]
        );


