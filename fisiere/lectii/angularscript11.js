 var app = angular.module('myApp', ['ngRoute','ng-fi-text','ngSanitize','ngAnimate']);



angular.module('myApp').controller('blocuri', function ($scope,$location,$route,$window,$location,$routeParams,$http,$timeout){

    function verificareLimita(){
if (n1<13)
    return false;
        else
            return true;
    }
var eroareRun=false;
      $scope.error="Nu ai nicio eroare";
      $scope.records = [];
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
    



 
         $scope.src="fisiere/lectii/pagini/"+paginaUpload+".php";

       

       $scope.blocuriSrc="fisiere/lectii/blocuri/"+paginaUpload +"bloc.html";
    //            alert("dsa");
    //}
    //if (srcCounter==2){

//$scope.src="fisiere/test1.html";

      //}
      //if (srcCounter==3){
  ///$scope.src="fisiere/test2.html";
        //}


//} OLD SISTEM*/
    $scope.code = "Blocuri";
    var idUrl=0,y1,z4;       
    y1=$location.absUrl().substr($location.absUrl().length - 5);
        for(var i=0;i<5;i++){
            if (y1[i]!="/" && y1[i]!="#"){
           
                z4=parseInt(y1[i]);
                idUrl=idUrl*10+z4;
            }
        }
    
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

       if (verificareLimita()==true){
           eroareShow("Nu poți introduce mai multe comenzi!");       
           return 0;
       }
       if ((idUrl==164 && repetaOn==0)||(idUrl==151 && repetaOn==0)||(idUrl==152 && repetaOn==0)||(idUrl==153 && repetaOn==0)){
          
           eroareShow("Comenzile ar trebui să le pui într-un bloc repetă!");
           return 0;
       }
       if (idUrl==164 && ifOn==0){
           eroareShow("Comenzile ar trebui să le pui într-un bloc DACĂ!");
           return 0;
       }
       if(ifOn==1 && ocolireOn==0){
           eroareShow("Nu ar trebui acest bloc acum!");
return 0;
       }
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
       if (verificareLimita()==true){
           eroareShow("Nu poți introduce mai multe comenzi!");       
           return 0;
       }
         if (idUrl==164 && repetaOn==0){
           eroareShow("Comenzile ar trebui să le pui într-un bloc repetă!");
           return 0;
       }
  if (ifOn==0){
      
      $scope.records[i] =n1+spatiu+spatiu1+" "+"Dacă (șoseaua este blocată) atunci";
     i=i+1;n1=n1+1;}
       else{
eroareShow("Poți introduce un singur ,,if'' ");
           raspunsuriGresite=raspunsuriGresite+1;
       }
       ifOn=1;
   }
   ocolireOn=0;
     $scope.ocolire=function(){
         if (verificareLimita()==true){
           eroareShow("Nu poți introduce mai multe comenzi!");       
           return 0;
       }
         
           if (idUrl==164 && repetaOn==0){
           eroareShow("Comenzile ar trebui să le pui într-un bloc repetă!");
           return 0;
       }
           if (idUrl==164 && ifOn==0){
           eroareShow("Comenzile ar trebui să le pui într-un bloc DACĂ!");
           return 0;
       }
 if (ocolireOn==0){
    if(repetaOn==false){
         if (ifOn==1){
       spatiu="--";
    spatiu1="--";
        $scope.records[i] =n1+spatiu+spatiu1+" "+"Ocolire-obstacol";
       if(pattern==11){
           i=i+1;n1=n1+1;n=n+8;
        pattern=pattern+"31211213";
           
    } else{
i=i+1;n1=n1+1;
    }
    } else{
        raspunsuriGresite=raspunsuriGresite+1;
        eroareShow("Această instrucțiune trebuie pusă după structura 'Daca' ")
    }
           spatiu="";
    spatiu1="";
     
    }
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
     ocolireOn=1;
     } else{
         eroareShow("Poți sa pui un singur bloc de acest tip!");
     }
         
   }
   $scope.intoarcere=function(){
       if (verificareLimita()==true){
           eroareShow("Nu poți introduce mai multe comenzi!");       
           return 0;
       }
        if ((idUrl==164 && repetaOn==0)||(idUrl==151 && repetaOn==0)||(idUrl==152 && repetaOn==0)||(idUrl==153 && repetaOn==0)){
           eroareShow("Comenzile ar trebui să le pui într-un bloc repetă!");
           return 0;
       }
         if (idUrl==164 && ifOn==0){
           eroareShow("Comenzile ar trebui să le pui într-un bloc DACĂ!");
           return 0;
       }

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
         if (verificareLimita()==true){
           eroareShow("Nu poți introduce mai multe comenzi!");       
           return 0;
       }
if ($scope.numarRepetari>1 && $scope.numarRepetari<9 ){
eroareRun=false;
} else{
    eroareShow("Pune un număr de repetări!");
    eroareRun=true;
    return 0;
}
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
         if (verificareLimita()==true){
           eroareShow("Nu poți introduce mai multe comenzi!");       
           return 0;
       }
 if (repetaOn==1){
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
       } else{
           eroareShow("Poți să pui un singur bloc de acest tip!");
       }
 } else{
     eroareShow("Trebuie să pui mai întâi un bloc repetă!");
return 0;
 }
    }
