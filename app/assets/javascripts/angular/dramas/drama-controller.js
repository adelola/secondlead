(function(){
'use strict';

angular
  .module('secondLead')

  .controller('DramaCtrl', [
    'drama',
    'Gridster',
    'RatingModel',
    'Restangular',
    'UserModel',
    function(drama, Gridster, RatingModel,Restangular,UserModel) {
    var ctrl = this;

    ctrl.user = UserModel.currentUser();
    ctrl.name = drama.name;
    ctrl.non_english_name = drama.non_english_name
    ctrl.episode_count = drama.episode_count
    ctrl.year = drama.release_date;
    ctrl.description = drama.plot;
    ctrl.casts = ["dfd"]
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