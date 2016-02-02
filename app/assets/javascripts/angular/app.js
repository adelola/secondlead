(function(){
'use strict';

angular
  .module('secondLead',
  	['angular-jwt',
    'angular-storage',
    'angularUtils.directives.dirPagination',
    'gridster',
    'restangular',
    'secondLead.common',
  	'templates',
    'ui.bootstrap',
    'ui.router',
    'xeditable',
    'ngMaterial' ])

  .config(['$httpProvider', 'jwtInterceptorProvider', function Config ($httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = ['config', 'store', function(config, store) {
    // Skips authentication for any requests ending in .html
    if (config.url.substr(config.url.length - 5) == '.html') {
      return null;
    }
      return store.get('jwt');;
    }];

    $httpProvider.interceptors.push('jwtInterceptor');
  }])

  .config(['paginationTemplateProvider', function (paginationTemplateProvider){
    paginationTemplateProvider.setPath('/dirPagination.html');
  }])

  .config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('dramas');

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

      .state('search-results', {
        url:'/search',
        templateUrl: 'search-results.html',
        controller:'SearchCtrl',
        controllerAs: 'search'
      })

      .state('drama', {
      url:'/dramas/:dramaID',
      templateUrl: 'drama-show.html',
      controller:'DramaCtrl',
      controllerAs: 'drama',
      resolve: {
        drama: ['$stateParams','DramaModel','Restangular', function ($stateParams,DramaModel,Restangular){
            return DramaModel.getOne($stateParams.dramaID);
        }]
      }
      })

      .state('casts', {
        url:'/casts',
        templateUrl: 'casts-index.html',
        controller:'CastsCtrl',
        controllerAs: 'casts'
      })

      .state('cast', {
        url:'/casts/:castID',
        templateUrl: 'cast-show.html',
        controller:'CastCtrl',
        controllerAs: 'cast',
        resolve: {
          cast: ['$stateParams','CastModel','Restangular', function ($stateParams,CastModel,Restangular){
              return CastModel.getOne($stateParams.castID);
          }]
        }
      })

      .state('user', {
        url:'/users/:userID',
        templateUrl: 'user-show.html',
        data: { requiresLogin: true },
        controller:'UserCtrl',
        controllerAs: 'user',
        resolve: {
          user: ['$stateParams','UserModel','Restangular', function ($stateParams,UserModel,Restangular){
              return UserModel.getOne($stateParams.userID);
          }]
        }
      })

        .state('user.lists', {     //Indented because nested under user
          url:'/lists',
          templateUrl: 'lists-index.html',
          controller:'ListsCtrl',
          controllerAs: 'lists',
          resolve: {
            lists: ['user', function (user){
              return user["lists"];
            }]
          }
        })

        .state('user.list', {       //Indented because nested under user
        url:'/lists/:listID',
        templateUrl: 'list-show.html',
        controller:'ListCtrl',
        controllerAs: 'list',
        resolve: {
          list: ['$stateParams','ListModel','Restangular', function ($stateParams,ListModel,Restangular){
              return ListModel.getOne($stateParams.userID, $stateParams.listID);
          }]
        }
      })
  }])

  .run([ 'jwtHelper','$rootScope', '$state', 'store',  function (jwtHelper, $rootScope, $state, store){
    $rootScope.$on('$stateChangeStart', ['event', 'toState' ,'toParams', function (event, toState, toParams){
      if (toState.data && toState.data.requiresLogin) {
        if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
          event.preventDefault();
          $state.go('login');
        }
      }
    }]);
  }])

  .run(['editableOptions',function (editableOptions){
    editableOptions.theme = 'bs2';
  }]);


})();