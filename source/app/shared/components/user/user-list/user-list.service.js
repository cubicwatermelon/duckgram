(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('UserListService', UserListService);

    UserListService.$inject = ['HttpGenericService'];

    function UserListService(HttpGenericService) {

        var service = {
            findUsersByStatusAndId: findUsersByStatusAndId
        };
        return service;

        ////////////////

        function findUsersByStatusAndId(status, id) {

            return HttpGenericService.get(`users/${id}/${status}`);
            
        }

    }
})();