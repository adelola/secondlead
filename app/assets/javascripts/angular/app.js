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

      .state('dramas-model', {
        url:'/dramas',
        templateUrl: 'dramas-index.html',
        controller:'DramasCtrl',
        controllerAs: 'dramas'
      });

      .state('lists', {
        url:'/users/:userId/lists',
        templateUrl: 'lists-index.html',
        controller:'ListsCtrl',
        controllerAs: 'lists'
      });

    $urlRouterProvider.otherwise('/');
  }]);

})();
