(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.component('foundItems', {
  bindings: {
    foundItems: '<',
    onRemove: '&'
  },
  controller: 'NarrowItDownController as narrow',
  templateUrl: 'foundItems.html'
});

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm="";

  ctrl.removeItem = function (itemIndex) {
    // console.log("Trying to remove index ",itemIndex);
    ctrl.found.splice(itemIndex, 1);
    // console.log("Found is now ",ctrl.found);
  };

  ctrl.getMatches = function() {
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    promise.then(function (result) {
      ctrl.found = result;
      // console.log("Found is now ",ctrl.found);
    });
  };
}

MenuSearchService.$inject = [ '$http' ];
function MenuSearchService($http) {
  var service = this;
  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: "GET",
      url: ("http://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (result) {
      var itemsFound = [];
      // an empty search returns no items
      if (searchTerm == "") { return []; }
      // loop thru the json and push any items matching searchTerm onto
      // the itemsFound array.
      for (var i in result.data.menu_items) {
        var menu_item = result.data.menu_items[i];
        if (menu_item.description.toLowerCase().indexOf(searchTerm) !== -1) {
          itemsFound.push(menu_item);
        }
      }
      return itemsFound;
    });
  }
}

})();
