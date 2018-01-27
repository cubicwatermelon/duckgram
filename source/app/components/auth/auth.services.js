(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$location', 'HttpGenericService', 'LocalStorageGenericService', 'UserLoggedServiceGeneric'];

    function AuthService($location, HttpGenericService, LocalStorageGenericService, UserLoggedServiceGeneric) {

        //vars
        var localStorageName = '_duck_logged_token';

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
            UserLoggedServiceGeneric.removeUserLogged();
            $location.path('/login');

        }

    }

})();