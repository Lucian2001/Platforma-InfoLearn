<div id="animation-side">
   <div class="expl-box-fi-enun" ng-fi-text="Scrie în caseta de mai jos răspunsul corespunzător următoarelor operații. "></div>
    <div id="spatiuExercitii1">
<p id="id-11" class="valoare1">20</p>
          <p class="valoare1" id="id--12">/</p>
        <p class="valoare1" id="id-21">20</p>

        <p class="valoare1" id="egal">=</p>
          <p class="valoare1" id="id--5">?</p>



        </div>
          <h1 id="exercitii1"><span id="exercitiiRezolvate1">0</span>/6</h1>
    <div id="buttons">
  <button id="raspuns1" style="width:30%;"><input id="raspuns2" value="0" maxlength="3"></button>
        </div>

      <img id="corect1" src="paginaUtilizator/assets/images/corect.png" >
         <img id="gresit1" src="paginaUtilizator/assets/images/gresit.png" >
    <button id="verificare1" class="btn btn-primary">Verificare</button>
</div>
<div class="expl-box-fi2" ng-fi-text="   După ce ai scris o valoare, validează  raspunsul apăsând butonul Validare. Programul îți va spune dacă ai răspuns corect iar după cateva secunde se va genera un nou exercițiu.Aplicația se va completa după ce se vor efectua 6 exerciții."></div>
<script src="paginaUtilizator/scripts/generareNumare3.js"></script>
<link rel="stylesheet" href="paginaUtilizator/css/expresiiAritmetice.css">

<script>var buttonActive=1;
var array=new Array();
var aray=1;

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
})

</script>
