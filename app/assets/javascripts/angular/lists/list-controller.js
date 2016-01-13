(function(){
'use strict';

angular
  .module('secondLead')

  .controller('ListCtrl', [
    'Gridster',
    'list',
    'ListModel',
    'user',
    function(Gridster, list, ListModel,user) {
    var ctrl = this;
    
    ctrl.items = list.dramas;
    ctrl.id = list.list.id;
    ctrl.name = list.list.name;
    ctrl.description = list.list.description;
    ctrl.userID = user.user.id;
  
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