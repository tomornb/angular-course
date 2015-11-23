
var app = angular.module('myApp', []);

app.filter('filter', function () {
    return function (items, letter) {
        var filtered = [];
        var letterMatch = new RegExp(letter, 'i');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (letterMatch.test(item.nickname)) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});


app.controller('ProfileController', function ($scope) {

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
