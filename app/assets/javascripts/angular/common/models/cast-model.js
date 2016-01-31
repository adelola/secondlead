(function(){
'use strict';

angular
  .module('secondLead.common')

  .factory('CastModel',['Restangular', function (Restangular){
     var baseCasts = Restangular.all('casts');

     return {
      getAll: baseCasts.getList().$object,
      
      getOne: function (castID){
        return Restangular.one('casts', castID).get()
      }
    };
  }])
})();
