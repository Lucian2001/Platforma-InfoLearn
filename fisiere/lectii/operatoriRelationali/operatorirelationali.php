

<head>
<link rel="stylesheet" href="fisiere/css/lectii.css">
    <link rel="stylesheet" href="fisiere/lectii/lectii.css">
</head>

  <body ng-app="myApp" >
<div class="titlu-sectiune">
  <h1 class="titluCapitol">Operatori relaționali</h1>
</div>

<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fia">Operatorii relaționali utilizați în scrierea algoritmilor sunt aceiași ca la matematică, având doar mici modificări ale modului de scriere datorită faptului că limbajul de programare nu conține unele dintre semnele matematice.</div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active tabAplicatie1 "  id="id-131" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">Aplicații Tip I</a>
    <a class="nav-item nav-link tabAplicatie1" id="id-132" data-toggle="tab"  role="tab" aria-controls="nav-profile" aria-selected="true" ng-click="a2()">Aplicații Tip II</a>
   

  </div>
</nav>
        <img id="object1" src="">

<div  ng-include src="src">



<div class="container">
  <div class="box rotate"></div>
</div>




<!--<img src="fisiere/assets/images/masina.png" width="70px"  height="40px" > -->


  <!--

      -->

        <div>
       <!-- <div class="alert alert-danger">{{error}}</div>  -->

      </div>

    </div>
      
          
   </div>

    <div id="code-aplicatie" >

     <div id="next_and_previous1" ng-controller="pagini">
    <a class="btn btn-primary"  role="button" id="Previous" ng-click="previous1()" >Înapoi</a>
    <a class="btn btn-primary"  role="button" id="Next " ng-click="next1()" >Înainte</a>

    </div>
<div ng-include src="codeSrc"></div>
    </div>
<div  ng-include src="blocuriSrc">
</div>

</div>
</div>


</body>
<script src="fisiere/lectii/algoritmul/script.js"></script>
<script src="fisiere/scripts/loadSaves.js"></script>
<script src="fisiere/lectii/operatoriRelationali/paginiScripts3.js"></script>

<script>
      if ( window.location.href=="https://infolearn.ml/index.php"){
                $("#continutInfo").show();
            } else{
                    $("#continutInfo").hide();
            }
loadsaves(progresul);
$(".expl-box-fi").css("height","95%");
</script>
