angular
  .module('secondLead')
  .controller('WarningModalCtrl', function ($scope, $uibModalInstance) {

    $scope.ok = function () {
      $uibModalInstance.close({confirmation: true});
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });