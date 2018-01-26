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

        // requests ok
		function request(config) {
			
			// verifica se existe cabecalho
			config.headers = config.headers || {};

			// se existir vê se existe token 
			// se existir adiciona ao cabeçalho da requisiçao
			if ($injector.get('AuthService').getToken()) {
				config.headers['Authorization'] = $injector.get('AuthService').getToken();
			}

			return config;

		}

		// request retorna erro
		function responseError(response) {

			// se erro retornado for um desses
			// manda para rota de login padrao
			if (response.status === 500) {

				$injector.get('AuthService').logout();
				$location.path('/login');

			}

			return $q.reject(response);

		}

    }

})();