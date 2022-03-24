(function () {
    'use strict';
    
    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'app/components/templates/items.component.template.html',
            bindings: {
                items: '<'
            }
        });
    
})();