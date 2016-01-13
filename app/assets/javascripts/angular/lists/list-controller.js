(function(){
'use strict';

angular
  .module('secondLead')

  .controller('ListCtrl', [
    'Gridster',
    'list',
    'ListModel',
    'user',
    'UserModel',
    function(Gridster, list, ListModel,user, UserModel) {
    var ctrl = this;
    var currentUser = UserModel.currentUser().id;
    
    ctrl.items = list.dramas;
    ctrl.id = list.list.id;
    ctrl.name = list.list.name;
    ctrl.description = list.list.description;
    ctrl.userID = user.user.id;

    ctrl.authorized = function(){
      if( ctrl.userID === currentUser){
        return true
      } 
    };

    ctrl.removeItem = function(item){
      ctrl.items.splice(ctrl.items.indexOf(item),1)
    };
  
    ctrl.updateName = function(name){
      ListModel.update(ctrl.id, {name: name});
      ctrl.name = name;
    };

    ctrl.updateDescription = function(description){
      ListModel.update(ctrl.id, {description: description});
      ctrl.description = description;
    };
    
    ctrl.gridsterOpts = Gridster.getOptions();

  }])

})();