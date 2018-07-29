function generareNumere(x){
    var obiect;
     var nr=Math.floor((Math.random() * x) + 1);
     var nr1=Math.floor((Math.random() * x) + 1);
     var nr2=Math.floor((Math.random() * x) + 1);

     var nr4=Math.floor((Math.random() * 5) + 1);
     var nr5=Math.floor((Math.random() * 4) + 1);
     var nr6=Math.floor((Math.random() * 10) + 1);
    var true1=Math.floor((Math.random() * 10) + 1);
    var true2=Math.floor((Math.random() * 10) + 1);
    $("#id--1").html(nr);
    $("#id--3").html(nr1);
    $("#id--7").html(nr2);

   if (nr6<8){
         $("#id--6").html("and");
   } else{
           $("#id--6").html("or");
   }
    if (true1<8){
          $("#id--5").html(expresie(nr4,nr,nr1));
    } else{
        var nr7=Math.floor((Math.random() * 10) + 1);
        nr7=nr7+1+expresie(nr4,nr,nr1);
        $("#id--5").html(nr7);
    }

    if (true2<7){
      $("#id--9").html(operator(nr5,nr2));
    }else{
        if (nr5==1 || nr5==3){
              $("#id--9").html(operator(nr5+1,nr2));
        }else if (nr5==2 || nr5==4){
             $("#id--9").html(operator(nr5-1,nr2));
        }

    }

    nr4=generareSemn(nr4);
    nr5=generareOperator(nr5);
    if ((true1<7 && true2<6 && nr6<8) || (true1<7 && true2<6 && nr6>=8) ||
       (true1<7 && true2>=6 && nr6>=8) || (true1>=7 && true2<6 && nr6>=8)){
        return true;
    } else
        return false;

}



    function generareSemn(semn){
    if(semn==1){
         $("#id--2").html("+");
        return "plus";
    } else if(semn==2){
         $("#id--2").html("-");
        return "minus";
    } else if(semn==3){
         $("#id--2").html("%");
        return "divide";
    } else if(semn==4){
         $("#id--2").html("*");
        return "multiply";
    } else if(semn==5){
         $("#id--2").html("/");
        return "slash";
    }
}

    function generareOperator(x){
    if(x==1){
              $("#id--8").html(">");
        return "maiMare";
    } else if(x==2){
              $("#id--8").html("<");
        return "maiMic";
    } else if(x==3){
              $("#id--8").html(">=");
        return "maiMareSauEgal";
    } else if(x==4){
              $("#id--8").html("<=");
        return "maiMicSauEgal";
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
 function operator(x,y){
    var z;
     if(x==1){
             do { 
                z=Math.floor((Math.random() * (y*2)) + 1);
             } while(y<=z);
        return z;
    } else if(x==2){
             do {
                z=Math.floor((Math.random() * (y*2)) + 1);
             } while(y>=z);
        return z;
    } else if(x==3){
            do {
                z=Math.floor((Math.random() * (y*2)) + 1);
             } while(y<z);
        return z;
    } else if(x==4){
             do {
                z=Math.floor((Math.random() * (y*2)) + 1);
             } while(y>z);
        return z;
    }
}
function corect(){
coeficientCorect=coeficientCorect+timp1;
    timp1=-1;
$("#corect").show();
            setTimeout(function(){
                 $("#corect").hide();
                dificultate=dificultate+7;
               raspuns= generareNumere(dificultate);

buttonActive=1;

            } ,1500);
         var nr=$("#exercitiiRezolvate").html();
         var nr1=parseInt(nr);
    if (nr1>=0 && nr1<5){
        nr1++;
        $("#exercitiiRezolvate").html(nr1);
    }
       else{$("#exercitiiRezolvate").html(6);
            
succes(); timpOver=0;
    creereScor(timp,raspunsuriGresite,4,Math.round( (coeficientCorect/6) * 10 ),11); 
             generareScor(11,35);
      }

}
function gresit(){
    timp1=-1;
    raspunsuriGresite=raspunsuriGresite+1;
    $("#gresit").show();
            setTimeout(function(){
                 $("#gresit").hide();
                dificultate=dificultate-1;
               raspuns=generareNumere(dificultate);

buttonActive=1;

            } ,1500);
}
