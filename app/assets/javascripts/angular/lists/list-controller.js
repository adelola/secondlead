(function(){
'use strict';

angular
  .module('secondLead')

  .controller('ListCtrl', [
    'Gridster',
    'list',
    function(Gridster,list) {
    var ctrl = this;
    
    ctrl.items = list.dramas;
    
    ctrl.gridsterOpts = Gridster.getOptions();
 	  ctrl.pageSize = 20;

  }])

})();