(() => {
    'use strict';

    angular
        .module('photoApp')
        .component('work', {
            templateUrl: 'admin/pages/work/work.View.html',
            controller: WorkController,
            controllerAs: 'wc'
        });

    WorkController.$inject = ['$uibModal', '$timeout', '$sce', 'photoService'];
    function WorkController($uibModal, $timeout, $sce, photoService) {

        const ctrl = this;

        ctrl.$onInit = _onInit;
        ctrl.uploadPhotos = _uploadPhotos;
        ctrl.generateThumbnail = _generateThumbnail;

        ////////////////////////////////////////

        function _onInit() {
            ctrl.name = 'Ksu';
            console.log('work');
            ctrl.files = [];
        }

        function _uploadPhotos() {
            console.log('Upload');
            ctrl.progressBar = {
                count: ctrl.files.length,
                value: 0,
                isUploading: true
            };
            return photoService.uploadPhoto(ctrl.files[0])
                .then(response => {
                    console.log(response);
                })
                .finally(() => {
                    console.log('finally');
                    ctrl.progressBar.value ++;
                });


            /*$q.all(uploaded.map(commonUtilsService.reflectPromise))
                .then(photos => {
                    let resolvedPhotos = photos.filter(photo => photo.status === 'resolved').map(file => file.v.data);
                    $rootScope.$broadcast('photo-uploaded');
                    _showToast(resolvedPhotos, photos);
                })
                .catch(() => {
                    ToastService.showToast('alert-danger', false, $translate.instant('dialog.uploadPhotos.failMessageTitle'),
                        $translate.instant('dialog.uploadPhotos.failMessage'));
                })
                .finally(() => {
                    ctrl.buttonsDisabled = false;
                    ctrl.close();
                });*/
        }

        function _generateThumbnail(files) {
            angular.forEach(files, file => {
                if (file !== null) {
                    $timeout(() => {
                        let photoURL = URL.createObjectURL(file);
                        file.dataUrl = $sce.trustAsResourceUrl(photoURL);
                        file.thumbUrl = file.dataUrl;
                        _preloadImage(file);
                    });
                }
            });
            console.log(ctrl.files);
        }

        function _preloadImage(file) {
            let image = new Image();
            image.onload = () => {
                file.width = image.width;
                file.height = image.height;
                $timeout(() => {
                    ctrl.files.push(file);
                });
            };
            image.src = file.dataUrl;

        }

    }
})();