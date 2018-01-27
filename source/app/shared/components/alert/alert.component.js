(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .component('alertComponent', {
            controller: AlertController,
            templateUrl : 'app/shared/components/alert/alert.html'
        });

    AlertController.$inject = ['$scope', '$timeout'];

    function AlertController($scope, $timeout) {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
            activeAlert();
        }

        function activeAlert() {

            let timeoutClear = null;

            $scope.$on('duckgram:alertMessage', function(event, data) {
                $timeout.cancel(timeoutClear);
                self.message = data.message;
                self.classActive = `${data.classActive} c-alert-fadein`;
                timeoutClear = $timeout(function() {
                    self.classActive = `${data.classActive} c-alert-fadeout`;
                }, 5000);
            });

        }

    }

})();