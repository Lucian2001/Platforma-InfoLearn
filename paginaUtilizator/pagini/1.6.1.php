<style>
    .expl-box-fi-enunt{
    margin-top: 1%;
margin-left:1%;
 text-align:justify;
position: relative;
height: 20%;
width: 99%;
color:black;
  text-indent: 20px;
    
 
}
[class^="expl-box"] {
    position: relative;
   
}
    .expl-box-fi2 {
		margin-top: -5%;;
            border-style: none;
			height: 23%;
            width:95%;
             text-align: left;
             margin-left:3%;
            color:black;
         text-indent: 10px;

		}

</style>
<div id="animation-side">
  <div class="expl-box-fi-enunt" ng-fi-text="Trage casetele din panoul cu blocuri în locurile corespunzătoare pentru ca expresia să fie corectă."></div>
     
   
    <div id="spatiuExercitii">
    <p class="valoare">(</p>    
<p id="id--1" class="valoare">2</p>
             <p class="valoare" id="id--2">+</p>
             <p class="valoare" id="id--3">2</p>
             <p class="valoare" id="id--4">==</p>
             <p class="valoare" id="id--5">10</p>
        <p class="valoare">)</p>
        <p class="valoare" id="id--6">and</p>
           <p class="valoare">(</p>    
<p id="id--7" class="valoare">2</p>
             <p class="valoare" id="id--8">></p>
             <p class="valoare" id="id--9">2</p>
  
        <p class="valoare">)</p>
       
        <img id="corect" src="paginaUtilizator/assets/images/corect.png" >
         <img id="gresit" src="paginaUtilizator/assets/images/gresit.png" >
        </div>
<div id="buttons1">
    <button id="true2">A</button>
    <button id="false2">F</button>
        </div>

      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    După ce ai pus un bloc vei afla dacă ai răspuns corect sau nu. După aceea apasă butonul de mai sus pentru a genera un nou exercițiu. Aplicația va fi completă după ce ai răspuns corect la 6 itemi."></div>

<link rel="stylesheet" href="paginaUtilizator/css/structuraAlternativa1.css">

<script src="paginaUtilizator/scripts/structuraAlternativa1.js"></script>

<script> 
    var raspuns;
$(document).ready(function(){
    $("#object1").hide();
    $("#butonsmecher").hide();
})
var dificultate;
    dificultate=10;
   raspuns=generareNumere(dificultate);

    $("#true2").click(function(){
        if (raspuns==true){
            corect();
        } else{
            gresit();
        }
        
    })
        $("#false2").click(function(){
        if (raspuns!=true){
            corect();
        } else{
            gresit();
        }
        
    })
    
    function redimensionare(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1800&&height<900){
         $("#exercitii").css("float","left");
         $("#exercitii").css("margin-top","-8%");
         $("#numarIncercari").css("font-size","33px");
                  $("#spatiuExercitii").css("margin-left","4%");
     }
    }
</script>
