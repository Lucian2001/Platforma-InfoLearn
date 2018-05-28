<!--https://bootsnipp.com/snippets/featured/modal-quiz-with-radio-button-->

<head>
<link rel="stylesheet" href="fisiere/css/evaluare.css">

</head>

  <body ng-app="myApp" >

  <h1 id="titluEvaluare">Evaluare</h1>


<div ng-controller="evaluare">

<div id="evaluareEnding" >
    
<h1 id="rezultat">Ai obținut {{punctajShow}} de puncte.</h1>
   <h2 id="titluIntrebari">Întrebări</h2> 
<h2 id="titluRaspunsuri">Răspunsuri</h2>
    
<div class="container">
  <div id="#rowEvaluare"class="row" ng-repeat="x in intrebariSiRaspunsuri">
    <div class="col-sm coloana1" ng-style="{'background-color':($index===x.corect12-1 ?'#ffd1d1':'#d1ffdd'),'border-color':($index===x.corect12-1 ?'#d84747':'#24a53a')}">
      {{x.numar1234}} {{x.intrebare2}}
    </div>
    <div class="col-sm coloana2"ng-style="{'background-color':($index===x.corect12-1 ?'#ffd1d1':'#d1ffdd'),'border-color':($index===x.corect12-1 ?'#d84747':'#24a53a')}" >
       {{ x.raspuns12 }}
    </div>
  </div>
    
</div>
<button id="reloadTest" type="button" class="btn btn-warning">Rezolvă alt test!</button>
    </div>



 <div class="modal-dialog" >
      <div class="modal-content">
         <div class="modal-header">
            <h3 class="intrebare"><span class="label label-warning" id="qid">{{x1}}.</span> {{intrebare}}</h3>
        </div>
        <div class="modal-body">


          <div class="quiz" id="quiz" data-toggle="buttons">
           <label id="1"  class="element-animation1 btn btn-lg btn-info btn-block raspuns"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>A.     {{raspuns1}}</label>
           <label id="2" class="element-animation2 btn btn-lg btn-info btn-block raspuns"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>B.     {{raspuns2}}</label>
           <label id="3" class="element-animation3 btn btn-lg btn-info btn-block raspuns"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>C.     {{raspuns3}}</label>
           <label id="4"  class="element-animation4 btn btn-lg btn-info btn-block raspuns"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>D.     {{raspuns4}}</label>
       </div>
   </div>
   <div class="modal-footer text-muted">
    <span id="answer"></span>
</div>
</div>
</div>
     <div class="modal-dialog" >
      <div class="modal-content">
         <div class="modal-header">
            <h3 class="intrebare"><span class="label label-warning" id="qid">{{y1}}.</span> {{intrebare1}}</h3>
        </div>
        <div class="modal-body">


          <div class="quiz" id="quiz" data-toggle="buttons">
           <label id="5" class="element-animation1 btn btn-lg btn-info btn-block raspuns"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>A.     {{raspuns5}}</label>
           <label id="6" class="element-animation2 btn btn-lg btn-info btn-block raspuns"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>B.     {{raspuns6}}</label>
           <label id="7" class="element-animation3 btn btn-lg btn-info btn-block raspuns"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>C.     {{raspuns7}}</label>
           <label id="8" class="element-animation4 btn btn-lg btn-info btn-block raspuns"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>D.     {{raspuns8}}</label>
       </div>
   </div>
   <div class="modal-footer text-muted">
    <span id="answer"></span>
</div>
</div>
</div>


    <div class="progress" id="evaluareProgres">
  <div id="progresEvaluare"class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%">{{procente}}%</div>


</div>
 <button type="button" id="continua"class="btn btn-warning" ng-click="resetare()">Continua</button>
</div>



</body>



<script src="fisiere/scripts/generareNumere2.js"></script>
<script src="fisiere/scripts/generareNumare3.js"></script>
<script src="fisiere/scripts/structuraAlternativa1.js"></script>

<script>
redimensionareEvaluare();
$("#scorePanel").hide();
$("#reloadTest").click(function(){
    
    location.reload();
})
</script>
