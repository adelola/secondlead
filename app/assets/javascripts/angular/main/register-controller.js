(function(){

'use strict';

angular
  .module('secondLead')
 
  .controller('RegisterCtrl', [
    'store',
    'Restangular',
    '$state', 
    'UserModel',
    function (store, Restangular, $state, UserModel) {
    var register = this;
    register.newUser = {};

    register.signUp = function () {
      UserModel.register(
        register.newUser
      )
      	.then(function(data){
          store.set('jwt',data.token);
      	  $state.go('user.lists', {userID: data.user.id});
      	})
        .finally(register.onCompletion());
    };

    register.onCompletion = function () {
      register.reset();
    };

    register.submit = function (isValid) {
      if (isValid) {
        register.signUp();
      }
      else
      	{alert("Invalid form entry")}
    };

    register.reset = function () {
      register.newUser = {};
    };


  }])

})();