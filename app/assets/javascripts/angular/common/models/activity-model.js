(function(){
'use strict';

angular
  .module('secondLead')

  .factory('ActivityModel',['Restangular', function(Restangular) {
     var baseActivities = Restangular.all('activities');

     return {
      getAll: baseActivities.getList().$object,
      getOne: function(activityID) {
        return Restangular.one('activities', activityID).get()
      }
    };
  }])
})();
