(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  // This is the function called when the "Bought" button is clicked
  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items still to buy
  var itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "bottles of milk", quantity: 2 },
    { name: "cakes", quantity: 3 },
    { name: "bags of chips", quantity: 12 },
    { name: "sugary drinks", quantity: 3 }
  ];
  // List of items we've already bought
  var itemsAlreadyBought = [];

  // the buyItem function removes the item with index itemIndex from
  // itemsToBuy and adds it to itemsAlreadyBought
  service.buyItem = function (itemIndex) {
    var itemBought = itemsToBuy[itemIndex];
    itemsToBuy.splice(itemIndex, 1);
    itemsAlreadyBought.push(itemBought);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };

}

})();
