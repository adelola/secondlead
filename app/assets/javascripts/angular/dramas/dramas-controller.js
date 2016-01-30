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
    function (DramaModel, Gridster, ListModel, Restangular, UserModel){
    var ctrl = this;

    ctrl.items = DramaModel.getAll;
    ctrl.user = '';
    
    var authorized = function () {
      if(UserModel.currentUser()){
        ctrl.user = UserModel.currentUser();
        ctrl.userLists = ListModel.currentUserLists();
      } 
    };
    authorized();

    ctrl.selectedList = {};

    ctrl.gridsterOpts = {
        columns: 4,
        width: 'auto',
        colWidth: 'auto',
        rowHeight: 'match',
        margins: [5, 5],
        outerMargin: true,
        isMobile: false,
        mobileBreakPoint: 750,
        mobileModeEnabled: true,
        minColumns: 1,
        minRows: 2,
        maxRows: 100,
        defaultSizeX: 1,
        defaultSizeY: 1,
        minSizeX: 1,
        maxSizeX: null,
        minSizeY: 1,
        maxSizeY: null,
        resizable: {
           enabled: false
        },
        draggable: {
           enabled: false
        }
    };
    ctrl.currentPage = 1;
    ctrl.pageSize = 32;
  }])

})();
