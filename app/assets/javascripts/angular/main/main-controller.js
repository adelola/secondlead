(function(){

'use strict';

angular
  .module('secondLead')

  .controller('MainCtrl', [ 
    'Auth',
    '$scope',
    '$state',
    'store',
    'UserModel', 
    function (Auth, $scope, $state, store, UserModel){
    var main = this;
    
    main.logout = function () {
      Auth.logout();
      main.currentUser = null;
      UserModel.setLoggedIn(false);
      $state.go('login');
    };

    main.currentUser = store.get('user');

    $scope.$on('loggedIn:updated', function (event,data){
      main.loggedIn = UserModel.getStatus().loggedIn;
      main.currentUser = store.get('user');
    });

  }]);

})();