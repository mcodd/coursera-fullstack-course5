(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var signup = this;

  signup.submit = function (favorite) {
    // TODO - figure out how to validate the menu number here?
    signup.completed = true;
    response = MenuService.checkMenuItem(favorite);
    response.then(function(result) {
      signup.validFavorite = true;
      console.log("set valid to true ", signup.validFavorite);
    }, function(result) {
      signup.validFavorite = false;
      console.log("set valid to  false ", signup.validFavorite);
    });
  };
}

})();
