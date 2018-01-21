(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$http'];

    function LoginService($http) {
        var service = {
            auth: auth
        };
        return service;

        ////////////////

        function auth() {
        }
    }
})();