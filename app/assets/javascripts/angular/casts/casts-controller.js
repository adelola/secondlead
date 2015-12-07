(function(){
'use strict';

angular
  .module('secondLead')

  .controller('CastsCtrl', [
    'CastModel',
    'Gridster',
    'Restangular',
    function(CastModel, Gridster, Restangular) {
    var ctrl = this;

    ctrl.items = CastModel.getAll;

    ctrl.setCurrentCast = function(item){
      ctrl.currentCast = item;
    };

    ctrl.gridsterOpts = Gridster.getOptions();

    ctrl.currentPage = 1;
    ctrl.pageSize = 20;
  }])

})();
