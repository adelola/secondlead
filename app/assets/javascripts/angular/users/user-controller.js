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
      UserModel.follow(ctrl.profile.id).then(function(result){
        ctrl.relationshipId = result.id;
      });
    };

    ctrl.unfollow = function(){
      UserModel.unfollow(ctrl.relationshipId);
    };
  
    ctrl.gridsterOpts = Gridster.getOptions();
  }])

})();
