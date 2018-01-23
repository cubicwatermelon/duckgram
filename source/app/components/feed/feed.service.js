(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('FeedService', FeedService);

    FeedService.$inject = ['HttpGenericService'];

    function FeedService(HttpGenericService) {

        var service = {
            getFeedByUserId: getFeedByUserId
        };
        return service;

        ////////////////

        function getFeedByUserId(id) {

            // `http://localhost:3000/users/${id}/feed`
            return HttpGenericService.get('mocks/feed.json');
            
        }

    }
})();