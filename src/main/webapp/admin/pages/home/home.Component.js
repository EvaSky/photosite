(() => {
    'use strict';

    angular
        .module('photoApp')
        .component('home', {
            templateUrl: 'admin/pages/home/home.View.html',
            controller: HomeController,
            controllerAs: 'hc'
        });

    function HomeController() {

        const ctrl = this;

        ctrl.$onInit = _onInit;

        ////////////////////////////////////////

        function _onInit() {
            ctrl.name = 'Ksu';
            console.log('home');
        }
    }
})();