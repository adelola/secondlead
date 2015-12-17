(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('UserModel',['Restangular', function(Restangular) {
    var baseUsers = Restangular.all('users');
    var currentUser = null;

    return {
      getAll: baseUsers.getList().$object,  
      
      getOne: function(userId) {
        return Restangular.one('users', userId).get()
      },
      
      setCurrentUser:  function (user) {
      currentUser = user;
      },

      login: function (user) {
        return Auth.login({
          email: user.username,
          password: user.password
        }, function(error, authData) {
          if (error) {
            currentUser = null;
            console.error('Authentication failed:', error);
          } else {
            currentUser = authData.uid;
            console.log('Logged in as:', authData.uid);
          }
        });
      }

    };

  }])

})();
  