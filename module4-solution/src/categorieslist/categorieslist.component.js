(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/categorieslist/templates/categoriesList.template.html',
  bindings: {
    items: '<',
  }
});

})();
