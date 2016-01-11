(function(){
'use strict';

angular
  .module('secondLead')

  .controller('DramaCtrl', [
    'drama',
    'Gridster',
    'RatingModel',
    'Restangular',
    function(drama, Gridster, RatingModel,Restangular) {
    var ctrl = this;

    ctrl.name = drama.name;
    ctrl.episode_count = drama.episode_count
    ctrl.year = drama.release_date;
    ctrl.dramaId = drama.id;

    var avgRate = function(drama){
      RatingModel.getAvg(drama).then(function(result){
        ctrl.avgRating = result;
      });
    } 

    avgRate(drama.id);

    ctrl.gridsterOpts = Gridster.getOptions();
  }])
})();