angular.module('myApp.Login').service('LoginService', 
	function loginService(lock, authManager) {

		var service = this;

		service.login = function login() {
			lock.show();
		}

		service.logout = function logout() {
			localStorage.removeItem('id_token');
			authManager.unauthenticate();
		}

		service.registerAuthenticationListener = function registerAuthenticationListener() {
			lock.on('authenticated', function (authResult) {
				localStorage.setItem('id_token', authResult.idToken);
				authManager.authenticate();
			});
		}
});


