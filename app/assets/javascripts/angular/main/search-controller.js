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
    console.log(SearchService.getDramas());
    ctrl.dramas = dramas;
    ctrl.casts = casts;
    ctrl.users = users;

  }]);

})();