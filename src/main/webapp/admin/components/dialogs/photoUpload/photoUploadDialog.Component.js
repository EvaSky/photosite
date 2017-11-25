(function() {
    'use strict';

    angular
        .module('photoApp')
        .component('photoUploadDialog', {
            templateUrl: 'app/components/dialogs/photoUpload/photoUploadDialog.View.html',
            controller: PhotoUploadDialogController,
            bindings: {
                close: '&',
                dismiss: '&'
            },
            controllerAs: 'pudc'
        });

    PhotoUploadDialogController.$inject = ['$scope'];
    function PhotoUploadDialogController($sce, $timeout, $translate, $uibModal, $q, $rootScope) {

        const ctrl = this;

        ctrl.$onInit = _onInit;
        ctrl.generateThumbnail = _generateThumbnail;
        ctrl.onDeleteIconClick = _onDeleteIconClick;
        ctrl.onInfoIconClick = _onInfoIconClick;
        ctrl.openPhotoSlider = _openPhotoSlider;
        ctrl.onUploadClick = _onUploadClick;

        ////////////////////////////////////////////

        function _onInit() {
            console.log('upload');
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
        }

        function _preloadImage(file) {
            let image = new Image();
            image.onload = () => {
                file.width = image.width;
                file.height = image.height;
                $timeout(() => {
                    _validateFile(file);
                    ctrl.files.push(file);
                    ctrl.invalidFiles =  ctrl.files.filter(fl => !fl.valid).length;
                });
            };
            image.src = file.dataUrl;

        }


/*        function _onDeleteIconClick(file) {
            if (window.URL) {
                URL.revokeObjectURL(file.dataUrl);
            }
            let index = ctrl.files.indexOf(file);
            ctrl.files.splice(index, 1);
            ctrl.invalidFiles =  (ctrl.files.filter(fl => !fl.valid).length);
        }


        function _onUploadClick() {
            if (ctrl.showTermsDialog) {
                let termsDialog = photoDialogService.openTermsDialog();
                termsDialog.result.then(() => {
                    ctrl.showTermsDialog = false;
                    let showDuplicatesWarning = photoDialogService.showDuplicateWarning();
                    showDuplicatesWarning.result.then(() => {
                        _uploadPhotos();
                    });
                });
            } else {
                _uploadPhotos();
            }
        }

        function _uploadPhotos() {
            ctrl.buttonsDisabled = true;
            let validFiles = ctrl.files
                .filter(file => file !== null && file.valid);
            let countValid = validFiles.length;
            ctrl.progressBar = {
                count: validFiles? validFiles.length: 0,
                value: 0,
                isUploading: true
            };
            let uploaded = validFiles.map(file => {
                return photoManagementService.uploadPhoto(file, ctrl.resolve.nodeData.hotelCode, true)
                    .finally(() => {
                        ctrl.progressBar.value ++;
                    });
            });

            $q.all(uploaded.map(commonUtilsService.reflectPromise))
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
                });
        }

        function _showToast(resolvedPhotos, allPhotos) {
            if (resolvedPhotos.length === allPhotos.length && resolvedPhotos.length !== 0) {
                ToastService.showToast('alert-success', false, $translate.instant('dialog.uploadPhotos.successMessageTitle'),
                    $translate.instant('dialog.uploadPhotos.successMessage'));
            } else {
                ToastService.showToast('alert-warning', false, $translate.instant('dialog.uploadPhotos.warningMessageTitle'),
                    $translate.instant('dialog.uploadPhotos.warningMessage'));
            }
        }*/
    }
})();
