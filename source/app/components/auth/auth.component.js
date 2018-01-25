(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .component('authComponent', {
            controller: AuthController,
            templateUrl : 'app/components/auth/auth.html'
        });

    AuthController.$inject = ['$location', 'AuthService', 'UserLoggedServiceGeneric'];

    function AuthController($location, AuthService, UserLoggedServiceGeneric) {

        // vars
        const self = this;
        self.user = {'email': '', 'password': ''};

        // functions
        self.$onInit = onInit;
        self.login = login;

        /////////////////////////////////

        function onInit() {

            const accessToken = AuthService.getToken();
            if (accessToken) {
                $location.path('/home');
            }

        }

        function login(data) {

            AuthService.login(data).then(
                function(response){
                    
                    const accessToken = response.data.access_token;
                    const userId = response.data.id;
                    if (response.status == 200 && accessToken) {
                        AuthService.setToken(accessToken);
                        UserLoggedServiceGeneric.setId(userId);
                        $location.path('/home');
                    }

                }
            );
        }

    }

})();