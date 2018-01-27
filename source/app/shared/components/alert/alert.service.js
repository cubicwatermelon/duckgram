(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('AlertService', AlertService);

    AlertService.$inject = ['$rootScope'];

    function AlertService($rootScope) {

        var service = {
            show: show
        };
        return service;

        ////////////////

        function show(message, color) {
            $rootScope.$broadcast('duckgram:alertMessage', {'message': message, 'classActive': color});
        }
    }
})();