(function() {
    'use strict';

    var infoController = function(MenuService, ApiPath) {
        var pm = this;
        pm.apiPath = ApiPath;

        pm.signedUp = false;

        pm.user = MenuService.getUser();
        console.log('User is', pm.user);
        if (angular.equals(pm.user, {})) {
            pm.signedUp = false;
        } else {
            pm.signedUp = true;
        }
    };

    infoController.$inject = ['MenuService', 'ApiPath'];
    angular.module('public').controller('InfoController', infoController);
})();