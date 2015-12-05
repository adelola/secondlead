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
    console.log(user.user);
    ctrl.userID = user.user.id;

    
    ctrl.gridsterOpts = Gridster.getOptions();
 	  ctrl.pageSize = 20;

  }])

})();