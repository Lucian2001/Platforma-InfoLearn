<!--https://bootsnipp.com/snippets/featured/modal-quiz-with-radio-button-->

<head>
<link rel="stylesheet" href="paginaUtilizator/css/evaluare.css">

</head>

  <body ng-app="myApp" >

  <h1 id="titluEvaluare">Evaluare</h1>


<div ng-controller="evaluare">
    

 <div class="modal-dialog" >
      <div class="modal-content">
         <div class="modal-header">
            <h3><span class="label label-warning" id="qid">{{x1}}.</span> {{intrebare}}</h3>
        </div>
        <div class="modal-body">
       

          <div class="quiz" id="quiz" data-toggle="buttons">
           <label id="1"  class="element-animation1 btn btn-lg btn-info btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>A.     {{raspuns1}}</label>
           <label id="2" class="element-animation2 btn btn-lg btn-info btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>B.     {{raspuns2}}</label>
           <label id="3" class="element-animation3 btn btn-lg btn-info btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>C.     {{raspuns3}}</label>
           <label id="4"  class="element-animation4 btn btn-lg btn-info btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>D.     {{raspuns4}}</label>
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
            <h3><span class="label label-warning" id="qid">{{y1}}.</span> {{intrebare1}}</h3>
        </div>
        <div class="modal-body">
       

          <div class="quiz" id="quiz" data-toggle="buttons">
           <label id="5" class="element-animation1 btn btn-lg btn-info btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>A.     {{raspuns5}}</label>
           <label id="6" class="element-animation2 btn btn-lg btn-info btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>B.     {{raspuns6}}</label>
           <label id="7" class="element-animation3 btn btn-lg btn-info btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>C.     {{raspuns7}}</label>
           <label id="8" class="element-animation4 btn btn-lg btn-info btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>D.     {{raspuns8}}</label>
       </div>
   </div>
   <div class="modal-footer text-muted">
    <span id="answer"></span>
</div>
</div>
</div>
  

    <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%">{{procente}}%</div>
        
           
</div>
 <button type="button" class="btn btn-warning" ng-click="resetare()">Continua</button>
</div>


      

</body>

   

<script src="paginaUtilizator/scripts/generareNumere2.js"></script>
<script>



</script>