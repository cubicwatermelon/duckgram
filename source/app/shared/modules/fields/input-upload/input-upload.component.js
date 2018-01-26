(function() {
    'use strict';

    angular
        .module('DuckgramApp.fields')
        .component('inputUpload', {
			bindings: {
                inputText: '@',
                requiredWarning: '@',
                executeFunction: '&',
                isRequired: '@',
                label: '@'
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
        self.label = '';
        self.requiredWarning = '';
        self.hasError = false;
        self.value = '';
        self.progress = 0;

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
                uploadImage();
            }


		}

        function uploadImage() {

            //envia imagem
            Upload.upload({
                method: 'POST',
                url: 'http://duckgram.cubicwatermelon.com/service/duckgram/uploadfoto',
                data: {file: self.value }
            }).progress(function (evt) {
                self.progress = parseInt(100.0 * evt.loaded / evt.total);
            }).success(function (data, status, headers, config) {
                self.executeFunction();
                self.model.$setViewValue(data);
            }).error(function (data, status, headers, config) {
            });

        }

        function isRequired(value) {

            if (value !== undefined && value == true) {
                return true;
            }

           return false;
        }

    }

})();