(function(){
'use strict';

angular
  .module('secondLead')

  .controller('IndexCtrl', [
    'ActivityModel',
    'Restangular',
    function(ActivityModel, Restangular) {
    var ctrl = this;

    ctrl.activities = ActivityModel.getAll;
  }])

})();
