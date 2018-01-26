(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('NotificationService', NotificationService);

    NotificationService.$inject = ['HttpGenericService'];

    function NotificationService(HttpGenericService) {

        var service = {
            lastedLikes: lastedLikes
        };
        return service;

        ////////////////

        function lastedLikes() {

            return HttpGenericService.get(`recent_likes`);
            
        }

    }
})();