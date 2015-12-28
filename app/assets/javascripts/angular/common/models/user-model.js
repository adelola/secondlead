(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('UserModel',['Auth', 'Restangular', 'store', function(Auth, Restangular, store) {
    var baseUsers = Restangular.all('users');

    return {
      getAll: baseUsers.getList().$object,  
      
      getOne: function(userId) {
        return Restangular.one('users', userId).get()
      },
      
      isLoggedIn:  function (user) {
        return store.get('user');  
      },

      register: function(newUser){
        return baseUsers.post({"user": {
          first_name: newUser.firstName,
          last_name: newUser.lastName,
          email: newUser.email,
          username: newUser.username,
          password: newUser.password }   
        });
      },

      login: function (user) {
        return Auth.login({
          username: user.username,
          password: user.password
        });
      }
       
    };

  }])

})();
  