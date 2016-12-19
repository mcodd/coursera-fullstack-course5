(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['allCategories'];
function CategoriesListController(allCategories) {
  var categoriesList = this;
  categoriesList.items = allCategories.data;
  // console.log("In categorieslist.controller.js - categoriesList.items: ",
  //              categoriesList.items);
}

})();
