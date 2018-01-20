(function() {
    'use strict';

    angular
        .module('InstaPhoto')
        .config(RouterApp);

    RouterApp.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterApp($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/feed');

	    $stateProvider
	        .state('feed', {
	            url: '/feed',
	        	component: 'feedComponent',
	        });
	        
    }

})();
