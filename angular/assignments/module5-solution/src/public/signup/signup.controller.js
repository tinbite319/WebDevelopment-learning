(function() {
    'use strict';

    var signupController = function(MenuService) {
        var pm = this;

        pm.user = {};
        pm.favoriteDish = {};

        pm.showError = false;       
        pm.showMessage = false; 

        pm.signup = function(form) {
            pm.showError = false;
            pm.showMessage = false;
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }

            MenuService.getFavoriteDish(pm.user.favoriteDish).then(function(response) {
                pm.user.favoriteDishDetails = response.data;
                console.log(pm.favoriteDish);
                MenuService.saveUser(pm.user);
                pm.showMessage = true;
            }, function(error) {
                console.log(error);
                pm.showError = true;
            });

        }
    };

    signupController.$inject = ['MenuService'];
    angular.module('public').controller('SignupController', signupController);
})();