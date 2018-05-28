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
 <div class="expl-box-fi-enunt" ng-fi-text="Scrie în caseta de mai jos răspunsul corect care respectă structura de mai jos!"></div>
    <div id="spatiuExercitii">
<p  class="valoare">Daca</p>
           <p class="valoare" >(</p>
            <p class="valoare" id="id--1">5</p>
             <p class="valoare" id="id--3">></p>
              <p class="valoare" id="id--2">6</p>
         <p class="valoare" >)</p>
          <p class="valoare" >atunci</p>



        </div>
      <div id="spatiuExercitii1">
<p  class="valoare">x=</p>

            <p class="valoare" id="id--4">5</p>
             <p class="valoare" id="id--5">></p>
              <p class="valoare" id="id--6">6</p>




        </div>
    <div id="spatiuExercitii1">
<p  class="valoare">altfel</p>
</div>
        <div id="spatiuExercitii1">
<p  class="valoare">x=</p>

            <p class="valoare" id="id--7">5</p>
             <p class="valoare" id="id--8">></p>
              <p class="valoare" id="id--9">6</p>




        </div>

    <div id="buttons1">
    <p id="inputText">x=<input id="input" value="" placeholder="0"></p>
        </div>

      <img id="corect" src="fisiere/assets/images/corect.png" >
         <img id="gresit" src="fisiere/assets/images/gresit.png" >
    <button id="generare" class="btn btn-primary">Verificare</button>
    <h1 id="exercitii1"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="   După ce ai scris o valoare, validează  răspunsul apăsând butonul Verificare. Programul îți va spune dacă ai răspuns corect iar după cateva secunde se va genera un nou exercițiu.Aplicația se va completa după ce se vor efectua 6 exerciții."></div>

<link rel="stylesheet" href="fisiere/css/structuraAlternativa.css">
<script src="fisiere/scripts/structuraAlternativa3.js"></script>

<script>
      generareScor(13,53);
start();
timerCorect(1);
 var dificultate=10;   var raspuns;var buttonActive=1;
    $(document).ready(function(){

       raspuns=generareNumere(dificultate);

        $("#object1").hide();
    $("#butonsmecher").hide();
         $("#resetareAplicatie").hide();
redimensionare153();
    });
    $("#generare").click(function(){
     

if (buttonActive==1){
    buttonActive=0;
  if ($("#input").val()!=parseInt($("#input").val()).toString()){
gresit();
$("#input").val("");

  } else
        if ($("#input").val()==raspuns){
            corect();
$("#input").val("");
        } else{
            gresit();
            $("#input").val("");
        }
}
                timerCorect(1);
    })

</script>
