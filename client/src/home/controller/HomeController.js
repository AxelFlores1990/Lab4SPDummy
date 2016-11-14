angular.module('myApp.Home').controller('HomeController',
    function (LoginService) {
    var home = this;
    home.LoginService = LoginService;
});