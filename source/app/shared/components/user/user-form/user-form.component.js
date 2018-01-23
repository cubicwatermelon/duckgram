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
        self.data = {};

        // functions
        self.$onInit = onInit;
        self.executeCallback = executeCallback;

        /////////////////////////////////

        function onInit() {
        }

        function executeCallback() {

            self.submitFunction({
                    $event: {
                        data: self.data
                    }
                });

        }

    }

})();