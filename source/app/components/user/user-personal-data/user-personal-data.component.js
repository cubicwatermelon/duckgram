(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userPersonalDataComponent', {
                    controller  : userPersonalDataController,
                    templateUrl : 'app/components/user/user-personal-data/user-personal-data.html'
                });

    userPersonalDataController.$inject = ['UserPersonalDataService', 'UserLoggedServiceGeneric', 'ObjectGenericService'];

    function userPersonalDataController(UserPersonalDataService, UserLoggedServiceGeneric, ObjectGenericService) {

        // vars
        const self = this;
        self.user = {};

        // functions
        self.$onInit = onInit;
        self.lengthObject = lengthObject;
        self.updateUserData = updateUserData;

        /////////////////////////////////

        function onInit() {
            findUserById();
        }

        function findUserById() {

            const userId = UserLoggedServiceGeneric.getId();
            
            UserPersonalDataService.findUserById(userId).then(
                function(response) {
                    self.user = response.data;
                }
            );

        }

        function lengthObject(data) {
            return ObjectGenericService.lengthObject(data);
        }

        function updateUserData(event) {

            const data = {user: event.data};

            UserPersonalDataService.updateUserData(data).then(
                function(response){
                    
                    if (response.status == 204) {
                        self.user.password = '';
                    }

                }
            );

        }

    }

})();