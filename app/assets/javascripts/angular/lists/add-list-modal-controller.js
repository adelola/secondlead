angular
  .module('secondLead')
  .controller('AddListModalCtrl', function ($scope, $uibModalInstance) {

    $scope.name = null;
    $scope.description =null;


    $scope.close = function () {
      $uibModalInstance.close({name:$scope.name , description: $scope.description});
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });