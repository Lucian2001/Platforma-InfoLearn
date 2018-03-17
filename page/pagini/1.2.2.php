<div id="animation-side">
 <h4>&nbsp;&nbsp;Trebuie formulat un enut bun</h4>
    <div id="spatiuExercitii1">
<p id="id-1" class="valoare1">20</p>
          <p class="valoare1" id="id--1">/</p>
        <p class="valoare1" id="id-2">20</p>
           <p class="valoare1" id="id--2">+</p>
             <p class="valoare1" id="id-3">20</p>
           <p class="valoare1" id="id--3">-</p>
             <p class="valoare1" id="id-4">20</p>
        <p class="valoare1" id="egal">=</p>
          <p class="valoare1" id="id--5">20</p>

      <p id="invisibleObject">0<p>
  <p id="invisibleObject1">0<p>
          <p id="invisibleObject2">0<p>
       
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
    var nr=$("#invisibleObject1").html();
   if (nr==1){
    corect2();
   }else gresit2()
    
})
    $("#verificare").click(function(){
        var nr=$("#invisibleObject2").html();
        if (nr==1){
            corect3();
        } else
            {
                gresit3();
            }
    })
</script>