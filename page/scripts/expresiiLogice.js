angular.module('myApp').controller('mama1', function ($scope,$http,$location,$timeout){
var raspuns; 
    load();
      $scope.visible=0;
    $scope.visible1=0;
   $scope.numarExercitii=0;
    raspuns=0;
  function load(){
    $http({
  method: 'GET',
  url: '/page/generareEnunt.php',
   
}).then(function successCallback(response) {
 
        $scope.enunt=response.data.Intrebare;
  raspuns=response.data.Raspuns;

        
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });}
      $scope.verificare=function(){
       var input1=$scope.input;
          input1.toLowerCase();
          if (raspuns==1){
          if (input1=="and" || input1=="&&" || "si"){
              corect();
          } else{
              gresit();
          }
          } else if (raspuns==2){
            if (input1=="or" || input1=="||" || input1=="ori"){
              corect();
          }
          else{
               gresit();
          }
      }else{
               gresit();
          } 
 }
  function corect(){
      if ($scope.numarExercitii==3){
                $scope.numarExercitii++;
          terminat();
      } else{
      $scope.visible=1;
      $scope.numarExercitii++;
      $timeout( function(){
        $scope.visible=0; 
          load();
        }, 1500);

    
        
$timeout( 1500); 
  }}
  function gresit(){
           $scope.visible1=1;
  
      $timeout( function(){
        $scope.visible1=0; 
          load();
        }, 1500);

    
        
$timeout( 1500); 
  }
  function terminat(){
alert("mama");
}
  
})