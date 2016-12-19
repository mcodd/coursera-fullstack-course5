(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/home.template.html'
  })

  // Categories page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/categorieslist/templates/main-categorieslist.template.html',
    controller: 'CategoriesListController as categories',
    resolve: {
      allCategories: [ 'MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items page
  .state('itemList', {
    url: '/item-list/{categoryId}',
    templateUrl: 'src/itemslist/templates/main-itemlist.template.html',
    controller: 'ItemsListController as itemslist',
    resolve: {
      allItems: [ '$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  });
}

})();
