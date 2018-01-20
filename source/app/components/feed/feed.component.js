(function() {
    'use strict';

    angular
        .module('InstaPhoto')
            .component('feedComponent', {
                    templateUrl : 'app/components/feed/feed.html',
                    controller  : FeedController
                });

    FeedController.$inject = [];

    function FeedController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
            
        }

    }

})();