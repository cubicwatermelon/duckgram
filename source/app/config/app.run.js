(function(){
	'use strict';

	angular
		.module('DuckgramApp')
		.run(initApp);

	initApp.$inject = ['$rootScope', '$location', 'AuthService'];

	function initApp($rootScope, $location, AuthService) {

		$rootScope.$on('$stateChangeStart', function (event, toState) {

			var stateData = toState.data;

			if (stateData != undefined && stateData.authorize) {

				if (!AuthService.getToken()) {

					$rootScope.$evalAsync(function () {
						$location.path('/login');
					});

				}

			}

		});

	}

}());