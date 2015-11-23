var myApp = angular.module('myApp',[]);

myApp.controller('FormController',function($scope){
	$scope.formData = { name:'tomorn',email: 'tomorn.b@dtac.co.th'}

	$scope.register = function(){
		alert("register : " + $scope.formData.name)
	}
})
