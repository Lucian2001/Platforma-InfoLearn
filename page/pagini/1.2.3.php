<div id="animation-side">
 <h4>&nbsp;&nbsp;Trebuie formulat un enut bun</h4>
    <div id="spatiuExercitii1">
<p id="id-11" class="valoare1">20</p>
          <p class="valoare1" id="id--12">/</p>
        <p class="valoare1" id="id-21">20</p>

        <p class="valoare1" id="egal">=</p>
          <p class="valoare1" id="id--5">?</p>



        </div>
          <h1 id="exercitii1"><span id="exercitiiRezolvate1">0</span>/6</h1>
    <div id="buttons">
  <button id="raspuns1"><input id="raspuns2"></button>
        </div>

      <img id="corect1" src="page/assets/images/corect.png" >
         <img id="gresit1" src="page/assets/images/gresit.png" >
    <button id="verificare1" class="btn btn-primary">Verificare</button>
</div>
<div class="expl-box-fi2" ng-fi-text="    Pentru a valida un raspuns apasa butonul Validare!"></div>
<script src="page/scripts/generareNumare3.js"></script>
<link rel="stylesheet" href="page/css/expresiiAritmetice.css">

<script>
generareNumere4();
alert(rezultat());
$("#verificare1").click(function(){
  if ($("#raspuns2").val()==rezultat()){
    corect();
  } else {
gresit();
  }
})
</script>
