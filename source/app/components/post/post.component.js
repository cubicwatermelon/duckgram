(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('postComponent', {
                    controller  : postController,
                    templateUrl : 'app/components/post/post.html'
                });

    postController.$inject = ['$location', 'PostService'];

    function postController($location, PostService) {

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
                        $location.path('/home');
                        self.post = {};
                    }

                }
            );

        }

    }

})();