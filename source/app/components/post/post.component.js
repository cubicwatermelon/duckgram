(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('postComponent', {
                    controller  : postController,
                    templateUrl : 'app/components/post/post.html'
                });

    postController.$inject = ['$location', 'PostService', 'AlertService'];

    function postController($location, PostService, AlertService) {

        // vars
        const self = this;
        self.post = {'description': '', 'picture': ''};

        // functions
        self.$onInit = onInit;
        self.createNewPost = createNewPost;

        /////////////////////////////////

        function onInit() {
        }

        function createNewPost(data) {

            PostService.create(data).then(
                function(response) {

                    if (response.status == 201) {
                        AlertService.show('uhull! post enviado!', 'alert-success');
                        $location.path('/home');
                        self.post = {};
                    }

                }
            );

        }

    }

})();