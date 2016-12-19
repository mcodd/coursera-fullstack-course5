(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categories.template.html',
  controller: CategoriesController,
  bindings: {
    allCategories: '<',
  }
});

CategoriesController.$inject = ['MenuDataService']
function CategoriesController(MenuDataService) {
  var $ctrl = this;

  // TODO

}

})();
