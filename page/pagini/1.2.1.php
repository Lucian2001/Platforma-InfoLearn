<div id="animation-side">
  <h4>&nbsp;&nbsp;Trage casetele din panoul Blocuri in locurile corespunzatoare pentru ca expresia sa fie corecta.</h4>
    <h3 id="incercari">Incercari:<span id="numarIncercari">3</span></h3>
    <div id="spatiuExercitii">
<p id="id---1" class="valoare">2</p>
        <p class="valoare" id="id---2">2</p>
        <p class="valoare" id="egal">=</p>
          <p class="valoare" id="id---3">2</p>
        <div id="droppable" class="ui-widget-header"></div>
        <img id="corect" src="page/assets/images/corect.png" >  
         <img id="gresit" src="page/assets/images/gresit.png" >  
        </div>

    <button id="generare" class="btn btn-primary">Generare alt exercitiu</button>
      <h1 id="exercitii"><span id="exercitiiRezolvate">0</span>/6</h1>
</div>
<div class="expl-box-fi2" ng-fi-text="    Pentru a valida un raspuns apasa butonul Validare!"></div>

<style>
    #id---2{
        margin-left: 20%;
    }
    .valoare{
        font-size:70px;
        margin-right: 0px;
        float: left;
        margin-top: -4%;
    }
    .expl-box-fi2 {
		margin-top: -5%;;
            border-style: none;
			height: 18%;
            width:70%;
             text-align: left;
             margin-left:3%;
            color:black;
         text-indent: 10px;

		}
    #droppable{
        width: 13%;
        height: 83%;
        margin-left: 10%;

    }
    #incercari{
text-align: right;
        margin-right: 4%;
    }
    #spatiuExercitii{
margin-top: 2%;
        width: 100%;
    height:20%;

        margin-left: 20%;
    }
    #generare{
        margin-left: 57%;
        margin-top: 7%;
        width: 40%;
        height: 12%;
        font-size: 20px;
    }
    #exercitii{
        margin-top: -5%;
        margin-left: 5%;
    }
    #corect{
        display: none;
        height:95%;
        width: 15%;
        float:left;
        margin-left: 9%;
        margin-top: -10%;
    }
    #gresit{
        display: none;
        height:95%;
        width: 15%;
        float:left;
        margin-left: 9%;
        margin-top: -10%;
    }
</style>
<script src="page/scripts/draganddrop.js"></script>
<script src="page/scripts/generareNumere.js"></script>

<script>
$(document).ready(function(){
var corectValue;
    var numarNumereGenerate=2;
var numarSemneGenerate=1;
var dificultateCalcul=5;    
var semn=Math.floor((Math.random() * 2) + 1);
 
generareValori(numarNumereGenerate,numarSemneGenerate,dificultateCalcul,semn);
var semn1;
semn1=generareSemn(semn);    
alert(semn1);
dragAndDrop(semn1);
    $("#validare").click(function(){
        $( "#plus,#minus,#divide,#multiply,#slash").draggable({ revert: "valid" });
    })

})
    
</script>
