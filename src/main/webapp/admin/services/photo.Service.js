(function() {
    'use strict';

    angular
        .module('photoApp')
        .service('photoService', photoService);

    photoService.$inject = ['$q', '$http', 'Upload'];
    function photoService($q, $http, Upload) {

        const service = {
            getPhotos: _getPhotos,
            deletePhotos: _deletePhotos,
            downloadFiles: _downloadFiles,
            uploadPhoto: _uploadPhoto,
            getThumbSrc: _getThumbSrc,
        };

        return service;

        ///////////////////////////////////

        function _getPhotos() {
        }

        function _deletePhotos(ids) {
        }

        function _getBrands() {
        }

        function _downloadFiles(selectedItems) {
            /*$.fileDownload(window.__env.hcmUrl + 'services/rich/files', {
                httpMethod: 'POST',
                data: {'model': angular.toJson(selectedItems)},
            });*/
        }

        function _uploadPhoto(file) {
           // return $http.get('../record/100002');
           debugger;
            return Upload.upload({
                url: '../upload',
                method: 'POST',
                file: file
            });
        }

        function _getThumbSrc(nodeData, type) {
        }

    }
})();
