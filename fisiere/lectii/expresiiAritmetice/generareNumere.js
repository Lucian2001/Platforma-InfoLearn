function maiMare(n,z){
  numar=Math.floor((Math.random() * z) + 1);
  if (numar<n && numar>1){
  return numar;
}
  else
  return  (maiMare(n,z));
}
function generareRezultat(termeni,semne,k){
var rezultat;
for(i=1;i<k;i++){
 if (semne[i]==1){
  rezultat=termeni[i]+termeni[i+1];
 }else if (semne[i]==2){
  rezultat=termeni[i]-termeni[i+1];
 }else if (semne[i]==3){
  rezultat=termeni[i]%termeni[i+1];
 }else if (semne[i]==4){
rezultat=termeni[i]*termeni[i+1];
 }else if (semne[i]==5){
rezultat=Math.floor(termeni[i]/termeni[i+1]);
 }

 }
return rezultat;
}


function generareValori(n,m,z,semn){
var Counter=1;
var numar;
    var termeni = new Array();
    var semne = new Array();

semne[Counter]=semn;

if (semn==1){
for(i=1;i<=n;i++){
numar=Math.floor((Math.random() * z) + 1);
 $("#id---"+Counter).html(numar);
termeni[Counter]=numar;
 Counter++;

}

 $("#id---"+(Counter)).html(generareRezultat(termeni,semne,Counter));

} else if (semn==2){
     if (Counter==1){
         numar=Math.floor((Math.random() * z) + 1);
       while(numar<=2)
  numar=Math.floor((Math.random() * z) + 1);
 $("#id---"+Counter).html(numar);
 termeni[Counter]=numar;
 Counter++;
 numar=Math.floor((Math.random() * z) + 1);termeni[Counter]=numar;
   $("#id---"+Counter).html(numar);
   Counter++;
$("#id---"+(Counter)).html(generareRezultat(termeni,semne,Counter));
}

} else if (semn==3){
  if (Counter==1){
      numar=Math.floor((Math.random() * z) + 1);
    while(numar<=2)
numar=Math.floor((Math.random() * z) + 1);
$("#id---"+Counter).html(numar);
termeni[Counter]=numar;
Counter++;
numar=maiMare(numar,z);
termeni[Counter]=numar;
$("#id---"+Counter).html(numar);
Counter++;
$("#id---"+(Counter)).html(generareRezultat(termeni,semne,Counter));
}

} else if (semn==4){
  for(i=1;i<=n;i++){
  numar=Math.floor((Math.random() * z) + 1);
   $("#id---"+Counter).html(numar);
  termeni[Counter]=numar;
   Counter++;

  }

   $("#id---"+(Counter)).html(generareRezultat(termeni,semne,Counter));
} else if (semn==5){
  if (Counter==1){
      numar=Math.floor((Math.random() * z) + 1);
    while(numar<=2)
 numar=Math.floor((Math.random() * z) + 1);
 $("#id---"+Counter).html(numar);
 termeni[Counter]=numar;
 Counter++;
 numar=maiMare(numar,z);termeni[Counter]=numar;
 $("#id---"+Counter).html(numar);
 Counter++;
 $("#id---"+(Counter)).html(generareRezultat(termeni,semne,Counter));
 }
}

}
function generareSemn(semn){
    if(semn==1){
        return "plus";
    } else if(semn==2){
        return "minus";
    } else if(semn==3){
        return "divide";
    } else if(semn==4){
        return "multiply";
    } else if(semn==5){
        return "slash";
    }
}

function incercari(){
    
  raspunsuriGresite=raspunsuriGresite+1;
    var nr=$("#numarIncercari").html();
    nr1=parseInt(nr);
    if (nr1<=3 && nr1>1){
  //  alert(nr);
      nr1=nr1-1;
        $("#numarIncercari").html(nr1);}
        else{
                  $("#plus").draggable( 'disable' );
               $("#minus").draggable( 'disable' );
               $("#divide").draggable( 'disable' );
               $("#multiply").draggable( 'disable' );
               $("#slash").draggable( 'disable' );
           eroareRezultat("Răspunsul corect era"+semn1);
            $("#gresit").show();
            $("#numarIncercari").html(0);
            $("#invisibleObject").html(1);
                  $("#invisibleObject1").html(0);
        buttonActive=1;
             timp1=-1;
        }
}
function corect(){
    coeficientCorect=coeficientCorect+timp1;
    
    timp1=-1;
    $("#corect").show();

    semn=Math.floor((Math.random() * 2) + 1);
   var nr=$("#exercitiiRezolvate").html();
    nr1=parseInt(nr);
    if (nr1<6 && nr1>=0){
        $("#exercitiiRezolvate").html(nr1+1);
    } else {
      $("#invisibleObject").html(0);
    }
$("#invisibleObject").html(1);
      $("#invisibleObject1").html(1);
    buttonActive=1;
}
function fixOperatiiMultipleBug(x,y,z,semn){

 if (x+y==z && semn != "plus"){
        $("#plus").hide();
    }
   if (x-y==z && semn != "minus"){
$("#minus").hide();
    }
   if (x*y==z && semn != "multiply"){
$("#multiply").hide();
    }
   if (x%y==z && semn != "divide"){
$("#divide").hide();
    }
   if (Math.floor(x/y)==z && semn != "slash"){
$("#slash").hide();
    }

}
