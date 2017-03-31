var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.contactlist = response;
    $scope.contact = "";
  });
};

refresh();

$scope.addContact = function() {
  if($scope.contact.fahrenheit)
  {
  $scope.contact.fahrenheit= ($scope.contact.fahrenheit + 32);
  }
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
    refresh();
  });
};
//end
$scope.deselect = function() {
  $scope.contact = "";
}
//$scope.lumen_options = ["Fahrenheit","Celsius"];

}]);﻿
