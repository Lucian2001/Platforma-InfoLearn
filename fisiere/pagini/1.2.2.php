<div id="animation-side">
 <div class="expl-box-fi-enun" ng-fi-text="Stabilește valoarea de adevăr a expresiei de mai jos. În cazul în care crezi că expresia este adevărată apasă pe butonul adevărat. Dacă nu tastează rezultatul în caseta de lângă."></div>
    <div id="spatiuExercitii1">
<p id="id-1" class="valoare2">20</p>
          <p class="valoare2" id="id--1">/</p>
        <p class="valoare2" id="id-2">20</p>
           <p class="valoare2" id="id--2">+</p>
             <p class="valoare2" id="id-3">20</p>
           <p class="valoare2" id="id--3">-</p>
             <p class="valoare2" id="id-4">20</p>
        <p class="valoare2" id="egal">=</p>
          <p class="valoare2" id="id--5">20</p>



        </div>
          <h1 id="exercitii1"><span id="exercitiiRezolvate1">0</span>/6</h1>
    <div id="buttons">
    <button id="true">A</button>
    <button id="false"><input maxlength="4" value="" placeholder="0" id="false1"></button>
        </div>

      <img id="corect1" src="fisiere/assets/images/corect.png" >
         <img id="gresit1" src="fisiere/assets/images/gresit.png" >
    <button id="verificare" class="btn btn-primary">Verificare</button>
</div>
<div class="expl-box-fi2" ng-fi-text="   După ce ai scris o valoare, validează  răspunsul apăsând butonul Verificare. Programul îți va spune dacă ai răspuns corect iar după cateva secunde se va genera un nou exercițiu.Aplicația se va completa după ce se vor efectua 6 exerciții."></div>

<link rel="stylesheet" href="fisiere/css/expresiiAritmetice.css">
<script src="fisiere/scripts/generareNumere2.js"></script>
<script>var buttonActive=1;
    var array=new Array();
    var array1=new Array();
start();
    generareScor(6,360);
    timerCorect(1);
var raspuns,raspuns1;
 generareNumere12(array,array1);

$("#true").click(function(){

   $("#false1").prop('disabled', true);
   if (adevarat==true){
    corect2();
  }else{
       gresit2()
raspunsuriGresite=raspunsuriGresite+1;
}
})
    $("#verificare").click(function(){

             coeficientDificultate=coeficientDificultate+1;
        
       
      if (buttonActive==1){
            buttonActive=0;
        verificare();
      }
          timerCorect(1);
    })
    $(document).ready(function(){
redimensionare122();
    });

</script>
