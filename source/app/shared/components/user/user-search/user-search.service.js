(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('UserSearchService', UserSearchService);

    UserSearchService.$inject = ['HttpGenericService'];

    function UserSearchService(HttpGenericService) {

        var service = {
            findUsers: findUsers
        };
        return service;

        ////////////////

        function findUsers() {

            return HttpGenericService.get('users');
            
        }

    }
})();