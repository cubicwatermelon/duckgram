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
            signIn  : signIn,
            logout  : logout
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

        function signIn(data) {
            return HttpGenericService.post('auth/auth', data);
        }

        function logout() {

            LocalStorageGenericService.remove(localStorageName);
            LocalStorageGenericService.remove(loginProvider);

            // resolve promise
            $q.when();

        }

    }

})();