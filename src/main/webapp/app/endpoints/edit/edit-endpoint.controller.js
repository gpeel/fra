'use strict';

(function () {
    angular.module('fra-endpoints').controller('EditEndpointsCtrl', function ($stateParams, endpoint) {
         var vm = this;
        vm.endpoint = endpoint;
        console.log('in EditEndpointsCtrl',endpoint);
        
    });
})();
