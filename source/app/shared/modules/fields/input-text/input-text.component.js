(function() {
    'use strict';

    angular
        .module('DuckgramApp.fields')
        .component('inputText', {
			bindings: {
				label: '@',
                isRequired: '<',
				requiredWarning: '@'
			},
			require: {
				model: 'ngModel'
			},
			controller: InputTextController,
            templateUrl: 'app/shared/modules/fields/input-text/input-text.html'
        });

    InputTextController.$inject = [];

    function InputTextController() {

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
                    return;
                }

                onChange();
                
            }
        }

        function onChange() {

            if (isRequired || self.value == '') {
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

    }

})();