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
      function (drama, Gridster, RatingModel, Restangular, UserModel, ListModel) {
      var ctrl = this;

      ctrl.drama            = drama.drama;
      ctrl.user             = '';
      ctrl.selectedList     = {};
      ctrl.name             = drama.drama.name;
      ctrl.non_english_name = drama.drama.non_english_name;
      ctrl.episode_count    = drama.drama.episode_count;
      ctrl.year             = drama.drama.release_date;
      ctrl.description      = drama.drama.plot;
      ctrl.dramaId          = drama.drama.id;
      ctrl.image_url        = drama.drama.image_url;
      ctrl.country          = drama.drama.language;
      ctrl.romanized_title  = drama.drama.romanized_title;
      ctrl.also_known_as    = drama.drama.also_known_as;
      ctrl.network          = drama.drama.network;
      ctrl.broadcast_period = drama.drama.broadcast_period;
      ctrl.rating           = drama.drama.rating;
      ctrl.viki_url         = drama.drama.viki_url;
      ctrl.drama_fever_url  = drama.drama.drama_fever_url;
      ctrl.casts            = drama.casts

      var authorized = function () {
        if (UserModel.currentUser()) {
          ctrl.user      = UserModel.currentUser();
          ctrl.userLists = ListModel.currentUserLists(ctrl.user.id);
        }
      };

      var avgRate = function (drama){
        RatingModel.getAvg(drama).then(function(result){
          ctrl.avgRating = result;
        });
      }

      var initialize = function () {
        authorized();
        avgRate(drama.drama.id);
      };
      initialize();
    }])
})();