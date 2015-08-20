'use strict';

(function () {
    angular.module('fra-endpoints').config(function ($stateProvider) {
        $stateProvider.state('main.endpoints.edit', {
            url: '/:id',
            data: {
                breadcrumb: ['main.home', 'main.endpoints'],
                title: 'Édition d\'un endpoint'
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/endpoints/edit/edit-endpoint.html',
                    controller: 'EditEndpointsCtrl as editEndpoints'
                }
            },
            resolve: {
                endpoint: function ( $stateParams, EndpointsService) {
                    console.log('$stateParams.endpointid', $stateParams.id);
                    var res = EndpointsService.res.get({endpointid: $stateParams.id});
                    console.log('resource' ,res);
                    console.log('promise',res.$promise);

                    
                    return res.$promise;
                }

            }
        });
    });
})
();
