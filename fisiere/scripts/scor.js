var timp;var raspunsuriGresite=0;var timp1;var coeficientDificultate;var coeficientCorect;var timpOver=1;

function timer(x){
   timpOver=1;
if (x==0){
  timp=0;
  return x;
}
   timp=0;
  var myVar = setInterval(myTimer, 1000);
     
function myTimer() {
    
 if (timpOver==1){
    timp=timp+1; 
   } else{ 

    clearInterval(myVar);
}
   
}
    if (timpOver==0){
        return(0);
    }

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

for(var i=1;i<=4;i++){
for(var j=1;j<=4-valori[i].length;j++){
string1=string1+"a";
}

string1=string1+valori[i];
string=string+string1;
string1="";

}

$.ajax({   type:"POST",
                 url:"fisiere/php/inserScore.php",
                 data:"scor=" + string +"&nr="+nr ,
              success:function(result)
                 {

                  }

             });

}
}
function start(){
     timpOver=0;
    coeficientDificultate=1;
    coeficientCorect=0;
  timp=0;
    timp1=-1;
  raspunsuriGresite=0;
   
  setTimeout(function(){ timer(1); }, 500);
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
}, 1000);

}
function generareScor(nr,timp){ 
var valori2 = new Array;var scor;var calificativ;
var a,b;    var x,y,z2;
    $.ajax({   type:"POST",
                 url:"fisiere/php/loadScore.php",
                 data:"nr=" + nr,
              success:function(result)
                 {
                    result=result.slice(6,result.length);
                   
                   
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
                    $("#score").html(Math.round(scor)+"  ("+calificativ+")");
                      ///   var scor1; 
                        // scor1="&nbsp Aplicatia "+nr+" <br/>"+Math.round(scor)+"  ("+calificativ+")";
                        
                       //  $("#i-"+nr).html(scor1);
                   
                     } else{
                           $("#score").html(0);
                         return 0;
                     }
                    } else{
 $("#score").html(0);
                    }
                     
                 }

             });
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