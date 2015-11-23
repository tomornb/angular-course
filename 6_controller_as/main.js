var app = angular.module('myApp', []);

app.controller('ParentController', function ($rootScope) {
	//$scope.name = "Parent";
	//
	//$scope.reset = function () {
	//	$scope.name = "Parent";
	//};
    this.name = 'parent scope'
});

app.controller('ChildController', function ($rootScope) {

	//$scope.reset = function () {
	//	$rootScope.name = "Reset By Child";
	//};
    this.name = 'child scope'
});
