(function(){
'use strict';

angular
  .module('secondLead')

  .controller('ListsCtrl', [
    'Gridster',
    'lists',
    function(Gridster,lists) {
    var ctrl = this;
    ctrl.items = lists;
    console.log(lists);
    ctrl.gridsterOpts = Gridster.getOptions();
  }])

})();
