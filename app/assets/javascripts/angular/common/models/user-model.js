(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('UserModel',['Restangular', function(Restangular) {
     var baseUsers = Restangular.all('users');

     return {
      getAll: baseUsers.getList().$object,
      getOne: function(userId) {
        return Restangular.one('user', userId).get()
      }
    };
  }])
})();
  