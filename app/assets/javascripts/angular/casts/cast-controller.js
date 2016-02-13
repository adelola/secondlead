(function(){
  'use strict';

  angular
    .module('secondLead')

    .controller('CastCtrl', [
      'cast',
      'Gridster',
      'UserModel',
      'ListModel',
      function(cast, Gridster, UserModel, ListModel){
      var ctrl = this;

      ctrl.user = '';

      var initialize = function () {
        if (UserModel.currentUser()) {
          ctrl.user = UserModel.currentUser();
          ctrl.userLists = ListModel.currentUserLists(ctrl.user.id);
        }
      };
      initialize();

      ctrl.selectedList = {};

      ctrl.image_url         = cast.cast.image_url;
      ctrl.picture_file_name = cast.cast.picture_file_name;
      ctrl.name              = cast.cast.name;
      ctrl.dob               = cast.cast.dob;
      ctrl.age               = cast.cast.age;
      ctrl.non_english_name  = cast.cast.non_english_name;
      ctrl.height            = cast.cast.height;
      ctrl.weight            = cast.cast.weight;
      ctrl.star_sign         = cast.cast.star_sign;
      ctrl.blood_type        = cast.cast.blood_type;
      ctrl.dramas            = cast.dramas;

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
    }]);
})();