'use strict';

(function() {
    angular.module('fra-endpoints').controller('ModalViewCtrl', function ($modalInstance, endpoint) {
        var vm = this;
        vm.row = endpoint;
        vm.close = function() {
            $modalInstance.close();
        };
    });
})();
