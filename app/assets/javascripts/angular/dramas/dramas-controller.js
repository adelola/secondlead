(function(){
'use strict';

angular
  .module('secondLead')

  .controller('DramasCtrl', [
    'DramaModel', 
    'Restangular', 
    function(DramaModel, Restangular, $q) {
    var dramas = this;
    
    dramas.items = DramaModel.getAll;
   
    dramas.setCurrentDrama = function(item){
      dramas.currentDrama = item;
    };
  }])
})();
  