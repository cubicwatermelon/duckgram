(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['HttpGenericService', '$q', 'LocalStorageGenericService'];

    function AuthService (HttpGenericService, $q, LocalStorageGenericService) {

        //vars
        var localStorageName = '_duck_logged_token';
        var loginProvider = '_login_provider';

        var service = {
            getToken: getToken,
            setToken: setToken,
            login: login,
            logout: logout
        };

        return service;

        ////////////////

        function getToken() {

            let valueToken = LocalStorageGenericService.find(localStorageName);

            if (valueToken == 'undefined' || valueToken === '') {
                logout();
                valueToken = null;
            }

            return valueToken;

        }

        function setToken(token) {
            LocalStorageGenericService.insert(localStorageName, token);
        }

        function login(data) {
            return HttpGenericService.post('authenticate', data);
        }

        function logout() {

            LocalStorageGenericService.remove(localStorageName);
            LocalStorageGenericService.remove(loginProvider);

            // resolve promise
            $q.when();

        }

    }

})();