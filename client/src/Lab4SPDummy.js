var myModule = angular.module('myApp', 
	[
		'auth0.lock', 
		'angular-jwt', 
		'ui.router', 
    'myApp.Home',
    'myApp.Login'
	]);

myModule.config(function($stateProvider, lockProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'home/view/home.html',
        controllerAs: 'homeCtrl'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'login/view/login.html',
        controllerAs: 'loginCtrl'
      });

    lockProvider.init({
      clientID: 'VH0Id5IDEpi91U7tw9Ybk0NbPhhb5Ayb',
      domain: 'forza.auth0.com'
    });

    $urlRouterProvider.otherwise('/home');
});

myModule.run(function($rootScope, LoginService, lock) {
    $rootScope.authService = LoginService;
    authService.registerAuthenticationListener();
    lock.interceptHash();
});