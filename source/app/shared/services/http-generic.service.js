(function(){
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('HttpGenericService', HttpGenericService)

    HttpGenericService.$inject = ['$http', 'AlertService'];

    function HttpGenericService($http, AlertService) {

        // vars local
        const baseUrl = 'https://duckgram-api.herokuapp.com/api/v1';

        var service = {
            get: find,
            post: insert,
            put: update,
            delete: remove
        };

        return service;

        ///////////////////////////////////////

        function find(url = '') {

            return $http.get(`${baseUrl}/${url}`)
                        .then(success)
                        .catch(error);

                        function success(response) {
                            return response;
                        }

                        function error(error) {
                            AlertService.show('Ops, algo deu errado!', 'alert-danger');
                            console.error(`XHR Failed GET ${url}`, error.data);
                        }

        }        

        function insert(url = '', data = {}) {

            return $http.post(`${baseUrl}/${url}`, data)
                        .then(success)
                        .catch(error);

                        function success(response) {
                            return response;
                        }

                        function error(error) {
                            AlertService.show('Ops, algo deu errado!', 'alert-danger');
                            console.error(`XHR Failed POST ${url}`, error.data);
                        }

        }

        function update(url = '', data = {}) {

            return $http.put(`${baseUrl}/${url}`, data)
                        .then(success)
                        .catch(error);

                        function success(response) {
                            return response;
                        }

                        function error(error) {
                            AlertService.show('Ops, algo deu errado!', 'alert-danger');
                            console.error(`XHR Failed PUT ${url}`, error.data);
                        }
        }

        function remove(url = '') {

            return $http.delete(`${baseUrl}/${url}`)
                        .then(success)
                        .catch(error);

                        function success(response) {
                            return response;
                        }

                        function error(error) {
                            AlertService.show('Ops, algo deu errado!', 'alert-danger');
                            console.error(`XHR Failed DELETE ${url}`, error.data);
                        }
        }

    }
})();
