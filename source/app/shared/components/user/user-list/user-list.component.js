(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userListComponent', {
                    bindings: {
                        externalData: '<',
                    },
                    controller  : userListController,
                    templateUrl : 'app/shared/components/user/user-list/user-list.html'
                });

    userListController.$inject = ['$stateParams', 'UserListService', 'UserLoggedServiceGeneric'];

    function userListController($stateParams, UserListService, UserLoggedServiceGeneric) {

        // vars
        const self = this;
        self.users = {};

        // functions
        self.$onInit = onInit;

        /////////////////////////////////

        function onInit() {

            if (hasExternalData()) {
                self.users = self.externalData;
            }else {
                const userId = $stateParams.id;
                const userStatus = $stateParams.status;
                findUsersByStatusAndId(userStatus, userId);
            }

        }

        function findUsersByStatusAndId(status, id = null) {

            const userId = id || UserLoggedServiceGeneric.getId();
            const userStatus = status;
            
            UserListService.findUsersByStatusAndId(userStatus, userId).then(
                function(response) {
                    self.users = response.data;
                }
            );

        }


        function hasExternalData() {
            return self.externalData !== undefined;
        }

    }

})();