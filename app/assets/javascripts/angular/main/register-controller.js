(function(){

'use strict';

angular
  .module('secondLead')
 
  .controller('RegisterCtrl', [
    'Restangular',
    '$state', 
    'store',
    'UserModel',
    function (Restangular, $state, store, UserModel) {
    var register = this;

    register.newUser = {};

    register.signUp = function () {
      UserModel.register(register.newUser)
      	.then(function(response){
          if (response.errors){
            register.error = response.errors[0];
          } else { 
            store.set('jwt',response.token);
            $state.go('user.lists', {userID: response.user.id});
            register.reset();
          }
        });
    };

    register.reset = function () {
      register.newUser = {};
    };


  }])

})();