(function(){
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('ObjectGenericService', ObjectGenericService)

    ObjectGenericService.$inject = [];

    function ObjectGenericService() {

        var service = {
            lengthObject: lengthObject
        };

        return service;

        ///////////////////////////////////////

        function lengthObject(objectParam) {

            let object = objectParam || {};

            return Object.keys(object).length;
        }

    }
})();
