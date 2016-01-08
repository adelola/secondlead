(function(){
'use strict';

angular
  .module('secondLead')

  .controller('DramasCtrl', [
    'DramaModel',
    'Gridster', 
    'ListModel',
    'Restangular',
    'UserModel',
    function(DramaModel, Gridster, ListModel, Restangular, UserModel) {
    var ctrl = this;
    
    ctrl.items = DramaModel.getAll;
    ctrl.user = UserModel.currentUser();
    
    ctrl.userLists = ListModel.currentUserLists();
    ctrl.selectedList = {};

    ctrl.gridsterOpts = Gridster.getOptions();
    ctrl.currentPage = 1;
    ctrl.pageSize = 20;
  }])

})();
  