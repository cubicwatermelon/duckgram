(function(){
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('LocalStorageGenericService', LocalStorageGenericService);

    LocalStorageGenericService.$inject = [];

    function LocalStorageGenericService() {

        // vars local
        const prefix = 'duckgram';

        var service = {
            insert: insert,
            find: find,
            update: update,
            remove: remove,
            clearAll: clearAll,
            isSupported: isSupported
        };

        return service;

        ///////////////////////////////////////

        function insert(name, value) {
            localStorage.setItem(`${prefix}${name}`, value);
        }        

        function find(name) {
            return localStorage.getItem(`${prefix}${name}`);
        }

        function update(name, value) {
            localStorage.setItem(`${prefix}${name}`, value);
        }

        function remove(name) {
            localStorage.removeItem(`${prefix}${name}`);
        }

        function clearAll() {
            localStorage.clear();
        }

        function isSupported() {

            try {
                localStorage.setItem(`${prefix}__test`, 'data');
            } catch (e) {
                return false;
            }

            return true;
        }

    }
})();
