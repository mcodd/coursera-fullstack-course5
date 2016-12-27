(function () {

angular.module('public')
.controller('SignupController', SignupController);

function SignupController() {
  var reg = this;

  reg.submit = function () {
    // TODO - figure out how to validate the menu number here?
    reg.completed = true;
  };
}

})();
