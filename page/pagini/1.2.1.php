<div id="animation-side">
  <div class="expl-box-fi-enunt" ng-fi-text="Trage casetele din panoul Blocuri in locurile corespunzatoare pentru ca expresia sa fie corecta."></div>
     <div id="numarIncercari">3</div>
    <div class="expl-box-fi-incercari" id="incercari" ng-fi-text="Incercari:"></div>
   
    <div id="spatiuExercitii">
<p id="id---1" class="valoare">20</p>
        <p class="valoare" id="id---2">20</p>
        <p class="valoare" id="egal">=</p>
          <p class="valoare" id="id---3">20</p>
        <div id="droppable" class="ui-widget-header"></div>
        <img id="corect" src="page/assets/images/corect.png" >
         <img id="gresit" src="page/assets/images/gresit.png" >
        </div>

    <button id="generare" class="btn btn-primary">Generare alt exercitiu</button>
      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    Pentru a valida un raspuns apasa butonul Validare!"></div>
<p id="invisibleObject">0<p>
<p id="invisibleObject">0<p>
  <p id="invisibleObject1">0<p>
<link rel="stylesheet" href="page/css/expresiiAritmetice.css">
<script src="page/scripts/draganddrop.js"></script>
<script src="page/scripts/generareNumere.js"></script>

<script> 
var corectValue;
    var numarNumereGenerate=2;
var numarSemneGenerate=1;
var dificultateCalcul=5;
$(document).ready(function(){
redimensionare();
var semn=Math.floor((Math.random() * 5) + 1);

generareValori(numarNumereGenerate,numarSemneGenerate,dificultateCalcul,semn);
var semn1;
semn1=generareSemn(semn);
//alert(semn1);
dragAndDrop(semn1);

    $("#generare").click(function(){
var nr2=$("#invisibleObject").html();
if (nr2=="1"){
var ok=0;
  var nr4=$("#exercitiiRezolvate").html();
   var nr5=parseInt(nr4);
if (nr5==5 && nr2==1){
 // alert("done"); ok=1;
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
   url:"page/testHttp.php",
   data:"Id=" + Id ,
success:function(result)
   {
     //  alert(result);
    }

});
}
if(ok==0){
      semn=Math.floor((Math.random() * 5) + 1);  //alert("semn="+semn);
    var nr3=$("#invisibleObject1").html();
if (nr3==1)
      dificultateCalcul=dificultateCalcul+3;
     generareValori(numarNumereGenerate,numarSemneGenerate,dificultateCalcul,semn);
     semn1=generareSemn(semn);
    // alert(semn1);
     dragAndDrop(semn1);
$("#invisibleObject").html(0);
  $("#gresit").hide();
    $("#corect").hide();
      $("#numarIncercari").html("3");
}}
    })

})

    function redimensionare(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1800&&height<900){
         $("#exercitii").css("float","left");
         $("#exercitii").css("margin-top","-8%");
         $("#numarIncercari").css("font-size","33px");
     }
    }
</script>
