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
  <button id="raspuns1"><input id="raspuns2"></button>
        </div>

      <img id="corect1" src="paginaVizitator/assets/images/corect.png" >
         <img id="gresit1" src="paginaVizitator/assets/images/gresit.png" >
    <button id="verificare1" class="btn btn-primary">Verificare</button>
</div>
<div class="expl-box-fi2" ng-fi-text="   După ce ai scris o valoare, validează  raspunsul apăsând butonul Validare. Programul îți va spune dacă ai răspuns corect iar după cateva secunde se va genera un nou exercițiu.Aplicația se va completa după ce se vor efectua 6 exerciții."></div>
<script src="paginaVizitator/scripts/generareNumare3.js"></script>
<link rel="stylesheet" href="paginaVizitator/css/expresiiAritmetice.css">

<script>
    $(document).ready(function(){
redimensionare3();
    });
generareNumere4();

$("#verificare1").click(function(){
  if ($("#raspuns2").val()==rezultat()){
    corect();
  } else {
gresit();
  }
})
    function redimensionare3(){
        var height=$(document).height();
        var width=$(document).width();
     if (width>1800&&height>900){
         $("#raspuns1").css("width","99%");
         $("#raspuns1").css("margin-top","14%");
         $("#verificare1").css("width","22%");
         $("#verificare1").css("height","10%");
          $("#verificare1").css("margin-top","-7%");
     }
    }
</script>
