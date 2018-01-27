(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .config(RouterApp);

    RouterApp.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterApp($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.when('/home', '/home/feed');

	    $stateProvider
	        .state('home', {
	            url: '/home',
	        	component: 'homeComponent',
		        abstract: true,
			    data: {
			        authorize: true
			    },
	        })
	        .state('home.feed', {
	        	url: '/feed',
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'feedComponent'
		            }
		        },
	        })
	        .state('home.profile', {
	            url: '/profile/{id}',
				params: {
					id: { value: null }
				},
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'profileComponent'
		            }
		        }
	        })
	        .state('home.post', {
	            url: '/post',
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'postComponent'
		            }
		        }
	        })
	        .state('home.postview', {
	            url: '/postview/{id}',
				params: {
					id: { value: null }
				},
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'feedComponent'
		            }
		        },
	        })
	        .state('home.notification', {
	            url: '/notification',
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'notificationComponent'
		            }
		        }
	        })
	        .state('home.users', {
	            url: '/users/:status/{id}',
				params: {
					id: { value: null }
				},
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'userListComponent'
		            }
		        }
	        })
	        .state('home.usersearch', {
	            url: '/users/search/{search}',
				params: {
					search: { value: null }
				},
		        views: {
		            'homeView': { 
			            url: '/',
			        	component: 'userSearchComponent'
		            }
		        }
	        });
	        
    }

})();
