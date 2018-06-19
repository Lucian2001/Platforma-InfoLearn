<div id="animation-side">
   <div class="expl-box-fi-enunt" ng-fi-text="Scrie în caseta liberă un număr astfel încât expresia de mai jos să fie corectă."></div>

    <div id="spatiuExercitii">
<input class="input" id="id---1" maxlength="3" placeholder="0">
        <h1 id="semn1">></h1>
       <input class="input" id="id---2" maxlength="3" placeholder="0">

        <img id="corect" src="fisiere/assets/images/corect.png" >
         <img id="gresit" src="fisiere/assets/images/gresit.png" >
        </div>

    <button id="generare4" class="btn btn-primary">Verificare</button>

      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    După ce ai scris o valoare, validează  răspunsul apăsând butonul Validare. Programul îți va spune dacă ai răspuns corect iar după cateva secunde se va genera un nou exercițiu.Aplicația se va completa după ce se vor efectua 6 exerciții."></div>
<p id="invisibleObject">0<p>
<p id="invisibleObject">0<p>
  <p id="invisibleObject1">0<p>
<link rel="stylesheet" href="fisiere/lectii/expresiiAritmetice/expresiiAritmetice.css">
      <link rel="stylesheet" href="fisiere/lectii/operatoriRelationali/operatorirelationali.css">

<script src="fisiere/lectii/operatoriRelationali/operatoriRelationali.js"  ></script>


<script>var buttonActive=1;
generareScor(9,25);
start();
timerCorect(1);
    var numar=Math.floor((Math.random() * 6) + 1);
$(document).ready(function(){
redimensionare132();
  afisareSemn(numar)
})
    $("#generare4").click(function(){
        

        if (buttonActive==1){

         buttonActive=0;

        verificareRaspuns(numar);
        }
                timerCorect(1);
    })

</script>
