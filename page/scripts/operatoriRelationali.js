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
   url:"page/testHttp.php",
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