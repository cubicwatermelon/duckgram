(function(){
	'use strict';

	angular
		.module('DuckgramApp')
		.config(config);

	config.$inject = ['$httpProvider'];

	function config($httpProvider) {

		// Config headers ( CORS )
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

	}

}());