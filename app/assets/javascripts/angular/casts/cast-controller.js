(function(){
  'use strict';

  angular
    .module('secondLead')

    .controller('CastCtrl', [
      'cast', 'Gridster',
      function(cast, Gridster){
      var ctrl = this;

      ctrl.image_url         = cast.cast.image_url;
      ctrl.picture_file_name = cast.cast.picture_file_name;
      ctrl.name              = cast.cast.name;
      ctrl.dob               = cast.cast.dob;
      ctrl.age               = cast.cast.age;
      ctrl.non_english_name  = cast.cast.non_english_name;
      ctrl.height            = cast.cast.height;
      ctrl.weight            = cast.cast.weight;
      ctrl.star_sign         = cast.cast.star_sign;
      ctrl.blood_type        = cast.cast.blood_type;
      ctrl.dramas            = cast.dramas;

      ctrl.gridsterOpts = Gridster.getOptions();
    }]);
})();