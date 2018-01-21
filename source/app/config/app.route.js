(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .config(RouterApp);

    RouterApp.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterApp($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/login');
	    $urlRouterProvider.when('/home', '/home/feed');

	    $stateProvider
	        .state('home', {
	            url: '/home',
	        	component: 'homeComponent',
		        abstract: true
	        })
	        .state('home.feed', {
	        	url: '/feed',
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'feedComponent'
		            }
		        }
	        });

	    $stateProvider
	        .state('login', {
	            url: '/login',
	        	component: 'loginComponent'
	        });

	    $stateProvider
	        .state('home.profile', {
	            url: '/profile',
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'profileComponent'
		            }
		        }
	        });
    }

})();
