function generareNumere(x) {
     
    var nr=Math.floor((Math.random() * x) + 1);
     var nr1=Math.floor((Math.random() * 4) + 1);
     var nr2=Math.floor((Math.random() * 10) + 1);
     var nr4=Math.floor((Math.random() * x) + 1);
     var nr5=Math.floor((Math.random() * x) + 1);
     var nr6=Math.floor((Math.random() * x) + 1);
    var nr7=Math.floor((Math.random() * x) + 1);
    var semn1=Math.floor((Math.random() * 5) + 1);
    var semn2=Math.floor((Math.random() * 5) + 1);

if (nr2<7){

    $("#id--1").html(nr);
    $("#id--3").html(generareOperator(nr1));
    $("#id--2").html(operator(nr1,nr));
     $("#id--4").html(nr4);
    $("#id--6").html(nr5);
     $("#id--7").html(nr6);
     $("#id--5").html(generareSemn(semn1));
     $("#id--8").html(generareSemn(semn2));
    $("#id--9").html(nr7);
    return expresie(semn1,nr4,nr5);
} else{
           $("#id--1").html(nr);
           $("#id--3").html(generareOperator(nr1));
  $("#id--4").html(nr4);
    $("#id--6").html(nr5);
     $("#id--7").html(nr6);

     $("#id--5").html(generareSemn(semn1));
     $("#id--8").html(generareSemn(semn2));
    $("#id--9").html(nr7);

     if (nr1==1 || nr1==3){
              $("#id--2").html(operator(nr1+1,nr));
        }else if (nr1==2 || nr1==4){
             $("#id--2").html(operator(nr1-1,nr));  }
        return (expresie(semn2,nr6,nr7));
}
   
}
 function generareOperator(x){
    if(x==1){

        return ">";
    } else if(x==2){

        return "<";
    } else if(x==3){

        return ">=";
    } else if(x==4){

        return "<=";
    }
}

 function operator(x,y){
    var z;  var nr=Math.floor((Math.random() * 10) + 1);
     if(x==1){
z=y-nr;
        return z;
    } else if(x==2){
            z=y+nr;
        return z;
    } else if(x==3){
            z=y-nr;
        return z;
    } else if(x==4){
             z=y+nr;
        return z;
    }
}
 function generareSemn(semn){
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
 function expresie(semn,x,y){
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
function corect(){
coeficientCorect=coeficientCorect+timp1;
     
timp1=-1;
$("#corect").show();
            setTimeout(function(){
                 $("#corect").hide();
                dificultate=dificultate+7;
               raspuns1= generareNumere(dificultate);


  buttonActive1=1;
            } ,1500);
         var nr=$("#exercitiiRezolvate").html();
         var nr1=parseInt(nr);
    if (nr1>=0 && nr1<5){
        nr1++;
        $("#exercitiiRezolvate").html(nr1);
    }
       else{$("#exercitiiRezolvate").html(6);
succes(); timpOver=0;
 creereScor(timp,raspunsuriGresite,4,coeficientCorect,13);            
generareScor(12,53);
      }

}
function gresit(){
     timp1=-1;
        raspunsuriGresite=raspunsuriGresite+1;
    $("#gresit").show(); eroareRezultat("Răspunsul corect era "+raspuns1);
            setTimeout(function(){
                 $("#gresit").hide();
                dificultate=dificultate-1;
               raspuns1=generareNumere(dificultate);

          buttonActive1=1;

            } ,1500);
}
