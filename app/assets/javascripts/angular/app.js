var App = angular.module('drag-and-drop', ['ngDragDrop','templates', 'ui.bootstrap','ui.router']);
App.controller('oneCtrl', function($scope, $q) {
  $scope.list1 = {title: 'Drag and Drop with default confirmation'};
  $scope.list2 = {};
  $scope.beforeDrop = function() {
    var deferred = $q.defer();
    if (confirm('Are you sure???')) {
      deferred.resolve();
    } else {
      deferred.reject();
    }
    return deferred.promise;
  };
});
App.controller('twoCtrl', function($scope, $q, $modal) {
  $scope.list1 = {title: 'Drag and Drop with custom confirmation'};
  $scope.list2 = {};
  $scope.beforeDrop = function() {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl'
    });

    return modalInstance.result;
  };
}).controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close();
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

App.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('dramatest', {
      url:'/dramatest',
      templateUrl: 'dramas-index.html',
      controller:'testCtrl',
      controllerAs: 'test'
    })

    .state('casts', {
      url:'/casts',
      templateUrl: 'casts-index.html',
      controller:'castsCtrl',
      controllerAs: 'cast'
    });

  $urlRouterProvider.otherwise('/');
 });

