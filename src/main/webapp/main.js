(() => {
    'use strict';

    angular.module('photoApp', [
        'ui.bootstrap',
        'ui.router'
    ]);

    angular.module('photoApp').config(['$stateProvider', '$urlRouterProvider', photoAppConfig]);

    photoAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function photoAppConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home></home>'
            });

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('home');
        });
    }

    angular.element(() => {
        angular.bootstrap(document, ['photoApp']);
    });

})();
