(function(){

'use strict';

angular
  .module('secondLead')
 
  .controller('RegisterCtrl', [
    'UserModel',
    'jwtHelper',
    '$state', 
    function (UserModel,jwtHelper,$state) {
    var register = this;


    function register() {
      UserModel.register({
          username: login.user.username,
          password: login.user.password
      })
      .then(onLogin)
      .catch(onError)
      .finally(onCompletion);
    }

    function onSuccess(result) {
      $state.go('user');
    }


  }])

})();