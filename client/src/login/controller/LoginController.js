angular.module('myApp.Login').controller('LoginController', 
	function LoginController(LoginService) {
	    var login = this;
	    login.LoginService = LoginService;

	    login.currentUser = null;

	    $scope.$on('onCurrentUserId', function (ctx, id) {
	        login.currentUser = LoginService.getCurrentUser();
	    });

	    login.currentUser = function logout() {
	    	LoginService.logout();
	    	login.currentUser = null;
	    }
});




