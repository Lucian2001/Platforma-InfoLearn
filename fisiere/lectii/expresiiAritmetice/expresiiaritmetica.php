

<head>
<link rel="stylesheet" href="fisiere/css/lectii.css">
     <link rel="stylesheet" href="fisiere/lectii/lectii.css">
</head>

  <body ng-app="myApp" >
<div class="titlu-sectiune">
  <h1 class="titluCapitol">Expresii aritmetice</h1>
</div>





<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fi" ng-fi-text="Un algoritm informatic poate conține expresii. Expresiile sunt combinații de date și operații. În acest caz, datele se mai numesc și operanzi.Între operanzi se află niște simboluri numite operatori. Un operator este un semn care leagă două valori pentru a produce un rezultat.Un operand poate fi și o expresie, iar în acest caz ea va fi delimitată de paranteze rotunde. Acestea se evaluează primele."></div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs tabAplicatie1" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active "  id="id-121" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">Aplicație Tip I</a>
    <a class="nav-item nav-link tabAplicatie1" id="id-122" data-toggle="tab"  role="tab" aria-controls="nav-profile" aria-selected="true" ng-click="a2()">Aplicație Tip II</a>
    <a class="nav-item nav-link tabAplicatie1" id="id-123" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false" ng-click="a3()">Aplicație Tip III</a>

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
    <a class="btn btn-primary"  role="button" id="Previous" ng-click="previous1()" >Inapoi</a>
    <a class="btn btn-primary"  role="button" id="Next " ng-click="next1()" style="width:50%;text-indent-10px;" >Inainte</a>

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
<script src="fisiere/lectii/expresiiAritmetice/paginiScripts2.js"></script>
<script>
    $(".expl-box-fi").css("height","95%");
loadsaves(progresul);
</script>
