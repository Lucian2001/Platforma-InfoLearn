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
    if (raspuns==false){
$("#corect").show();

    semn=Math.floor((Math.random() * 2) + 1);
   var nr=$("#exercitiiRezolvate").html();
    nr1=parseInt(nr);
    if (nr1<5 && nr1>=0){
        $("#exercitiiRezolvate").html(nr1+1);
    } else{$("#exercitiiRezolvate").html(nr1+1);
        var Id="";
  var url= window.location.href;
  for(i=0;i<url.length;i++){
if (url[i]!="/" && url[i]!="#" && (url[i]==1 || url[i]==2 || url[i]==3)){
  Id=Id+url[i];
}
}
  $("#id-"+Id).css("background-color","#d8ffd6");

$.ajax({   type:"POST",
   url:"paginaUtilizator/testHttp.php",
   data:"Id=" + Id ,
success:function(result)
   {
     //  alert(result);
    }

});
    }
    }
}

function gresit(){
if (raspuns==false){
    $("#gresit").show();
raspuns=true;
}

}

function afisareSemn(x){
var y;
    var a=Math.floor((Math.random() * 2) + 1); 
    var b= Math.floor((Math.random() * 25) + 1); 
    
    if (a==1){
        $("#id---1").val(b);
        $("#id---1").prop('disabled', true);
    } else{
       $("#id---2").val(b);
        $("#id---2").prop('disabled', true); 
    }
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
 a=$("#id---1").val();
 b=$("#id---2").val();

    if (a!=null && b!=null){
    if (x==1){
      if(a<b){
          ok=true;
      }
    } else if (x==2){
    if(a<=b){
          ok=true;
      }
    } else if (x==3){
  if(a>b){
          ok=true;
      }
    } else if (x==4){
  if(a>=b){
          ok=true;
      }
    } else if (x==5){
   if(a==b){
          ok=true;
      }
    } else if (x==6){
   if(a==b){ alert("pola");
          ok=false;
      }
        else{

        ok=true;
        }
    } 
    } else{
        ok=false;
    }
    if (ok==true){
        corect1();
    } else{
        gresit1();
    }

}
function corect1(){
    if ($("#exercitiiRezolvate").html()!=6){
  $("#corect").show();
  setTimeout(function(){
          numar=Math.floor((Math.random() * 6) + 1);
      $("#id---2").prop('disabled', false);
           $("#id---1").prop('disabled', false); 
          $("#id---1").val("");
$("#id---2").val("");
      $("#corect").hide();
      afisareSemn(numar);



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
 $("#id-"+Id).css("background-color","#d8ffd6");

$.ajax({   type:"POST",
  url:"paginaUtilizator/testHttp.php",
  data:"Id=" + Id ,
success:function(result)
  {
      alert("Ai terminat aceasta aplicatie");
   }

});
}}
}
function gresit1(){
  $("#gresit").show();
  setTimeout(function(){
          numar=Math.floor((Math.random() * 6) + 1);
       $("#id---2").prop('disabled', false);
           $("#id---1").prop('disabled', false);  
        $("#gresit").hide();
   $("#id---1").val("");
$("#id---2").val("");
      afisareSemn(numar);
   
    
  } ,1500);


}