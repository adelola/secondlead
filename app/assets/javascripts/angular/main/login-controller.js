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

    login.loading = false;
    
    login.user = {};

    login.onLogin = function() {
      console.log("Submitted");
      UserModel
      .login(login.user)
      .then(function(data){
          var user = data.data.user;
          $state.go('user.lists', {userID: user.id});
        })
      // .catch(onError)
      // .finally(onCompletion);
    }

    login.onError = function(reason) {
      login.error = reason.message;
    }

    login.onCompletion = function() {
      login.reset();
    }

    login.submit = function (isValid) {
      console.log("yeah?");
      if (isValid) {
        login.onLogin();
      }
      else
        {alert("Invalid form entry")}
    };

    login.reset = function () {
      login.loading = false;
      login.user = {};
    };

  }])

})();