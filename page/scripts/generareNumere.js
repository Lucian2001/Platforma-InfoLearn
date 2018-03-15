function maiMare(n,z){
  numar=Math.floor((Math.random() * z) + 1);
  if (numar<n){
  return numar;}
  else
  return(maiMare(n,z));
}
function generareRezultat(termeni,semne,k){
var rezultat;
for(i=1;i<k;i++){
 if (semne[i]==1){
  rezultat=termeni[i]+termeni[i+1];
 }else if (semne[i]==2){
  rezultat=termeni[i]-termeni[i+1];
 }else if (semne[i]==3){

 }else if (semne[i]==4){

 }else if (semne[i]==5){

 }else{

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
 $("#id---"+Counter).html(numar);
 termeni[Counter]=numar;
 Counter++;
} else{

numar=maiMare(numar,z);termeni[Counter]=numar;
   $("#id---"+Counter).html(numar);
}



} else if (semn==3){

} else if (semn==4){

} else if (semn==5){

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
    var nr=$("#numarIncercari").html();
    nr1=parseInt(nr);
    if (nr1<=3 && nr1>1){
    alert(nr);
      nr1=nr1-1;
        $("#numarIncercari").html(nr1);}
        else{
            $("#gresit").show();
            $("#numarIncercari").html(0);
        }
}
function corect(){
$("#corect").show();
    $("#numarIncercari").html("3");
    semn=Math.floor((Math.random() * 2) + 1);
   var nr=$("#exercitiiRezolvate").html();
    nr1=parseInt(nr);
    if (nr1<=6 && nr1>=0){
        $("#exercitiiRezolvate").html(nr1+1);
    }
    
}