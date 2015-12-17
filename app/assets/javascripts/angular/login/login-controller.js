(function(){

'use strict';

angular
  .module('secondLead')
 
  .controller('LoginCtrl', [
    'UserModel',
    'jwtHelper',
    '$state', 
    function (UserModel,jwtHelper,$state) {
    var login = this;

    login.loading = false;

    login.user = {
      username: '',
      password: '',
      register: false
    };

    function register() {
      UserModel.register({
          username: login.user.username,
          password: login.user.password
      })
      .then(onLogin)
      .catch(onError)
      .finally(onCompletion);
    }

    function onLogin() {
      UserModel.login({
          username: login.user.username,
          password: login.user.password
      })
      .then(onSuccess)
      .catch(onError)
      .finally(onCompletion);
    }

    function onSuccess(result) {
      $state.go('user');
    }

    function onError(reason) {
      login.error = reason.message;
    }

    function onCompletion() {
      login.reset();
    }

    login.submit = function (user, isValid, isRegistering) {
      if (isValid) {
        login.loading = true;

        if (isRegistering) {
          register();
        } else {
          onLogin();
        }
      }
    };

    login.reset = function () {
      login.loading = false;
      login.user = {
        username: '',
        password: '',
        register: false
      };
    };

  }])

})();