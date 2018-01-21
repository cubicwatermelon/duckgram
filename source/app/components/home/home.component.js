(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('homeComponent', {
                    controller  : homeController,
                    templateUrl : 'app/components/home/home.html'
                });

    homeController.$inject = [];

    function homeController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
        }

    }

})();