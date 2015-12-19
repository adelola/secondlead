(function(){
'use strict';

angular
  .module('secondLead', 
  	['ngDragDrop', 
    'ui.bootstrap',
    'ui.router', 
    'gridster',
    'angular-jwt',
    'restangular',
    'angularUtils.directives.dirPagination',
    'secondLead.common',
  	'templates'])

  .config(function Config($httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = ['config', function(config) {
    // Skip authentication for any requests ending in .html
    if (config.url.substr(config.url.length - 5) == '.html') {
      return null;
    }
      return localStorage.getItem('auth_token');
    }];

    $httpProvider.interceptors.push('jwtInterceptor');
  }) 

  .config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('/dirPagination.html');
  })
  
  .config(['$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('register', {
        url:'/register',
        templateUrl: 'register.html',
        controller:'RegisterCtrl',
        controllerAs: 'register'
      })

      .state('login', {
        url:'/login',
        templateUrl: 'login.html',
        controller:'LoginCtrl',
        controllerAs: 'login'
      })
      
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
      })

        .state('user.lists', {
          url:'/lists',
          templateUrl: 'lists-index.html',
          controller:'ListsCtrl',
          controllerAs: 'lists',
          resolve: {
            lists: ['user', function(user) {
              return user["lists"];
            }]
          }
        })

        .state('user.list', {
        url:'/lists/:listID',
        templateUrl: 'list-show.html',
        controller:'ListCtrl',
        controllerAs: 'list',
        resolve: {
          list: ['$stateParams','ListModel','Restangular', function($stateParams,ListModel,Restangular) {
              return ListModel.getOne($stateParams.userID, $stateParams.listID);
          }]
        }
      })

    $urlRouterProvider.otherwise('/');
  }]);

})();
