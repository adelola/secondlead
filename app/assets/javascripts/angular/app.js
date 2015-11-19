var App = angular.module('secondleadApp', ['ngDragDrop','templates', 'ui.bootstrap','ui.router']);

App.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('dramas-model', {
      url:'/dramas',
      templateUrl: 'dramas-index.html',
      controller:'DramasCtrl',
      controllerAs: 'dramas'
    });

  $urlRouterProvider.otherwise('/');
 });

