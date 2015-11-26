angular.module("uiRouterExample", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    url: '/home',
    templateUrl: 'templates/home.html'
  })
  .state('list',{
    url: '/list',
    controller: 'ListCtrl',
    templateUrl: 'templates/list.html'
  $urlRouterProvider.otherwise('/home');
})

.controller("ListCtrl", function($scope) {
    $scope.books = [
      {name: 'AngularJS for starter'},
      {name: 'AngularJS from novice to ninja'},
      {name: 'ReactJS vs AngularJS'}
    ];

    $scope.selectItem = function(selectedItem) {
        $scope.selectedItem = selectedItem;
    };

    $scope.isSelectedItem = function(item) {
      return $scope.selectedItem == item;
    }
})

.controller('ProfileController', function ($scope) {

  // Item List Arrays
  $scope.items = [];
  $scope.checked = [];

  // Add a Item to the list
  $scope.addItem = function () {
      console.log("push data");
      $scope.items.push({
          title: $scope.titleText,
          content: $scope.contentText,
          author: $scope.authorText,
          postdate: new Date()
      });

      console.log(new Date());
      // Clear input fields after push
      $scope.titleText = "";
      $scope.contentText = "";
      $scope.authorText = "";

  };
});
