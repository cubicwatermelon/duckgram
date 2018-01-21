(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('slidebarComponent', {
                    controller  : slideController,
                    templateUrl : 'app/components/slidebar/slidebar.html'
                });

    slideController.$inject = [];

    function slideController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
        }

    }

})();