(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['allItems'];
function ItemsListController(allItems) {
  var itemsList = this;
  itemsList.items = allItems.data.menu_items;
  // console.log("In itemslist.controller.js - itemsList.items: ",
  //              itemsList.items);
}

})();
