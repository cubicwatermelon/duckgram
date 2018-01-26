(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('feedComponent', {
                    bindings: {
                        externalPosts: '<'
                    },
                    controller  : FeedController,
                    templateUrl : 'app/components/feed/feed.html'
                });

    FeedController.$inject = ['$scope','FeedService', 'UserLoggedServiceGeneric'];

    function FeedController($scope, FeedService, UserLoggedServiceGeneric) {

        // vars
        const self = this;
        self.posts = [];

        // functions
        self.$onInit = onInit;
        self.like = like;

        /////////////////////////////////

        function onInit() {

            if (hasExternalPosts()) {
                self.posts = self.externalPosts;
            } else {
                findFeedByUserId();
            }

        }

        function findFeedByUserId() {

            const userId = UserLoggedServiceGeneric.getId();
            
            FeedService.findFeedByUserId().then(
                function(response) {
                    self.posts = response.data;
                }
            );

        }

        function hasExternalPosts() {
            return self.externalPosts !== undefined;
        }

        function like(event, positionPost) {

            if (event.data.liked) {
                self.posts[positionPost].likes++;
            }

        }

    }

})();