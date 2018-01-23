(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .component('authComponent', {
            controller: AuthController,
            templateUrl : 'app/components/auth/auth.html'
        });

    AuthController.$inject = [];

    function AuthController() {

        // vars
        const self = this;
        self.user = {'name': '', 'password': ''};

        // functions
        self.$onInit = onInit;
        self.login = login;

        /////////////////////////////////

        function onInit() {
        }

        function login(data) {

            console.log(data);

        }

    }

})();