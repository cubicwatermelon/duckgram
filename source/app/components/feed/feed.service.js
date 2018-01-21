(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('FeedService', FeedService);

    FeedService.$inject = ['$http'];

    function FeedService($http) {

        var service = {
            getFeedByUserId: getFeedByUserId
        };
        return service;

        ////////////////

        function getFeedByUserId(id) {

            // `http://localhost:3000/users/${id}/feed`
            return $http.get('mocks/feed.json')
                        .then(success)
                        .catch(error);

                        function success(response) {
                            return response;
                        }

                        function error(error) {
                            console.error('XHR Failed for getFeedByUserId ' + error.data);
                        }

        }

    }
})();