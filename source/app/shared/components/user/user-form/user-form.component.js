(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userFormComponent', {
                    bindings: {
                        title: '@',
                        buttonValue: '@',
                        submitFunction: '&'
                    },
                    controller  : userFormController,
                    templateUrl : 'app/shared/components/user/user-form/user-form.html'
                });

    userFormController.$inject = [];

    function userFormController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
        }

    }

})();