

<head>
<link rel="stylesheet" href="fisiere/css/lectii.css">
    <link rel="stylesheet" href="fisiere/lectii/lectii.css">
</head>

  <body ng-app="myApp" >
<div class="titlu-sectiune">
  <h1 class="titluCapitol">Expresii logice</h1>
</div>





<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fi" ng-fi-text="  În descrierea algoritmilor pot să apară și expresii logice la care se evaluează valoarea lor de adevăr (dacă sunt adevărate sau false). Aceste expresii sunt formate din propoziții numite în informatică propoziții logice. Când avem expresii logice formate din alte expresii simple legate prin operatorii logici, evaluarea expresiei logice se realizează conform unor reguli care sunt expuse in tabelele de mai jos.  "></div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs tabAplicatie1" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active "  id="id-141" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">Aplicația 1</a>


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
<div id="mama" ng-include src="codeSrc"></div>
    </div>
<div  ng-include src="blocuriSrc">
</div>

</div>
</div>


</body>
<script src="fisiere/lectii/algoritmul/script.js"></script>
<script src="fisiere/scripts/loadSaves.js"></script>
<script src="fisiere/lectii/operatoriLogici/paginiScripts4.js"></script>
<script>

		loadsaves(progresul);
 $(".expl-box-fi").css("height","95%");

</script>
