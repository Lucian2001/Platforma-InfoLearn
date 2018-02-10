 var app = angular.module('myApp', ['ngRoute','ng-fi-text','ngSanitize','ngAnimate']);

 app.config(['$routeProvider',
    function($routeProvider,$scope) {
    $routeProvider .when("/1", {
    templateUrl : "page/test17.html",
        reloadOnSearch: false,
        
 })               .when("/11", {
   
        controller:"test1",
         templateUrl : "page/test17.html",
 });
 }]);

angular.module('myApp').controller('blocuri', function ($scope,$location,$route,$window,$location){
      $scope.error="Nu ai nicio eroare";
      $scope.records = []
     //surse aplicatiii {
    var srcCounter=0;
    var srcId=1;
    if ($location.absUrl().substr($location.absUrl().length - 1) == "1"){srcCounter=1;
       $scope.src="page/test.html"; 
                                                                         
    }
    
   
    
//}
    $scope.code = "Blocuri"; 
    var i=0;
    var n=1,n1=1;
    var nr=0;
    var rotire=0;
    pattern=0;
    patternRepeta=0;
    spatiu="";
    spatiu1="";
    var bucla=false;
    $scope.chestie=n;
     $scope.rotireText="dreapta";
    rotire="dreapta";
 //adaugare linii
   $scope.inainte=function(){
    
        $scope.records[i] =n1+spatiu+spatiu1+" "+"mergi-inainte("+n1+")";
    i=i+1; 
       if (bucla==false){
       n1=n1+1;n=n+1;
        pattern=pattern*10+1;}
       else{n1=n1+1;
            
            
            patternRepeta=patternRepeta*10+1;
       }
    } 
   $scope.intoarcere=function(){
    
        $scope.records[i] =n1+spatiu+spatiu1+" "+"rotire la "+rotire+"("+n1+")";
    i=i+1; 
        if (bucla==false){
            n1=n1+1;n=n+1;
       if (rotire=="dreapta") 
       pattern=pattern*10+2;
       else
        pattern=pattern*10+3;
        }else
            {n1=n1+1;
        if (rotire=="dreapta") 
       patternRepeta=patternRepeta*10+2;
       else
        patternRepeta=patternRepeta*10+3;

            }
    } 
     $scope.repeta=function(){
        
        $scope.records[i] =n1+spatiu+spatiu1+"    "+"repeta de "+$scope.numarRepetari +" ori"+"("+n1+")";
    i=i+1; n1=n1+1;n=n+1;pattern=pattern*10+4;
         spatiu="--";
         spatiu1="--";
        bucla=true;
      
    } 
     var patternString,patternRepetaString,patternRepetaString1="";var patternRepetaLenght;
     $scope.end=function(){
        
        $scope.records[i] =n1+"    "+"end"+"("+n1+")";
    i=i+1; n1=n1+1;
           spatiu="";
         spatiu1="";
          patternString=pattern.toString();
         patternRepetaString=patternRepeta.toString();
       // alert($scope.numarRepetari)
         // alert(patternRepetaString);
           
        
     
         //alert(n);
      for(var i3=1;i3<$scope.numarRepetari;i3++){
         
             n=n+patternRepetaLenght;
         }
     
    } 
   
   
   //
 $scope.Run=function(){
    var patternRepetaLenght;
         
         patternRepetaLenght=patternRepetaString.length;
     
   
      for(var i3=1;i3<=$scope.numarRepetari;i3++){
          patternRepetaString1=patternRepetaString1+patternRepetaString;
         
         }
       
                 patternString=patternString.replace("4",patternRepetaString1);
     
            
         
         pattern=parseInt(patternString);
         
     alert(pattern);
     
     
     
     
     
     
     
     
     
   
     if (n==1){
        $scope.error="Pune si tu ceva cod!" ;
          $location.url('#'+0);
     }else{n=n-1;
      $scope.error="";
     $location.url('#'+pattern);
    $scope.error="Nu e nicio eroare" ;
           n=n+1;
     }
 }
  $scope.clear=function(){
  $scope.records = []
      n1=1;
      n=1;
      i=0;
      pattern=0;
      spatiu="";
      spatiu1="";
        
 }
    $scope.deleteLine=function(){
   
   alert(pattern);
   rand=parseInt($scope.rand);
  
        var pattern1=1,x,x1=0,y2=1;
        if (rand!=rand){ 
            pattern=Math.floor(pattern/10);
          
}else{
        x1=0;
        y2=1;
        
        pattern1=0;
        for (var i1=1;i1<n-1;i1++){
            y2=y2*10;}
               
     
      while(pattern>0){
          x1=x1+1;
            x=Math.floor(pattern /y2);
          console.log(x);
            console.log(x1);
            if (x1!=rand){
                var x3;
                x3=10;
                pattern1=pattern1*x3+x;
               
                x3=x3*10;
                } 
            pattern=pattern%y2;
            y2=y2/10;
          
        } 
      pattern=pattern1; 
     }
        
        
        rand=rand-1;
        
      $scope.records[rand] ="";
      var j;
      j=rand;
        for(var i1=1;i1<n-j-1;i1++){
      
            m=$scope.records[rand+1];
      $scope.records[rand+1]="";
     m = m.substring(1);
      m=rand+1+m;
      $scope.records[rand]=m;
            $scope.records[rand]=m;
            rand=rand+1;
       
        }
    
        $scope.records.splice(n-2, 1);
      n=n-1;
        n1=n1-1;
        i=i-1;
    
      alert(pattern); 
    
     
}
    //dreapta stanga
   
    $scope.dreapta=function(){

    rotire="dreapta";
   
       $scope.rotireText="dreapta";                
   }
    $scope.stanga=function(){
    
    rotire="stanga";
   $scope.rotireText="stanga";
                       
   }
    
    //
    
    // functii load surse {
    $scope.a1=function(){

   if (srcCounter==1){ 
    $scope.src="page/test.html";
   
                       
   }
    }
    $scope.a2=function(){

   if (srcCounter==1){
     
       $scope.src="page/test1.html"; 
   }
    }
    $scope.a3=function(){

   if (srcCounter==1){
    
       $scope.src="page/test2.html";
   }
    }
    //}
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


angular.module('myApp').controller('test1', function ($scope){
    
    
})
app.directive('header123', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl:'page/test.html',
  }
})
