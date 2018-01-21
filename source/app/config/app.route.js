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
	        })
	        .state('home.profile', {
	            url: '/profile',
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'profileComponent'
		            }
		        }
	        })
	        .state('home.config', {
	            url: '/config',
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'userPersonalDataComponent'
		            }
		        }
	        });

	    $stateProvider
	        .state('login', {
	            url: '/login',
	        	component: 'loginComponent'
	        });
    }

})();
