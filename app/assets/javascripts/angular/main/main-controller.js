(function(){

'use strict';

angular
  .module('secondLead')

  .controller('MainCtrl', [ 
    'UserModel',
    'Auth',
    '$state',
    'store',
    function (UserModel, Auth, $state, store) {
    var main = this;
    main.auth = Auth;
    main.currentUser = null;

    main.logout = function () {
      UserModel.logout();
      $state.go('login');
    };

    main.setCurrentUser = function () {
      if (store.get('user')) {
        main.currentUser = user.id;
      } else {
        main.currentUser = null;
      }
    };
    
  }]);

})();