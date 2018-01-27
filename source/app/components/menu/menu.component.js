(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('menuComponent', {
                    controller  : menuController,
                    templateUrl : 'app/components/menu/menu.html'
                });

    menuController.$inject = ['AuthService'];

    function menuController(AuthService) {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;
        self.logout = logout;

        /////////////////////////////////

        function onInit() {
        }

        function logout() {
            AuthService.logout();
        }

    }

})();