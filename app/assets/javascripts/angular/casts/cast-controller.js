(function(){
  'use strict';

  angular
    .module('secondLead')

    .controller('CastCtrl', [
      'cast',
      function(cast) {
      var ctrl = this;

      ctrl.image_url         = cast.image_url;
      ctrl.picture_file_name = cast.picture_file_name;
      ctrl.name              = cast.name;
      ctrl.dob               = cast.dob;
      ctrl.age               = cast.age;
      ctrl.height            = cast.height;
      ctrl.weight            = cast.weight;
      ctrl.star_sign         = cast.star_sign;
      ctrl.blood_type        = cast.blood_type;
    }]);
})();