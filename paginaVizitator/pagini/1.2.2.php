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
    <button id="false"><input id="false1"></button>
        </div>
        
      <img id="corect1" src="paginaVizitator/assets/images/corect.png" >
         <img id="gresit1" src="paginaVizitator/assets/images/gresit.png" >
    <button id="verificare" class="btn btn-primary">Verificare</button>
</div>
<div class="expl-box-fi2" ng-fi-text="   După ce ai scris o valoare, validează  raspunsul apăsând butonul Verificare. Programul îți va spune dacă ai răspuns corect iar după cateva secunde se va genera un nou exercițiu.Aplicația se va completa după ce se vor efectua 6 exerciții."></div>

<link rel="stylesheet" href="paginaVizitator/css/expresiiAritmetice.css">
<script src="paginaVizitator/scripts/generareNumere2.js"></script>
<script>
 generareNumere();
$("#true").click(function(){
   $("#false1").prop('disabled', true);
   if (adevarat==true){
    corect2();
   }else 
       gresit2()
    
})
    $("#verificare").click(function(){
       verificare();
    })
    $(document).ready(function(){
redimensionare2();
    });
     function redimensionare2(){
        var height=$(document).height();
        var width=$(document).width(); 
       
     if (width<1400&&height<700){
         $("#verificare").css("margin-top","15%");
         $("#buttons").css("margin-top","-15%");
         $(".valoare2").css("font-size","35px");
          $("#true").css("width","15%");
          $("#false").css("width","30%");
          $("#verificare").css("width","29%");
        $("#verificare").css("height","15%");
          $("#verificare").css("margin-left","50%");
     $("#corect1").css("width","2%");
     }
    }
</script>