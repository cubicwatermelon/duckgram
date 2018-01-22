(function() {
    'use strict';

    angular
        .module('DuckgramApp.fields')
        .component('inputUpload', {
			bindings: {
                label: '@',
				inputText: '@',
                isRequired: '@',
				requiredWarning: '@',
                isDropActive: '@'
			},
			require: {
				model: 'ngModel'
			},
			controller: InputUploadController,
            templateUrl: 'app/shared/modules/fields/input-upload/input-upload.html'
        });

    InputUploadController.$inject = ['Upload'];

    function InputUploadController(Upload) {

        // vars
        const self = this;
        self.isDropActive = true;
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