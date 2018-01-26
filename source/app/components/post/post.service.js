(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('PostService', PostService);

    PostService.$inject = ['HttpGenericService'];

    function PostService(HttpGenericService) {

        var service = {
            create: create,
            findFeedByPostId: findFeedByPostId
        };
        return service;

        ////////////////

        function findFeedByPostId(id) {

            return HttpGenericService.get(`posts/${id}`);
            
        }

        function create(data) {

            return HttpGenericService.post('posts', data);
            
        }

    }
})();