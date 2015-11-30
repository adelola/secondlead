(function(){
'use strict';

angular
  .module('secondLead')

  .controller('DramasCtrl', [
    'DramaModel',
    'Gridster', 
    'Restangular',
    function(DramaModel, Gridster, Restangular) {
    var ctrl = this;
    
    ctrl.items = DramaModel.getAll;
   
    ctrl.setCurrentDrama = function(item){
      ctrl.currentDrama = item;
    };

    ctrl.gridsterOpts = Gridster.getOptions();

    ctrl.currentPage = 1;
    ctrl.pageSize = 20;
  }])

})();
  