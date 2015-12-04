(function(){
'use strict';

angular
  .module('secondLead', 
  	['ngDragDrop', 
  	'ui.bootstrap',
  	'ui.router', 
  	'gridster',
  	'restangular',
    'angularUtils.directives.dirPagination',
    'secondLead.common',
  	'templates'])

  .config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('/dirPagination.html');
  })
  
  .config(['$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('dramas', {
        url:'/dramas',
        templateUrl: 'dramas-index.html',
        controller:'DramasCtrl',
        controllerAs: 'dramas'
      })

      .state('user', {
        url:'/users/:userID',
        templateUrl: 'user-show.html',
        controller:'UserCtrl',
        controllerAs: 'user',
        resolve: {
          user: ['$stateParams','UserModel','Restangular', function($stateParams,UserModel,Restangular) {
                return UserModel.getOne($stateParams.userID);
          }]
        }
      });

    $urlRouterProvider.otherwise('/');
  }]);

})();
