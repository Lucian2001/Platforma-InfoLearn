var raspuns=false;
function generareSemn(randomNr){

    if (randomNr==1){
        return "maiMic";
    } else if (randomNr==2){
        return "maiMare";
    } else if (randomNr==3){
        return "egal";
    }
}
var c;
function generareNumere(x){
    var a,b;
    a=Math.floor((Math.random() * 25) + 1);

    b=Math.floor((Math.random() * 25) + 2);
    if (x==1){

        if(a>=b){
           b=formaCorecta(a,x);
        }

    } else if (x==2){
      if(a<=b){
           b=formaCorecta(a,x);
        }
    } else if(x==3){
        b=a;
    }

   $("#id---1").html(a);
        $("#id---2").html(b);
}
function formaCorecta(b,y){
  var a;
    if (y==1){
       a=Math.floor((Math.random() * 25) + 2);

        if (a>b){
            return a;
        } else{
            return (formaCorecta(b,y));
        }

    } else if (y==2){
       a=Math.floor((Math.random() * 25) + 2);

        if (a<b){
            return a;
        } else{
            return (formaCorecta(b,y));
        }

    }
}
function corect(){
      coeficientCorect=coeficientCorect+timp1;
    timp1=-1;
    if (raspuns==false){
$("#corect").show();

    semn=Math.floor((Math.random() * 2) + 1);
   var nr=$("#exercitiiRezolvate").html();
    nr1=parseInt(nr);
    if (nr1<5 && nr1>=0){
        $("#exercitiiRezolvate").html(nr1+1);
       
    } else{$("#exercitiiRezolvate").html(nr1+1);
        succes(); timpOver=0;
            creereScor(timp,raspunsuriGresite,4,coeficientCorect,8);
      generareScor(8,35);
          }
    }
}

function gresit(){
if (raspuns==false){
    $("#gresit").show();
raspuns=true;
}
 eroareRezultat("Răspunsul corect era "+semn);

}
var d;

var variabila;
function afisareSemn(x){
var y;
    var a=Math.floor((Math.random() * 2) + 1);
    var b= Math.floor((Math.random() * 25) + 1);
c=a;
    if (a==1){
        variabila=b;
        $("#id---1").val(b);
        $("#id---1").prop('disabled', true);
    } else{
        variabila=b;
       $("#id---2").val(b);
        $("#id---2").prop('disabled', true);
    }
d=x;
     if (x==1){
    y= "<";
    } else if (x==2){
    y= "<=";
    } else if (x==3){
    y= ">";
    } else if (x==4){
    y= ">=";
    } else if (x==5){
    y= "==";
    } else if (x==6){
    y= "!=";
    }
    $("#semn1").html(y);
}

function verificareRaspuns(x){
    
    ok=false;
 a=variabila;
    if (c==1){
 b=$("#id---2").val();
    } else{
         b=$("#id---1").val();
    }

if (parseInt(a).toString()!=a || parseInt(a)==null){
  ok=false; 
} else{ 
a=parseInt(a);
b=parseInt(b);
    if (a!=0 && b!=0){

    if (x==1){
       if(c==1){
           if(a<b){
               ok=true;
           } else{
               ok=false;
           }
       } else{
           if(a>b){
               ok=true;
           } else{
               ok=false;
           }
       }
    } else if (x==2){
         if(c==1){
           if(a<=b){
               ok=true;
           } else{
               ok=false;
           }
       } else{
           if(a>=b){
               ok=true;
           } else{
               ok=false;
           }
       }
    } else if (x==3){
         if(c==1){
           if(a>b){
               ok=true;
           } else{
               ok=false;
           }
       } else{
           if(a<b){
               ok=true;
           } else{
               ok=false;
           }
       }    
    
    } else if (x==4){
         if(c==1){
           if(a>=b){
               ok=true;
           } else{
               ok=false;
           }
       } else{
           if(a<=b){
               ok=true;
           } else{
               ok=false;
           }
       }
    } else if (x==5){
         if(c==1){
           if(a==b){
               ok=true;
           } else{
               ok=false;
           }
       } else{
           if(a==b){
               ok=true;
           } else{
               ok=false;
           }
       }
    } else if (x==6){
         if(c==1){
           if(a!=b){
               ok=true;
           } else{
               ok=false;
           }
       } else{
          if(a!=b){
               ok=true;
           } else{
               ok=false;
           } 
       }
    }
    } else{
        ok=false;
    }
}
    if (ok==true){
        corect1();
    } else{
        gresit1();
    }

}

function corect1(){
    coeficientCorect=coeficientCorect+timp1;
    
    timp1=-1;
    if ($("#exercitiiRezolvate").html()!=6){
  $("#corect").show();
  setTimeout(function(){
          numar1=Math.floor((Math.random() * 6) + 1);
      $("#id---2").prop('disabled', false);
           $("#id---1").prop('disabled', false);
          $("#id---1").val("");
$("#id---2").val("");032
      $("#corect").hide();
      afisareSemn(numar1);


buttonActive2=1;
  } ,1500);
  var nr=$("#exercitiiRezolvate").html();
  var nr1=parseInt(nr);
if (nr1>=0 && nr1<=5){
 nr1++;
 $("#exercitiiRezolvate").html(nr1);
}
if (nr1==6){
   $("#exercitiiRezolvate").html(6);
var Id="";
 var url= window.location.href;
 for(i=0;i<url.length;i++){
if (url[i]!="/" && url[i]!="#" && (url[i]==1 || url[i]==2 || url[i]==3)){
 Id=Id+url[i];
}
}
 succes(); timpOver=0;
     creereScor(timp,raspunsuriGresite,4,coeficientCorect,9);
    generareScor(9,25);
}}
}
function gresit1(){
     timp1=-1;
  $("#gresit").show(); eroareRezultat( "Un raspuns corect ar putea fi   "+generareRaspunsCorect());
  setTimeout(function(){
          numar1=Math.floor((Math.random() * 6) + 1);
       $("#id---2").prop('disabled', false);
           $("#id---1").prop('disabled', false);
        $("#gresit").hide();
   $("#id---1").val("");
$("#id---2").val("");
      afisareSemn(numar1);

buttonActive2=1;
  } ,1500);


}

function generareRaspunsCorect(){
var raspuns;var nr;
raspuns=$("#id---"+c).val();
    raspuns=parseInt(raspuns);
 nr=Math.floor((Math.random() * 10) + 1);
    if (c==1){
        nr=0-nr;
    }

if (d==1){
    nr=raspuns-nr;
    nr=parseInt(nr);
  return nr;
} else if (d==2){
     nr=raspuns-nr;
     nr=parseInt(nr);
  return nr;
} else if (d==3){
     nr=raspuns+nr;
     nr=parseInt(nr);
  return nr;
} else if (d==4){
     nr=raspuns+nr;
     nr=parseInt(nr);
return nr;
} else if (d==5){
return raspuns;
} else if (d==6){
     nr=parseInt(nr);
return raspuns-nr;
}
}
