(function(){
'use strict';

angular
  .module('secondLead')

  .controller('ReviewsCtrl',[ 'ReviewModel', '$stateParams', function (ReviewModel, $stateParams){
    var ctrl = this;
    var dramaID = $stateParams.dramaID
    ctrl.reviews = ReviewModel.getAll(dramaID);

   


  }]);

})();