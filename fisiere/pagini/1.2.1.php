<div id="animation-side">
  <div class="expl-box-fi-enunt" ng-fi-text="Trage casetele din panoul cu blocuri în locurile corespunzătoare pentru ca expresia să fie corectă."></div>
     <div id="numarIncercari">3</div>
    <div class="expl-box-fi-incercari" id="incercari" ng-fi-text="Încercari:"></div>

    <div id="spatiuExercitii">
<p id="id---1" class="valoare">20</p>
        <p class="valoare" id="id---2">20</p>
        <p class="valoare" id="egal">=</p>
          <p class="valoare" id="id---3">20</p>
        <div id="droppable" class="ui-widget-header"></div>
        <img id="corect" src="fisiere/assets/images/corect.png" >
         <img id="gresit" src="fisiere/assets/images/gresit.png" >
        </div>

    <button id="generare" class="btn btn-primary">Generare alt exercitiu</button>
      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    După ce ai pus un bloc vei afla dacă ai răspuns corect sau nu. După aceea apasă butonul de mai sus pentru a genera un nou exercițiu. Aplicația va fi completă după ce ai răspuns corect la 6 itemi."></div>
<p id="invisibleObject">0<p>
<p id="invisibleObject">0<p>
  <p id="invisibleObject1">0<p>
<link rel="stylesheet" href="fisiere/css/expresiiAritmetice.css">
<script src="fisiere/scripts/draganddrop.js"></script>
<script src="fisiere/scripts/generareNumere.js"></script>

<script>
start();
timerCorect(1);
    buttonActive=1;
    var semn1;
    dragAndDrop(semn1);

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
        timerCorect(1);
        if (buttonActive==1){
            buttonActive=0;
            $("#plus").draggable( 'enable' );
               $("#minus").draggable( 'enable' );
               $("#divide").draggable( 'enable' );
               $("#multiply").draggable( 'enable' );
               $("#slash").draggable( 'enable' );
var nr2=$("#invisibleObject").html();
if (nr2=="1"){
var ok=0;
  var nr4=$("#exercitiiRezolvate").html();
   var nr5=parseInt(nr4);
if (nr5==6 && nr2==1){
 // alert("done"); ok=1;
  $("#exercitiiRezolvate").html(6);
    creereScor(timp,raspunsuriGresite,6,Math.round( (coeficientCorect/6) * 10 ) / 10,5); 
succes();
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
}}}
    })

})
$("#plus").draggable( 'enable' );
   $("#minus").draggable( 'enable' );
   $("#divide").draggable( 'enable' );
   $("#multiply").draggable( 'enable' );
   $("#slash").draggable( 'enable' );

</script>
