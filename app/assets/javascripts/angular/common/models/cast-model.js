(function(){
'use strict';

angular
  .module('secondLead')

  .factory('CastModel',['Restangular', function(Restangular) {
     var baseDramas = Restangular.all('casts');

     return {
      getAll: baseCasts.getList().$object,
      getOne: function(castId) {
        return Restangular.one('casts', castId).get()
      }
    };
  }])
})();
