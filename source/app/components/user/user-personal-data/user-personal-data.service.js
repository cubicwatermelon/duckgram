(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('UserPersonalDataService', UserPersonalDataService);

    UserPersonalDataService.$inject = ['HttpGenericService'];

    function UserPersonalDataService(HttpGenericService) {

        var service = {
            findUserById: findUserById,
            updateUserData: updateUserData
        };
        return service;

        ////////////////

        function findUserById(id) {

            return HttpGenericService.get(`users/${id}`);
            
        }

        function updateUserData(data) {

            return HttpGenericService.put(`users/${data.user.id}`, data);
            
        }

    }
})();