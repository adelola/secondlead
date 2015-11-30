(function(){
'use strict';

angular
  .module('secondLead')
  
  .factory('DramaModel',['Restangular', function(Restangular) {
     var baseDramas = Restangular.all('dramas');

     return {
      getAll: baseDramas.getList().$object,
      getOne: function(dramaId) {
        return Restangular.one('drama', dramaId).get()
      }
    };
  }])
})();
  