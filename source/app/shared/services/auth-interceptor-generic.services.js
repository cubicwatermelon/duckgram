(function() {
    'use strict';

    angular
        .module('DuckgramApp')
        .factory('AuthInterceptorGeneric', AuthInterceptorGeneric);

    AuthInterceptorGeneric.$inject = ['$location', '$injector', '$q'];

    function AuthInterceptorGeneric($location, $injector, $q) {

        var service = {
            request: request,
            responseError: responseError
        };
        return service;

		function request(config) {
			
			config.headers = config.headers || {};

			if ($injector.get('AuthService').getToken()) {
				config.headers['Authorization'] = $injector.get('AuthService').getToken();
			}

			return config;

		}

		function responseError(response) {

			if (response.status === 500 || response.status === 404) {

				$injector.get('AuthService').logout();
				$location.path('/login');

			}

			return $q.reject(response);

		}

    }

})();