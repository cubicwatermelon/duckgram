(function() {
    'use strict';

    angular
        .module('module')
        .component('component', {
            bindings: {

            },
            controller: Controller

        });

    Controller.$inject = ['dependencies'];

    function Controller(dependencies) {

    }
})();