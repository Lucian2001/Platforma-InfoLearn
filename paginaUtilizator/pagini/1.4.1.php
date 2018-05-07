<body ng-app=myApp>
<div id="animation-side"  ng-controller="expresiiLogice">
 <div class="expl-box-fi-enunt" ng-fi-text="Uitându-te la imagine de mai jos, completează spațiile punctate cu o expresie logică astfel încat enunțul să exprime un adevăr/fals."></div>
<img src="paginaUtilizator/assets/images/expresiiLogice/Imagine1.png" id="imagine">

        <img ng-show="visible"id="corect" src="paginaUtilizator/assets/images/corect.png" >
         <img ng-show="visible1"id="gresit" src="paginaUtilizator/assets/images/gresit.png" >
     <div class="expl-box-fi-exercitiu" ng-fi-text="{{enunt}}"></div>
          <h1 id="exercitii"><span >{{numarExercitii}}</span>/4</h1>
    <button id="inputButton"><input ng-model="input"id="input" maxlength="3"></button>
        <button id="verificare" ng-click="verificare()"class="btn btn-primary">Verificare</button>
</div>


<div class="expl-box-fi2" style="color:black;text-align:left;height:25%;margin-top:-5%;margin-left:1%;text-indent:30px;"ng-fi-text="   Răspunsul se scrie în caseta de mai sus. După ce ai scris un raspuns apasă butonul ”Verificare” pentru a vedea dacă ai răspuns corect. Exercițiul este complet când ai răspuns corect la 4 itemi."></div>
</body>
<link rel="stylesheet" href="paginaUtilizator/css/expresiiLogice.css">
<script>$(document).ready(function(){

  redimensionare141();

})

</script>
