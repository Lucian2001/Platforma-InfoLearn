

<head>
<link rel="stylesheet" href="paginaVizitator/css/lectii.css">
</head>
<style>

		[class^="expl-box"] {
			text-align: center;
            position: relative;
			height: 10%;
            color:white;
			/*margin: 15px;*/
			/*border: 2px solid gray;*/
             z-index: 1;

		}

		.expl-box-fi {
			margin-left: 10px;
            border-style: none;
			height: 95%;
            width:99%;
             text-align: left;
             text-indent: 30px;
            color:black;
             z-index: 1;
		}
    .expl-box-fi1 {

            border-style: none;
			height: 7%;
            width:100%;
             text-align: left;

            color:black;
            z-index: 1;

		}

		}


		.expl-box-nr {
			height:200px; overflow-y: scroll
		}

.imagineComponentaTanc{
float:left;
margin-right: 500px;
margin-top: 10%;
margin-left:5%;
display: none;
    }


</style>
  <body ng-app="myApp" >
<div class="titlu-sectiune">
  <h1>Expresii aritmetice</h1>
</div>





<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fi" ng-fi-text="Un algoritm informatic poate conține expresii. Expresiile sunt combinații de date și operații. În acest caz, datele se mai numesc și operanzi.Între operanzi se află niște simboluri numite operatori. Un operator este un semn care leagă două valori pentru a produce un rezultat.Un operand poate fi și o expresie, iar în acest caz ea va fi delimitată de paranteze rotunde. Acestea se evaluează primele."></div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active "  id="id-121" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">Aplicație Tip I</a>
    <a class="nav-item nav-link " id="id-122" data-toggle="tab"  role="tab" aria-controls="nav-profile" aria-selected="true" ng-click="a2()">Aplicație Tip II</a>
    <a class="nav-item nav-link" id="id-123" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false" ng-click="a3()">Aplicație Tip III</a>

  </div>
</nav>
        <img id="object1" src="">

<div  ng-include src="src">



<div class="container">
  <div class="box rotate"></div>
</div>




<!--<img src="paginaVizitator/assets/images/masina.png" width="70px"  height="40px" > -->


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
<script src="paginaVizitator/scripts/script.js"></script>
<script src="paginaVizitator/scripts/loadSaves.js"></script>

<script>

$(document).ready(function(){

})

</script>