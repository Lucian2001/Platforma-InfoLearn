<div id="animation-side">
   <div class="expl-box-fi-enunt" ng-fi-text="Scrie în caseta liberă un număr astfel încât expresia de mai jos să fie corectă."></div>

    <div id="spatiuExercitii">
<input class="input" id="id---1" >
        <h1 id="semn1">></h1>
       <input class="input" id="id---2" >

        <img id="corect" src="page/assets/images/corect.png" >
         <img id="gresit" src="page/assets/images/gresit.png" >
        </div>

    <button id="generare4" class="btn btn-primary">Verificare</button>

      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    După ce ai scris o valoare, validează  raspunsul apăsând butonul Validare. Programul îți va spune dacă ai răspuns corect iar după cateva secunde se va genera un nou exercițiu.Aplicația se va completa după ce se vor efectua 6 exerciții."></div>
<p id="invisibleObject">0<p>
<p id="invisibleObject">0<p>
  <p id="invisibleObject1">0<p>
<link rel="stylesheet" href="page/css/expresiiAritmetice.css">
      <link rel="stylesheet" href="page/css/operatorirelationali.css">
<script src="page/scripts/draganddrop1.js"></script>
<script src="page/scripts/operatoriRelationali.js"  ></script>


<script>    var numar=Math.floor((Math.random() * 6) + 1);
$(document).ready(function(){
redimensionare5();
    afisareSemn(numar);
})
    $("#generare4").click(function(){
        verificareRaspuns(numar);

    })
function redimensionare5(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1500&&height<800){ 

    
      
         $("#semn1").css("margin-top","-4%");                        
         $("#exercitii").css("margin-top","2%");
     
           $("#generare4").css("font-size","18px");
         $("#id---1").css("margin-left","1%");
      
           $("#generare4").css("margin-top","-9%");
         $(".input").css("font-size","32px");
     }
if(width<1700&&height<900){
      $("#semn1").css("margin-top","-2%");                        
         $("#exercitii").css("margin-top","2%");
     
           $("#generare4").css("font-size","22px");
         $("#id---1").css("margin-left","1%");
      
           $("#generare4").css("margin-top","-6%");
   $(".expl-box-fi2 ").css("height","24%");
    
}
}
</script>
