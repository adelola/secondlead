(function(){
'use strict';

angular
  .module('secondLead.common')

  .factory('DramaModel',['Restangular', function (Restangular){
     var baseDramas = Restangular.all('dramas');

     return {

      getAll: baseDramas.getList().$object,

      getOne: function (dramaID){
        return Restangular.one('dramas', dramaID).get()
      },

      delete: function (userID, listID, dramaID){
        return Restangular.one("users", userID).one("lists", listID).one("dramas", dramaID).remove()
      },

      add: function (userID, listID, dramaID){
        return Restangular.one("users", userID).one("lists", listID).all("dramas").post({id: dramaID})

      }
    };
  }])
})();
