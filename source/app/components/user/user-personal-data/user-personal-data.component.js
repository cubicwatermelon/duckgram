(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userPersonalDataComponent', {
                    controller  : userPersonalDataController,
                    templateUrl : 'app/components/user/user-personal-data/user-personal-data.html'
                });

    userPersonalDataController.$inject = [];

    function userPersonalDataController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;
        self.updateUserData = updateUserData;

        /////////////////////////////////

        function onInit() {
        }

        function updateUserData() {
            console.log('update');
        }

    }

})();