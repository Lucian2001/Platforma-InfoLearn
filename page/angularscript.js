 var app = angular.module('myApp', ['ngRoute','ng-fi-text','ngSanitize']);

 app.config(function($routeProvider) {
    $routeProvider .when("/", {
    templateUrl : "page/test5.html",
 });
 });

angular.module('myApp').controller('blocuri', function ($scope){
   
      $scope.records = []

    $scope.code = "Blocuri";
    var i=0;
     var m="1";
    var n=1;
    $scope.chestie=n;
    $scope.myFunc=function(){
    
        $scope.records[i] =n+"    "+"mergi-inainte()";
    
       i=i+1;
       n=n+1;
    } 
    
});
