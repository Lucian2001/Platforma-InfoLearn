<div id="animation-side">
  <div class="expl-box-fi-enunt" ng-fi-text="Trage casetele din panoul Blocuri in locurile corespunzatoare pentru ca expresia sa fie corecta."></div>

    <div id="spatiuExercitii3">

        <p id="id---1" class="valoare">20</p>
        <p class="valoare" id="id---2">20</p>

        <div id="droppable" class="ui-widget-header"></div>
        <img id="corect" src="page/assets/images/corect.png" >
         <img id="gresit" src="page/assets/images/gresit.png" >
        </div>

    <button id="generare3" class="btn btn-primary">Generare alt exercitiu</button>
      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    Pentru a valida un raspuns apasa butonul Validare!"></div>
<p id="invisibleObject">0<p>
<p id="invisibleObject">0<p>
  <p id="invisibleObject1">0<p>
<link rel="stylesheet" href="page/css/expresiiAritmetice.css">

<script src="page/scripts/draganddrop1.js"></script>
<script src="page/scripts/operatoriRelationali.js"  ></script>


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
         $("#id---2").css("margin-left","21%");
           $(".valoare").css("margin-top","-6%");
     }}
</script>
