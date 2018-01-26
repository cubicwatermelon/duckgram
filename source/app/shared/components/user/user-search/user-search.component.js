(function() {
    'use strict';

    angular
        .module('DuckgramApp')
            .component('userSearchComponent', {
                    bindings: {
                        onlySearch: '<'
                    },
                    controller  : UserSearchController,
                    templateUrl : 'app/shared/components/user/user-search/user-search.html'
                });

    UserSearchController.$inject = ['$stateParams', '$location', 'UserSearchService'];

    function UserSearchController($stateParams, $location, UserSearchService) {

        // vars
        const self = this;
        self.users = {};
        self.searchInput = $stateParams.search || '';
        self.onlySearch = false;

        // functions
        self.$onInit = onInit;
        self.findUserByValue = findUserByValue;

        /////////////////////////////////

        function onInit() {

            if (!self.onlySearch) {
                findUsers();
            }

        }

        function findUsers() {
            
            UserSearchService.findUsers().then(
                function(response) {
                    self.users = response.data;
                }
            );

        }

        function findUserByValue(data) {
            $location.path(`/home/users/search/${data}`);
        }

    }

})();