(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('ButtonFollowService', ButtonFollowService);

    ButtonFollowService.$inject = ['HttpGenericService'];

    function ButtonFollowService(HttpGenericService) {
        var service = {
            follow: follow,
            isFollowing: isFollowing,
            unfollow: unfollow,
        };
        return service;

        ////////////////

        function isFollowing(id) {

            return HttpGenericService.get(`users/${id}/is_following`);

        }

        function follow(id) {

            return HttpGenericService.post(`users/${id}/follow`);

        }

        function unfollow(id) {

            return HttpGenericService.post(`users/${id}/unfollow`);

        }

    }
})();