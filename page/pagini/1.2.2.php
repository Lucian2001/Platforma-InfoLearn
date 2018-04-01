<div id="animation-side">
 <div class="expl-box-fi-enun" ng-fi-text="Trage casetele din panoul Blocuri in locurile corespunzatoare pentru ca expresia sa fie corecta."></div>
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
        
      <img id="corect1" src="page/assets/images/corect.png" >
         <img id="gresit1" src="page/assets/images/gresit.png" >
    <button id="verificare" class="btn btn-primary">Verificare</button>
</div>
<div class="expl-box-fi2" ng-fi-text="    Pentru a valida un raspuns apasa butonul Validare!"></div>

<link rel="stylesheet" href="page/css/expresiiAritmetice.css">
<script src="page/scripts/generareNumere2.js"></script>
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
     }
    }
</script>