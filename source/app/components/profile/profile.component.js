(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('profileComponent', {
                    controller  : ProfileController,
                    templateUrl : 'app/components/profile/profile.html'
                });

    ProfileController.$inject = [];

    function ProfileController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
        }

    }

})();