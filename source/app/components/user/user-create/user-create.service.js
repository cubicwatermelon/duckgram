(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('UserCreateService', UserCreateService);

    UserCreateService.$inject = ['HttpGenericService'];

    function UserCreateService(HttpGenericService) {
        var service = {
            addNewUser: addNewUser
        };
        return service;

        ////////////////

        function addNewUser(data) {

            return HttpGenericService.post('users', data);

        }

    }
})();