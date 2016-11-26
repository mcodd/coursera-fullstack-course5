(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.checkIfTooMuch = function () {
    $scope.messageColor = "green";
    var numberOfItems = getNumberOfItems($scope.menu);
    if (numberOfItems == 0) {
      $scope.messageText = "Please enter data first";
      $scope.messageColor = "red";
    } else if (numberOfItems <= 3) {
      $scope.messageText = "Enjoy!";
    } else {
      $scope.messageText = "Too much!";
    }
  };

  // Returns the number of items in the comma-separated list passed
  // as input.  Ignores empty items (zero-length strings or strings
  // containing only spaces)
  function getNumberOfItems(menu) {
    if(!menu) { return 0; }
    var menuArray = menu.split(',');
    var menuArrayLength = menuArray.length;
    for (var i = 0; i < menuArray.length; i++) {
      var trimmedInput = menuArray[i].trim();
      if (!trimmedInput) { menuArrayLength--; }
    }
    return menuArrayLength;
  }
}

})();
