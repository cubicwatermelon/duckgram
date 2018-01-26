(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('UserLoggedServiceGeneric', UserLoggedServiceGeneric);

    UserLoggedServiceGeneric.$inject = ['LocalStorageGenericService'];

    function UserLoggedServiceGeneric(LocalStorageGenericService) {

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
            LocalStorageGenericService.insert('userLoggedId', id);
        }
    }
})();