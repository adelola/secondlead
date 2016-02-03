(function(){

'use strict';

angular
  .module('secondLead')

  .controller('SearchCtrl', [ 
    'casts',
    'dramas',
    'SearchService', 
    'users',
    function (casts, dramas, SearchService, users){
    var ctrl = this;

    ctrl.dramas = dramas;
    ctrl.casts = casts;
    ctrl.users = users;

  }]);

})();