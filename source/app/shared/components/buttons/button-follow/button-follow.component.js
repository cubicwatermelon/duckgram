(function() {
    'use strict';

    angular
        .module('DuckgramApp')
                .component('buttonFollowComponent', {
                    bindings: {
                        userId: '@'
                    },
                    controller  : buttonFollowController,
                    templateUrl : 'app/shared/components/buttons/button-follow/button-follow.html'
                });

    buttonFollowController.$inject = ['$stateParams', 'UserLoggedServiceGeneric', 'ButtonFollowService'];

    function buttonFollowController($stateParams, UserLoggedServiceGeneric, ButtonFollowService) {

        // vars
        const self = this;
        self.isHidden = false;
        self.state = 'follow';

        // functions
        self.$onInit = onInit;
        self.follow = follow;
        self.unfollow = unfollow;

        /////////////////////////////////

        function onInit() {

            if (isHiddenButtonUserLogged()) {
                self.isHidden = true;
            } else {
                isFollowing(self.userId)
            }

        }

        function isFollowing(userId) {

            ButtonFollowService.isFollowing(userId).then(
                function(response) {

                    const isFollowing = response.data.following;
                    if (response.status == 200 && isFollowing) {
                       self.state = 'unfollow';
                    }

                }
            );
        }

        function follow(userId) {

            ButtonFollowService.follow(userId).then(
                function(response) {

                    if (response.status == 204) {
                       self.state = 'unfollow';
                    }

                }
            );
        }

        function unfollow(userId) {

            ButtonFollowService.unfollow(userId).then(
                function(response) {

                    if (response.status == 204) {
                        self.state = 'follow';
                    }
                }
            );
        }

        function isHiddenButtonUserLogged() {
            return self.userId == UserLoggedServiceGeneric.getId();
        }


    }

})();