(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['HttpGenericService'];

    function ProfileService(HttpGenericService) {

        var service = {
            findPostsByUserId: findPostsByUserId,
            findUserById: findUserById
        };
        return service;

        ////////////////

        function findPostsByUserId(id) {

            return HttpGenericService.get(`users/${id}/posts`);
            
        }

        function findUserById(id) {

            return HttpGenericService.get(`users/${id}`);
            
        }

    }
})();