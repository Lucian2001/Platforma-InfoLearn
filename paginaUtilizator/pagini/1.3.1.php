<div id="animation-side">
  <div class="expl-box-fi-enunt" ng-fi-text="Trage casetele din panoul cu blocuri în locurile corespunzătoare pentru ca expresia sa fie corectă."></div>

    <div id="spatiuExercitii3">

        <p id="id---1" class="valoare">20</p>
        <p class="valoare" id="id---2">20</p>

        <div id="droppable" class="ui-widget-header"></div>
        <img id="corect" src="paginaUtilizator/assets/images/corect.png" >
         <img id="gresit" src="paginaUtilizator/assets/images/gresit.png" >
        </div>

    <button id="generare3" class="btn btn-primary">Generare alt exercitiu</button>
      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    După ce ai pus un bloc vei afla dacă ai răspuns corect sau nu. După aceea apasă butonul de mai sus pentru a genera un nou exercițiu. Aplicația va fi completă după ce ai răspuns corect la 6 itemi."></div>

<link rel="stylesheet" href="paginaUtilizator/css/expresiiAritmetice.css">

<script src="paginaUtilizator/scripts/draganddrop1.js"></script>
<script src="paginaUtilizator/scripts/operatoriRelationali.js"  ></script>


<script> var semn;


$(document).ready(function(){

      var randomNr1=Math.floor((Math.random() * 3) + 1);
generareNumere(randomNr1);
  semn= generareSemn(randomNr1);

    dragAndDrop(semn);

  redimensionare131();
  $("#maiMic").draggable( 'enable' );
                $("#maiMare").draggable( 'enable' );
                $("#egal").draggable( 'enable' );

})
    $("#generare3").click(function(){

         var randomNr1=Math.floor((Math.random() * 3) + 1);
generareNumere(randomNr1);
   var semn= generareSemn(randomNr1);
    dragAndDrop(semn);
    $("#gresit").hide();
     $("#corect").hide();
    raspuns=false;
    $("#maiMic").draggable( 'enable' );
                  $("#maiMare").draggable( 'enable' );
                  $("#egal").draggable( 'enable' );
    })


</script>
