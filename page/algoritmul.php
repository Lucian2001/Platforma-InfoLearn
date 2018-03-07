<?php include ("meniu.php");
include ("functions.php");
include ("loadTanc.php");
?>

<head>
<link rel="stylesheet" href="page/lectii.css">
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
  <h1>Inceput - Algoritmul</h1>
</div>





<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fi" ng-fi-text="Producdtia de titei este de aproximativ 6,6 mil. tone iar exploatarea de gaz metan prin apropierea Clujului stinge 28.000 metrii cubi anual. In Carpatii Occidentali, in Petrosani se extrag anual 43 mil. tone de licnit. Energie termica este produsa in proportie de cca. 77% de termocentrale, care folosesc licnit, petrol si gaz, iar restul de 23% este dat in hidrocentrale."></div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active "  id="id-111" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">Aplicatia 1</a>
    <a class="nav-item nav-link " id="id-112" data-toggle="tab"  role="tab" aria-controls="nav-profile" aria-selected="true" ng-click="a2()">Aplicatia 2</a>
    <a class="nav-item nav-link" id="id-113" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false" ng-click="a3()">Aplicatia 3</a>
		  <a class="nav-item nav-link" id="id-114" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false" ng-click="a4()">Aplicatia 4</a>
  </div>
</nav>
        <img id="object1" src="">

<div  ng-include src="src">

<div id="errorPanel">
     <center id="textError">ATENTIE</center>
     <button id="butonError"type="button" class="btn btn-primary">Incearca din nou</button>
     </div>

<div class="container">
  <div class="box rotate"></div>
</div>




<!--<img src="page/assets/images/masina.png" width="70px"  height="40px" > -->


  <!--

      -->

        <div>
       <!-- <div class="alert alert-danger">{{error}}</div>  -->

      </div>

    </div>
        <button class="btn btn-primary " class="button_text" id="butonsmecher" ng-click="Run()" ><span class="button_text" >Run</span>
          <img  class="image_button" src="page/assets/images/button-play-icon.png"  float="right">
            </button>
   </div>

    <div id="code-aplicatie" >


  <div id="marcaj">

      <div class="expl-box-fi1" ng-fi-text=" &nbsp;Program"></div>
     <div class="expl-box-fi1"ng-repeat="x in records track by $index " ng-fi-text="{{x}}"></div>

 <img class="imagineComponentaTanc" ng-src="{{tancPart1}}" width="100px" height="100px" >
<img  class="imagineComponentaTanc" ng-src="{{tancPart2}}" width="100px" height="100px">
<img  class="imagineComponentaTanc" ng-src="{{tancPart3}}" width="50px" height="100px" style="margin-left:10.5%;">

   </div>

   </div>
<div  ng-include src="blocuriSrc">
</div>

</div>

</div>

</body>
<script src="page/script.js"></script>
<script src="page/loadSaves.js"></script>
<script>

$(document).ready(function(){
	var tanc;
	tanc= "<?php echo $row2[1]?>";
	$("#object1").attr('src','page/assets/images/'+tanc+'.png');


$('.dropdown-toggle').dropdown();
     })

    var username= "<?php echo  $row[1]?>";
      loadsaves(username);
$("#sub-menu").show();

</script>
