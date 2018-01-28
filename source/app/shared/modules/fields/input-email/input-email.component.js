(function() {
    'use strict';

    angular
        .module('DuckgramApp.fields')
        .component('inputEmail', {
			bindings: {
				label: '@',
                isRequired: '<',
				requiredWarning: '@'
			},
			require: {
				model: 'ngModel'
			},
			controller: InputEmailController,
            templateUrl: 'app/shared/modules/fields/input-text/input-text.html'
        });

    InputEmailController.$inject = [];

    function InputEmailController() {

        // vars
        const self = this;
        self.hasError = false;
        let isRequired = isInputRequired(self.isRequired);

        // functions
        self.$onInit = onInit;
        self.onChange = onChange;

        /////////////////////////////////

        function onInit() {
            this.model.$render = () => {

                if (self.model.$viewValue) {
                    self.value = self.model.$viewValue;
                    onChange();
                }
                
            }
        }

        function onChange() {

            if (!validateEmail(self.value)) {
                self.hasError = true;
                self.model.$setValidity('required', false);
            } else {
                self.hasError = false;
                self.model.$setValidity('required', true);
            }

            self.model.$setViewValue(self.value);
        }

        function isInputRequired(required) {

            if (required !== undefined || required) {
                return true;
            }

           return false;
        }

        function validateEmail(email) {
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(String(email).toLowerCase());
        }

    }

})();