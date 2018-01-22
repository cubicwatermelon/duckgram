(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('postComponent', {
                    controller  : postController,
                    templateUrl : 'app/components/post/post.html'
                });

    postController.$inject = [];

    function postController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;
        self.addNewPost = addNewPost;

        /////////////////////////////////

        function onInit() {
        }

        function addNewPost() {
            console.log('new post');
        }

    }

})();