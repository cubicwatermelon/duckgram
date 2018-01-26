(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userCreateComponent', {
                    controller  : userCreateController,
                    templateUrl : 'app/components/user/user-create/user-create.html'
                });

    userCreateController.$inject = ['UserCreateService'];

    function userCreateController(UserCreateService) {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;
        self.addNewUser = addNewUser;

        /////////////////////////////////

        function onInit() {
        }

        function addNewUser(event) {
            
            const data = {user: event.data};

            UserCreateService.addNewUser(data).then(
                function(response){
                    
                    if (response.status == 200) {
                        
                    }

                    if (response.status == 500) {
                        console.log('Usuário ja cadastrado');
                    }

                }
            );
        }

    }

})();