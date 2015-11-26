var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('PromiseController', function ($timeout, $scope,$q) {

  var kfcOfficer = $q.defer();

  console.log("Officer: preparing......") ;
  var order = setTimeout(function () {
    console.log("Officer: chicken cooked......");
    kfcOfficer.resolve("lots of chicken!");
  },5000);

  var chickenLover = kfcOfficer.promise;

  chickenLover.then(function (data) {
    console.log("User: eat then all : " + data);
  }),(function (data) {
    console.error(data);
    console.error("User: I'll buy McDonald " + data);
   
  })
  // .then(function (data) {
  //   console.error("I'm alive");
  // },function (data) {
  //   console.error("I'm dead");
  // })

  $scope.outofChicken = function () {
    clearTimeout(order);
    kfcOfficer.reject("order canceled");
  }

  $scope.changeOrder = function () {
    clearTimeout(order);
    kfcOfficer.reject("order change");
  }

	// $scope.value = "Hello world"

	// $timeout(function() {
	// 	$scope.value = "Hello AngularJS!";
	// 	$timeout(function() {
	// 		$scope.value = "Hello EmberJS!";
	// 		$timeout(function() {
	// 			$scope.value = "Hello KnockoutJS!";
	// 		}, 3000);
	// 	}, 3000);
	// }, 3000);
});

angular.module('myApp').controller('ModalController', function($scope, $uibModal) {
	$scope.open = function() {
		var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 500,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
	}
});

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.ok = function () {
    $uibModalInstance.close('ok');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
