(function() {
    'use strict';

	angular
		.module('DuckgramApp', 
			[
				'ui.router',
				'ui.router.state.events',
				'ngSanitize', 
				'DuckgramApp.fields'
			]
		);

})();