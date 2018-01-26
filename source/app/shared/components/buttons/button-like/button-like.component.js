(function() {
    'use strict';

    angular
        .module('DuckgramApp')
                .component('buttonLikeComponent', {
                    bindings: {
                        autoLiked: '<',
                        executeFunction: '&',
                        postId:'@'
                    },
                    controller  : buttonLikeController,
                    templateUrl : 'app/shared/components/buttons/button-like/button-like.html'
                });

    buttonLikeController.$inject = ['$stateParams', 'ButtonLikeService'];

    function buttonLikeController($stateParams, ButtonLikeService) {

        // vars
        const self = this;
        self.classColorLiked = '';

        // functions
        self.$onInit = onInit;
        self.like = like;

        /////////////////////////////////

        function onInit() {

            if (isAutoLiked()) {
                self.classColorLiked = 'is-liked';
            }

        }

        function like() {

            if (isAutoLiked() === false) {
                sendLike();
            }

        }

        function sendLike() {

            const postId = self.postId;
            ButtonLikeService.like(postId).then(
                function(response) {

                    if (response.status == 204) {
                        self.classColorLiked = 'is-liked';
                        executeCallback();
                    }

                }
            );

        }

        function executeCallback() {

            const data = {'liked': true};
            self.executeFunction({
                    $event: {
                        data: data
                    }
                });

        }

        function isAutoLiked() {
            return self.autoLiked;
        }


    }

})();