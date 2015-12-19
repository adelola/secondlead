(function(){

'use strict';

angular
  .module('secondLead')
 
  .controller('RegisterCtrl', [
    'UserModel',
    'Restangular',
    '$state', 
    function (UserModel, Restangular, $state) {
    var register = this;
    register.newUser = {};

    register.signUp = function () {
      UserModel.register({
      	first_name: register.newUser.firstName,
      	last_name: register.newUser.lastName,
      	email: register.newUser.email,
      	username: register.newUser.username,
      	password: register.newUser.password

      })
      	.then(function(data){
      	  $state.go('user.lists', {userID: data.id});
      	})
      	.finally(register.onCompletion());
    };

    register.onError = function () {
      console.log("signUp marche pas")
      // register.error = reason.message;
    };

    register.onCompletion = function () {
      register.reset();
    };

    register.submit = function (isValid) {
      if (isValid) {
        register.signUp();
      }
      else
      	{console.log("Trippin 2")}
    };

    register.reset = function () {
      register.newUser = {};
    };


  }])

})();