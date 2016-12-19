(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = [ '$q' ]
function MenuDataService($q) {
  var service = this;

  // getAllCategories should return a promise which is the result of using
  // the $http service: https://davids-restaurant.herokuapp.com/categories.json
  service.getAllCategories = function () {
    var deferred = $q.defer();
    // TODO
  };

  // getItemsForCategory(categoryShortName) - this method should return a
  // promise which is a result of using the $http service, using the following
  // endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=
  // where, before the call to the server, your code should append whatever
  // categoryShortName value was passed in as an argument into the
  // getItemsForCategory method.
  service.getItemsForCategory = function (categoryShortName) {
    var deferred = $q.defer();
    // TODO
  };
}

})();
