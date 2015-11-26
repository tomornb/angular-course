var app = angular.module('myApp', []);

app.controller('RegisterController', function ($scope) {
	$scope.register = function(isValid) {

	$scope.myForm.name.setValidity('uniqe',true);
	if(isValid){
    	console.log("register success");
	}else{
    	console.log("invalid Form");
	}
  }
});
