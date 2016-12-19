(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/items.template.html',
  controller: ItemsController,
  bindings: {
    allItems: '<',
  }
});

ItemsController.$inject = ['MenuDataService']
function ItemsController(MenuDataService) {
  var $ctrl = this;

  // TODO

}

})();
