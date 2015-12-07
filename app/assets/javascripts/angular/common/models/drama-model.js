(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('DramaModel',['Restangular', function(Restangular) {
     var baseDramas = Restangular.all('dramas');

     return {
      getAll: baseDramas.getList().$object,
      getOne: function(dramaID) {
        return Restangular.one('dramas', dramaID).get()
      }
    };
  }])
})();
  