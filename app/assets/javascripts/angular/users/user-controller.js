(function(){
'use strict';

angular
  .module('secondLead')

  .controller('UserCtrl', [
    'Gridster',
    'user',
    'UserModel',
    function(Gridster,user,UserModel) {
    var ctrl = this;
    ctrl.profile = user["user"];

    ctrl.follow = function(){
      UserModel.follow(ctrl.profile.id);
    };
  
    ctrl.gridsterOpts = Gridster.getOptions();
  }])

})();
