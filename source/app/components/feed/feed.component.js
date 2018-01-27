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

    FeedController.$inject = ['$stateParams', '$scope','FeedService', 
                                    'PostService', 'UserLoggedServiceGeneric'];

    function FeedController($stateParams, $scope, FeedService, 
                                    PostService, UserLoggedServiceGeneric) {

        // vars
        const self = this;
        self.posts = {};

        // functions
        self.$onInit = onInit;
        self.like = like;

        /////////////////////////////////

        function onInit() {

            if (hasExternalPosts()) {
                self.posts = self.externalPosts;
                return;
            }

            if (hasViewUniquePost()) {
                findFeedByPostId($stateParams.id);
                return;
            }
            
            findFeedByUserId();

        }

        function findFeedByUserId() {

            const userId = UserLoggedServiceGeneric.getId();
            
            FeedService.findFeedByUserId().then(
                function(response) {
                    self.posts = response.data;
                }
            );

        }

        function findFeedByPostId(id) {
            
            PostService.findFeedByPostId(id).then(
                function(response) {
                    self.posts = {data: response.data};
                }
            );

        }

        function hasExternalPosts() {
            return self.externalPosts !== undefined;
        }

        function hasViewUniquePost() {
            return $stateParams.id !== undefined;
        }

        function like(event, positionPost) {

            if (event.data.liked) {
                self.posts[positionPost].likes++;
            }

        }

    }

})();