(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userCreateComponent', {
                    controller  : userCreateController,
                    templateUrl : 'app/components/user/user-create/user-create.html'
                });

    userCreateController.$inject = ['$location', 'UserCreateService', 
                                        'AuthService', 'UserLoggedServiceGeneric', 'LocalStorageGenericService'];

    function userCreateController($location, UserCreateService, 
                                        AuthService, UserLoggedServiceGeneric, LocalStorageGenericService) {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;
        self.addNewUser = addNewUser;

        /////////////////////////////////

        function onInit() {
        }

        function addNewUser(userData) {
            
            const data = {user: userData};

            UserCreateService.addNewUser(data).then(
                function(response){
                    
                    if (response.status == 201) {
                        redirectToLogin(userData);
                    }

                }
            );
        }

        function redirectToLogin(data) {

            AuthService.login(data).then(
                function(response) {
                    
                    const accessToken = response.data.access_token;
                    const userId = response.data.user_id;
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