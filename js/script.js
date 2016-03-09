app.controller('validationCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
    var validUsername = "admin";
    var validEmail = "admin@gmail.com";

    $rootScope.showTheForm = true;
    $rootScope.hideTheForm = false;
    $rootScope.mainView = false;
    $rootScope.signUpForm = false;

    $scope.reset = function () {
        $scope.username = '';
        $scope.email = '';
    };
    /*using $scope
     $scope.checkData = function() {
     if ($scope.username != validUsername || $scope.email != validEmail) {
     alert("The data provided do not match with the default owner");
     } else {
     //$scope.showTheForm = false;
     //var path = '/successLogin';
     //$location.url(path);
     $location.path('/successLogin')
     }
     }
     */

    //using this
    this.checkData = function () {
        var isValidLogin = false;
        for (var i in $rootScope.users) {
            if (this.user.username == $rootScope.users[i].name && this.user.password == $rootScope.users[i].password) {
                isValidLogin = true;
            }
        }
        //$scope.showTheForm = false;
        //var path = '/successLogin';
        //$location.url(path);
        if (isValidLogin) {
            $rootScope.showTheForm = false;
            $rootScope.hideTheForm = true;
            $rootScope.mainView = true;
            //$location.path('/successLogin');
            var path = '/successLogin';
            $location.url(path);
            console.log('loggedIn');
        }
    };
//if (this.user.username != 'admin' || this.user.password != 'admin') {
//    alert("The data provided do not match with the default owner");
//} else {
//    //$scope.showTheForm = false;
//    //var path = '/successLogin';
//    //$location.url(path);
//    $rootScope.showTheForm = false;
//    $rootScope.hideTheForm = true;
//    $rootScope.mainView = true;
//    //$location.path('/successLogin');
//    var path = '/successLogin';
//    $location.url(path);
//    console.log('loggedIn');
//}

    this.signUpForm = function () {
        $rootScope.showTheForm = false;
        $rootScope.signUpForm = true;
        //var path = '/signUp';
        //$location.url(path);
    };
    this.loginUpForm = function () {
        $rootScope.showTheForm = true;
        $rootScope.signUpForm = false;

    };
}]);

//var RoutingApp = angular.module('RoutingApp',['ngRoute']);
//RoutingApp.config('routeProvider',function($routeProvider){
//        $routeProvider
//            .when('/first',{
//                templateUrl : 'pages/first.html'
//            })
//            .when('/second',{
//                 templateUrl : 'pages/second.html'
//            });
//});