(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .config(RouterApp);

    RouterApp.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterApp($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/login');

	    $stateProvider
	        .state('login', {
	            url: '/login',
	        	component: 'loginComponent'
	        });

	    $stateProvider
	        .state('join', {
	            url: '/join',
	        	component: 'userCreateComponent'
	        });
    }

})();
