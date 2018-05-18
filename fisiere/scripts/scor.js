var timp;var raspunsuriGresite=0;var timp1;var coeficientDificultate;var coeficientCorect;
function timer(x){
if (x==0){
  timp=0;
  return x;
}
timp=0;
setInterval(function() {
    timp=timp+1;
}, 1000);

}
function raspunsGresit(){
  raspunsuriGresite=raspunsuriGresite+1;
}
function creereScor(x,y,z,t,nr){
  var valori = new Array;
if (x>999 || z>999 || y>999 || t>999 ){
  alert("Eroare");
} else{
var string,string1;
  string="";
  string1="";

valori[1]=x.toString();
valori[2]=y.toString();
valori[3]=z.toString();
valori[4]=t.toString();
alert(valori[4]);
for(var i=1;i<=4;i++){
for(var j=1;j<=4-valori[i].length;j++){
string1=string1+"a";
}

string1=string1+valori[i];
string=string+string1;
string1="";

}

$.ajax({   type:"POST",
                 url:"fisiere/inserScore.php",
                 data:"scor=" + string +"&nr="+nr ,
              success:function(result)
                 {

                  }

             });

}
}
function start(){
    coeficientDificultate=1;
    coeficientCorect=0;
  timp=0;
  raspunsuriGresite=0;
  timer(1);
}

function timerCorect(x){
    
if (x==0){
  timp1=0;
  return x;
}
timp1=0;
setInterval(function() {
    if (timp1<0){
return 0;
    }
    timp1=timp1+1; 
}, 100);

}

function generareScor(nr){
    $.ajax({   type:"POST",
                 url:"fisiere/loadScore.php",
                 data:"nr=" + nr ,
              success:function(result)
                 {

                  }

             });
}