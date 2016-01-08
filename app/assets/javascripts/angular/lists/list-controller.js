(function(){
'use strict';

angular
  .module('secondLead')

  .controller('ListCtrl', [
    'Gridster',
    'list',
    'user',
    function(Gridster, list, user) {
    var ctrl = this;
    
    ctrl.items = list.dramas;
    ctrl.id = list.list.id;
    ctrl.userID = user.user.id;
    
    ctrl.removeItem = function(item){
      ctrl.items.splice(ctrl.items.indexOf(item),1)
    };

    
    ctrl.gridsterOpts = Gridster.getOptions();

  }])

})();