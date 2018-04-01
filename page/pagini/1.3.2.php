<div id="animation-side">
   <div class="expl-box-fi-enunt" ng-fi-text="Trage casetele din panoul Blocuri in locurile corespunzatoare pentru ca expresia sa fie corecta."></div>

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
      
           $("#generare4").css("margin-top","-2%");
   
    
}
}
</script>
