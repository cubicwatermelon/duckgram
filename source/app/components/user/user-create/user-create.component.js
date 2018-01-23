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
            const data = event.data;

            UserCreateService.addNewUser(data).then(
                function(response){
                    
                    if (response.data == 200) {
                        
                    }

                }
            );
        }

    }

})();