(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/itemslist/templates/itemsList.template.html',
  bindings: {
    items: '<',
  }
});

})();
