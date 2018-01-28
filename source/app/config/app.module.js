(function() {
    'use strict';

	angular
		.module('DuckgramApp', 
			[
				'ngLocale',
				'ui.router',
				'ui.router.state.events',
				'ngSanitize', 
				'DuckgramApp.fields',
				'DuckgramApp.genericServices'
			]
		);

})();