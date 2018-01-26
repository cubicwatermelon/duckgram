(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('notificationComponent', {
                    controller  : notificationController,
                    templateUrl : 'app/components/notification/notification.html'
                });

    notificationController.$inject = ['NotificationService'];

    function notificationController(NotificationService) {

        // vars
        const self = this;
        self.notifications = {};

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {
            lastedLikes();
        }

        function lastedLikes() {

            NotificationService.lastedLikes().then(
                function(response) {
                    self.notifications = response.data;
                }
            );

        }

    }

})();