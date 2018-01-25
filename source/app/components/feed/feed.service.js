(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('FeedService', FeedService);

    FeedService.$inject = ['HttpGenericService'];

    function FeedService(HttpGenericService) {

        var service = {
            findFeedByUserId: findFeedByUserId
        };
        return service;

        ////////////////

        function findFeedByUserId() {

            return HttpGenericService.get('feed');
            
        }

    }
})();