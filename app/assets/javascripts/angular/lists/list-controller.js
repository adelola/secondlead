(function(){
'use strict';

angular
  .module('secondLead')

  .controller('ListCtrl', [
    'Gridster',
    'user',
    'list',
    function(Gridster, user, list) {
    var ctrl = this;
    
    ctrl.items = list.dramas;
  
    ctrl.userID = user.user.id;

    
    ctrl.gridsterOpts = Gridster.getOptions();

  }])

})();