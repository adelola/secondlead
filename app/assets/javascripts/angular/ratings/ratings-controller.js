(function(){
'use strict';

angular
  .module('secondLead')

  .controller('RatingsCtrl', function () {
    var ctrl = this;
  
    ctrl.id= '';
    ctrl.rating = -1;
    ctrl.max = 5;

  });

})();