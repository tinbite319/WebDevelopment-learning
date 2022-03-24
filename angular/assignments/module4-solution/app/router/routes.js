(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      $urlRouterProvider.otherwise('/');
    
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/templates/home.template.html'
      })
      .state('categoryList', {
        url: '/category-list',
        templateUrl: 'app/components/templates/category-list.template.html',
        controller: 'CategoryListController as cateLstCtrl',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{category}',
        templateUrl: 'app/components/templates/items.template.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
          items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.category);
          }]
        }
      });
    
    
    }
    
    })();