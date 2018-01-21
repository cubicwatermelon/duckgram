(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('UserLoggedService', UserLoggedService);

    UserLoggedService.$inject = ['LocalStorageGenericService'];

    function UserLoggedService(LocalStorageGenericService) {

        var service = {
            getId: getId,
            setId: setId
        };
        
        return service;

        ////////////////

        function getId() {
            return LocalStorageGenericService.find('userLoggedId');
        }

        function setId(id) {
            LocalStorageGenericService.insert('userLoggedId');
        }
    }
})();