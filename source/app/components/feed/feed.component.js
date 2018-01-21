(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('feedComponent', {
                    controller  : FeedController,
                    templateUrl : 'app/components/feed/feed.html'
                });

    FeedController.$inject = ['FeedService', 'UserLoggedService'];

    function FeedController(FeedService, UserLoggedService) {

        // vars
        const self = this;
        self.posts = [];

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {

            const userId = UserLoggedService.getId();
            
            FeedService.getFeedByUserId(userId).then(
                function(response) {
                    self.posts = response.data.feed;
                }
            );
            
        }

    }

})();