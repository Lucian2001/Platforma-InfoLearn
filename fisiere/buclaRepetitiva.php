<?php include("testHttp.php");
$query="SELECT *FROM completat WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
    //echo $row[2];


}

?>

<head>
<link rel="stylesheet" href="fisiere/css/lectii.css">
</head>
<style>

		[class^="expl-box"] {
		text-align: justify;
            position: relative;
			height: 10%;
            color:white;
			/*margin: 15px;*/
			/*border: 2px solid gray;*/
             z-index: 1;

		}

		.expl-box-fi {
            margin-top: 1%;
			margin-left: 10px;
            border-style: none;
			height: 70%;
            width:99%;
             text-align: left;
             text-indent: 30px;
            color:black;
             z-index: 1;
            text-align: justify;
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




</style>
  <body ng-app="myApp" >
<div class="titlu-sectiune">
  <h1 class="titluCapitol"> Bucla repetitivă</h1>
</div>





<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fi" ng-fi-text="   O structura repetitiva se caracterizeaza prin posibilitatea efectuarii repetitive a unei secvenţe de instrucţiuni, cat timp este îndeplinita o anumită condiţie sau pana când se îndeplineşte o anumită condiţie. Repetitia secvenţei de instructiuni se numeşte iteratie  bucla sau ciclu."></div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active tabAplicatie "  id="id-151" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">Aplicația 1</a>
    <a class="nav-item nav-link tabAplicatie " id="id-152" data-toggle="tab"  role="tab" aria-controls="nav-profile" aria-selected="true" ng-click="a2()">Aplicația 2</a>
    <a class="nav-item nav-link tabAplicatie" id="id-153" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false" ng-click="a3()">Aplicația 3</a>
		  <a class="nav-item nav-link tabAplicatie" id="id-154" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false" ng-click="a4()">Aplicația 4</a>
  </div>
</nav>
        <img id="object1" src="">

<div  ng-include src="src">

<div id="errorPanel">
     <center id="textError">ATENȚIE</center>
     <button id="butonError"type="button" class="btn btn-primary">Incearcă din nou</button>
     </div>

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
        <button class="btn btn-primary " class="button_text" id="butonsmecher" ng-click="Run()" ><span class="button_text" >Run</span>
          <img  class="image_button" src="fisiere/assets/images/button-play-icon.png"  float="right">
            </button>
         <button class="btn btn-primary "ng-click="resetare13()" class="button_text" id="resetareAplicatie" ng-click="Resetare()" ><span class="button_text" >Resetare</span>
          
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
<script src="fisiere/scripts/script.js"></script>
<script src="fisiere/scripts/loadSaves.js"></script>
<script>

$(document).ready(function(){
	var tanc;
	tanc= "<?php echo $row2[1]?>";
	$("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');


$('.dropdown-toggle').dropdown();
     })

    var username= "<?php echo  $row[1]?>";
      loadsaves(username);
$("#sub-menu").show();


</script>
