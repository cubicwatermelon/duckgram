(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .component('loginComponent', {
            controller: LoginController,
            templateUrl : 'app/components/login/login.html'
        });

    LoginController.$inject = [];

    function LoginController() {

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