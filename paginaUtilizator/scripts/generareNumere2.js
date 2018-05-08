var rezultat1,adevarat,corect=false,optiune=0;
function generareNumere(numereEvaluare,semneEvaluare){
 var nr,nr1,nr2;
var semneRepetitie = new Array();
var numere=new Array();
    for(i=1;i<=4;i++){
     nr=randomNumber(20);
    nr1=nr.toString();

     numere[i]=nr1;
 }
   for(i=1;i<=3;i++){
     nr=randomNumber(5);
for (var j=1;j<=i;j++){
  if (nr==semneRepetitie[j]){
      nr=randomNumber(5);
      j--;
  }
}
        $("#id--"+i).html(generareSemn1(nr));
     semneRepetitie[i]=nr;
 }
var nr3=randomNumber(2);

    if (nr3==1){
        nr=randomNumber(3);
        numere[nr]="("+ numere[nr];
        numere[nr+1]=numere[nr+1]+")";
    }
    else{
        nr=randomNumber(3);
        nr2=randomNumber(3);
        while(nr==nr2){
        nr=randomNumber(3);
        nr2=randomNumber(3);
        }
//alert("nr="+nr);
     //   alert("nr2="+nr2);
        if (nr-nr2==1 || nr-nr2==-1){
           numere[nr]="("+ numere[nr];
        numere[nr+1]=numere[nr+1]+")";

        } else if(nr2==2 || nr==2){
             numere[nr]="("+ numere[nr];
        numere[nr+1]=numere[nr+1]+")";
        } else
             {
                numere[nr]="("+ numere[nr];
        numere[nr+1]=numere[nr+1]+")";
                numere[nr2]="("+ numere[nr2];
        numere[nr2+1]=numere[nr2+1]+")";
            }
    }
      for(i=1;i<=4;i++){
          numereEvaluare[i]=numere[i];
          semneEvaluare[i]=semneRepetitie[i];
          $("#id-"+i).html(numere[i]);
      }
rezultat(semneRepetitie,numere);


    nr1=randomNumber(2); 
    if (nr1==1){
        adevarat=true;
        $("#id--5").html(rezultat1);

    }else {
        adevarat=false;
        $("#id--5").html(rezultat1-randomNumber(20));

    }
    return rezultat1;
}
function generareSemn1(semn){
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

function randomNumber(z){
   return Math.floor((Math.random() *z) + 1);
}
function rezultat(semne,numere){
    var numar,nr,nr1=0,nr2=0,nr3;
    for (i=1;i<=4;i++){
        numar=numere[i];
      for(var j=0;j<numar.length;j++){
          if (numar[j]=="("){

              for(var l=1;l<=numar.length-1;l++){
              nr=parseInt(numar[j+l]);
              nr1=nr1*10+nr;
              }
           //   alert(nr1);
          } else if (numar[j]==")"){

              for(var l=numar.length-1;l>=1;l--){
              nr=parseInt(numar[j-l]);
              nr2=nr2*10+nr;
              }
        //  alert(nr2);
          }


      }
        if(nr1!=0 && nr2!=0){
   // alert("suima="+(nr1+nr2));

            nr3=semne1(semne[i-1],nr1,nr2);semne[i-1]=0;

            numere[i]=nr3;
            numere[i-1]=nr3;
            nr1=0;nr2=0;

        }

    }
    nr1=4;
    nr2=3;
    for(i=1;i<=nr1;i++){
        if (numere[i]==numere[i+1]){
         for(j=i;j<=nr1;j++){
           numere[j]=numere[j+1];

         }nr1--;
        }
    }
     for(i=1;i<=nr2;i++){
         if (semne[i]==0){
         for(j=i;j<=nr2;j++){
          semne[j]=semne[j+1];

         }nr2--;
        }
     }

    var rezultatComplet=0;
    if(nr2==1){
            console.log(semne[1]+" "+numere[1]+" "+numere[2]);
        rezultat1=semne1(semne[1],numere[1],numere[2]);

        rezultatComplet=1;

    }
     var nr4=0;

   var nr7=0;
         nr4=0;
   var nr6=0;
    if (rezultatComplet==0){
    for (i=1;i<=nr2;i++){
        if (semne[i]>2&& semne[i]!=0){

            if (nr4==0){ nr7=1;

                      nr6=1;
            nr1=semne1(semne[i],numere[i],numere[i+1]);
                rezultat1=nr1;
                        nr3=i;

            }
            if (nr4==1){
                rezultatComplet=1;
                rezultat1=semne1(semne[i],nr1,numere[i+1]);
            }
            nr4=1;
        }
    }
    var semn2=0;// alert("rezultat"+rezultatComplet);
    if (nr7!=0 && rezultatComplet!=1 ){

      //  alert(rezultat1);
      //  alert(nr3);
        if (nr3==2){ //alert("41");
            numere[2]=rezultat1;
           semn2=semne[1];

        } else{ //alert("42");
            numere[1]=rezultat1;
            semn2=semne[2];
            numere[2]=numere[3];
        }
      // alert("semn2"+semn2+"numere[1]"+numere[1]+"numere[2]"+numere[2]);
        rezultat1=semne1(semn2,numere[1],numere[2]);




    } else if (rezultatComplet!=1 ){  nr4=0;
       for(i=1;i<=nr2;i++){//alert("semn2"+semne[i]+"numere[1]"+numere[1]+"numere[2]"+numere[2]);
           if (nr4==0)
             rezultat1=semne1(semne[i],numere[1],numere[2]);

           if (nr4==1){
                    rezultat1=semne1(semne[i],rezultat1,numere[3]);

           }nr4=1;
       }
    }
raspuns1=rezultat1;
    }

   // $("#invisibleObject").html(rezultat1);
}
function semne1(nr,a,b){
    var x,y;
    x=parseInt(a);
    y=parseInt(b);
    if (nr==1) {

        return x+y;
    } else if (nr==2) {
        return x-y;
    } else if (nr==3) {
        return (x%y);
    } else if (nr==4) {
        return (x*y);
    } else if (nr==5) {
        return Math.floor(x/y);
    }
}
function corect2(){
      corect=true;
    optiune=1;
}
function gresit2(){
   corect=false;
    optiune=1;
}
function verificare(){
   if (optiune==1){
    if (corect==true )
        {$("#corect1").show();
            setTimeout(function(){
                  generareNumere(array,array1);
                $("#corect1").hide();
           $("#false1").prop('disabled', false);
  buttonActive=1;
            } ,1500);
         var nr=$("#exercitiiRezolvate1").html();
         var nr1=parseInt(nr);
    if (nr1>=0 && nr1<=5){
        nr1++;
        $("#exercitiiRezolvate1").html(nr1);
    }

        }else  {
            $("#gresit1").show();  eroareRezultat("Raspunsul corect era"+raspuns1);
            setTimeout(function(){


              raspuns=    generareNumere(array,array1);
                $("#gresit1").hide();
                $("#false1").prop('disabled', false);

            } ,1500);
        }
} else
    { var nr2=$("#false1").val();
      nr2=parseInt(nr2);
      if (nr2==rezultat1){
$("#corect1").show();
            setTimeout(function(){
                  generareNumere(array,array1);
                  $("#false1").prop('disabled', false);
                $("#corect1").hide();
              $("#false1").val("");
                  buttonActive=1;
            } ,1500);
         var nr=$("#exercitiiRezolvate1").html();
         var nr1=parseInt(nr);
    if (nr1>=0 && nr1<=5){
        nr1++;
        $("#exercitiiRezolvate1").html(nr1);
    }
      } else{
  $("#gresit1").show();
            setTimeout(function(){
                  generareNumere(array,array1);
                $("#gresit1").hide();
              $("#false1").val("");
                 $("#false1").prop('disabled', false);
                  buttonActive=1;
            } ,1500);
      }

    }
optiune=0;corect=0;
 if (nr1==6){
    $("#exercitiiRezolvate").html(6);
succes();
 }
}
