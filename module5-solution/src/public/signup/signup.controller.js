(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'SignupService'];
function SignupController(MenuService, SignupService) {
  var signup = this;

  signup.submit = function (userData) {
    signup.completed = true;
    response = MenuService.checkMenuItem(userData.favorite);
    response.then(function(result) {
      // TODO - save the data to a service
      SignupService.setUser(userData);
      signup.validFavorite = true;
      console.log("set valid to true ", signup.validFavorite);
    }, function(result) {
      signup.validFavorite = false;
      console.log("set valid to  false ", signup.validFavorite);
    });
  };
}

})();
