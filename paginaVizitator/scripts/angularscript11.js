 var app = angular.module('myApp', ['ngRoute','ng-fi-text','ngSanitize','ngAnimate']);



angular.module('myApp').controller('blocuri', function ($scope,$location,$route,$window,$location,$routeParams,$http,$timeout){


      $scope.error="Nu ai nicio eroare";
      $scope.records = []
     //surse aplicatiii {
    var srcCounter=0;
    var srcId=1;
//alert($scope.src);
   srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
   pagina1=$location.absUrl().substr($location.absUrl().length - 3);
   pagina1=pagina1.charAt(0);
     paginaUpload="1."+pagina1+"."+srcCounter;
    //if ( srcCounter== "1"){
    var href12="1."+pagina1+"."+5;
   
 
    $scope.src="paginaVizitator/pagini/"+href12+".php";   

    $timeout( function (){
         $scope.src="paginaVizitator/pagini/"+paginaUpload+".php";
         
        }, 200);
  
       $scope.blocuriSrc="paginaVizitator/blocuri/"+paginaUpload +"bloc.html";
    //            alert("dsa");
    //}
    //if (srcCounter==2){

//$scope.src="paginaVizitator/test1.html";

      //}
      //if (srcCounter==3){
  ///$scope.src="paginaVizitator/test2.html";
        //}


//} OLD SISTEM*/
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
     repetaOn=false;
    rotire="dreapta";
 //adaugare linii
   $scope.inainte=function(){

        $scope.records[i] =n1+spatiu+spatiu1+" "+"mergi-inainte("+n1+")";
    i=i+1;
       if (bucla==false && repetaOn==false){
       n1=n1+1;n=n+1;
        pattern=pattern*10+1;}
       else if(repetaOn==true && bucla==false){
        n1=n1+1;n=n+1;
           patternString=patternString+"1";
       } else
       {n1=n1+1;


            patternRepeta=patternRepeta*10+1;
       }
    }
   $scope.intoarcere=function(){

        $scope.records[i] =n1+spatiu+spatiu1+" "+"rotire la "+rotire+"("+n1+")";
    i=i+1;
        if (bucla==false && repetaOn==false){
            n1=n1+1;n=n+1;

       if (rotire=="dreapta"){
       pattern=pattern*10+2;

     }
       else
        pattern=pattern*10+3;
        }else if(repetaOn==true && bucla==false){
            n1=n1+1;n=n+1;
        if (rotire=="dreapta")
       patternString=patternString+"2";
       else
        patternString=patternString+"3";
        }else
            {n1=n1+1; n=n+1;
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
repetaOn=true;
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
    //alert(pattaernString);


         //alert(n);
      for(var i3=1;i3<$scope.numarRepetari;i3++){

             n=n+patternRepetaLenght;
         }
bucla=false;
//alert(pattern);
    }


   //
 $scope.Run=function(){
if (paginaUpload=="1.1.1"){
textTanc1="Tancul facut de tine este acesta";
if (idComponenta==513){
$scope.tancComplet="paginaVizitator/assets/images/tanc_albastru.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==514){
$scope.tancComplet="paginaVizitator/assets/images/tanc_corp_albastru_cap_gri.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==523){
$scope.tancComplet="paginaVizitator/assets/images/tanc_corp_gri_cap_albastru.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==524){
$scope.tancComplet="paginaVizitator/assets/images/tanc_gri.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
   $location.url('#'+idComponenta+srcCounter);
}
else { 
    
//alert(pattern);
     if (repetaOn==true){
    var patternRepetaLenght;

         patternRepetaLenght=patternRepetaString.length;


      for(var i3=1;i3<=$scope.numarRepetari;i3++){
          patternRepetaString1=patternRepetaString1+patternRepetaString;

         }
//alert(patternString);
                 patternString=patternString.replace("4",patternRepetaString1);
//alert(patternString);


         pattern=parseInt(patternString);}

    //alert(pattern);




//alert(n);



         if (n==1){
        alert("Pune si tu ceva cod!") ;
         pattern=0;
     }else{pattern=pattern*10+parseInt($location.absUrl().substr($location.absUrl().length - 1));
      $scope.error="";
     $location.url('#'+pattern);
         pattern=Math.floor(pattern /10);
    $scope.error="Nu e nicio eroare" ;

           //alert("boss");
     }
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
      repetaOn=false;

 }
    $scope.deleteLine=function(){

   //alert(pattern);
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

      //alert(pattern);


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
    //$scope.src="paginaVizitator/test.html";
    $scope.a1=function(){

pagina1=$location.absUrl().substr($location.absUrl().length - 3);
    pagina1=pagina1.charAt(0);
   $location.url("1/"+pagina1+"#1");
         srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
        paginaUpload="1."+pagina1+"."+srcCounter;


 $scope.src="paginaVizitator/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="paginaVizitator/blocuri/"+paginaUpload +"bloc.html";


    }
    $scope.a2=function(){

pagina1=$location.absUrl().substr($location.absUrl().length - 3);

        pagina1=pagina1.charAt(0);

        $location.url("1/"+pagina1+"#2");
         srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
            paginaUpload="1."+pagina1+"."+srcCounter;

 $scope.src="paginaVizitator/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="paginaVizitator/blocuri/"+paginaUpload +"bloc.html";
        //daca este diferit de o pagina care nu are nevoie de target

    }
    $scope.a3=function(){

        pagina1=$location.absUrl().substr($location.absUrl().length - 3);
     pagina1=pagina1.charAt(0);



$location.url("1/"+pagina1+"#3");
              srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
          paginaUpload="1."+pagina1+"."+srcCounter;
$scope.src="paginaVizitator/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="paginaVizitator/blocuri/"+paginaUpload +"bloc.html";
    }
    $scope.a4=function(){

        pagina1=$location.absUrl().substr($location.absUrl().length - 3);
     pagina1=pagina1.charAt(0);



  $location.url("1/"+pagina1+"#4");
              srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
          paginaUpload="1."+pagina1+"."+srcCounter;
  $scope.src="paginaVizitator/pagini/"+paginaUpload+".php";
  $scope.blocuriSrc="paginaVizitator/blocuri/"+paginaUpload +"bloc.html";
    }
// aplicatie tancuri




$scope.eroare="";
nrComponenta=1;
idComponenta=0;
    $scope.corpTanc1=function(){
      if (nrComponenta == 2){
        $scope.eroare="";
        $scope.tancPart2="paginaVizitator/assets/images/corp_albastru.png";
nrComponenta=nrComponenta+1;
idComponenta=idComponenta*10+1;
      }
      else {
      $scope.eroare = "  Mai întâi ar trebui sa pui roțile deoarece,și aici, ca la un algoritm, pașii trebuie să respecte o ordine logică!";

      }
    }
    $scope.corpTanc2=function(){
      if (nrComponenta == 2){
        $scope.eroare="";
        $scope.tancPart2="paginaVizitator/assets/images/corp_gri.png";
nrComponenta=nrComponenta+1;
idComponenta=idComponenta*10+2;
      }
      else {
      $scope.eroare =  "  Mai întâi ar trebui sa pui roțile deoarece,și aici, ca la un algoritm, pașii trebuie să respecte o ordine logică!";

      }
    }
    $scope.capTanc1=function(){
      if (nrComponenta == 3){
        $scope.eroare="";
        $scope.tancPart3="paginaVizitator/assets/images/cap_albastru.png";
nrComponenta=nrComponenta+1;
idComponenta=idComponenta*10+3;
      }
      else {
      $scope.eroare = "Aceasta nu este piesa care ar trebui pusă!";

      }
    }
    $scope.capTanc2=function(){
      if (nrComponenta == 3){
        $scope.eroare="";
        $scope.tancPart3="paginaVizitator/assets/images/cap_gri.png";
nrComponenta=nrComponenta+1;
idComponenta=idComponenta*10+4;
      }
      else {
      $scope.eroare = "Aceasta nu este piesa care ar trebui pusă!Mai întâi ar trebui să pui roțile deoarece, și aici, ca la un algoritm, pașii trebuie să respecte o ordine logică!";

      }
    }
    $scope.roti=function(){

    if (nrComponenta == 1){
      $scope.eroare="";
      $scope.tancPart1="paginaVizitator/assets/images/roti.png";
   nrComponenta=nrComponenta+1;
   idComponenta=idComponenta*10+5;
    }
    else {
  $scope.eroare = "Ai pus deja niște roți. Un tanc poate să aibă doar o singură pereche de roți!";

    }
    }



    //}
    //Surse expresiiaritmetice
var numarSurse;
var counterSursa=1;
    
 
    var href2;
   var href1=$location.absUrl();
       href1=href1.charAt(href1.length-3);
        if (href1=="2")  
         $scope.codeSrc="paginaVizitator/expresiiAritmetice/expresieAritmetica2.html";
          else if(href1=="3"){
             $scope.codeSrc="paginaVizitator/operatoriRelationali/operatoriRelationali2.html";  
          } else if(href1=="4"){
             $scope.codeSrc="paginaVizitator/expresiiLogice/expresiiLogice2.html"; 
          }
     $timeout( function(){
         if (href1=="2")  
         $scope.codeSrc="paginaVizitator/expresiiAritmetice/expresieAritmetica1.html";
          else if(href1=="3"){
             $scope.codeSrc="paginaVizitator/operatoriRelationali/operatoriRelationali1.html";  
          } else if(href1=="4"){
             $scope.codeSrc="paginaVizitator/expresiiLogice/expresiiLogice1.html"; 
          }
         
        }, 200);

        //time
        $scope.time = 0;
        
        //timer callback
        var timer = function() {
            if( $scope.time < 5000 ) {
                $scope.time += 1000;
                $timeout(timer, 1000);
            }
        }
        
        
        $timeout(timer, 100); 
 
    if(href1=="2"){
    numarSurse=5;
  
        href2="paginaVizitator/expresiiAritmetice/expresieAritmetica";
    } else if(href1=="3"){
        numarSurse=6;
 
        href2="paginaVizitator/operatoriRelationali/operatoriRelationali";
    } else if (href1=="4"){
      numarSurse=2;

      href2="paginaVizitator/expresiiLogice/expresiiLogice";
    }

$scope.next1=function(){
    if(counterSursa>0 && counterSursa<numarSurse) {
 counterSursa= counterSursa+1;
    $scope.codeSrc=href2+counterSursa.toString()+".html";
    }
}

$scope.previous1=function(){
if(counterSursa>1 && counterSursa<=numarSurse) {
    counterSursa= counterSursa-1;
    $scope.codeSrc=href2+counterSursa.toString()+".html";
}
}
//                           //

});

angular.module('myApp').controller('pagini', function ($scope,$http,$location){
  $scope.info=function(){


  }
   var n=1;
    //$scope.href=n;

   var n1=$location.url();

var n2="";
var n3="";
    var nr=0;
var counter;
n3="";
      for(var i=0;i<n1.length;i++){
       if (n1[i]=="/"){
         nr++;}
         if (nr==1){
           n3=n3+n1[i];
         }
         if (nr==2){
           n2=n2+n1[i+1];
         }
       }

    counter=parseInt(n2);

  $scope.previous=function(){
    if (counter>1){
      counter=counter-1;

 }
      $scope.href=n3+"/"+counter+"#1";
// }
}
  $scope.next=function(){
    if (counter<10){
      counter=counter+1;

 }
      $scope.href=n3+"/"+counter+"#1";
 }

$scope.info=function(){

}


});


angular.module('myApp').controller('test1', function ($scope){


})
app.directive('header123', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl:'paginaVizitator/test.html',
  }
})

angular.module('myApp').controller('expresiiLogice', function ($scope,$http,$location,$timeout){ 

    
var raspuns; 
    load();
      $scope.visible=0;
    $scope.visible1=0;
   $scope.numarExercitii=0;
    raspuns=0;
  function load(){
    $http({
  method: 'GET',
  url: '/paginaVizitator/generareEnunt.php',
   
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
   alert(raspuns);
          if (raspuns==1){
          if (input1=="and" || input1=="si"){
              corect();
              $scope.input="";
          } else{
              gresit();
               $scope.input="";
          }
          } else if (raspuns==2){ 
            if (input1=="or" ||  input1=="ori"){
              corect();
                 $scope.input="";
          }
          else{
               gresit();
               $scope.input="";
          }
      }else{
               gresit();
           $scope.input="";
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
  }
  }
  function gresit(){
           $scope.visible1=1;
  
      $timeout( function(){
        $scope.visible1=0; 
          load();
        }, 1500);

    
        
$timeout( 1500); 
  }
  function terminat(){

}
})