(function(){
'use strict';

angular
  .module('secondLead')

  .controller('DramaCtrl', [
    'drama',
    'Gridster',
    function(drama, Gridster) {
    var ctrl = this;

    ctrl.name = drama.name;
    ctrl.episode_count = drama.episode_count
    ctrl.year = drama.release_date;
    ctrl.dramaId = drama.id;

    ctrl.gridsterOpts = Gridster.getOptions();
  }])
})();