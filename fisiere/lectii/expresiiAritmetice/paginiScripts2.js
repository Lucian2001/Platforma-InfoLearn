  if ( window.location.href=="https://infolearn.ml/index.php"){
                $("#continutInfo").show();
            } else{
                    $("#continutInfo").hide();
            }
function aplicatia1(){
           
generareScor(5,30);
start();
timerCorect(1);
    buttonActive=1;
    var semn1;
    

var corectValue;
var numarNumereGenerate=2;
var numarSemneGenerate=1;
var dificultateCalcul=5;
$(document).ready(function(){
redimensionare121();
var semn=Math.floor((Math.random() * 5) + 1);
 
generareValori(numarNumereGenerate,numarSemneGenerate,dificultateCalcul,semn);

semn1=generareSemn(semn);
 fixOperatiiMultipleBug($("#id---1").html(),$("#id---2").html(),$("#id---3").html(),semn1);

dragAndDrop(semn1);

    $("#generare").click(function(){
       coeficientDificultate=coeficientDificultate+1;

        if (buttonActive==1){
            buttonActive=0;
           if(parseInt($("#numarIncercari").html())<3 || parseInt($("#invisibleObject1").html())==1 ){ 
var nr2=$("#invisibleObject").html();
if (nr2=="1"){
var ok=0;
  var nr4=$("#exercitiiRezolvate").html();
   var nr5=parseInt(nr4);
if (nr5==6 && nr2==1){
 // alert("done"); ok=1;
  $("#exercitiiRezolvate").html(6);
    timpOver=0;
    creereScor(timp,raspunsuriGresite,4,coeficientCorect,5); 
succes();
    generareScor(5,30);
}
if(ok==0){
      semn=Math.floor((Math.random() * 5) + 1);  //alert("semn="+semn);
    var nr3=$("#invisibleObject1").html(); 
if (nr3==1)
      dificultateCalcul=dificultateCalcul+3; $("#slash").show();$("#multiply").show();$("#divide").show();$("#minus").show();$("#plus").show();
     generareValori(numarNumereGenerate,numarSemneGenerate,dificultateCalcul,semn);
     semn1=generareSemn(semn);
fixOperatiiMultipleBug($("#id---1").html(),$("#id---2").html(),$("#id---3").html(),semn1);

     dragAndDrop(semn1);
$("#invisibleObject").html(0);
  $("#gresit").hide();
    $("#corect").hide();
      $("#numarIncercari").html("3");
    
            $("#plus").draggable( 'enable' );
               $("#minus").draggable( 'enable' );
               $("#divide").draggable( 'enable' );
               $("#multiply").draggable( 'enable' );
               $("#slash").draggable( 'enable' );
    $( "#plus,#minus,#divide,#multiply,#slash").draggable({ revert: "invalid" });
}}}
                timerCorect(1);
    }
    })

})

}



var buttonActive122=1;
function aplicatia2(){
  
    var array=new Array();
    var array1=new Array();
start();
    generareScor(6,360);
    timerCorect(1);
var raspuns,raspuns1;
 eroare=generareNumere12(array,array1);
    
 if ($("#id--5").html() ==""){
    
do{ 
eroare=generareNumere12(array,array1);
} while($("#id--5").html() =="" );
}
    
    
$("#true").click(function(){

   $("#false1").prop('disabled', true);
   if (adevarat==true){
    corect2();
  }else{
       gresit2()
raspunsuriGresite=raspunsuriGresite+1;
}
})
    $("#verificare").click(function(){

             coeficientDificultate=coeficientDificultate+1;
        
       
      if (buttonActive122==1){
            buttonActive122=0;
        verificare();
      }
          timerCorect(1);
    })
    $(document).ready(function(){
redimensionare122();
    });

}
function aplicatia3(){
    var buttonActive=1;
var array=new Array();
var aray=1;
  generareScor(7,40);
start();
timerCorect(1);
    $(document).ready(function(){
redimensionare123();
    });
generareNumere4(array,aray);
raspuns=rezultat23();

$("#verificare1").click(function(){
 
  
    if (buttonActive==1){
            buttonActive=0;


  if ($("#raspuns2").val()==raspuns){
    corect();
  } else {
gresit();
  }}
      timerCorect(1);
})
}