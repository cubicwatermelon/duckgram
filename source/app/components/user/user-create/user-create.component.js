(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userCreateComponent', {
                    controller  : userCreateController,
                    templateUrl : 'app/components/user/user-create/user-create.html'
                });

    userCreateController.$inject = [];

    function userCreateController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;
        self.addUser = addUser;

        /////////////////////////////////

        function onInit() {
        }

        function addUser() {
            console.log('update');
        }

    }

})();