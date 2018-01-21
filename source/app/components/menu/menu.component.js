(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('menuComponent', {
                    controller  : menuController,
                    templateUrl : 'app/components/menu/menu.html'
                });

    menuController.$inject = [];

    function menuController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
        }

    }

})();