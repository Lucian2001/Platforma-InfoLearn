 var app = angular.module('myApp', ['ngRoute','ng-fi-text','ngSanitize','ngAnimate']);

 app.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider .when("/1", {
    templateUrl : "page/test12.html",
        reloadOnSearch: false,
 });
 }]);

angular.module('myApp').controller('blocuri', function ($scope,$location){
      $scope.error="Nu ai nicio eroare";
      $scope.records = []

    $scope.code = "Blocuri";
    var i=0;
    var n=1;
    var nr=0;
    $scope.chestie=n;
   $scope.myFunc=function(){
    
        $scope.records[i] =n+"    "+"mergi-inainte()";
    i=i+1; n=n+1;
    } 
 $scope.Run=function(){
     if (n==1){
        $scope.error="Pune si tu ceva cod!" 
     }else{
     n=n-1;
     $location.url('#'+n);}
 }
});

angular.module('myApp').controller('pagini', function ($scope,){
   
   var n=1;
    $scope.href=n;
  $scope.previous=function(){
    if (n>1){
      n=n-1;
      $scope.href=n;
 }}
  $scope.next=function(){
    if (n<10){
      n=n+1;
      $scope.href=n;
 }}

});

