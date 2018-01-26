(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('ButtonLikeService', ButtonLikeService);

    ButtonLikeService.$inject = ['HttpGenericService'];

    function ButtonLikeService(HttpGenericService) {
        var service = {
            like: like
        };
        return service;

        ////////////////

        function like(id) {

            return HttpGenericService.post(`posts/${id}/like`);

        }

    }
})();