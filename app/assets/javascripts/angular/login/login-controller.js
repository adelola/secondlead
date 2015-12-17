(function(){

'use strict';

angular
  .module('secondLead')
 
  .controller('LoginCtrl', [
    'UserModel',
    'Auth',
    'jwtHelper',
    '$state', 
    function (UserModel, Auth, jwtHelper,$state) {
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
      Auth.login({
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