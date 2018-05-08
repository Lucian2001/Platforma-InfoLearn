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


    $scope.src="paginaUtilizator/pagini/"+href12+".php";

    $timeout( function (){
         $scope.src="paginaUtilizator/pagini/"+paginaUpload+".php";

        }, 200);

       $scope.blocuriSrc="paginaUtilizator/blocuri/"+paginaUpload +"bloc.html";
    //            alert("dsa");
    //}
    //if (srcCounter==2){

//$scope.src="paginaUtilizator/test1.html";

      //}
      //if (srcCounter==3){
  ///$scope.src="paginaUtilizator/test2.html";
        //}


//} OLD SISTEM*/
    $scope.code = "Blocuri";
    var i=0;
    var n=1,n1=1;
    var nr=0;
    var rotire=0;
    pattern="";
    patternRepeta="";
    spatiu="";
    spatiu1="";
    var bucla=false;
    $scope.chestie=n;
     $scope.rotireText="dreapta";
     repetaOn=false;
    rotire="dreapta";
 //adaugare linii
   $scope.inainte=function(){
         if (ifOn==1 && repetaOn==1){
spatiu="---";
             spatiu1="---";
         }
        $scope.records[i] =n1+spatiu+spatiu1+" "+"mergi-înainte";
    i=i+1;
       if (bucla==false && repetaOn==false){
       n1=n1+1;n=n+1;
        pattern=pattern+"1";}
       else if(repetaOn==true && bucla==false){
        n1=n1+1;n=n+1;
           patternString=patternString+"1";
       } else
       {n1=n1+1;


            patternRepeta=patternRepeta+"1";
       }
    }
   var ifOn=0;
   $scope.if=function(){
  if (ifOn==0){
       $scope.records[i] =n1+spatiu+spatiu1+" "+"Dacă (șoseaua nu este blocată) atunci";
     i=i+1;n1=n1+1;}
       else{
eroareShow("Poți introduce un singur ,,if'' ");
       }
       ifOn=1;
   }
     $scope.ocolire=function(){

    if(repetaOn==false){
         if (ifOn==1){
       spatiu="--";
    spatiu1="--";
        $scope.records[i] =n1+spatiu+spatiu1+" "+"Ocolire-obstacol";
       if(pattern==11){
        pattern=pattern+"31211213";
           i=i+1;n1=n1+1;n=n+8;
    } else{

    }
    }
           spatiu="";
    spatiu1="";
       ifOn=1;}
         else{
             if (ifOn==1){
       spatiu="---";
    spatiu1="---";
        $scope.records[i] =n1+spatiu+spatiu1+" "+"Ocolire-obstacol";
    //   if(pattern==11){

                 patternRepeta=patternRepeta+"31211213";
      i=i+1;n1=n1+1;n=n+8;
    } else{

    }

           spatiu="--";
    spatiu1="--";
       ifOn=1;

         }
   }
   $scope.intoarcere=function(){

        $scope.records[i] =n1+spatiu+spatiu1+" "+"rotire la "+rotire;
    i=i+1;
        if (bucla==false && repetaOn==false){
            n1=n1+1;n=n+1;

       if (rotire=="dreapta"){
       pattern=pattern+"2";

     }
       else
        pattern=pattern+"3";
        }else if(repetaOn==true && bucla==false){
            n1=n1+1;n=n+1;
        if (rotire=="dreapta")
       patternString=patternString+"2";
       else
        patternString=patternString+"3";
        }else
            {n1=n1+1; n=n+1;
        if (rotire=="dreapta")
       patternRepeta=patternRepeta+"2";
       else
        patternRepeta=patternRepeta+"3";

            }
    }
     $scope.repeta=function(){
if (repetaOn==true){
eroareShow("Poți să introduci o singură buclă!");
} else{
        $scope.records[i] =n1+spatiu+spatiu1+"    "+"repetă de "+$scope.numarRepetari +" ori"
    i=i+1; n1=n1+1;n=n+1;pattern=pattern+"4";
         spatiu="--";
         spatiu1="--";
        bucla=true;
repetaOn=true;
}
}
     var endOn=0;var patternString,patternRepetaString,patternRepetaString1="";var patternRepetaLenght;
     $scope.end=function(){

       if (endOn==0){
         $scope.records[i] =n1+"    "+"end";
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
       endOn=1;
       }
    }

      $scope.altfel=function(){
  spatiu="--";
          spatiu1="--";

        $scope.records[i] =n1+spatiu+spatiu1+"    "+"altfel";
    i=i+1; n1=n1+1;
           spatiu="---";
         spatiu1="---";


       // alert($scope.numarRepetari)
         // alert(patternRepetaString);
    //alert(pattaernString);


         //alert(n);

//alert(pattern);
    }


   //
 $scope.Run=function(){

if (paginaUpload=="1.1.1"){
textTanc1="Tancul facut de tine este acesta.";
if (idComponenta==513){
$scope.tancComplet="paginaUtilizator/assets/images/tanc_albastru.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==514){
$scope.tancComplet="paginaUtilizator/assets/images/tanc_corp_albastru_cap_gri.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==523){
$scope.tancComplet="paginaUtilizator/assets/images/tanc_corp_gri_cap_albastru.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==524){
$scope.tancComplet="paginaUtilizator/assets/images/tanc_gri.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
   $location.url('#'+idComponenta+srcCounter);
}
else {

     if (repetaOn==true){
    var patternRepetaLenght;

         patternRepetaLenght=patternRepetaString.length;

  if (ifOn==1){
      var eroarePattern=0;
        patternRepetaString1= patternRepetaString1+patternRepetaString.slice(0,1);

      if (patternRepetaString1!="1"){
          alert("eroare");eroarePattern=1;
      }
  }  if (eroarePattern!=1){

         var nrIf=0,nrIf1=0,ok=true,i1,nr2=0;
      for(var i3=1;i3<=$scope.numarRepetari;i3++){
          if (ifOn==1 ){

       nrIf1=0;
              i1=0;
              if (nrIf==0){

              do{
                  if (patternRepetaString1=="11"){

                  nrIf1=1;

              } else{
                  ok=false;
              }

              } while(ok==true);}

                       if (nrIf1==1 && nrIf==0){
    patternRepetaString1 = patternRepetaString1.slice(0, - 1);
                                   nrIf=1;
                              patternRepetaString1=patternRepetaString1+patternRepetaString;

                       }  else{
                       nr2++;
                     if(nr2>1)
                           patternRepetaString1=patternRepetaString1+"1";
                       }

          }else
          patternRepetaString1=patternRepetaString1+patternRepetaString;

         }

                 patternString=patternString.replace("4",patternRepetaString1);
//alert(patternString);


         pattern=patternString;}}






//alert(n);



         if (n==1){
        eroareShow("Pune și tu ceva cod!") ;
   $location.url('#'+"-1");
     }else{
var patternSave;
         patternSave=pattern;
       pattern=pattern+parseInt($location.absUrl().substr($location.absUrl().length - 1));
      $scope.error="";
     $location.url('#'+pattern);
         pattern=pattern.substr(1);
    $scope.error="Nu e nicio eroare" ;
pattern=patternSave;
           //alert("boss");
     }
 }
}
  $scope.clear=function(){

      clear1();
 }
  function clear1(){
      $scope.records = []
          n1=1;
      n=1;
      i=0;
      pattern="";
      spatiu="";
      spatiu1="";
      ifOn=0;
      endOn=0;
      repetaOn=false;
  patternRepetaString1="";
  patternRepetaString="";
  patternRepeta="";
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
alert("dsa");

}
    //dreapta stanga

    $scope.dreapta=function(){

    rotire="dreapta";

       $scope.rotireText="dreapta";
   }
    $scope.stanga=function(){

    rotire="stanga";
   $scope.rotireText="stânga";

   }

    //

    // functii load surse {
    //$scope.src="paginaUtilizator/test.html";
    $scope.a1=function(){
clear1();
pagina1=$location.absUrl().substr($location.absUrl().length - 3);
    pagina1=pagina1.charAt(0);
   $location.url("1/"+pagina1+"#1");
         srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
        paginaUpload="1."+pagina1+"."+srcCounter;


 $scope.src="paginaUtilizator/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="paginaUtilizator/blocuri/"+paginaUpload +"bloc.html";


    }
    $scope.a2=function(){
clear1();
pagina1=$location.absUrl().substr($location.absUrl().length - 3);

        pagina1=pagina1.charAt(0);

        $location.url("1/"+pagina1+"#2");
         srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
            paginaUpload="1."+pagina1+"."+srcCounter;

 $scope.src="paginaUtilizator/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="paginaUtilizator/blocuri/"+paginaUpload +"bloc.html";
        //daca este diferit de o pagina care nu are nevoie de target

    }
    $scope.a3=function(){
clear1();
        pagina1=$location.absUrl().substr($location.absUrl().length - 3);
     pagina1=pagina1.charAt(0);



$location.url("1/"+pagina1+"#3");
              srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
          paginaUpload="1."+pagina1+"."+srcCounter;
$scope.src="paginaUtilizator/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="paginaUtilizator/blocuri/"+paginaUpload +"bloc.html";
    }
    $scope.a4=function(){
clear1();
        pagina1=$location.absUrl().substr($location.absUrl().length - 3);
     pagina1=pagina1.charAt(0);



  $location.url("1/"+pagina1+"#4");
              srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
          paginaUpload="1."+pagina1+"."+srcCounter;
  $scope.src="paginaUtilizator/pagini/"+paginaUpload+".php";
  $scope.blocuriSrc="paginaUtilizator/blocuri/"+paginaUpload +"bloc.html";
    }
// aplicatie tancuri




$scope.eroare="";
nrComponenta=1;
idComponenta=0;
    $scope.corpTanc1=function(){
      if (nrComponenta == 2){
        $scope.eroare="";
        $scope.tancPart2="paginaUtilizator/assets/images/corp_albastru.png";
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
        $scope.tancPart2="paginaUtilizator/assets/images/corp_gri.png";
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
        $scope.tancPart3="paginaUtilizator/assets/images/cap_albastru.png";
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
        $scope.tancPart3="paginaUtilizator/assets/images/cap_gri.png";
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
      $scope.tancPart1="paginaUtilizator/assets/images/roti.png";
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
         $scope.codeSrc="paginaUtilizator/expresiiAritmetice/expresieAritmetica2.html";
          else if(href1=="3"){
             $scope.codeSrc="paginaUtilizator/operatoriRelationali/operatoriRelationali2.html";
          } else if(href1=="4"){
             $scope.codeSrc="paginaUtilizator/expresiiLogice/expresiiLogice2.html";
          }
     $timeout( function(){
         if (href1=="2")
         $scope.codeSrc="paginaUtilizator/expresiiAritmetice/expresieAritmetica1.html";
          else if(href1=="3"){
             $scope.codeSrc="paginaUtilizator/operatoriRelationali/operatoriRelationali1.html";
          } else if(href1=="4"){
             $scope.codeSrc="paginaUtilizator/expresiiLogice/expresiiLogice1.html";
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

        href2="paginaUtilizator/expresiiAritmetice/expresieAritmetica";
    } else if(href1=="3"){
        numarSurse=6;

        href2="paginaUtilizator/operatoriRelationali/operatoriRelationali";
    } else if (href1=="4"){
      numarSurse=2;

      href2="paginaUtilizator/expresiiLogice/expresiiLogice";
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
    templateUrl:'paginaUtilizator/test.html',
  }
})

angular.module('myApp').controller('expresiiLogice', function ($scope,$http,$location,$timeout){

var buttonActive=1; 
var raspuns;
    load();
      $scope.visible=0;
    $scope.visible1=0;
   $scope.numarExercitii=0;
    raspuns=0;
  function load(){
    $http({
  method: 'GET',
  url: '/paginaUtilizator/generareEnunt.php',

}).then(function successCallback(response) {

        $scope.enunt=response.data.Intrebare;
  raspuns=response.data.Raspuns;


  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });}
      $scope.verificare=function(){
          if (buttonActive==1 ){
              buttonActive=0;
       var input1=$scope.input;
              
              if (input1!=null){
          input1.toLowerCase();

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
      } else{
          eroareShow("Introdu un raspuns!");
      }
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
          buttonActive=1; 
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
          if (raspuns==2){
            eroareRezultat("Raspunsul corect era ORI");
          } else{
           eroareRezultat("Raspunsul corect era AND");
          }
          buttonActive=1; 
        }, 1500);



$timeout( 1500);
  }
  function terminat(){
succes();
}
})


angular.module('myApp').controller('evaluare', function ($scope,$http,$location,$timeout){
    var x=2;var exercitiuOn=0;nrExercitiu=0;
    var punctaj=0; var raspunsOn1=0;
    var raspunsOn=0,raspunsOn1=0;var intrebare,intrebare1,raspuns,enunt,raspuns11;
    $scope.procente=0;
    $scope.x1=x-1;
    $scope.y1=x;
    $(".btn-info").css("background-color","#17A2B8");
var idIntrebari = new Array();
var idRaspunsuri=new Array();
var raspunsuri=new Array();
var idEx1=new Array();
var id1Ex1=new Array();
var numarIntermediar=0;
    var idRaspunsuri1=new Array();
    var idRaspunsuri2=new Array();
    for(var i=1;i<=20;i++){
        idIntrebari[i]=0;
    }

   generareIntrebari(20,idIntrebari,1);
    generareRaspunsuri(4,idRaspunsuri,1);
  $http({
  method: 'POST',
  url: '/paginaUtilizator/generareIntrebari.php',
  data: {id1:idIntrebari[1],id2:idIntrebari[2]},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}).then(function successCallback(response) {


  intrebare=response.data.Intrebare;
 if (intrebare.slice(0,-1)=="##&##"){
numarExercitiu= intrebare.substr(intrebare.length - 1);
exercitiuOn=1;
numarExercitiu=2;
enunt="";
 if (numarExercitiu==1){
         raspuns=generareNumere(idEx1,id1Ex1);
          for (i=1;i<=3;i++){
              id1Ex1[i]=semnGenerator(id1Ex1[i]);
          }
         enunt="Care este raspunsul expresiei ";
         for(i=1;i<=3;i++){
             enunt=enunt+idEx1[i]+id1Ex1[i];
         }
         enunt=enunt+idEx1[4]+"!";
           $scope.intrebare=enunt;
            generareRezultate(raspunsuri,raspuns);
} else if (numarExercitiu==2){
generareNumere4(idEx1,numarIntermediar);
numarIntermediar=Math.floor((Math.random() *2) + 1);
if(numarIntermediar==1){
  raspuns=(idEx1[1]%idEx1[2]);
     if (idEx1[2]==10){
          raspunsuri[2]=idEx1[1]%100;
            raspunsuri[3]=Math.floor(idEx1[1]/idEx1[2]);
              raspunsuri[4]=Math.floor(idEx1[1]/100);
     } else{
       raspunsuri[2]=idEx1[1]%10;
         raspunsuri[3]=Math.floor(idEx1[1]/idEx1[2]);
           raspunsuri[4]=Math.floor(idEx1[1]/10);
     }
} else{
  if (idEx1[2]==10){
       raspunsuri[2]=Math.floor(idEx1[1]/100);
         raspunsuri[3]=idEx1[1]%idEx1[2];
           raspunsuri[4]=idEx1[1]%100;
  } else{
    raspunsuri[2]=Math.floor(idEx1[1]/10);
      raspunsuri[3]=idEx1[1]%idEx1[2];
        raspunsuri[4]=idEx1[1]%10;
  }
  raspuns=Math.floor(idEx1[1]/idEx1[2]);
}
if(numarIntermediar==1){
  enunt="Care este raspunsul expresiei "+idEx1[1]+"%"+idEx1[2]+".";
} else{
  enunt="Care este raspunsul expresiei "+idEx1[1]+"/"+idEx1[2]+".";
}
 $scope.intrebare=enunt;
raspunsuri[1]=raspuns;
} else if(numarExercitiu==3){
var a,b;
  a=Math.floor((Math.random() * 6) + 1);
  b=Math.floor((Math.random() * 30) + 10);
numarIntermediar=generareOperator11(a);
enunt="Alege o varianta ca aceasa expresie sa fie corecta "+b+numarIntermediar+"__ .";
 $scope.intrebare=enunt;
 generareRaspunsuri124(raspunsuri,a,b);
 raspuns=raspunsuri[1];
} else if(numarExercitiu==4){
  var nr=Math.floor((Math.random() * 20) + 1);
  var nr1=Math.floor((Math.random() * 20) + 1);
  var nr2=Math.floor((Math.random() * 20) + 1);
  var nr4=Math.floor((Math.random() * 5) + 1);
  var nr5=Math.floor((Math.random() * 6) + 1);
  var nr6=Math.floor((Math.random() * 2) + 1);
  if (nr6==1){
    numarIntermediar="and";
  }else{
    numarIntermediar="ori";

  }
  var semn=semnGenerator(nr4);
  var operator=generareOperator11(nr5);
  nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultat12345(nr5,nr2);
enunt="Care este valoare de adevar a expresiei: " + "("+nr+semn+nr1+"="+ nr4+") "+numarIntermediar+"("+nr2+operator+nr5+")";
 $scope.intrebare=enunt;
}



     idRaspunsuri1[1]=raspunsuri[1];
        idRaspunsuri1[2]=raspunsuri[2];
        idRaspunsuri1[3]=raspunsuri[3];
        idRaspunsuri1[4]=raspunsuri[4];
     }else{
           $scope.intrebare=response.data.Intrebare;
                 idRaspunsuri1[1]=response.data.R1;
        idRaspunsuri1[2]=response.data.R2;
        idRaspunsuri1[3]=response.data.R3;
        idRaspunsuri1[4]=response.data.R4;
     }





























intrebare1=response.data.Intrebare1;
      if (intrebare1.slice(0,-1)=="##&##"){
        numarExercitiu= intrebare1.substr(intrebare1.length - 1);
        exercitiuOn=1;
        numarExercitiu=3;

          enunt="";
 if (numarExercitiu==1){
         raspuns11=generareNumere(idEx1,id1Ex1);
          for (i=1;i<=3;i++){
              id1Ex1[i]=semnGenerator(id1Ex1[i]);
          }
         enunt="Care este raspunsul expresiei ";
         for(i=1;i<=3;i++){
             enunt=enunt+idEx1[i]+id1Ex1[i];
         }
         enunt=enunt+idEx1[4]+"!";
           $scope.intrebare1=enunt;

  $scope.intrebare1=enunt;

           generareRezultate(raspunsuri,raspuns11);
} else if (numarExercitiu==2){
  generareNumere4(idEx1,numarIntermediar);
  numarIntermediar=Math.floor((Math.random() *2) + 1);
  if(numarIntermediar==1){
    raspuns11=(idEx1[1]%idEx1[2]);
       if (idEx1[2]==10){
            raspunsuri[6]=idEx1[1]%100;
              raspunsuri[7]=Math.floor(idEx1[1]/idEx1[2]);
                raspunsuri[8]=Math.floor(idEx1[1]/100);
       } else{
         raspunsuri[6]=idEx1[1]%10;
           raspunsuri[7]=Math.floor(idEx1[1]/idEx1[2]);
             raspunsuri[8]=Math.floor(idEx1[1]/10);
       }
  } else{
    if (idEx1[2]==10){
         raspunsuri[6]=Math.floor(idEx1[1]/100);
           raspunsuri[7]=idEx1[1]%idEx1[2];
             raspunsuri[8]=idEx1[1]%100;
    } else{
      raspunsuri[6]=Math.floor(idEx1[1]/10);
        raspunsuri[7]=idEx1[1]%idEx1[2];
          raspunsuri[8]=idEx1[1]%10;
    }
    raspuns11=Math.floor(idEx1[1]/idEx1[2]);
  }
  if(numarIntermediar==1){
    enunt="Care este raspunsul expresiei "+idEx1[1]+"%"+idEx1[2]+".";
  } else{
    enunt="Care este raspunsul expresiei "+idEx1[1]+"/"+idEx1[2]+".";
  }
   $scope.intrebare1=enunt;
  raspunsuri[5]=raspuns11;



} else if(numarExercitiu==3){
  var a,b;
    a=Math.floor((Math.random() * 6) + 1);
    b=Math.floor((Math.random() * 30) + 10);
  numarIntermediar=generareOperator11(a);
  enunt="Alege o varianta ca aceasa expresie sa fie corecta "+b+numarIntermediar+"__ .";
   $scope.intrebare1=enunt;
   generareRaspunsuri124(raspunsuri,a,b);
   raspuns11=raspunsuri[5];
}
     idRaspunsuri1[5]=raspunsuri[5];
        idRaspunsuri1[6]=raspunsuri[6];
        idRaspunsuri1[7]=raspunsuri[7];
        idRaspunsuri1[8]=raspunsuri[8];
      }else{
         $scope.intrebare1=response.data.Intrebare1;;
      idRaspunsuri1[5]=response.data.R11;
        idRaspunsuri1[6]=response.data.R21;
        idRaspunsuri1[7]=response.data.R31;
        idRaspunsuri1[8]=response.data.R41;
     }


      for (i=1;i<=4;i++){
        idRaspunsuri2[idRaspunsuri[i]]=idRaspunsuri1[i];
    }
          generareRaspunsuri(4,idRaspunsuri,1);

      for (i=5;i<=8;i++){
        idRaspunsuri2[idRaspunsuri[i-4]+4]=idRaspunsuri1[i];
    }
        $scope.raspuns1=idRaspunsuri2[1];
         $scope.raspuns2=idRaspunsuri2[2];
         $scope.raspuns3=idRaspunsuri2[3];
         $scope.raspuns4=idRaspunsuri2[4];
         $scope.raspuns5=idRaspunsuri2[5];
         $scope.raspuns6=idRaspunsuri2[6];
         $scope.raspuns7=idRaspunsuri2[7];
            $scope.raspuns8=idRaspunsuri2[8];
     //   $scope.enunt=response.data.Intrebare;
 // raspuns=response.data.Raspuns;


  }, function errorCallback(response) {

    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });





     $("label.btn").on('click',function () {

         $("#"+$(this).attr('id')).css("background-color","#138496");
    if($(this).attr('id')<5){
        if (raspunsOn==0){
            raspunsOn=1;
          if(exercitiuOn==1){
              if (idRaspunsuri2[$(this).attr('id')]==raspuns){
          punctaj=punctaj+10;

            }
          } else{
            if (idRaspunsuri2[$(this).attr('id')]==idRaspunsuri1[1]){
          punctaj=punctaj+10;

            }
          }   }
        else {

            eroareShow("Poti apasa un singur rapuns!");
        }


    } else{
        if (raspunsOn1==0){
            raspunsOn1=1;
        if(exercitiuOn==1){
               if (idRaspunsuri2[$(this).attr('id')]==raspuns11){
          punctaj=punctaj+10;

            }
          } else{
            if (idRaspunsuri2[$(this).attr('id')]==idRaspunsuri1[1]){
          punctaj=punctaj+10;

            }
          }
        }else {

            eroareShow("Poti apasa un singur rapuns!");
        }

          }



    });
var procente1=0;
$scope.resetare= function(){
  alert(punctaj);
    procente1=procente1+20;
    $(".progress-bar").css("width",(procente1+"%"));
    $scope.procente=procente1;
    raspunsOn=0;
    raspunsOn1=0;
        $scope.x1=x-1;
    $scope.y1=x;
        $(".btn-info").css("background-color","#17A2B8");
    x=x+2;
    if (x<12){
     $http({
  method: 'POST',
  url: '/paginaUtilizator/generareIntrebari.php',
  data: {id1:idIntrebari[x-1],id2:idIntrebari[x]},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}).then(function successCallback(response) {

  $scope.intrebare=response.data.Intrebare;
  $scope.intrebare1=response.data.Intrebare1;
 idRaspunsuri1[1]=response.data.R11;
        idRaspunsuri1[1]=response.data.R1;
        idRaspunsuri1[2]=response.data.R2;
        idRaspunsuri1[3]=response.data.R3;
        idRaspunsuri1[4]=response.data.R4;
        idRaspunsuri1[5]=response.data.R11;
        idRaspunsuri1[6]=response.data.R21;
        idRaspunsuri1[7]=response.data.R31;
        idRaspunsuri1[8]=response.data.R41;
    for (i=1;i<=4;i++){
        idRaspunsuri2[idRaspunsuri[i]]=idRaspunsuri1[i];
    }
          generareRaspunsuri(4,idRaspunsuri,1);

      for (i=5;i<=8;i++){
        idRaspunsuri2[idRaspunsuri[i-4]+4]=idRaspunsuri1[i];
    }
        $scope.raspuns1=idRaspunsuri2[1];
         $scope.raspuns2=idRaspunsuri2[2];
         $scope.raspuns3=idRaspunsuri2[3];
         $scope.raspuns4=idRaspunsuri2[4];
         $scope.raspuns5=idRaspunsuri2[5];
         $scope.raspuns6=idRaspunsuri2[6];
         $scope.raspuns7=idRaspunsuri2[7];
            $scope.raspuns8=idRaspunsuri2[8];
     //   $scope.enunt=response.data.Intrebare;
 // raspuns=response.data.Raspuns;


  }, function errorCallback(response) {

    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

}else{
    alert("stop");
}
}
})






function generareIntrebari(nr,idIntrebari,i){
    if (i==11 ) return 0;
    else{
       x=Math.floor((Math.random() *nr) + 1);
        idIntrebari[i]=x;
        for(var j=1;j<=i-1;j++){
             if (idIntrebari[j]==x){
             generareIntrebari(nr,idIntrebari,i);
             }
            }
    generareIntrebari(nr,idIntrebari,i+1);
    }
}

function generareRaspunsuri(nr,idRaspunsuri,i){
    if (i==5 ) return 0;
    else{
       x=Math.floor((Math.random() *4) + 1);
        idRaspunsuri[i]=x;
        for(var j=1;j<=i-1;j++){
             if (idRaspunsuri[j]==x){
             generareRaspunsuri(4,idRaspunsuri,i);
             }
            }
    generareRaspunsuri(4,idRaspunsuri,i+1);
    }
}

function semnGenerator(semn){
if(semn==1){
        return "+";
    } else if(semn==2){
        return "-";
    } else if(semn==3){
        return "%";
    } else if(semn==4){
        return "*";
    } else if(semn==5){
        return "/";
    }

}

function generareRezultate(raspunsuri,x){
    var nr,nr1,nr2,nr3;
    nr=Math.floor((Math.random() *10) + 1);
     nr1=Math.floor((Math.random() *10) + 1);
     nr2=Math.floor((Math.random() *10) + 1);
     nr3=Math.floor((Math.random() *10) + 1);
    raspunsuri[1]=x+nr-nr2-nr3;
    raspunsuri[2]=x+nr1-nr3+nr+nr2;
    raspunsuri[3]=x;
    raspunsuri[4]=x-nr+nr2-nr3+2;
    raspunsuri[5]=x+nr-nr2-nr3;
    raspunsuri[6]=x+nr1-nr3+nr+nr2;
    raspunsuri[7]=x;
    raspunsuri[8]=x-nr+nr2-nr3+2;
}
function generareOperator11(semn){
  if(semn==1){
          return ">";
      } else if(semn==2){
          return ">=";
      } else if(semn==3){
          return "<";
      } else if(semn==4){
          return "<=";
      } else if(semn==5){
          return "==";
      } else if(semn==6){
            return "!=";
      }

}


function generareRaspunsuri124(raspunsuri,semn,x) {
  nr=Math.floor((Math.random() *10) + 1);
   nr1=Math.floor((Math.random() *10) + 1);
   nr2=Math.floor((Math.random() *10) + 1);
   nr3=Math.floor((Math.random() *10) + 1);

  if(semn==1){
        raspunsuri[1]=x-nr;
        raspunsuri[5]=x-nr;
        raspunsuri[2]=x+nr2+nr;
        raspunsuri[3]=x+nr3+nr1;
        raspunsuri[4]=x+nr1;
        raspunsuri[6]=x+nr3;
        raspunsuri[7]=x+nr2+nr3;
        raspunsuri[8]=x+nr1+nr3;
      } else if(semn==2){
        raspunsuri[1]=x-nr1;
        raspunsuri[5]=x-nr1;
        raspunsuri[2]=x+nr2+nr3;
        raspunsuri[3]=x+nr3+nr1;
        raspunsuri[4]=x+nr1;
        raspunsuri[6]=x+nr3+nr;
        raspunsuri[7]=x+nr2+nr1;
        raspunsuri[8]=x+nr1;

      } else if(semn==3){
        raspunsuri[1]=x+nr;
        raspunsuri[5]=x+nr;
        raspunsuri[2]=x-nr2-nr;
        raspunsuri[3]=x-nr3-nr2;
        raspunsuri[4]=x-nr1;
        raspunsuri[6]=x-nr3;
        raspunsuri[7]=x-nr2-nr2;
        raspunsuri[8]=x-nr1-nr1;
      } else if(semn==4){
        raspunsuri[1]=x+nr1;
        raspunsuri[5]=x+nr1;
        raspunsuri[2]=x-nr2-nr3;
        raspunsuri[3]=x-nr3-nr2-nr1;
        raspunsuri[4]=x-nr1-nr;
        raspunsuri[6]=x-nr3-nr2;
        raspunsuri[7]=x-nr2-nr;
        raspunsuri[8]=x-nr1;

      } else if(semn==5){
        raspunsuri[1]=x;
        raspunsuri[5]=x;
        raspunsuri[2]=x+nr2-nr;
        raspunsuri[3]=x-nr3+nr2;
        raspunsuri[4]=x-nr1+nr3;
        raspunsuri[6]=x+nr3-nr;
        raspunsuri[7]=x-nr2+nr2;
        raspunsuri[8]=x+nr1-nr3;
      } else if(semn==6){
        raspunsuri[1]=x+nr;
        raspunsuri[5]=x+nr1;
        raspunsuri[2]=x;
        raspunsuri[3]=x;
        raspunsuri[4]=x;
        raspunsuri[6]=x;
        raspunsuri[7]=x;
        raspunsuri[8]=x;
      }



}


function rezultat1234(semn,x,y){
   if(semn==1){

       return x+y;
   } else if(semn==2){

       return x-y;
   } else if(semn==3){

       return x%y;
   } else if(semn==4){

       return x*y;
   } else if(semn==5){

       return Math.floor(x/y);
   }
}


function rezultat12345(semn,x){
    nr=Math.floor((Math.random() *10) + 1);
  if(semn==1){
          return x-nr;
      } else if(semn==2){
          return x-nr+1;
      } else if(semn==3){
          return x+nr;
      } else if(semn==4){
          return x+nr+1;
      } else if(semn==5){
          return x;
      } else if(semn==6){
            return x+nr;
      }


}