var altfelOn=0;
      $scope.altfel=function(){
         
          if (verificareLimita()==true){
           eroareShow("Nu poți introduce mai multe comenzi!");       
           return 0;
       }
  if ((idUrl==164 && repetaOn==0)){
           eroareShow("Comenzile ar trebui să le pui într-un bloc repetă!");
           return 0;
       }
            if ((idUrl==164 && ifOn==0)){
           eroareShow("Ar trebui să pui un bloc DACĂ mai întâi!");
           return 0;
       }
          if (altfelOn==0){
          spatiu="--";
          spatiu1="--";

        $scope.records[i] =n1+spatiu+spatiu1+"    "+"altfel";
    i=i+1; n1=n1+1;
           spatiu="---";
         spatiu1="---";

  altfelOn=1;
       // alert($scope.numarRepetari)
         // alert(patternRepetaString);
    //alert(pattaernString);


         //alert(n);

//alert(pattern);
          } else{
              eroareShow("Poți să pui un singur bloc de acest tip!");
          }
    }


   //
      var terminat=true;
       
    $scope.Run=function(){
      eroarePattern=0;
isRunning=true;
        if (idUrl==164||idUrl==151||idUrl==152||idUrl==153||idUrl==154){
            if (repetaOn==0){
                eroareShow("Trebuie să pui un bloc repetă!")
                return 0;
            }
            if (endOn==0){
                eroareShow("Trebuie să pui un bloc end!")
                return 0;
            }
        }
        if (idUrl==164){
            if (altfelOn==0){
                eroareShow="Trebuie să pui un bloc ALTFEL!";
return 0;
            }
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
     if (eroareRun==true){
         isRunning=false;
        eroareShow(z3);
         clear1();
         return 0;
     }

     terminat=false;

if (paginaUpload=="1.1.1"){
   
textTanc1="Tancul facut de tine este acesta.";
if (idComponenta==513){
$scope.tancComplet="fisiere/assets/images/tanc_albastru.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==514){
$scope.tancComplet="fisiere/assets/images/tanc_corp_albastru_cap_gri.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==523){
$scope.tancComplet="fisiere/assets/images/tanc_corp_gri_cap_albastru.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
if (idComponenta==524){
$scope.tancComplet="fisiere/assets/images/tanc_gri.png";
$scope.textTanc=textTanc1;
$scope.eroare="";
}
  RunAlgorritm(idComponenta);
   
}
else {

     if (repetaOn==true){
    var patternRepetaLenght;

         patternRepetaLenght=patternRepetaString.length;

  if (ifOn==1){
      var eroarePattern=0;
        patternRepetaString1= patternRepetaString1+patternRepetaString.slice(0,1);

      if (patternRepetaString1!="1"){
         eroarePattern=1;
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



         pattern=patternString;}}






//alert(n);



         if (n==1){
        eroareShow("Pune și tu ceva cod!") ;
isRunning=false;
     }else{
var patternSave;
         patternSave=pattern;


    $scope.error="Nu e nicio eroare" ;
pattern=patternSave;
        
           RunAlgorritm(pattern);
     }
 }
}
  $scope.clear=function(){
isRunning=false;
      clear1();
 }
  function clear1(){
      eroareRun=false;
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
      altfelOn=0;
  patternRepetaString1="";
  patternRepetaString="";
  patternRepeta="";
      ocolireOn=0;
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
   $scope.rotireText="stânga";

   }

    //

    // functii load surse {
    //$scope.src="fisiere/test.html";
    $scope.a1=function(){
    timpOver=0; 
         if (isRunning==false){
clear1();
pagina1=$location.absUrl().substr($location.absUrl().length - 3);
    pagina1=pagina1.charAt(0);
   $location.url("1/"+pagina1+"#1");
         srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
        paginaUpload="1."+pagina1+"."+srcCounter;


 $scope.src="fisiere/lectii/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="fisiere/lectii/blocuri/"+paginaUpload +"bloc.html";
         }
    idUrl=0;
        y1=$location.absUrl().substr($location.absUrl().length - 5);
        for(var i=0;i<5;i++){
            if (y1[i]!="/" && y1[i]!="#"){
           
                z4=parseInt(y1[i]);
                idUrl=idUrl*10+z4;
            }
        }
     
    }
    $scope.a2=function(){
    
     timpOver=0;
         if (isRunning==false){
clear1();
pagina1=$location.absUrl().substr($location.absUrl().length - 3);

        pagina1=pagina1.charAt(0);

        $location.url("1/"+pagina1+"#2");
         srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
            paginaUpload="1."+pagina1+"."+srcCounter;

 $scope.src="fisiere/lectii/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="fisiere/lectii/blocuri/"+paginaUpload +"bloc.html";
        //daca este diferit de o pagina care nu are nevoie de target
         }
       idUrl=0;
        y1=$location.absUrl().substr($location.absUrl().length - 5);
        for(var i=0;i<5;i++){
            if (y1[i]!="/" && y1[i]!="#"){
           
                z4=parseInt(y1[i]);
                idUrl=idUrl*10+z4;
            }
        }
       
    }
    $scope.a3=function(){
     timpOver=0; 
         if (isRunning==false){
clear1();
        pagina1=$location.absUrl().substr($location.absUrl().length - 3);
     pagina1=pagina1.charAt(0);



$location.url("1/"+pagina1+"#3");
              srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
          paginaUpload="1."+pagina1+"."+srcCounter;
$scope.src="fisiere/lectii/pagini/"+paginaUpload+".php";
 $scope.blocuriSrc="fisiere/lectii/blocuri/"+paginaUpload +"bloc.html";}
      
         idUrl=0;
        y1=$location.absUrl().substr($location.absUrl().length - 5);
   
        for(var i=0;i<5;i++){
            if (y1[i]!="/" && y1[i]!="#"){
                z4=parseInt(y1[i]);
                idUrl=idUrl*10+z4;
            }
        }
      
    }
    $scope.a4=function(){
       timpOver=0;
        if (isRunning==false){
clear1();
        pagina1=$location.absUrl().substr($location.absUrl().length - 3);
     pagina1=pagina1.charAt(0);



  $location.url("1/"+pagina1+"#4");
              srcCounter=$location.absUrl().substr($location.absUrl().length - 1);
          paginaUpload="1."+pagina1+"."+srcCounter;
  $scope.src="fisiere/lectii/pagini/"+paginaUpload+".php";
  $scope.blocuriSrc="fisiere/lectii/blocuri/"+paginaUpload +"bloc.html";}
      idUrl=0;
        y1=$location.absUrl().substr($location.absUrl().length - 5);
        for(var i=0;i<5;i++){
            if (y1[i]!="/" && y1[i]!="#"){
           
                z4=parseInt(y1[i]);
                idUrl=idUrl*10+z4;
            }
        }
       
    }
// aplicatie tancuri

$scope.resetare13=function(){
resetare12();
 clear1();
}


$scope.eroare="";
nrComponenta=1;
idComponenta=0;
    $scope.corpTanc1=function(){
      if (nrComponenta == 2){
        $scope.eroare="";
        $scope.tancPart2="fisiere/assets/images/corp_albastru.png";
nrComponenta=nrComponenta+1;
idComponenta=idComponenta*10+1;
      }
      else if (terminat==true) {
      $scope.eroare = "  Mai întâi ar trebui sa pui roțile deoarece,și aici, ca la un algoritm, pașii trebuie să respecte o ordine logică!";

      }
    }
    $scope.corpTanc2=function(){
      if (nrComponenta == 2){
        $scope.eroare="";
        $scope.tancPart2="fisiere/assets/images/corp_gri.png";
nrComponenta=nrComponenta+1;
idComponenta=idComponenta*10+2;
      }
      else if (terminat==true) {
      $scope.eroare =  "  Mai întâi ar trebui sa pui roțile deoarece,și aici, ca la un algoritm, pașii trebuie să respecte o ordine logică!";

      }
    }
    $scope.capTanc1=function(){
      if (nrComponenta == 3){
        $scope.eroare="";
        $scope.tancPart3="fisiere/assets/images/cap_albastru.png";
nrComponenta=nrComponenta+1;
idComponenta=idComponenta*10+3;
      }
      else if (terminat==true){
      $scope.eroare = "Aceasta nu este piesa care ar trebui pusă!";

      }
    }
    $scope.capTanc2=function(){
      if (nrComponenta == 3){

        $scope.eroare="";
        $scope.tancPart3="fisiere/assets/images/cap_gri.png";
nrComponenta=nrComponenta+1;
idComponenta=idComponenta*10+4;
      }
      else if (terminat==true){
      $scope.eroare = "Aceasta nu este piesa care ar trebui pusă!Mai întâi ar trebui să pui roțile deoarece, și aici, ca la un algoritm, pașii trebuie să respecte o ordine logică!";

      }
    }
    $scope.roti=function(){

    if (nrComponenta == 1){
      $scope.eroare="";
      $scope.tancPart1="fisiere/assets/images/roti.png";
   nrComponenta=nrComponenta+1;
   idComponenta=idComponenta*10+5;
    }
    else if (terminat==true){
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
    //  $(".expl-box-fi-col").css("height","80%");
    /*    if (href1=="2")
         $scope.codeSrc="fisiere/lectii/expresiiAritmetice/expresieAritmetica2.html";
          else if(href1=="3"){
             $scope.codeSrc="fisiere/lectii/operatoriRelationali/operatoriRelationali2.html";
          } else if(href1=="4"){
             $scope.codeSrc="fisiere/lectii/expresiiLogice/expresiiLogice2.html";
          } 
     $timeout( function(){ */
         if (href1=="2")
         $scope.codeSrc="fisiere/lectii/expresiiAritmetice/expresieAritmetica1.html";
          else if(href1=="3"){
             $scope.codeSrc="fisiere/lectii/operatoriRelationali/operatoriRelationali1.html";
          } else if(href1=="4"){
             $scope.codeSrc="fisiere/lectii/expresiiLogice/expresiiLogice1.html";
          }
      /*  }, 200);

        //time
        $scope.time = 0;

        //timer callback
        var timer = function() {
            if( $scope.time < 5000 ) {
                $scope.time += 1000;
                $timeout(timer, 1000);
            }
        }


        $timeout(timer, 100); */
    if(href1=="2"){
    numarSurse=5;

        href2="fisiere/lectii/expresiiAritmetice/expresieAritmetica";
    } else if(href1=="3"){
        numarSurse=6;

        href2="fisiere/lectii/operatoriRelationali/operatoriRelationali";
    } else if (href1=="4"){
      numarSurse=2;

      href2="fisiere/lectii/expresiiLogice/expresiiLogice";
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
    templateUrl:'fisiere/test.html',
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
  url: 'fisiere/lectii/expresiiLogice/generareEnunt.php',

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
          input1=input1.toLowerCase();

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
            timerCorect(1);
 }
  function corect(){
      coeficientCorect=coeficientCorect+timp1;
    
    timp1=-1;
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
       timp1=-1;
      raspunsuriGresite=raspunsuriGresite+1;
           $scope.visible1=1;

      $timeout( function(){
        $scope.visible1=0;
          load();
          if (raspuns==2){
            eroareRezultat("Răspunsul corect era ORI");
          } else{
           eroareRezultat("Răspunsul corect era AND");
          }
          buttonActive=1;
        }, 1500);



$timeout( 1500);
  }
  function terminat(){
succes();  timpOver=0;
       creereScor(timp,raspunsuriGresite,4,coeficientCorect,10);
      generareScor(10,50);
}
})


angular.module('myApp').controller('evaluare', function ($scope,$http,$location,$timeout){
    var valoarePunctaj;
    function loadNrIntrebari(){
         
         
            $.ajax({   type:"POST",
                     url:"fisiere/evaluare/loadNrIntrebari.php",
                  success:function(result)
                  {
                      
                    
                      numarIntrebari=result;
                       procent=(2/numarIntrebari)*100;
                      valoarePunctaj=100/numarIntrebari;
                  }
                })
         
     }
         var numarIntrebari,procent;
  numarIntrebari=loadNrIntrebari();
   numarIntrebari=2;
    
   // setTimeout(function(){
        
         
 
    var x=2;var exercitiuOn=0;nrExercitiu=0;
    var punctaj=0; var raspunsOn1=0;
    var raspunsOn=0,raspunsOn1=0;var intrebare,intrebare1,raspuns,enunt,raspuns11;
    $scope.procente=0;
    $scope.x1=x-1;
    $scope.y1=x;
    var corecte= new Array();
    for(i=1;i<=21;i++)
 corecte[i]=new Array(3);
 
    
    
    

    
    

    $(".btn-info").css("background-color","#17A2B8");
var idIntrebari = new Array();
var idRaspunsuri=new Array();
var raspunsuri=new Array();
var idEx1=new Array();
var id1Ex1=new Array();
var numarIntermediar=0;
    var idRaspunsuri1=new Array();
    var idRaspunsuri2=new Array();
    for(var i=1;i<=30;i++){
        idIntrebari[i]=0;
    }
    
   
     
    
    


      
   generareIntrebari(30,idIntrebari,1);
    
    generareRaspunsuri(4,idRaspunsuri,1);
  $http({
  method: 'POST',
  url: '/fisiere/evaluare/generareIntrebari.php',
  data: {id1:idIntrebari[1],id2:idIntrebari[2]},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}).then(function successCallback(response) {


  intrebare=response.data.Intrebare;

 if (intrebare.slice(0,-1) =="##!##"){
numarExercitiu= intrebare.substr(intrebare.length - 1);
exercitiuOn=1;

enunt="";
 if (numarExercitiu==1){
         raspuns=generareNumere12(idEx1,id1Ex1);
     
    
     if (isFinite(raspuns)==false){
  do{
 raspuns=generareNumere12(idEx1,id1Ex1);
             
         }while(isFinite(raspuns)==false && isNaN(raspuns)!=true )
      }
      
     if(isNaN(raspuns)==true){
         
           do{  
 raspuns=generareNumere12(idEx1,id1Ex1);
             
         }while(isFinite(raspuns)==false && isNaN(raspuns)!=true );
}
          for (i=1;i<=3;i++){
              id1Ex1[i]=semnGenerator(id1Ex1[i]);
          }
         enunt="Care este răspunsul expresiei ";
         for(i=1;i<=3;i++){
             enunt=enunt+idEx1[i]+id1Ex1[i];
         }
         enunt=enunt+idEx1[4]+"!";
           $scope.intrebare=enunt;
            generareRezultate(raspunsuri,raspuns);
     corecte[x-1][1]=enunt;
     corecte[x-1][2]=raspuns;
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
  enunt="Care este răspunsul expresiei "+idEx1[1]+"%"+idEx1[2]+".";
} else{
  enunt="Care este răspunsul expresiei "+idEx1[1]+"/"+idEx1[2]+".";
}
 $scope.intrebare=enunt;
raspunsuri[1]=raspuns;
    corecte[x-1][1]=enunt;
     corecte[x-1][2]=raspuns;
} else if(numarExercitiu==3){
var a,b;
  a=Math.floor((Math.random() * 6) + 1);
  b=Math.floor((Math.random() * 30) + 10);
numarIntermediar=generareOperator11(a);
enunt="Alege o variantă ca această expresie sa fie corectă "+b+numarIntermediar+"__ .";
 $scope.intrebare=enunt;
 generareRaspunsuri124(raspunsuri,a,b);
 raspuns=raspunsuri[1];
    corecte[x-1][1]=enunt;
     corecte[x-1][2]=raspuns;
} else if(numarExercitiu==4){
  var nr=Math.floor((Math.random() * 20) + 1);
  var nr1=Math.floor((Math.random() * 20) + 1);
  var nr2=Math.floor((Math.random() * 20) + 1);
  var nr4=Math.floor((Math.random() * 5) + 1);
  var nr5=Math.floor((Math.random() * 6) + 1);
  var nr6=Math.floor((Math.random() * 2) + 1);
  var nr7=Math.floor((Math.random() * 2) + 1);
if(nr7==1){
  raspuns="adevarat";
} else{
  raspuns="fals";
}
 var nr8=Math.floor((Math.random() * 3) + 1);
  if (nr6==1){
    numarIntermediar="and";
  }else{
    numarIntermediar="ori";

  }
  var semn=semnGenerator(nr4);
  var operator=generareOperator11(nr5);
  if (numarIntermediar=="and"  && raspuns=="adevarat"){
        nr4=rezultat1234(nr4,nr,nr1);
        nr5=rezultat12345(nr5,nr2);
  } else if(numarIntermediar=="and"  && nr7=="fals"){
    if (nr8==1){
    nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  } else if(nr8==2){
    nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  } else if (nr8==3){
    nr4=rezultatGresit123(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  }

} else if(numarIntermediar=="ori"  && nr7=="adevarat"){
  if (nr8==1){
  nr4=rezultat1234(nr4,nr,nr1);
  nr5=rezultatGresit1234(nr5,nr2);
} else {
  nr4=rezultatGresit123(nr4,nr,nr1);
  nr5=rezultat12345(nr5,nr2);
}

} else if(numarIntermediar=="ori"  && nr7=="fals"){
  nr4=rezultatGresit123(nr4,nr,nr1);
  nr5=rezultatGresit1234(nr5,nr2);

}


enunt="Care este valoarea de adevăr a expresiei: " + "("+nr+semn+nr1+"=="+ nr4+") "+numarIntermediar+"("+nr2+operator+nr5+")";
 $scope.intrebare=enunt;
 raspunsuri[1]="adevarat";
  raspunsuri[2]="fals";
    raspunsuri[3]="";
  raspunsuri[4]="";
  
corecte[x-1][1]=enunt;
     corecte[x-1][2]=raspuns;
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
         corecte[x-1][1]=response.data.Intrebare;
     corecte[x-1][2]=response.data.R1;
     }





























intrebare1=response.data.Intrebare1;
      if (intrebare1.slice(0,-1)=="##!##"){
        numarExercitiu= intrebare1.substr(intrebare1.length - 1);
        exercitiuOn=1;


          enunt="";
 if (numarExercitiu==1){
         raspuns11=generareNumere12(idEx1,id1Ex1);
   
     if (isFinite(raspuns11)==false){
  do{
 raspuns11=generareNumere12(idEx1,id1Ex1);
             
         }while(isFinite(raspuns11)==false && isNaN(raspuns11)!=true )
      }
      
     if(isNaN(raspuns11)==true){
           do{  
 raspuns11=generareNumere12(idEx1,id1Ex1);
             
         }while(isFinite(raspuns11)==false && isNaN(raspuns11)!=true );
}
          for (i=1;i<=3;i++){
              id1Ex1[i]=semnGenerator(id1Ex1[i]);
          }
         enunt="Care este răspunsul expresiei ";
         for(i=1;i<=3;i++){
             enunt=enunt+idEx1[i]+id1Ex1[i];
         }
         enunt=enunt+idEx1[4]+"!";
           $scope.intrebare1=enunt;

  $scope.intrebare1=enunt;

           generareRezultate(raspunsuri,raspuns11);
     corecte[x][1]=enunt;
     corecte[x][2]=raspuns11;
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
    enunt="Care este răspunsul expresiei "+idEx1[1]+"%"+idEx1[2]+".";
  } else{
    enunt="Care este răspunsul expresiei "+idEx1[1]+"/"+idEx1[2]+".";
  }
   $scope.intrebare1=enunt;
  raspunsuri[5]=raspuns11;


corecte[x][1]=enunt;
     corecte[x][2]=raspuns11;
} else if(numarExercitiu==3){
  var a,b;
    a=Math.floor((Math.random() * 6) + 1);
    b=Math.floor((Math.random() * 30) + 10);
  numarIntermediar=generareOperator11(a);
  enunt="Alege o variantă ca această expresie sa fie corectă "+b+numarIntermediar+"__ .";
   $scope.intrebare1=enunt;
   generareRaspunsuri124(raspunsuri,a,b);
   raspuns11=raspunsuri[5];corecte[x][1]=enunt;
     corecte[x][2]=raspuns11;
} else if(numarExercitiu==4){
  var nr=Math.floor((Math.random() * 20) + 1);
  var nr1=Math.floor((Math.random() * 20) + 1);
  var nr2=Math.floor((Math.random() * 20) + 1);
  var nr4=Math.floor((Math.random() * 5) + 1);
  var nr5=Math.floor((Math.random() * 6) + 1);
  var nr6=Math.floor((Math.random() * 2) + 1);
  var nr7=Math.floor((Math.random() * 2) + 1);
if(nr7==1){
  raspuns11="adevarat";
} else{
  raspuns11="fals";
}
 var nr8=Math.floor((Math.random() * 3) + 1);
  if (nr6==1){
    numarIntermediar="and";
  }else{
    numarIntermediar="ori";

  }
  var semn=semnGenerator(nr4);
  var operator=generareOperator11(nr5);
  if (numarIntermediar=="and"  && raspuns=="adevarat"){
        nr4=rezultat1234(nr4,nr,nr1);
        nr5=rezultat12345(nr5,nr2);
  } else if(numarIntermediar=="and"  && nr7=="fals"){
    if (nr8==1){
    nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  } else if(nr8==2){
    nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  } else if (nr8==3){
    nr4=rezultatGresit123(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  }

} else if(numarIntermediar=="ori"  && nr7=="adevarat"){
  if (nr8==1){
  nr4=rezultat1234(nr4,nr,nr1);
  nr5=rezultatGresit1234(nr5,nr2);
} else {
  nr4=rezultatGresit123(nr4,nr,nr1);
  nr5=rezultat12345(nr5,nr2);
}

} else if(numarIntermediar=="ori"  && nr7=="fals"){
  nr4=rezultatGresit123(nr4,nr,nr1);
  nr5=rezultatGresit1234(nr5,nr2);

}


enunt="Care este valoarea de adevăr a expresiei: " + "("+nr+semn+nr1+"=="+ nr4+") "+numarIntermediar+"("+nr2+operator+nr5+")";
 $scope.intrebare1=enunt;
 raspunsuri[5]="adevarat";
  raspunsuri[6]="fals";
     raspunsuri[7]="";
  raspunsuri[8]="";
   
corecte[x][1]=enunt;
     corecte[x][2]=raspuns11;
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
          corecte[x][1]=response.data.Intrebare1;
     corecte[x][2]=response.data.R11;
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
alert("Eroare!Resetează pagina!");
     // alert(idIntrebari[1]+" sdaasd "+idIntrebari[2]);
     // alert(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });




var buton12=0;
     $("label.btn").on('click',function () {

         $("#"+$(this).attr('id')).css("background-color","#138496");
    if($(this).attr('id')<5){
        if (raspunsOn==0){
            raspunsOn=1;
          if(exercitiuOn==1){

              if (idRaspunsuri2[$(this).attr('id')]==raspuns){
         corecte[x-1][3]=1;
          punctaj=punctaj+valoarePunctaj;
buton12=$(this).attr('id');

            }
          } else{
            if (idRaspunsuri2[$(this).attr('id')]==idRaspunsuri1[1]){
          punctaj=punctaj+valoarePunctaj;
 corecte[x-1][3]=1;
buton12=$(this).attr('id');
            }
          }   }
        else {

       if(buton12!=$(this).attr('id'))    {
 $("#"+$(this).attr('id')).css("background-color","#17A2B8");}
         $(".btn-info").css("border-color","#17A2B8");
            eroareShow("Poți apăsa un singur răspuns!");
        }


    } else{
        if (raspunsOn1==0){
            raspunsOn1=1;
        if(exercitiuOn==1){
               if (idRaspunsuri2[$(this).attr('id')]==raspuns11){
          punctaj=punctaj+valoarePunctaj;
 corecte[x][3]=1;buton12=$(this).attr('id');
            }
          } else{
            if (idRaspunsuri2[$(this).attr('id')]==idRaspunsuri1[1]){
          punctaj=punctaj+valoarePunctaj;
 corecte[x][3]=1;buton12=$(this).attr('id');
            }
          }
        }else {
        if(buton12!=$(this).attr('id')){
            $("#"+$(this).attr('id')).css("background-color","#17A2B8");}
                 $(".btn-info").css("border-color","#17A2B8");
            eroareShow("Poti apasă un singur răspuns!");
        }

          }



    });
var procente1=0;
     
     
     $scope.resetare= function(){



    if (x<numarIntrebari){
        x=x+2;
        procente1=procente1+procent;
    $("#progresEvaluare").css("width",(procente1+"%"));
    $scope.procente=procente1;
    raspunsOn=0;
    raspunsOn1=0;
        $scope.x1=x-1;
    $scope.y1=x;
        $(".btn-info").css("background-color","#17A2B8");
       $(".btn-info").css("border-color","#17A2B8");


     $http({
  method: 'POST',
  url: '/fisiere/evaluare/generareIntrebari.php',
  data: {id1:idIntrebari[x-1],id2:idIntrebari[x]},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}).then(function successCallback(response) {
  
  intrebare=response.data.Intrebare;

  if (intrebare.slice(0,-1) =="##!##"){
  numarExercitiu= intrebare.substr(intrebare.length - 1);
  exercitiuOn=1;
  enunt="";
 
  if (numarExercitiu==1){
         raspuns=generareNumere12(idEx1,id1Ex1);
       
    
     if (isFinite(raspuns)==false){
  do{
 raspuns=generareNumere12(idEx1,id1Ex1);
             
         }while(isFinite(raspuns)==false && isNaN(raspuns)!=true )
      }
      
     if(isNaN(raspuns)==true){
         
           do{  
 raspuns=generareNumere12(idEx1,id1Ex1);
             
         }while(isFinite(raspuns)==false && isNaN(raspuns)!=true );
}
      for (i=1;i<=3;i++){
              id1Ex1[i]=semnGenerator(id1Ex1[i]);
          }
         enunt="Care este răspunsul expresiei ";
         for(i=1;i<=3;i++){
             enunt=enunt+idEx1[i]+id1Ex1[i];
         }
         enunt=enunt+idEx1[4]+"!";
           $scope.intrebare=enunt;
            generareRezultate(raspunsuri,raspuns);
      corecte[x-1][1]=enunt;
     corecte[x-1][2]=raspuns;
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
  enunt="Care este răspunsul expresiei "+idEx1[1]+"%"+idEx1[2]+".";
  } else{
  enunt="Care este răspunsul expresiei "+idEx1[1]+"/"+idEx1[2]+".";
  }
  $scope.intrebare=enunt;
  raspunsuri[1]=raspuns;
      corecte[x-1][1]=enunt;
     corecte[x-1][2]=raspuns;
  } else if(numarExercitiu==3){
  var a,b;
  a=Math.floor((Math.random() * 6) + 1);
  b=Math.floor((Math.random() * 30) + 10);
  numarIntermediar=generareOperator11(a);
  enunt="Alege o variantă ca această expresie sa fie corectă "+b+numarIntermediar+"__ .";
  $scope.intrebare=enunt;
  generareRaspunsuri124(raspunsuri,a,b);
  raspuns=raspunsuri[1];
      corecte[x-1][1]=enunt;
     corecte[x-1][2]=raspuns;
  } else if(numarExercitiu==4){
  var nr=Math.floor((Math.random() * 20) + 1);
  var nr1=Math.floor((Math.random() * 20) + 1);
  var nr2=Math.floor((Math.random() * 20) + 1);
  var nr4=Math.floor((Math.random() * 5) + 1);
  var nr5=Math.floor((Math.random() * 6) + 1);
  var nr6=Math.floor((Math.random() * 2) + 1);
  var nr7=Math.floor((Math.random() * 2) + 1);
  if(nr7==1){
  raspuns="adevarat";
  } else{
  raspuns="fals";
  }
  var nr8=Math.floor((Math.random() * 3) + 1);
  if (nr6==1){
    numarIntermediar="and";
  }else{
    numarIntermediar="ori";

  }
  var semn=semnGenerator(nr4);
  var operator=generareOperator11(nr5);
  if (numarIntermediar=="and"  && raspuns=="adevarat"){
        nr4=rezultat1234(nr4,nr,nr1);
        nr5=rezultat12345(nr5,nr2);
  } else if(numarIntermediar=="and"  && nr7=="fals"){
    if (nr8==1){
    nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  } else if(nr8==2){
    nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  } else if (nr8==3){
    nr4=rezultatGresit123(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  }

  } else if(numarIntermediar=="ori"  && nr7=="adevarat"){
  if (nr8==1){
  nr4=rezultat1234(nr4,nr,nr1);
  nr5=rezultatGresit1234(nr5,nr2);
  } else {
  nr4=rezultatGresit123(nr4,nr,nr1);
  nr5=rezultat12345(nr5,nr2);
  }

  } else if(numarIntermediar=="ori"  && nr7=="fals"){
  nr4=rezultatGresit123(nr4,nr,nr1);
  nr5=rezultatGresit1234(nr5,nr2);

  }


  enunt="Care este valoare de adevăr a expresiei: " + "("+nr+semn+nr1+"=="+ nr4+") "+numarIntermediar+"("+nr2+operator+nr5+")";
  $scope.intrebare=enunt;
  raspunsuri[1]="adevarat";
  raspunsuri[2]="fals";
       raspunsuri[3]="";
  raspunsuri[4]="";
  
corecte[x-1][1]=enunt;
     corecte[x-1][2]=raspuns;
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
         corecte[x-1][1]=response.data.Intrebare;
     corecte[x-1][2]=response.data.R1;
     }






  intrebare1=response.data.Intrebare1;
      if (intrebare1.slice(0,-1)=="##!##"){
        numarExercitiu= intrebare1.substr(intrebare1.length - 1);
        exercitiuOn=1;


          enunt="";
  if (numarExercitiu==1){
         raspuns11=generareNumere12(idEx1,id1Ex1);
          
       
     if (isFinite(raspuns11)==false){
  do{
 raspuns11=generareNumere12(idEx1,id1Ex1);
             
         }while(isFinite(raspuns11)==false && isNaN(raspuns11)!=true );
      }
      
     if(isNaN(raspuns11)==true){
         do{
 raspuns11=generareNumere12(idEx1,id1Ex1);
             
         }while(isFinite(raspuns11)==false && isNaN(raspuns11)!=true );
}for (i=1;i<=3;i++){
              id1Ex1[i]=semnGenerator(id1Ex1[i]);
          }
         enunt="Care este răspunsul expresiei? ";
         for(i=1;i<=3;i++){
             enunt=enunt+idEx1[i]+id1Ex1[i];
         }
         enunt=enunt+idEx1[4]+"!";
           $scope.intrebare1=enunt;

  $scope.intrebare1=enunt;

           generareRezultate(raspunsuri,raspuns11);
      corecte[x][1]=enunt;
     corecte[x][2]=raspuns11;
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
    enunt="Care este răspunsul expresiei "+idEx1[1]+"%"+idEx1[2]+".";
  } else{
    enunt="Care este răspunsul expresiei "+idEx1[1]+"/"+idEx1[2]+".";
  }
   $scope.intrebare1=enunt;
  raspunsuri[5]=raspuns11;


corecte[x][1]=enunt;
     corecte[x][2]=raspuns11;
  } else if(numarExercitiu==3){
  var a,b;
    a=Math.floor((Math.random() * 6) + 1);
    b=Math.floor((Math.random() * 30) + 10);
  numarIntermediar=generareOperator11(a);
  enunt="Alege o variantă ca această expresie să fie corectă "+b+numarIntermediar+"__ .";
   $scope.intrebare1=enunt;
   generareRaspunsuri124(raspunsuri,a,b);
   raspuns11=raspunsuri[5];
      corecte[x][1]=enunt;
     corecte[x][2]=raspuns11;
  } else if(numarExercitiu==4){
  var nr=Math.floor((Math.random() * 20) + 1);
  var nr1=Math.floor((Math.random() * 20) + 1);
  var nr2=Math.floor((Math.random() * 20) + 1);
  var nr4=Math.floor((Math.random() * 5) + 1);
  var nr5=Math.floor((Math.random() * 6) + 1);
  var nr6=Math.floor((Math.random() * 2) + 1);
  var nr7=Math.floor((Math.random() * 2) + 1);
  if(nr7==1){
  raspuns11="adevarat";
  } else{
  raspuns11="fals";
  }
  var nr8=Math.floor((Math.random() * 3) + 1);
  if (nr6==1){
    numarIntermediar="and";
  }else{
    numarIntermediar="ori";

  }
  var semn=semnGenerator(nr4);
  var operator=generareOperator11(nr5);
  if (numarIntermediar=="and"  && raspuns=="adevarat"){
        nr4=rezultat1234(nr4,nr,nr1);
        nr5=rezultat12345(nr5,nr2);
  } else if(numarIntermediar=="and"  && nr7=="fals"){
    if (nr8==1){
    nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  } else if(nr8==2){
    nr4=rezultat1234(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  } else if (nr8==3){
    nr4=rezultatGresit123(nr4,nr,nr1);
    nr5=rezultatGresit1234(nr5,nr2);
  }

  } else if(numarIntermediar=="ori"  && nr7=="adevarat"){
  if (nr8==1){
  nr4=rezultat1234(nr4,nr,nr1);
  nr5=rezultatGresit1234(nr5,nr2);
  } else {
  nr4=rezultatGresit123(nr4,nr,nr1);
  nr5=rezultat12345(nr5,nr2);
  }

  } else if(numarIntermediar=="ori"  && nr7=="fals"){
  nr4=rezultatGresit123(nr4,nr,nr1);
  nr5=rezultatGresit1234(nr5,nr2);

  }


  enunt="Care este valoarea de adevăr a expresiei: " + "("+nr+semn+nr1+"=="+ nr4+") "+numarIntermediar+"("+nr2+operator+nr5+")";
  $scope.intrebare1=enunt;
  raspunsuri[5]="adevarat";
  raspunsuri[6]="fals";
       raspunsuri[7]="";
  raspunsuri[8]="";
   
corecte[x][1]=enunt;
     corecte[x][2]=raspuns11;
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
     corecte[x][1]=response.data.Intrebare1;
     corecte[x][2]=response.data.R11;
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

}else{
   // for(i=1;i<=10;i++){
   // alert("intrebare="+corecte[i][1]+"raspuns="+corecte[i][2]);
  //  }
$(".modal-dialog").hide();
    $("#evaluareProgres").hide();
     $("#continua").hide();
    $("#evaluareEnding").show();
$scope.punctajShow=punctaj;
    var inlocuitor,inlocuitor1,inlocuitor2,nrCorecte=0,scorFinal="",nrIntr;
    for(i=1;i<=numarIntrebari;i++){
       inlocuitor=corecte[i][1];
    inlocuitor1=corecte[i][2];
    
        if(corecte[i][3]==1){
       inlocuitor2=-1;
     inlocuitor1="Ai răspuns corect la această întrebare!";
       nrCorecte++;
     } else{
       inlocuitor2=i;
        inlocuitor1="Răspuns corect:  "+inlocuitor1;
     }

         
    
           
            $scope.intrebariSiRaspunsuri[i-1]={numar1234:(i+".  "),intrebare2:inlocuitor,raspuns12:inlocuitor1,corect12:inlocuitor2};
    }
if(nrCorecte<10){
            scorFinal="a"+nrCorecte;
         } else {
scorFinal=nrCorecte;
         }
        
        nrIntr=(numarIntrebari.toString()).replace(/\s/g,'');
    
         if (numarIntrebari<10){
             scorFinal=scorFinal.toString()+"0"+numarIntrebari.toString();
         } else{
              scorFinal=scorFinal.toString()+nrIntr;
         }
         $http({
  method: 'POST',
  url: '/fisiere/evaluare/incarcareScorEvaluare.php',
  data: {scor:scorFinal},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}).then(function successCallback(response) {
         
         
         });

    
    
    }
        
}
$scope.punctajShow=punctaj;

    $scope.intrebariSiRaspunsuri=[
    {   numar1234:"",
        intrebare2:"",
        raspuns12:"",
    }
    ];
 //  },100);
    })






function generareIntrebari(nr,idIntrebari,i){
   
    if (i==21) return 0;
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
    
    
    if (raspunsuri[1]==raspunsuri[2]|| raspunsuri[1]==raspunsuri[3] || raspunsuri[1]==raspunsuri[4] || raspunsuri[2]==raspunsuri[3]|| raspunsuri[2]==raspunsuri[4] ||raspunsuri[3]==raspunsuri[4]){
generareRezultate(raspunsuri,x); 
    }
    if (raspunsuri[5]==raspunsuri[6]|| raspunsuri[5]==raspunsuri[7] || raspunsuri[5]==raspunsuri[8] || raspunsuri[6]==raspunsuri[7]|| raspunsuri[6]==raspunsuri[8] ||raspunsuri[7]==raspunsuri[8]){
generareRezultate(raspunsuri,x); 
    }
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

if ((raspunsuri[1]==raspunsuri[2]|| raspunsuri[1]==raspunsuri[3] || raspunsuri[1]==raspunsuri[4] || raspunsuri[2]==raspunsuri[3]|| raspunsuri[2]==raspunsuri[4] ||raspunsuri[3]==raspunsuri[4])&& (semn!=6 && semn!=5)){ 
generareRaspunsuri124(raspunsuri,semn,x);
    }
    if ((raspunsuri[5]==raspunsuri[6]|| raspunsuri[5]==raspunsuri[7] || raspunsuri[5]==raspunsuri[8] || raspunsuri[6]==raspunsuri[7]|| raspunsuri[6]==raspunsuri[8] ||raspunsuri[7]==raspunsuri[8]) && (semn!=6 && semn!=5)){
generareRaspunsuri124(raspunsuri,semn,x);
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
function rezultatGresit1234(semn,x){
    nr=Math.floor((Math.random() *10) + 1);
  if(semn==1){
          return x+nr;
      } else if(semn==2){
          return x+nr;
      } else if(semn==3){
          return x-nr;
      } else if(semn==4){
          return x-nr;
      } else if(semn==5){
          return x+nr;
      } else if(semn==6){
            return x;
      }


}


function rezultatGresit123(semn,x,y){
  nr=Math.floor((Math.random() *10) + 1);
   if(semn==1){

       return x+y-nr;
   } else if(semn==2){

       return x-y+nr;
   } else if(semn==3){

       return x%y+nr;
   } else if(semn==4){

       return x*y-nr;
   } else if(semn==5){

       return Math.floor(x/y)+nr;
   }
}
angular.module('myApp').controller('paginaProfesor', function ($scope,$location,$route,$window,$location,$routeParams,$http,$timeout){
loadClase();$scope.statistici="Statistici";
    var titluri= new Array;
var clase=[];
    var elevi=[];
     var titluri=[];
    var mesaje=[];
     var optiuni=[];
   
    var nr1=1;var clasa1234;var numarElev=1;var idElev;
    nr1=1;
    $scope.titluClasa="";
  $scope.src1="fisiere/profesor/inregistrareElevi.html";
   
  $scope.adaugaClasa = function(){
    swal("Introdu numele clasei pe care vrei să o adaugi!", {
  content: "input",
})
.then((value) => { 
         
       
        if (verificareInput(value)==true){
  numeClasa=  value;

      if (nr1<10&&nr1>0){
        
    $http({

 method: 'POST',
 url: '/fisiere/profesor/incarcareClase.php',
 data: {clasa:numeClasa,nr:nr1},
 headers: {'Content-Type': 'application/x-www-form-urlencoded'},

 }).then(function successCallback(response) {
              $scope.elevi=[{nume:"",parola:"",numar:""}];
loadClase();
})
      } else if (nr1==0){
          nr1=1;
           $http({

 method: 'POST',
 url: '/fisiere/profesor/incarcareClase.php',
 data: {clasa:numeClasa,nr:nr1},
 headers: {'Content-Type': 'application/x-www-form-urlencoded'},

 }).then(function successCallback(response) {
              $scope.elevi=[{nume:"",parola:"",numar:""}];
loadClase();
})
      }
            else {
          alert ("Nu poți creea mai multe clase!");
      }
        } else{
            alert("input error");
        }
});

  }
  $scope.clase=[{clasa:"",id:""}];
    

 function loadClase(){

  $http({
  method: 'GET',
  url: '/fisiere/profesor/loadClase.php',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

  }).then(function successCallback(response) {
      clase1=response.data; 
      nr1= clase1.substr(clase1.length - 1);
      clase1=clase1.slice(0,clase1.length-1);
      var j=1;
      for(var i=0;i<=clase1.length;i++){
          if(clase1[i]=="#"){ 
              titluri[j]=clase1.slice(0,i);
              $scope.titluClasa=clase1.slice(0,i);clasa1234=j;
         $scope.clase[j]={clasa:clase1.slice(0,i),id:j};
              clase1=clase1.slice(i+1,clase1.length);
              i=0;j++;
          }
      }
   
     numarElev = loadElevi(clasa1234);

          
  })

 }
   
 $scope.elevi=[{nume:"",parola:"",numar:""}];
  
    $scope.adaugareElev=function(){
          swal("Introdu numele elevului pe care vrei să-l adaugi!", {
  content: "input",
})
.then((value) => {
  if (verificareInput(value)==true){
              numeElev=value;
       if (numarElev>9){
idElev=clasa1234+numarElev.toString();
       } else{
idElev=clasa1234*10;
      idElev=idElev+numarElev.toString();
      }
      numeElev=numeElev.toString();
      for(i=0;i<numeElev.length;i++){
          
if(numeElev[i]==" "){

    numeElev= numeElev.replace(" ", "_");
}
    
      }
   
    $http({
 
 method: 'POST',
 url: '/fisiere/profesor/contElev.php',
 data: {elev:numeElev,clasa:clasa1234,idElev:idElev},
 headers: {'Content-Type': 'application/x-www-form-urlencoded'},

 }).then(function successCallback(response) {
loadElevi(clasa1234);
})
  } else{
      alert("input error");
  }
});
}
    var dataElevi;
  function loadElevi(x){
   

    $http({
 
 method: 'POST',
 url: '/fisiere/profesor/loadElevi1.php',
 data: {clasa:x},
 headers: {'Content-Type': 'application/x-www-form-urlencoded'},

 }).then(function successCallback(response) {

       
 dataElevi = jQuery.parseJSON(response.data+"}}");

 numarElev=dataElevi.numar[1];

        for(i=1;i<=numarElev-1;i++){
             $scope.elevi[i-1]={username:dataElevi.username[i],nume:dataElevi.nume[i],parola:dataElevi.parola[i],numar:i};
        }
      
        
   
})} 
    
    
    
    $scope.selectareClasa=function(x){
        nr1=x;
        
         $scope.elevi=[{nume:"",parola:"",numar:"",mesaj:""}];
        clasa1234=x;
        loadElevi(x);
        $scope.titluClasa=titluri[x]; $scope.clasaEvaluare=titluri[x]; 
        if( $scope.src1=="fisiere/profesor/statistici.html"){
            $scope.alegeri="";
        incarcareScoruri(x);
        $scope.clasa=titluri[x];
            
            $scope.mesaj1="";
         $("#mycanvas").remove(); 
     $("#canvasCreator").prepend("<canvas id=mycanvas height=500px width=500px></canvas>");
        
        }
         if( $scope.src1=="fisiere/profesor/evaluare.html"){
           
        incarcareScoruriEvaluare(x);
      
         $("#mycanvas1").remove(); 
     $("#canvasCreator1").prepend("<canvas id=mycanvas1></canvas>");
        
        }
        
    }
    
    
    function verificareInput(x){
     
        if (x==""){
         return 0;
     }else {
         for(var i=0;i<=x.length;i++){
             if (x[i]=="#"){
                 return 0;
             }
         }
         
     }
    return 1;
        
    }
     var dificultate=new Array();
dificultate[1]=8;
dificultate[2]=20;
dificultate[3]=52;
dificultate[4]=52;
dificultate[5]=30;
dificultate[6]=360;
dificultate[7]=40;
dificultate[8]=35;
dificultate[9]=25;
dificultate[10]=50;
dificultate[11]=35;
dificultate[12]=53;
dificultate[13]=35;
dificultate[14]=20;
dificultate[15]=58;  
dificultate[16]=55;
dificultate[17]=66;
dificultate[18]=66;

var matrice= new Array(31);
var tipStatistica="";
for (i=1; i <=30; i++)
matrice[i]=new Array(21)
var optiune1,optiune2;    
  $scope.optiuni=[{optiune:"",functie1:"",functie2:"",functie3:"",functie4:""}];
$scope.media=function(){
    clearStatistici();
    if(numarElev>1){
    $scope.alegeri="Media calificativelor";
    tipStatistica="Media calificativelor";
        $scope.optiuni[0]={optiune:"Toate exercițiile",functie1:"1",functie2:"18",functie3:"1",functie4:"tuturor exercițiilor"};
    $scope.optiuni[1]={optiune:"Algoritmul",functie1:"1",functie2:"4",functie3:"1",functie4:"exercițiilor cu algoritmi"};
   
    $scope.optiuni[2]={optiune:"Expresii aritmetice",functie1:"5",functie2:"7",functie3:"1",functie4:"exercițiilor cu expresii aritmetice"};
   
    $scope.optiuni[3]={optiune:"Operatori relaționali",functie1:"8",functie2:"9",functie3:"1",functie4:"exercițiilor cu operatori relaționali"};

    $scope.optiuni[4]={optiune:"Structura alternativă",functie1:"11",functie2:"13",functie3:"1",functie4:"exercițiilor cu structura Alternativă"};

    $scope.optiuni[5]={optiune:"Bucla repetitivă",functie1:"15",functie2:"18",functie3:"1",functie4:"exercițiilor cu bucla repetitivă"};
     }
    else{
          swal({
  title: "Eroare!",
  text: "În această clasă nu există niciun elev!",
  icon: "error",
});
    }
    
}



$scope.rGresite=function(){
  clearStatistici();
    if(numarElev>1){
    $scope.alegeri="Răspunsuri greșite";
          tipStatistica="Răspunsuri greșite";
    $scope.optiuni[0]={optiune:"Toate exercițiile",functie1:"1",functie2:"18",functie3:"2",functie4:"în toate exercițiile"};
    $scope.optiuni[1]={optiune:"Algoritmul",functie1:"1",functie2:"4",functie3:"2",functie4:"exercițiile cu algoritmi"};
    $scope.optiuni[2]={optiune:"Aplicația 1",functie1:"1",functie2:"0",functie3:"2",functie4:"în aplicația 1"};
    $scope.optiuni[3]={optiune:"Aplicația 2",functie1:"2",functie2:"0",functie3:"2",functie4:"în aplicația 2"};
    $scope.optiuni[4]={optiune:"Aplicația 3",functie1:"3",functie2:"0",functie3:"2",functie4:"în aplicația 3"};
    $scope.optiuni[5]={optiune:"Aplicația 4",functie1:"4",functie2:"0",functie3:"2",functie4:"în aplicația 4"};
    $scope.optiuni[6]={optiune:"Expresii aritmetice",functie1:"5",functie2:"7",functie3:"2",functie4:"exercițiile cu expresii aritmetice"};
    $scope.optiuni[7]={optiune:"Aplicația 1",functie1:"5",functie2:"0",functie3:"2",functie4:"în aplicația 1"};
    $scope.optiuni[8]={optiune:"Aplicația 2",functie1:"6",functie2:"0",functie3:"2",functie4:"în aplicația 2"};
    $scope.optiuni[9]={optiune:"Aplicația 3",functie1:"7",functie2:"0",functie3:"2",functie4:"în aplicația 3"};
    $scope.optiuni[10]={optiune:"Operatori relaționali",functie1:"8",functie2:"9",functie3:"2",functie4:"exercițiile cu operatori relaționali"};
    $scope.optiuni[11]={optiune:"Aplicația 1",functie1:"8",functie2:"0",functie3:"2",functie4:"în aplicația 1"};
    $scope.optiuni[12]={optiune:"Aplicația 2",functie1:"9",functie2:"0",functie3:"2",functie4:"în aplicația 2"};
    $scope.optiuni[13]={optiune:"Expresii logice",functie1:"10",functie2:"0",functie3:"2",functie4:"exercițiile cu expresii logice"};
    $scope.optiuni[14]={optiune:"Structura alternativă",functie1:"11",functie2:"13",functie3:"2",functie4:"exercițiile cu structura alternativă"};
    $scope.optiuni[15]={optiune:"Aplicația 1",functie1:"11",functie2:"0",functie3:"2",functie4:"în aplicația 1"};
    $scope.optiuni[16]={optiune:"Aplicația 2",functie1:"12",functie2:"0",functie3:"2",functie4:"în aplicația 2"};
    $scope.optiuni[17]={optiune:"Aplicația 3",functie1:"13",functie2:"0",functie3:"2",functie4:"în aplicația 3"};

    $scope.optiuni[18]={optiune:"Bucla repetitivă",functie1:"15",functie2:"18",functie3:"2",functie4:"exercițiile cu bucla repetitivă"};
    $scope.optiuni[19]={optiune:"Aplicația 1",functie1:"15",functie2:"0",functie3:"2",functie4:"în aplicația 1"};
    $scope.optiuni[20]={optiune:"Aplicația 2",functie1:"16",functie2:"0",functie3:"2",functie4:"în aplicația 2"};
    $scope.optiuni[21]={optiune:"Aplicația 3",functie1:"17",functie2:"0",functie3:"2",functie4:"în aplicația 3"};
    $scope.optiuni[22]={optiune:"Aplicația 4",functie1:"18",functie2:"0",functie3:"2",functie4:"în aplicația 4"};
    }  else{
          swal({
  title: "Eroare!",
  text: "În această clasă nu există niciun elev!",
  icon: "error",
});
    }
    
}

function clearStatistici(){
    $("#chestie").hide();
  $("#tabelEleviStatistici").css("float","right");

 $("#tabelEleviStatistici").css("width","20%");
    $("#tabelEleviStatistici").css("height","76%");
    
  
    $("#mycanvas").remove(); 
     $("#canvasCreator").prepend("<canvas id=mycanvas height=500px width=500px></canvas>");
}
$scope.calificative=function(){
   clearStatistici();
   if(numarElev>1){
    $scope.alegeri="Calificative";
       tipStatistica="Calificative";
    $scope.optiuni[0]={optiune:"Toate exercițiile",functie1:"1",functie2:"18",functie3:"3",functie4:"în toate aplicațiile"};
    $scope.optiuni[1]={optiune:"Algoritmul",functie1:"0",functie2:"0",functie3:"0"};
    $scope.optiuni[2]={optiune:"Aplicația 1",functie1:"1",functie2:"0",functie3:"1",functie4:"în aplicația 1"};
    $scope.optiuni[3]={optiune:"Aplicația 2",functie1:"2",functie2:"0",functie3:"1",functie4:"în aplicația 2"};
    $scope.optiuni[4]={optiune:"Aplicația 3",functie1:"3",functie2:"0",functie3:"1",functie4:"în aplicația 3"};
    $scope.optiuni[5]={optiune:"Aplicația 4",functie1:"4",functie2:"0",functie3:"1",functie4:"în aplicația 4"};
    $scope.optiuni[6]={optiune:"Expresii aritmetice",functie1:"0",functie2:"0",functie3:"0"};
    $scope.optiuni[7]={optiune:"Aplicația 1",functie1:"5",functie2:"0",functie3:"1",functie4:"în aplicația 1"};
    $scope.optiuni[8]={optiune:"Aplicația 2",functie1:"6",functie2:"0",functie3:"1",functie4:"în aplicația 2"};
    $scope.optiuni[9]={optiune:"Aplicația 3",functie1:"7",functie2:"0",functie3:"1",functie4:"în aplicația 3"};
    $scope.optiuni[10]={optiune:"Operatori relaționali",functie1:"0",functie2:"0",functie3:"0"};
    $scope.optiuni[11]={optiune:"Aplicația 1",functie1:"8",functie2:"0",functie3:"1",functie4:"în aplicația 1"};
    $scope.optiuni[12]={optiune:"Aplicația 2",functie1:"9",functie2:"0",functie3:"1",functie4:"în aplicația 2"};
    $scope.optiuni[13]={optiune:"Expresii logice",functie1:"10",functie2:"10",functie3:"0",functie4:"în aplicația 1"};
    $scope.optiuni[14]={optiune:"Structura alternativă",functie1:"0",functie2:"0",functie3:"0"};
    $scope.optiuni[15]={optiune:"Aplicația 1",functie1:"11",functie2:"0",functie3:"1",functie4:"în aplicația 1"};
    $scope.optiuni[16]={optiune:"Aplicația 2",functie1:"12",functie2:"0",functie3:"1",functie4:"în aplicația 2"};
    $scope.optiuni[17]={optiune:"Aplicația 3",functie1:"13",functie2:"0",functie3:"1",functie4:"în aplicația 3"};
    $scope.optiuni[18]={optiune:"Bucla repetitivă",functie1:"0",functie2:"0",functie3:"0"};
    $scope.optiuni[19]={optiune:"Aplicația 1",functie1:"15",functie2:"0",functie3:"1",functie4:"în aplicația 1"};
    $scope.optiuni[20]={optiune:"Aplicația 2",functie1:"16",functie2:"0",functie3:"1",functie4:"în aplicația 2"};
    $scope.optiuni[21]={optiune:"Aplicația 3",functie1:"17",functie2:"0",functie3:"1",functie4:"în aplicația 3"};
    $scope.optiuni[22]={optiune:"Aplicația 4",functie1:"18",functie2:"0",functie3:"1",functie4:"în aplicația 4"};
   } else{
          swal({
  title: "Eroare!",
  text: "În această clasă nu există niciun elev!",
  icon: "error",
});
    }
    
   }








  var elemente=new Array();
        
$scope.titluri=[{nume:""}]; 

    $scope.statistici = function(){
         $scope.clasa=titluri[nr1-1];        $scope.titluri[0]={nume:"Nume elev"}; 
       incarcareScoruri(nr1-1);
       $scope.src1="fisiere/profesor/statistici.html";
    angular.element(document.querySelector( '#statistici' )).addClass ("active");
          angular.element(document.querySelector( '#inregistrare' )).removeClass ("active");
         angular.element(document.querySelector( '#evaluare11' )).removeClass ("active");
        
    };
    $scope.evaluare=function (){
        
        incarcareScoruriEvaluare(nr1-1);
    $scope.clasaEvaluare=titluri[nr1-1];        $scope.titluri[0]={nume:"Nume elev"}; 
     //  incarcareScoruri(nr1-1);
       $scope.src1="fisiere/profesor/evaluare.html";
          angular.element(document.querySelector( '#evaluare11' )).addClass ("active");
          angular.element(document.querySelector( '#inregistrare' )).removeClass ("active");
          angular.element(document.querySelector( '#statistici' )).removeClass ("active");
    
}
    $scope.inregistrare = function(){
        
       $scope.src1="fisiere/profesor/inregistrareElevi.html";
    angular.element(document.querySelector( '#inregistrare' )).addClass ("active");
        angular.element(document.querySelector( '#statistici' )).removeClass ("active");
           angular.element(document.querySelector( '#evaluare11' )).addClass ("active");
    };
   
  function incarcareScoruri(clasa){
      
      
      $http({
 
 method: 'POST',
 url: '/fisiere/profesor/loadStatistici.php',
 data:{clasa:clasa},
 //headers: {'Content-Type': 'application/x-www-form-urlencoded'},

 }).then(function successCallback(response) {

       
var data1 =JSON.parse(JSON.stringify(response.data));
var numarExercitiiRezolvate=0;
numarExercitiiRezolvate=0;
for(var j=2;j<=numarElev;j++){
for(var i=1;i<=18;i++)
    { matrice[j-1][i]=data1.scoruri[j][i];
   if(data1.scoruri[j][i]!=null && data1.scoruri[j][i]!="") {
     numarExercitiiRezolvate++;
   
   }
    } 
   
     matrice[j-1][19]=numarExercitiiRezolvate;
        numarExercitiiRezolvate=0;
    }
        for (i=1; i <=4; i++){
            for (j=1; j <=19; j++){
                
        }}
          
    
      
      
        
   
})
}




function generareCalificativ1(x,nr,timp){
    
var calificativ;var scor;var a;var j;var valori2= new Array()
var result;
result=x;


                     for(var i=1;i<=4;i++){
                         a=result.slice(0,4);
                        //alert(a);
                         for(var j=0;j<a.length;j++){
                             if(a[j]=="a"){
                                 a=a.slice(j+1,a.length);
                                 j=-1;
                             }
                         }
                     valori2[i]=a;
                         result=result.slice(4,result.length);
                     }
                 for(var i=1;i<=4;i++){
                   valori2[i]=parseInt(valori2[i]);
                 } 
          
               
                    if (!isNaN(valori2[1])){
                      
                     //scor=((valori2[4]*100-valori2[1])/valori2[4]-valori2[2])*100;
                    x=valori2[1]/timp;//alert(x);
                    y=valori2[2]/valori2[3];
                    z=valori2[4];                     // alert(y);
                     z2=valori2[1]/6;
                     
                     calificativ= generareCalificativ(x,y,z,timp*2);
                         x=x*(10-valori2[3]);
                         y=y*(5-valori2[3]);
                         scor=x+y*y;
                         
                     scor=(20-scor)*100;
            if (scor<0){ 
scor=Math.abs(scor)+scor/2;
            }
                     if (scor!=0){
                    //$("#score").html(Math.round(scor)+"  ("+calificativ+")");
                      ///   var scor1; 
                        // scor1="&nbsp Aplicatia "+nr+" <br/>"+Math.round(scor)+"  ("+calificativ+")";
                        
                       //  $("#i-"+nr).html(scor1);
                   return calificativ;
                     } else{
                     //      $("#score").html(0);
                         return 0;
                     }
                    } else{
 //$("#score").html(0);
                    }
                   
                 }



function generareCalificativ(x,y,z,z1){
    if (z==0){
    if(x<1 && y<1){
return "Experimentat";
    } else if (x<2 && y<2){
        return "Bun";
}
    else if (x<3 && y<3){
        return "Mediu";
}
    else if (x<3 && y<3){
        return "Mai lucreza";
}
    else {
        return "Slab";
}
    } else{
          if(x<1 && y<1 && z<z1){
return "Experimentat";
    } else if (x<2 && y<2 &&z<z1+z1/2){
        return "Bun";
}
    else if (x<3 && y<3){
        return "Mediu";
}
    else if (x<3 && y<3){
        return "Mai lucreza";
}
    else {
        return "Slab";
} 
    }
}

    function media(a,b,c,d,e){
        var x;
        x=5*a+4*b+3*c+2*d+1*e;
        return x/(a+b+c+d+e);
    }

      
          
     
 $scope.Statistici=function(x,y,z,t){
       $("#mycanvas").remove(); 
     $("#canvasCreator").prepend("<canvas id=mycanvas height=500px width=500px></canvas>");
     
     $scope.alegeri=tipStatistica+" "+t;
     
  var nr=0; var numar=new Array(); var numar1=new Array();
     if (z==1){
               $("#chestie").hide();
     if(y>0){

   var a; var nr1=0,nr2=0,nr3=0,nr4=0,nr5=0;
    for(var i=1;i<numarElev;i++){
     for(var j=x;j<=y;j++){
          if(matrice[i][j]!=null && matrice[i][j]!=""){
              nr++; 
         a=generareCalificativ1(matrice[i][j],j,dificultate[j]);
              
            if (a=="Experimentat"){
                nr1++;
            } else if(a=="Bun"){
                nr2++;
            }else if(a=="Mediu"){
                nr3++;
            }else if(a=="Mai lucreaza"){
                nr4++;
            }else if(a=="Slab"){
                nr5++;
            }
          }
     }
        
    elemente[i]=media(nr1,nr2,nr3,nr4,nr5);
    numar[i]=nr;
    nr=0;
         nr1=0;
             nr2=0;
             nr3=0;
             nr4=0;
             nr5=0;
    }
    
    
 for(i=1;i<=numarElev-1;i++){
             
     if(elemente[i]>=1 && elemente[i]<2){
                 if (elemente[i]>1.49){
                     elemente[i]=2;
                 } else{
                     elemente[i]=1;
                 }
             }
             if(elemente[i]>=2 && elemente[i]<3){
                 if (elemente[i]>2.49){
                     elemente[i]=3;
                 } else{
                     elemente[i]=2;
                 }
             }
             if(elemente[i]>=3 && elemente[i]<4){
            
                 if (elemente[i]>3.49){
                     elemente[i]=4;
                 } else{
                     elemente[i]=3;
                 }
             }
             if(elemente[i]>=4 && elemente[i]<5){
                 if (elemente[i]>4.49){
                     elemente[i]=5;
                 } else{
                     elemente[i]=4;
                 }
             }
     
            
         }
          for(i=1;i<=numarElev-1;i++){
      
                if (elemente[i]==5){
                nr1++;
            } else if(elemente[i]==4){
                nr2++;
            }else if(elemente[i]==3){
                nr3++;
            }else if(elemente[i]==2){
                nr4++;
            }else if(elemente[i]==1){
                nr5++;
            }}
         for(i=0;i<numarElev-1;i++)
   $scope.elevi[i]={username:dataElevi.username[i+1],nume:"",parola:"",numar:"",mesaj:numar[i+1]};
           $scope.mesaj1="/"+(y-x+1)+" exerciții rezolvate";
     } else if(y==0){
         nr1=0;nr2=0;nr3=0;nr4=0;nr5=0;
         for(i=1;i<numarElev;i++){
                   if(matrice[i][x]!=null&&matrice[i][x]!="") {
               a=generareCalificativ1(matrice[i][x],x,dificultate[x]);
             elemente[i]=a;
                       if (a=="Experimentat"){
                nr1++;
            } else if(a=="Bun"){
                nr2++;
            }else if(a=="Mediu"){
                nr3++;
            }else if(a=="Mai lucreaza"){
                nr4++;
            }else if(a=="Slab"){
                nr5++;
            }
         } else{
elemente[i]="nu a completat exercițiul.";
         }
         }
     
      for(i=0;i<numarElev-1;i++){
          $scope.elevi[i]={username:dataElevi.username[i+1],nume:"",parola:"",numar:"",mesaj:elemente[i+1]};
           $scope.mesaj1="";
     }
     }
          
      

     var ctx =$("#mycanvas");
  data1 = {
    datasets: [{
        data: [],
        backgroundColor:[]
      
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
    ]
};  
    var myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data: data1,
    options:{
responsive:false
    }
   
});
	 myDoughnutChart.data.labels[0]="Experimentat";
         myDoughnutChart.data.labels[1]="Bun";
         myDoughnutChart.data.labels[2]="Mediu";
         myDoughnutChart.data.labels[3]="Mai lucrează";
         myDoughnutChart.data.labels[4]="Slab";
      

         myDoughnutChart.data.datasets[0].data[0]=nr1;
         myDoughnutChart.data.datasets[0].data[1]=nr2;
         myDoughnutChart.data.datasets[0].data[2]=nr3;
         myDoughnutChart.data.datasets[0].data[3]=nr4;
         myDoughnutChart.data.datasets[0].data[4]=nr5;
         myDoughnutChart.data.datasets[0].backgroundColor[2]="#9ec3ff";
         myDoughnutChart.data.datasets[0].backgroundColor[1]="#ff9191"; 
      myDoughnutChart.data.datasets[0].backgroundColor[3]="#c6ffd1";
         myDoughnutChart.data.datasets[0].backgroundColor[0]="#ffc6ed"; 
      myDoughnutChart.data.datasets[0].backgroundColor[4]="#fff499";
       
         myDoughnutChart.update();
     
     
        
       
     } else if(z==2){
           $("#chestie").hide();
         nr=0; 
         for(i=1;i<=30;i++){
             numar1[i]=0;
         numar[i]=0;
         }
         if(x==1 && y==18){
         for(var i=1;i<numarElev;i++){
             for(var j=x;j<=y;j++){
               nr1=0;
                 if(matrice[i][j]!=null && matrice[i][j]!=""){
                nr=nr+extragereValaore(matrice[i][j],2); 
                  nr1=extragereValaore(matrice[i][j],2);
                    numar[i]=numar[i]+nr1;
                if(j>=1 &&j<=4){
                    numar1[1]=numar1[1]+nr1;
                } else if (j>=5 &&j<=7){
                   numar1[2]=numar1[2]+nr1;
                } else if (j>=8 &&j<=9){
                   numar1[3]=numar1[3]+nr1;
                } else if (j==10){
                    numar1[4]=numar1[4]+nr1;
                } else if (j>=11 &&j<=14){
                    numar1[5]=numar1[5]+nr1;
                } else if (j>=15 &&j<=18){
                    numar1[6]=numar1[6]+nr1;
                }
                    
        }
    
             }
    
         
         
         }
         
       
     var ctx =$("#mycanvas");
  data1 = {
    datasets: [{
        data: [],
        backgroundColor:[]
      
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
    ]
};  
    var myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data: data1,
    options:{
responsive:false
    }
   
});
	 myDoughnutChart.data.labels[0]="Algoritmul";
         myDoughnutChart.data.labels[1]="Expresii aritmetice";
         myDoughnutChart.data.labels[2]="Operatori relaționali";
         myDoughnutChart.data.labels[3]="Expresii logice";
         myDoughnutChart.data.labels[4]="Structura alternativă";
             myDoughnutChart.data.labels[5]="Structura repetitivă";
      

         myDoughnutChart.data.datasets[0].data[0]=numar1[1];
         myDoughnutChart.data.datasets[0].data[1]=numar1[2];
         myDoughnutChart.data.datasets[0].data[2]=numar1[3];
         myDoughnutChart.data.datasets[0].data[3]=numar1[4];
         myDoughnutChart.data.datasets[0].data[4]=numar1[5];
         myDoughnutChart.data.datasets[0].data[5]=numar1[6];
         myDoughnutChart.data.datasets[0].backgroundColor[2]="#9ec3ff";
         myDoughnutChart.data.datasets[0].backgroundColor[1]="#ff9191"; 
      myDoughnutChart.data.datasets[0].backgroundColor[3]="#c6ffd1";
         myDoughnutChart.data.datasets[0].backgroundColor[0]="#ffc6ed"; 
      myDoughnutChart.data.datasets[0].backgroundColor[4]="#fff499";
             myDoughnutChart.data.datasets[0].backgroundColor[5]="#f9ca98";
         myDoughnutChart.update();  
         
         for(i=0;i<numarElev-1;i++){
          $scope.elevi[i]={username:dataElevi.username[i+1],nume:"",parola:"",numar:"",mesaj:numar[i+1]};
           $scope.mesaj1=" greșeli";
     }
        } else if ((x!=i || y!=18) && y!=0){
              nr=0; 
         for(i=1;i<=30;i++){
             numar1[i]=0;
         numar[i]=0;
         }x=parseInt(x);
            for(var i=1;i<numarElev;i++)
             for(var j=x;j<=y;j++){
               nr1=0;
                 if(matrice[i][j]!=null && matrice[i][j]!=""){
                nr=nr+extragereValaore(matrice[i][j],2); 
                  nr1=extragereValaore(matrice[i][j],2);
                    numar[i]=numar[i]+nr1;
                 
                     if(j==x){
                    numar1[1]=numar1[1]+nr1;
                }  if (j==x+1){
                    
                    numar1[2]=numar1[2]+nr1;
                }  if (j==x+2){
                     
                    numar1[3]=numar1[3]+nr1;
                }  if (j==x+3){
                   numar1[4]=numar1[4]+nr1;
                } }} 
         var ctx =$("#mycanvas");
  data1 = {
    datasets: [{
        data: [],
        backgroundColor:[]
      
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        
    ]
};  
    var myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data: data1,
    options:{
responsive:false
    }
   
});
	      
         myDoughnutChart.data.labels[0]="Aplicația 1";
         myDoughnutChart.data.labels[1]="Aplicația 2";
         myDoughnutChart.data.labels[2]="Aplicația 3";
         myDoughnutChart.data.labels[3]="Aplicația 4";
         
      

         myDoughnutChart.data.datasets[0].data[0]=numar1[1];
         myDoughnutChart.data.datasets[0].data[1]=numar1[2];
         myDoughnutChart.data.datasets[0].data[2]=numar1[3];
         myDoughnutChart.data.datasets[0].data[3]=numar1[4];
         
         myDoughnutChart.data.datasets[0].backgroundColor[2]="#9ec3ff";
         myDoughnutChart.data.datasets[0].backgroundColor[1]="#ff9191"; 
      myDoughnutChart.data.datasets[0].backgroundColor[3]="#c6ffd1";
         myDoughnutChart.data.datasets[0].backgroundColor[0]="#ffc6ed"; 
   
         myDoughnutChart.update(); 
                 for(i=0;i<numarElev-1;i++){
          $scope.elevi[i]={username:dataElevi.username[i+1],nume:"",parola:"",numar:"",mesaj:numar[i+1]};
           $scope.mesaj1=" greseli";
     }
        } else if(y==0){
            
            $("#tabelEleviStatistici").css("width","50%");
              $("#tabelEleviStatistici").css("float","left");
            $(".textStatistici").css("font-size","20px");
         for (i=1;i<numarElev;i++){
            nr=extragereValaore(matrice[i][x],2);
$scope.elevi[i-1]={username:dataElevi.username[i],nume:"",parola:"",numar:"",mesaj:nr};
           $scope.mesaj1=" greseli";
         }
        
        
        }
        
     } else if (z==3){
                $("#tabelEleviStatistici").css("float","right");

 $("#tabelEleviStatistici").css("width","20%");
    $("#tabelEleviStatistici").css("height","76%");   
        if(x==1 && y==18){
         
         
      
         $("#tabel1").hide();
         $(".textStatistici").css("display","none");    
             $("#tabel2").hide();
    function matrix() {
		
        var arr = [[]];

       
        for (var i = 0; i < numarElev; i++) {

          
            arr[i] = [];

           
            arr[i] = new Array();

            for (var j = 0; j <19 ; j++) {
                 if (j==0 && i==0){
                     arr[i][j] ="Nume_elev"; 
                 }
                if (i==0 &&j>=1){
                     arr[i][j] ="Aplicația-"+j+"  "; 
                }
                if(j==0&& i>0){
                  arr[i][j] =dataElevi.username[i];  
               } else if(i!=0) {
                    if(matrice[i][j]!=null && matrice[i][j]!=""){
               
                  a=generareCalificativ1(matrice[i][j],j,dificultate[j]);
                   
                        arr[i][j]=a;
                } else {
                    arr[i][j]="Nerezolvat";
                } 
                  
               }
               
            }
        }

        return arr;
    }

  
 var calificative=[];
         $scope.calificative[i]={username:""}
         if(x==1 && y==18){
          $("#chestie").show();
             $("#tabelEleviStatistici").css("width","80%");
             $("#tabelEleviStatistici").css("height","60%");
              $("#tabelEleviStatistici").css("float","left");
              $("#tabelEleviStatistici").css("margin-top","3%");
                          $("#tabelEleviStatistici").css("margin-left","2%");
           $(".textStatistici").css("font-size","20px");
            $scope.titluri[0]={nume:""} ;
           
                  
    $scope.cells = [
        []
    ];
    $scope.sizes = [20];
   $scope.cells = matrix();
         }
     }
     } 
 }
 

 function extragereValaore(x,y){
   var i,a,b,nr=0,nr1=0;
     for (i=1;i<=4;i++){
  x=x.substr(0,x.length-4);
    nr++;
       
          if (nr==4-y){
     b=x.substr(x.length-4);
  
              
            }
         

 }
  for (i=3;i>=0;i--){
     
if (b[i]!='a'){
nr1=nr1*10+parseInt(b[i]);
}
  }
 return nr1;
 }
    
  
    
    
    $scope.numarIntrebari=function(){
  swal({
  title: "Sunteți sigur?",
  text: "Dacă introduceți un număr de întrebări, toate datele de la evaluare ale elevilor vor fi șterse. Daca este prima dată când faceți această setare nu va fi nicio problemă.",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
   
  swal("Introdu numărul de întrebări la care trebuie să răspundă un elev!", {
  content: "input",
})
.then((value) => {
              if ($.isNumeric(value)==true || value%2==1){
                 
           $http({
  method: 'POST',
  url: '/fisiere/profesor/adaugareNumarIntrebari.php',
  data: {numarIntrebari:value,clasa:nr1,numar:numarElev-1},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}).then(function successCallback(response) {
                 
                  if (response.data==1){
eroareShow("Introdu o valoare pară și mai mică decat 22 și mai mare de 5.");
                  }
                  
              })
         
        
      }else {
eroareShow("Eroare!");
        }
    })
  
  
  
  
  
  
  
  } else {
    
  }
});
          
    }
   
    
    $scope.adaugaIntrebare=function(){
        var enunt,r1,r2,r3,r4;
        enunt=$("#enunt").val();
        r1=$("#raspunsCorect").val();
        r2=$("#raspunsGresit1").val();
        r3=$("#raspunsGresit2").val();
        r4=$("#raspunsGresit3").val();
        if(enunt=="" || r1=="" || r2=="" || r3=="" || r4==""){
            eroareShow("Introdu date in toate spatiile!");
        } else{
             $http({
  method: 'POST',
  url: '/fisiere/profesor/incarcareIntrebari.php',
  data: {enunt:enunt,r1:r1,r2:r2,r3:r3,r4:r4},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}).then(function successCallback(response) {
                 
                  if (response.data==1){
eroareShow("Eroare");
                  }
                  
              })
         
        }
    }
    var activ=0;
    var scoruriEvaluare=new Array();
    function incarcareScoruriEvaluare(x){
       $("#textGrafic").show();
       $("#textGrafic1").show();
        $http({
  method: 'POST',
  url: '/fisiere/profesor/loadScoruriEvaluare.php',
  data: {clasa:x},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}).then(function successCallback(response) {
                 
var data2 =JSON.parse(JSON.stringify(response.data));

numarExercitiiRezolvate=0;
for(var j=1;j<numarElev;j++)
    { 
        scoruriEvaluare[j]=data2.scoruriEvaluare[j];
    }
   
     
          
               activ=1;   
              })

    }
    var data2;
 $scope.scorEvaluare=function(x){
       $("#mycanvas1").remove(); 
     $("#canvasCreator1").prepend("<canvas id=mycanvas1  ></canvas>");
     if (activ==1){
     x=x+1;
   
  var myChart=  new Chart(document.getElementById("mycanvas1"), {
  type: 'line',
  data: {
    labels: [],
    datasets: [{ 
        data: [],
        label: "Exercitii corecte",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
      responsive:false,
   
  }
});
     var stringuri= new Array();
     var y=scoruriEvaluare[x];var i=0,z;var nrIntrebari=0;
     y=scoruriEvaluare[x]
      if (y==null){
eroareShow("Acest elev nu a rezolvat niciun test!");
           $("#mycanvas1").remove(); 
     $("#canvasCreator1").prepend("<canvas id=mycanvas1  ></canvas>");
      } else{
     while(y!=""){
         myChart.data.labels[i]=i;
         z=y.substr(y.length - 2);
         nrIntrebari=z;
         y=y.slice(0,y.length-2);
         z=y.substr(y.length - 2);
        // alert(z);
         
         if(z[0]=='a'){ 
           
             z=z.substr(z.length - 1);
             
         } else{
             z=parseInt(z);
         }
        
         stringuri[i+1]=z;
         
         y=y.slice(0,y.length-2);
        
         i++;
        
  
     }
      for(var j=1;j<=i+1;j++){
        myChart.data.datasets[0].data[i-j]=stringuri[j];  
      }
     myChart.data.datasets[0].data[0]=0;
     myChart.data.datasets[0].data[nrIntrebari]=16;
     myChart.data.labels[i]=i;
         
      

        
     
   myChart.update(); 
 
 
 
 
 
     }
 
     }
 }
 
   
 function reverseString(str) {
    return str.split("").reverse().join("");
}
})




