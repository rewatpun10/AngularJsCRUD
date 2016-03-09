app.controller('Homepage',['$scope',function($scope){
	$scope.homepage = "Homepage";
}]);

app.controller('About',['$scope',function($scope){
	$scope.about = "hello this is practise in angular js";
}]);

app.controller('Date',['$scope',function($scope){
	$scope.now = new Date();
}])

app.controller('First',['$scope',function($scope){
	$scope.username='unknown'

}]);

app.controller('SuccessLogin',function(){
	var index= 0;
	//this.persons = [
	//	{name:'Luffy' , position : 'captain' ,speciality :'RubberPower' },
	//	{name:'Zoro' , position : 'vice-captain' ,speciality:'Sword'  },
	//	{name:'Sacnchi' , position : 'Cook' , speciality :'Foot'}
	//];

	this.message='Successfully Logged in'

});

app.controller('LogoutController',function($scope,$rootScope){
	this.logoutcheck = function(){
		$rootScope.showTheForm = true;
		$rootScope.hideTheForm = false;
		$rootScope.mainView = false;
		//$location.path('/logout');
	}
	$scope.message='You are successfully Logged OUT'


});

app.controller('ListController',['$rootScope',function($rootScope){
	var index=0;
	var self = this;
	self.persons = [
		{code:1,name:'Luffy' , position : 'captain' ,speciality :'RubberPower' },
		{code:2,name:'Zoro' , position : 'vice-captain' ,speciality:'Sword'  },
		{code:3,name:'Sacnchi' , position : 'Cook' , speciality :'Foot'}
	];
	self.add = function(){
		$rootScope.showSave = true;
		$rootScope.showUpdate = false;
		self.code='';
		self.name='';
		self.position='';
		self.power='';
	}

	self.save = function(){
		var code=self.code;
		var name=self.name;
		var position=self.position;
		var speciality=self.power;
		//if(code=='' || name== '' || position =='' || speciality ==''){
		//	self.errorMessage='Fields cannot be empty'
		//}
		self.persons.push({code: code, name: name, position: position, speciality: speciality});
	}
	self.edit = function(id){
		var index = getSelecteIndex(id);
		console.log(index);
		var per = self.persons[index];
		self.code = per.code;
		self.name = per.name;
		self.position = per.position;
		self.power = per.speciality;
		$rootScope.showSave = false;
		$rootScope.showUpdate = true;
		//this.persons[index].push({code:code,name:name,position:position,speciality:speciality});


	}
	self.update = function(){
		//self.persons.push({
		//	code:self.code, name:self.name, position :self.position, speciality:self.power
		//});
		//self.code='';
		//self.name='';
		//self.position='';
		//self.speciality='';

		var index = getSelecteIndex(self.code);
		self.persons[index].code = self.code;
		self.persons[index].name = self.name;
		self.persons[index].position = self.position;
		self.persons[index].speciality = self.power;

	}

	self.refresh = function(){
		self.original = null;
	}
	self.remove = function(id){
		var result = confirm('Are you Sure???');
		if(result===true){
			var index = getSelecteIndex(id);
			self.persons.splice(index,1);
		}
	}
	function getSelecteIndex(id){
		for(var i=0;i< self.persons.length;i++)
			if(self.persons[i].code == id)
				return i;
			return -1;

	}

}]);
app.controller('LoginController',function(signUp){
	var self=this;
	self.loginUpForm = function(){
		signUp.loginUpForm();
	//$rootScope.showTheForm = true;
	//$rootScope.signUpForm = false;
	}
	//$rootScope.users = [
	//	{name:'user',password:'user'}
	//];
	//self.save = function(){
	//	var name=self.name;
	//	var password = self.password;
	//	$rootScope.users.push({name: name, password: password});
	//	$rootScope.showTheForm = true;
	//	$rootScope.signUpForm = false;
	//}
	self.save=function() {
			var name=self.username;
			var password = self.password;
		signUp.save(name,password);
	}


});
