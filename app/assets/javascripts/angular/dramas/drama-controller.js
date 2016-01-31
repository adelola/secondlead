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
    'ListModel',
    function(drama, Gridster, RatingModel, Restangular,UserModel, ListModel) {
    var ctrl = this;

    ctrl.drama = drama;
    ctrl.user = '';
    ctrl.selectedList = {};
    ctrl.name = drama.name;
    ctrl.non_english_name = drama.non_english_name;
    ctrl.episode_count = drama.episode_count;
    ctrl.year = drama.release_date;
    ctrl.description = drama.plot;
    ctrl.dramaId = drama.id;
    ctrl.image_url = drama.image_url;
    
    var authorized = function () {
      if(UserModel.currentUser()){
        ctrl.user = UserModel.currentUser();
        ctrl.userLists = ListModel.currentUserLists();
      } 
    };

    var avgRate = function(drama){
      RatingModel.getAvg(drama).then(function(result){
        ctrl.avgRating = result;
      });
    }
    
    var initialize = function () {  
      authorized();
      avgRate(drama.id);
    };
    initialize();

    ctrl.gridsterOpts = Gridster.getOptions();
  }])
})();