(function() {
    'use strict';

	angular
		.module('DuckgramApp', 
			[
				'ui.router', 
				'ngSanitize', 
				'DuckgramApp.fields'
			]
		);

})();