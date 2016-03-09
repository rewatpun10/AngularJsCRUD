/**
 * Created by coderpun10 on 3/6/16.
 */
app.service('signUp',['$rootScope',function($rootScope){
    var self=this;
    this.loginUpForm = function(){
        $rootScope.showTheForm = true;
        $rootScope.signUpForm = false;
    }

    self.save = function(name,password){
        $rootScope.users = [
            {name:'user',password:'user'}
        ];
        console.log('i am in the signup service');
        var name=name;
        var password = password;
        $rootScope.users.push({name: name, password: password});
        $rootScope.showTheForm = true;
        $rootScope.signUpForm = false;
    }
}]);