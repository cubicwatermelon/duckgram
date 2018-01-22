(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('slidebarComponent', {
                    controller  : slidebarController,
                    templateUrl : 'app/components/slidebar/slidebar.html'
                });

    slidebarController.$inject = [];

    function slidebarController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
        }

    }

})();