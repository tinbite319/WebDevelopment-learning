(function () {
    'use strict';
    angular.module('MenuApp', [])
    
    // angular.module('NarrowItDownApp', [])
    //   .controller('NarrowItDownController', Controller1)
    //   .directive('foundItems', FoundItemsDirective)
    //   .service('MenuSearchService', menuSearchServices)
    //   .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
  
    // function FoundItemsDirective() {
    //   var ddo = {
    //     templateUrl: './foundItems.html', // fix path
    //     scope: {
    //       onRemove: '&',
    //       found: '<'
    //     },
    //     controller: Controller1,
    //     controllerAs: 'list',
    //     bindToController: true
    //   };
    //   return ddo;
    // }
  
    // Controller1.$inject = ['MenuSearchService', '$http', 'ApiBasePath'];
    // function Controller1(MenuSearchService) {
    //   var syntax = this;
    //       syntax.loader = false;
  
    //   syntax.searchMethod = function (val) {
    //     syntax.loader = true;
    //     if (val === undefined) {
    //       console.error('Error. Please search for something...');
    //       syntax.loader = false;
    //     } else {
    //         MenuSearchService.getMatchedMenuItems(val.trim())
    //           .then(function(res) {
    //             syntax.found = res;
    //             syntax.loader = false;
    //           })
    //           .catch(function (error) {
    //             console.log(error);
    //             syntax.loader = false;
    //           });
    //         syntax.removeItem = function(index) {
    //           syntax.found.splice(index, 1);
    //         }
    //     }
    //   }
  
    // }
  
    // function menuSearchServices($http, ApiBasePath) {
    //   var service = this;
    //     service.getMatchedMenuItems = function (searchTerm) {
    //       return $http({
    //         method: "GET",
    //         url: (ApiBasePath + "/menu_items.json")
    //       })
    //       .then(function (result) {
    //         var foundItems = result.data.menu_items, found = [];
    //           for (let i = 0; i < foundItems.length; i++) {
    //             if (foundItems[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
    //               found.push(foundItems[i]);
    //             }
    //           }
    //         return found;
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //     }
    // }
  })();