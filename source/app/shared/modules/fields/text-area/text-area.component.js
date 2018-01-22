(function() {
    'use strict';

    angular
        .module('DuckgramApp.fields')
        .component('textArea', {
            bindings: {
                label: '@',
                isRequired: '@',
                requiredWarning: '@'
            },
            require: {
                model: 'ngModel'
            },
            controller: textAreaController,
            templateUrl: 'app/shared/modules/fields/text-area/text-area.html'
        });

    textAreaController.$inject = [];

    function textAreaController() {

        // vars
        const self = this;
        self.label = '';
        self.requiredWarning = '';
        self.hasError = false;
        self.value = '';

        // functions
        self.$onInit = onInit;
        self.onChange = onChange;

        /////////////////////////////////

        function onInit() {
            this.model.$render = () => {
                self.value = self.model.$viewValue;
                self.model.$setValidity('required', isRequired(self.isRequired));
            }
        }

        function onChange() {

            if (self.value == '') {
                self.hasError = true;
                self.model.$setValidity('required', false);
            } else {
                self.hasError = false;
                self.model.$setValidity('required', true);
            }

            self.model.$setViewValue(self.value);
        }

        function isRequired(value) {

            if (value !== undefined && value == true) {
                return true;
            }

           return false;
        }

    }

})();