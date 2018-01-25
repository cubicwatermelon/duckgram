(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userFormComponent', {
                    bindings: {
                        buttonValue: '@',
                        formData: '<',
                        submitFunction: '&',
                        title: '@'
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

            if (hasFormData()) {
                self.data = self.formData;
            }
            
        }

        function executeCallback() {

            self.submitFunction({
                    $event: {
                        data: self.data
                    }
                });

        }

        function hasFormData() {
            return self.formData !== undefined;
        }

    }

})();