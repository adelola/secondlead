(function(){
'use strict';

  angular
    .module('secondLead')

    .controller('ReviewsCtrl',[ '$scope', 'ReviewModel', '$stateParams', function ($scope, ReviewModel, $stateParams) {
      var ctrl = this;

      var dramaID  = $stateParams.dramaID
      ctrl.reviews = ReviewModel.getAll(dramaID);

      $scope.getNums = function (num) {
        return new Array(num);
      };
    }]);
})();