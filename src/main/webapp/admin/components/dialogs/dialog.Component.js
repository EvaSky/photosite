(() => {
    'use strict';

    const dialog = {
        transclude: {
            'title': '?dialogTitle',
            'body': '?dialogBody',
            'footer': '?dialogFooter'
        },
        controller: DialogController,
        templateUrl: 'app/components/dialogs/dialog.View.html'
    };

    angular
        .module('photoApp')
        .component('dialog', dialog);

    DialogController.$inject = ['$scope'];
    function DialogController($scope) {

        const ctrl = this;

        ctrl.dismiss = _dismiss;

        function _dismiss() {
            if ($scope.$parent.$ctrl.dismiss) {
                $scope.$parent.$ctrl.dismiss();
            }
        }
    }
})();
