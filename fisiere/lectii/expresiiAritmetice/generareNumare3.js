var array=new Array();
var aray=1;
function generareNumere4(array,aray){
  var numar=Math.floor((Math.random() * 8) + 1);
  var numar1=Math.floor((Math.random() * 6) + 1);
  var numar3=Math.floor((Math.random() * 100) + 1);
 var numar4=Math.floor((Math.random() * 4) + 1);
 if (numar4>2){
   $("#id--12").html("/");

 } else{

   $("#id--12").html("%");
 }
  $("#id-11").html(numar3);
  array[1]=numar3;
   if (numar>2){
     if (numar1>2){
         var numar3=Math.floor((Math.random() * 100) + 1);
     $("#id-21").html(10);
array[2]=10;
   }
     else {
         var numar3=Math.floor((Math.random() * 1000) + 1);
array[2]=100;
        $("#id-21").html(100);
     }
   }
   else {
     array[2]=100;
     var numar2=Math.floor((Math.random() * 100) + 1);
       $("#id-21").html(100);
   }
}
function rezultat23(){
  a=$("#id-11").html();
  b=$("#id-21").html();
  c=$("#id--12").html();
if (c=="/"){
  return Math.floor(a/b);
} else {
  return a%b;
}

}

function gresit(){
     timp1=-1;
    raspunsuriGresite=raspunsuriGresite+1;
  $("#gresit1").show();
  eroareRezultat("Răspunsul corect era"+" "+raspuns);
  setTimeout(function(){
        generareNumere4(array,aray);
        raspuns=rezultat23();
      $("#gresit1").hide();
 $("#raspuns2").val("");
buttonActive1=1;
  } ,1500);


}

function corect(){
      coeficientCorect=coeficientCorect+timp1;
    
    timp1=-1;
  $("#corect1").show();
  setTimeout(function(){
        generareNumere4(array,aray);
        raspuns=rezultat23();
      $("#corect1").hide();
buttonActive1=1;
      $("#raspuns2").val("");

  } ,1500);
  var nr=$("#exercitiiRezolvate1").html();
  var nr1=parseInt(nr);
if (nr1>=0 && nr1<=5){
 nr1++;
 $("#exercitiiRezolvate1").html(nr1);
}
if (nr1==6){
   $("#exercitiiRezolvate").html(6);
succes(); timpOver=0;
      creereScor(timp,raspunsuriGresite,1,coeficientCorect,7); 
    generareScor(7,40);
}
}
