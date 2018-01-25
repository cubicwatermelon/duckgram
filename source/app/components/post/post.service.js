(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('PostService', PostService);

    PostService.$inject = ['HttpGenericService'];

    function PostService(HttpGenericService) {

        var service = {
            create: create
        };
        return service;

        ////////////////

        function create(data) {

            return HttpGenericService.post('posts', data);
            
        }

    }
})();