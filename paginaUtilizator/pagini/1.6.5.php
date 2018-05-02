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
        <img id="corect" src="paginaUtilizator/assets/images/corect.png" >
         <img id="gresit" src="paginaUtilizator/assets/images/gresit.png" >
        </div>

    <button id="generare" class="btn btn-primary">Generare alt exercitiu</button>
      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    După ce ai pus un bloc vei afla dacă ai răspuns corect sau nu. După aceea apasă butonul de mai sus pentru a genera un nou exercițiu. Aplicația va fi completă după ce ai răspuns corect la 6 itemi."></div>
<p id="invisibleObject">0<p>
<p id="invisibleObject">0<p>
  <p id="invisibleObject1">0<p>
<link rel="stylesheet" href="paginaUtilizator/css/expresiiAritmetice.css">
<script src="paginaUtilizator/scripts/draganddrop.js"></script>
<script src="paginaUtilizator/scripts/generareNumere.js"></script>

<script> 


    function redimensionare(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1800&&height<900){
         $("#exercitii").css("float","left");
         $("#exercitii").css("margin-top","-8%");
         $("#numarIncercari").css("font-size","33px");
                  $("#spatiuExercitii").css("margin-left","4%");
     }
    }
</script>
