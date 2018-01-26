(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('profileComponent', {
                    controller  : ProfileController,
                    templateUrl : 'app/components/profile/profile.html'
                });

    ProfileController.$inject = ['$stateParams', 'ProfileService', 'UserLoggedServiceGeneric', 'ObjectGenericService'];

    function ProfileController($stateParams, ProfileService, UserLoggedServiceGeneric, ObjectGenericService) {

        // vars
        const self = this;
        self.profile = {};
        self.profilePosts = {};

        // functions
        self.$onInit = onInit;
        self.lengthObject = lengthObject;

        /////////////////////////////////

        function onInit() {
            findUserById($stateParams.id);
            findPostsByUserId($stateParams.id);
        }

        function findUserById(id = null) {

            const userId = id || UserLoggedServiceGeneric.getId();
            
            ProfileService.findUserById(userId).then(
                function(response) {
                    self.profile = response.data;
                }
            );

        }


        function findPostsByUserId(id = null) {

            const userId = id || UserLoggedServiceGeneric.getId();
            
            ProfileService.findPostsByUserId(userId).then(
                function(response) {
                    self.profilePosts = response.data;
                }
            );

        }

        function lengthObject(data) {
            return ObjectGenericService.lengthObject(data);
        }

    }

})();