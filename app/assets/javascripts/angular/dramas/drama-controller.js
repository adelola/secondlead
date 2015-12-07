(function(){
'use strict';

angular
  .module('secondLead')

  .controller('DramaCtrl', [
    'Gridster',
    'drama',
    function(Gridster, drama) {
    var ctrl = this;

    console.log(drama);
    ctrl.name = drama.name;
    ctrl.episode_count = drama.episode_count
    ctrl.year = drama.release_date;
    ctrl.dramaId = drama.id;

    ctrl.gridsterOpts = Gridster.getOptions();
  }])
})();