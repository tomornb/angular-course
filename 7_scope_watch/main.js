var app = angular.module('myApp', []);

app.controller('BookController' , function($scope) {
	$scope.books = ['HTML5','CSS','Responsive Web Design'];
	$scope.name="Scope for BookController";

  $scope.addToWishList=function(book) {
      $scope.wishListCount++;
  };

  $scope.wishListCount = 0;
  //$scope.$watch('wishListCount',function(newValue,oldValue){
  var cancle_watch = $scope.$watch('wishListCount',function(newValue,oldValue){ // input var for cancle watch
      console.log('called '+newValue+' times');
      if(newValue==2){
				alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
        cancle_watch(); // after alert cancle wath
			}
		});
});
