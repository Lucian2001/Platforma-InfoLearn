<div id="animation-side">
  <h4>&nbsp;&nbsp;Trage casetele din panoul Blocuri in locurile corespunzatoare pentru ca expresia sa fie corecta.</h4>

    <div id="spatiuExercitii">
<input class="input" id="id---1" >
        <h1 id="semn1">></h1>
       <input class="input" id="id---2" >

        <img id="corect" src="page/assets/images/corect.png" >
         <img id="gresit" src="page/assets/images/gresit.png" >
        </div>

    <button id="generare" class="btn btn-primary">Verificare</button>

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


<script>    var numar=Math.floor((Math.random() * 6) + 1);
$(document).ready(function(){

    afisareSemn(numar);
})
    $("#generare").click(function(){
        verificareRaspuns(numar);

    })

</script>
