'use strict';

(function () {
    angular.module('fra-endpoints').factory('EndpointsService', function ($resource) {
        return {
            res: $resource('api/endpoints/:endpointid', {endpointid: '@id'})
        };
    });
})();

