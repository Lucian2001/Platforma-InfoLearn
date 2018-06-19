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
  <div class="expl-box-fi-enunt" ng-fi-text="Stabilește valoarea de adevăr a expresiei de mai jos!"></div>


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

        <img id="corect" src="fisiere/assets/images/corect.png" >
         <img id="gresit" src="fisiere/assets/images/gresit.png" >
        </div>
<div id="buttons1">
    <button id="true2">A</button>
    <button id="false2">F</button>
        </div>

      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="  Pentru a rezolva acestă aplicație trebuie sa apeși pe unul dintre cele doua butoane disponibile pentru a stabili care este valoarea de adevăr a expresiei. După ce ai apăsat butonul vei primi răspunsul și apoi se va genera un alt exercițiu."></div>

<link rel="stylesheet" href="fisiere/lectii/structuraAlternativa/structuraAlternativa1.css">

<script src="fisiere/lectii/structuraAlternativa/structuraAlternativa1.js"></script>

<script>var buttonActive=1; 
    var raspuns;

      generareScor(11,35);
start();
timerCorect(1); 
$(document).ready(function(){
  redimensionare151();
    $("#object1").hide();
    $("#butonsmecher").hide();
     $("#resetareAplicatie").hide();
})
var dificultate;
    dificultate=10;
   raspuns=generareNumere(dificultate);

    $("#true2").click(function(){
  
        
        if (buttonActive==1){
        buttonActive=0; 
        if (raspuns==true){
            corect();
            timerCorect(1);
        } else{
            gresit();
             timerCorect(1);
        }
        }
    })
        $("#false2").click(function(){
           

            if (buttonActive==1){
        buttonActive=0; 
        if (raspuns!=true){
            corect();
        timerCorect(1);
        } else{
            gresit();
             timerCorect(1);
        }
            }
    })


</script>
