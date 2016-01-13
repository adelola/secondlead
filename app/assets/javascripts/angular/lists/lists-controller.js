(function(){
'use strict';

angular
  .module('secondLead')

  .controller('ListsCtrl', [
    'Gridster',
    'ListModel',
    'lists',
    '$scope',
    '$stateParams',
    '$uibModal',
    'UserModel',
    function(Gridster,ListModel,lists,$scope, $stateParams, $uibModal, UserModel) {
    var ctrl = this;
    ctrl.items = lists;
    ctrl.userID = $stateParams.userID;
    var currentUser = UserModel.currentUser().id.toString()

    ctrl.authorized = function(){
      if( ctrl.userID === currentUser){
        return true
      } 
    };

    var createList = function(listParams){
      ListModel.create(listParams).then(function(result){
      ctrl.items.push(result.list);
      });
    };

    ctrl.showModal = function(){
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'add-list.html',
        controller: 'AddListModalCtrl',
        size: 'lg'
      });

      modalInstance.result.then(function(result) {
        createList(result);
      });
    };

    ctrl.removeItem = function(item){
      ctrl.items.splice(ctrl.items.indexOf(item),1);
    };
    
    ctrl.gridsterOpts = Gridster.getOptions();
  }])

})();
