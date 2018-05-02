<div id="animation-side">
  <div class="expl-box-fi-enunt" ng-fi-text="Trage casetele din panoul cu blocuri în locurile corespunzătoare pentru ca expresia sa fie corectă."></div>

    <div id="spatiuExercitii3">

        <p id="id---1" class="valoare">20</p>
        <p class="valoare" id="id---2">20</p>

        <div id="droppable" class="ui-widget-header"></div>
        <img id="corect" src="paginaVizitator/assets/images/corect.png" >
         <img id="gresit" src="paginaVizitator/assets/images/gresit.png" >
        </div>

    <button id="generare3" class="btn btn-primary">Generare alt exercitiu</button>
      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    După ce ai pus un bloc vei afla dacă ai răspuns corect sau nu. După aceea apasă butonul de mai sus pentru a genera un nou exercițiu. Aplicația va fi completă după ce ai răspuns corect la 6 itemi."></div>

<link rel="stylesheet" href="paginaVizitator/css/expresiiAritmetice.css">

<script src="paginaVizitator/scripts/draganddrop1.js"></script>
<script src="paginaVizitator/scripts/operatoriRelationali.js"  ></script>


<script>
$(document).ready(function(){
      var randomNr1=Math.floor((Math.random() * 3) + 1);
generareNumere(randomNr1);
   var semn= generareSemn(randomNr1);
    dragAndDrop(semn);
  redimensionare4();

})
    $("#generare3").click(function(){
      
         var randomNr1=Math.floor((Math.random() * 3) + 1);
generareNumere(randomNr1);
   var semn= generareSemn(randomNr1);
    dragAndDrop(semn);
    $("#gresit").hide();
     $("#corect").hide();
    raspuns=false;
    })

     function redimensionare4(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1500&&height<800){ 
         $("#droppable").css("margin-left","19%");
    
         $("#exercitii").css("float","left");
          $("#exercitii").css("margin-top","-10%");
                                 $("#exercitii").css("margin-left","2%");
         $("#numarIncercari").css("font-size","33px");
           $("#generare3").css("font-size","18px");
         $("#id---1").css("margin-left","1%");
         $("#id---2").css("margin-left","23%");
     
           $(".valoare").css("margin-top","-6%");
     }}
</script>
