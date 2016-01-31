(function(){
'use strict';

angular
  .module('secondLead')

  .controller('UserCtrl', [
    'Gridster',
    'user',
    'UserModel',
    function (Gridster,user,UserModel){
    var ctrl = this;
    ctrl.profile = user["user"];
    
    var initialize = function () {
      if (UserModel.currentUser()) {
        ctrl.currentUser = UserModel.currentUser();
    	UserModel.checkRelationship(ctrl.profile.id).then(function (result){ 
         ctrl.relationshipId = result.id;
      	}, function (error){
         ctrl.relationshipId = '';
        });
      };
    }; 
    initialize();

    ctrl.authorized = function () {
      if (ctrl.profile.id === ctrl.currentUser.id) {
        return true
      };
    };

    ctrl.follow = function () {
      UserModel.follow(ctrl.profile.id).then(function (result){
        ctrl.relationshipId = result.id;
      });
    };

    ctrl.unfollow = function () {
      UserModel.unfollow(ctrl.relationshipId);
      ctrl.relationshipId = '';
    };
  
    ctrl.gridsterOpts = Gridster.getOptions();
  }])

})();
