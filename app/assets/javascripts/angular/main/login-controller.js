(function(){

'use strict';

angular
  .module('secondLead')
 
  .controller('LoginCtrl', [
    'Restangular',
    '$state', 
    'store',
    'UserModel',
    function (Restangular, $state, store, UserModel){
    var login = this;

    login.user = {};

    login.onSubmit = function () {
      UserModel.login(login.user)
      .then(function (response){
        var user = response.data.user;
        UserModel.setLoggedIn(true);
        $state.go('user.lists', {userID: user.id});
        login.reset();
       }, function(error){
        login.error = "Invalid username/password";
       }
      );
    }

    login.reset = function () {
      login.user = {};
    };

  }])

})();