 var app = angular.module('myApp', ['ngRoute','ng-fi-text','ngSanitize','ngAnimate']);

 app.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider .when("/1", {
    templateUrl : "page/test16.html",
        reloadOnSearch: false,
 });
 }]);

angular.module('myApp').controller('blocuri', function ($scope,$location,$route,$window){
      $scope.error="Nu ai nicio eroare";
      $scope.records = []

    $scope.code = "Blocuri";
    var i=0;
    var n=1;
    var nr=0;
    $scope.chestie=n;
     
   $scope.myFunc=function(){
    
        $scope.records[i] =n+"    "+"mergi-inainte("+n+")";
    i=i+1; n=n+1;
    } 
 $scope.Run=function(){
    
     if (n==1){
        $scope.error="Pune si tu ceva cod!" ;
          $location.url('#'+0);
     }else{n=n-1;
      $scope.error="";
     $location.url('#'+n);
    $scope.error="Nu e nicio eroare" ;
           n=n+1;
     }
 }
  $scope.clear=function(){
  $route.reload();
        
 }
    $scope.deleteLine=function(){
   rand=parseInt($scope.rand);
   rand=rand-1;
      $scope.records[rand] ="";
      var j;
      j=rand;
        for(var i=1;i<n-j-1;i++){
      
            m=$scope.records[rand+1];
      $scope.records[rand+1]="";
     m = m.substring(1);
      m=rand+1+m;
      $scope.records[rand]=m;
            $scope.records[rand]=m;
            rand=rand+1;
       
        }
    alert(n);
        $scope.records.splice(n-2, 1);
      n=n-1;
    
      
      
     
         
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

