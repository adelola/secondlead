(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('ListModel',['Restangular', function(Restangular) {
    
     return {
      getAll: function(userID) { 
      	Restangular.one('users', userID).getList('lists') },
      getOne: function(userID, listID) {
        return Restangular.one('users', userID).one('lists', listID).get()
      }
    };
  }])

})();
  