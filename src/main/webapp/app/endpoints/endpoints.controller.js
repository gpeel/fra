'use strict';

(function () {
    angular.module('fra-endpoints').controller('EndpointsCtrl', function (EndpointsService, $modal) {
        var vm = this;
        vm.list = EndpointsService.res.query();

        vm.remove = function(endpoint) {
            endpoint.$delete().then(function() {
                vm.list = EndpointsService.res.query();
            });
        };
        vm.openModal = function(endpoint) {
            var modalInstance = $modal.open({
                size: 'lg',
                templateUrl: 'app/endpoints/json-view-modal.html',
                controller: 'ModalViewCtrl as modalView',
                resolve: {
                    endpoint: function () {
                        return endpoint;
                    }
                }
            });
        };
    });
})();
