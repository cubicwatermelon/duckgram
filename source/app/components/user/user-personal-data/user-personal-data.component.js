(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userPersonalDataComponent', {
                    controller  : userPersonalDataController,
                    templateUrl : 'app/components/user/user-personal-data/user-personal-data.html'
                });

    userPersonalDataController.$inject = ['UserPersonalDataService', 'UserLoggedServiceGeneric'];

    function userPersonalDataController(UserPersonalDataService, UserLoggedServiceGeneric) {

        // vars
        const self = this;
        self.user = {};

        // functions
        self.$onInit = onInit;
        self.removeImage = removeImage;
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

        function removeImage() {
            self.user.avatar = null;
        }

        function updateUserData(userData) {

            const data = {user: userData};

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