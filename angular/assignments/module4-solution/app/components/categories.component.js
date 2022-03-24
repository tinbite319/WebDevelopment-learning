(function () {
    'use strict';
    
    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'app/components/templates/categories.component.template.html',
            bindings: {
                items: '<'
            }
        });
    
})();
