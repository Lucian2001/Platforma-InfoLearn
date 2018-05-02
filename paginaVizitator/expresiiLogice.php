

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
  <h1>Expresii logice</h1>
</div>





<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fi" ng-fi-text="  În descrierea algoritmilor pot să apară și expresii logice la care se evaluează valoarea lor de adevăr (dacă sunt adevărate sau false). Aceste expresii sunt formate din propoziții numite în informatică propoziții logice. Când avem expresii logice formate din alte expresii simple legate prin operatorii logici, evaluarea expresiei logice se realizează conform unor reguli care sunt expuse in tabelele de mai jos.  "></div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active "  id="id-121" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">Aplicația 1</a>
   

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
<script src="paginaVizitator/scripts/script.js"></script>
<script src="paginaVizitator/scripts/loadSaves.js"></script>

<script>

$(document).ready(function(){


})

</script>
