<?php include("testHttp.php");
$query="SELECT *FROM completat WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
    //echo $row[2];


}
include ("functions.php");

?>

<head>
<link rel="stylesheet" href="paginaUtilizator/css/lectii.css">
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




</style>
  <body ng-app="myApp" >
<div class="titlu-sectiune">
  <h1>Structura Repetitivă</h1>
</div>





<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fi" ng-fi-text="Operatorii relaționali utilizați în scrierea algoritmilor sunt aceiași ca la matematică, având doar mici modificări ale modului de scriere datorită faptului că limbajul de programare nu conține unele dintre semnele matematice."></div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active "  id="id-131" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">Aplicații Tip I</a>
    <a class="nav-item nav-link " id="id-132" data-toggle="tab"  role="tab" aria-controls="nav-profile" aria-selected="true" ng-click="a2()">Aplicații Tip II</a>


  </div>
</nav>
        <img id="object1" src="">

<div  ng-include src="src">



<div class="container">
  <div class="box rotate"></div>
</div>




<!--<img src="paginaUtilizator/assets/images/masina.png" width="70px"  height="40px" > -->


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
<script src="paginaUtilizator/scripts/script.js"></script>
<script src="paginaUtilizator/scripts/loadSaves.js"></script>

<script>

$(document).ready(function(){
	var username= "<?php echo  $row[1]?>";
		loadsaves(username);
})

</script>
