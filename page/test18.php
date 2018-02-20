<?php include ("meniu.php");?>
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

		}

		}


		.expl-box-nr {
			height:200px; overflow-y: scroll
		}
</style>
  <body ng-app="myApp" >
<div class="titlu-sectiune">
  <h1>Inceput - Algoritmul</h1>
</div>



<div>

<div id="frame-aplicatie"  >

    <div id="informatie-aplicatie" >


<div class="expl-box-fi" ng-fi-text="Omul sa fie multumit cu saracia sa, caci, daca e vorba, nu bogatia, ci linistea
colibei tale te face fericit. Dar voi sa faceti dupa cum va trage inima, si Dumnezeu
sa va ajute si sa va acopere cu aripa bunatatii sale. Eu sunt acum batrana, si
fiindca am avut si am atat de multe bucurii in viata, nu inteleg nemultumirile celor
tineri si ma tem ca nu cumva, cautand acum la batranete un noroc nou, sa pierd
pe acela de care am avut parte pana in ziua de astazi si sa dau la sfarsitul vietii
mele de amaraciunea pe care nu o cunosc decat din frica. Voi stiti, voi faceti; de
mine sa nu ascultati."></div>

   </div>  <div ng-controller=blocuri>
    <div id="exe-aplicatie" >
    <nav id="tab-aplicatii">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active "  id="id-121" data-toggle="tab"role="tab" aria-controls="nav-home" aria-selected="false" ng-click="a1()">A2</a>
    <a class="nav-item nav-link " id="id-122" data-toggle="tab"  role="tab" aria-controls="nav-profile" aria-selected="true" ng-click="a2()">A3</a>
    <a class="nav-item nav-link" id="id-123" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false" ng-click="a3()">A4</a>
  </div>
</nav>
         <div id="object1"></div>

<div  ng-include src="src">



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


   </div>

   </div>

    <div id="blocuri" >   <button type="button" class="btn btn-primary" id="clear" ng-click="clear()">Clear</button>
       <b id="blocuri-text" >Blocuri</b>
        <div class="button11">
           <div class="expl-box" ng-fi-text="Mergi-inainte" ng-click="inainte()"></div>

        </div>
        <div class="button11">
            <div class="expl-box-1" ng-fi-text="Rotire la " ng-click="intoarcere()"></div>
             <button type="button" id="selectie" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    <span class="sr-only">Toggle Dropdown</span><div style="margin-top: -10%;">{{rotireText}}</div>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" ng-click="dreapta()">Dreapta</a>
    <a class="dropdown-item"  ng-click="stanga()">Stanga</a>

  </div>
</div>
        <div class="button11">
            <div class="expl-box-1" ng-fi-text="Repeta de " style="width:55%;" ng-click="repeta()"></div>
            <input type="input" id="repetaInput" ng-model="numarRepetari">
            <div class="expl-box-1" ng-fi-text="ori " style="margin-left:78%;margin-top: -29%;width:15%" ng-click="repeta()"></div>
</div>
        <div class="button11" style=" width:50%;">
           <div class="expl-box" ng-fi-text="End" style=" width: 45%;margin-left: 25%;" ng-click="end()"></div>

        </div>

      <div id="deleteLine">
<input type="text" value="" style="float:right;width:10%;" ng-model="rand">
             <button style="float:right;" ng-click="deleteLine()">Sterge</button>

         </div>
   </div>
   </div>
</div>

</div>

</body>
<script src="page/script.js"></script> 
<script src="page/loadSaves.js"></script> 
<script>
$(document).ready(function(){


$('.dropdown-toggle').dropdown();
     })

    var username= "<?php echo  $row[1]?>";
     loadsaves(username);
</script>

