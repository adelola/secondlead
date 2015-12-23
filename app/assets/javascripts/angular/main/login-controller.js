(function(){

'use strict';

angular
  .module('secondLead')
 
  .controller('LoginCtrl', [
    'Restangular',
    '$state', 
    'store',
    'UserModel',
    function (Restangular, $state, store, UserModel) {
    var login = this;

    login.user = {};

    login.onLogin = function() {
      UserModel.login(login.user)
      .then(function (response) {
        console.log(response.data.user);
        var user = response.data.user;
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