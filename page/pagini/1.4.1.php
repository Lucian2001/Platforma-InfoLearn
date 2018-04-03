<div id="animation-side" ng-controller="mama1">
 <div class="expl-box-fi-enunt" ng-fi-text="Trage casetele din panoul Blocuri in locurile corespunzatoare pentru ca expresia sa fie corecta."></div>
<img src="page/assets/images/expresiiLogice/Imagine1.png" id="imagine">
    
        <img ng-show="visible"id="corect" src="page/assets/images/corect.png" >
         <img ng-show="visible1"id="gresit" src="page/assets/images/gresit.png" >
     <div class="expl-box-fi-exercitiu" ng-fi-text="{{enunt}}"></div>
          <h1 id="exercitii"><span >{{numarExercitii}}</span>/4</h1>
    <button id="inputButton"><input ng-model="input"id="input"></button>
        <button id="verificare" ng-click="verificare()"class="btn btn-primary">Verificare</button>
</div>


<div class="expl-box-fi2" style="color:black;"ng-fi-text="    Pentru a valida un raspuns apasa butonul Validare!"></div>

<link rel="stylesheet" href="page/css/expresiiLogice.css">
<script>$(document).ready(function(){

  redimensionare5();

})
 function redimensionare5(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1400&&height<800){ 
         
         $("#verificare").css("font-size","16px");
                   $("#verificare").css("height","13%");

     }
 }
</script>