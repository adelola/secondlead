(function(){

'use strict';

angular
  .module('secondLead')

  .controller('SearchCtrl', [ 
    'casts',
    'dramas',
    'ListModel',
    'SearchService', 
    'UserModel',
    'users',
    function (casts, dramas, ListModel, SearchService, UserModel, users){
    var ctrl = this;
    ctrl.dramas = dramas;
    ctrl.casts = casts;
    ctrl.users = users;

     var initialize = function () {
      if (UserModel.currentUser()) {
        ctrl.user = UserModel.currentUser();
        ctrl.userLists = ListModel.currentUserLists(ctrl.user.id);
      } 
    };
    initialize();

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
        minRows: 1,
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
    ctrl.pageSize = 20;

  }]);

})();