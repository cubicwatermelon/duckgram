(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('notificationComponent', {
                    controller  : notificationController,
                    templateUrl : 'app/components/notification/notification.html'
                });

    notificationController.$inject = [];

    function notificationController() {

        // vars
        const self = this;

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
        }

    }

})();