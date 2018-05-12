<?php
 include("testHttp.php");
$query="SELECT *FROM completat WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
    //echo $row[2];


}


?>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">

<style>
    #left-bar{
 position: fixed;
  top: -5;
  left: -1;
  width: 15.1%;
  height:110%;
  background-color: lightgrey;
margin-bottom: 0;
   box-shadow:         inset 0 0 10px #000000;

}
#title {
        margin-top: 15px;
        margin-left:11px;
    margin-bottom: 25px;
    width:90%;
    height: 6%;
    }
    body {
  margin: 0px;
  padding: 0px;

}
    .item-design{
        background-color:#388aff;
        width:5px;
        height:6%;
    }

    #lista1{

margin-top: 20%;
    }
    ul {
  list-style-type: none;
        padding-left: 20px;

}
    .menu-item{
       margin-right: 20px;
        border-style: solid;
        border-color:white;
        border-right:none;
        border-bottom:none;
        border-width: 1px;
        cursor: pointer;
    }
    #last-column{
       margin-right: 20px;
        border-style: solid;
        border-color:white;
        border-right:none;

        border-width: 1px;

    }
    .menu-title{
        margin-left:15px;
        margin-top:20px;
        font-family: 'Roboto Condensed', sans-serif;
     font-size: 100%;
        font-size:3.5vh;
    }
    .menu-text{
        margin-left:15px;
        font-family: 'Roboto Condensed', sans-serif;
     font-size: 100%;
        font-size:3vh;
        padding-top: 8px;
        width:250px;
    }
    #sub-menu-item{

    margin-left:3%;
    }
    #sub-menu{
    margin-left:-9%;
        display: none;

    }
    #title{
        cursor: pointer;
    }
    </style>

</head>


<div id="left-bar">

       <img id="title" src="fisiere/assets/images/titlu.png" >
          <ul id="lista1">

           <li class="menu-title">
             <div class="text-design" >Invatare</div></li>
              <li class="menu-item">
             <div class="item-design" id="inceput"><p class="menu-text">Algoritmul</p> </div>
             </li>

          <li class="menu-item">
             <div class="item-design" >

                 <p class="menu-text" id="expresiiaritmetice">Expresii aritmetice</p> </div></li>

          <li class="menu-item">
             <div class="item-design" > <p id="operatorirelationali" class="menu-text">Operatori relaționali</p> </div></li>
             <li class="menu-item">
                <div class="item-design"> <p id="expresiiLogice" class="menu-text">Expresii logice</p> </div></li>
                <li class="menu-item">
                 <div class="item-design"> <p class="menu-text" id="structuraAlternativa">Structura Alternativă</p> </div></li>
             <li id="last-column">
             <div class="item-design" > <p  style="cursor: pointer;" id="buclarepetitiva" class="menu-text">Bucla repetitivă</p> </div>
             </li>
          <li class="menu-title">
             <div class="text-design">Evaluare</div></li>


          <li class="menu-item">
             <div class="item-design"> <p id="evaluare" class="menu-text">Evaluare</p> </div></li>
          <li class="menu-item">
          
             </li>

          

    </div>
<script>
    $(document).ready(function(){
         var height=$(document).height();
        var width=$(document).width();
     if (width<1400&&height<800){

         $(".menu-text").css("width","160px");


     }
    })
    $("#title").click(function(){
        window.location.replace("http://infolearnchestie-com.stackstaging.com/index.php");

    })
    var username= "<?php echo  $row[1]?>";
    </script>
<script src="fisiere/scripts/loadSaves.js"></script>
<script src=fisiere/scripts/meniuScript.js></script>



