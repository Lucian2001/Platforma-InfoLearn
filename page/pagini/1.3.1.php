<div id="animation-side">
  <h4>&nbsp;&nbsp;Trage casetele din panoul Blocuri in locurile corespunzatoare pentru ca expresia sa fie corecta.</h4>
  
    <div id="spatiuExercitii">
<p id="id---1" class="valoare">20</p>
        <p class="valoare" id="id---2">20</p>
       
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
      <link rel="stylesheet" href="page/css/operatorirelationali.css">
<script src="page/scripts/draganddrop1.js"></script>
<script src="page/scripts/operatoriRelationali.js"  ></script>    


<script> 
$(document).ready(function(){
      var randomNr1=Math.floor((Math.random() * 3) + 1);
generareNumere(randomNr1);
   var semn= generareSemn(randomNr1);
    dragAndDrop(semn);      
    alert(semn);
    
})
    $("#generare").click(function(){
         var randomNr1=Math.floor((Math.random() * 3) + 1);
generareNumere(randomNr1);
   var semn= generareSemn(randomNr1);
    dragAndDrop(semn);      
    $("#gresit").hide();
     $("#corect").hide();   
    raspuns=false;
         alert(semn);
    })

</script>
