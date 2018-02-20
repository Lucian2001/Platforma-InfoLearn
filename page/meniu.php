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

    #lista{


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
    }
    #sub-menu-item{

    margin-left:3%;
    }
    #sub-menu{
    margin-left:-9%;
        display: none;

    }
    </style>

</head>


<div id="left-bar">

       <img id="title" src="page/assets/images/titlu.png" >
          <ul id="lista">
           <li class="menu-title">
             <div class="text-design">Titlu</div></li>
              <li class="menu-item">
             <div class="item-design"><p class="menu-text">Despre</p> </div>
             </li>
          <li class="menu-item">
             <div class="item-design" id="inceput">

                 <p class="menu-text">Inceput</p> </div></li>
              <ul id="sub-menu">
              <li class="menu-item"><div id="sub-menu-item"  class="text-design">Titlu</div></li>
                <li class="menu-item"><div id="sub-menu-item"  class="text-design">Titlu</div></li>
                 <li class="menu-item" ><div id="sub-menu-item" class="text-design">Titlu</div></li>


              </ul>
          <li class="menu-item">
             <div class="item-design"> <p class="menu-text">Despre</p> </div></li>
             <li id="last-column">
             <div class="item-design" > <p class="menu-text">Despre</p> </div>
             </li>
          <li class="menu-title">
             <div class="text-design">Titlu</div></li>
            <li class="menu-item">
             <div class="item-design"> <p class="menu-text">Algoritmi </p> </div>
            </li>

          <li class="menu-item">
             <div class="item-design"> <p class="menu-text">Curiozitati</p> </div></li>
          <li class="menu-item">
             <div class="item-design"> <p class="menu-text">Sfaturi</p> </div>
             </li>
          <li class="menu-item">
             <div class="item-design"> <p class="menu-text">Contact</p> </div></li>
          <li  id="last-column">
             <div class="item-design"> <p class="menu-text">Despre</p> </div></li>

         </ul>

    </div>
<script src="page/loadSaves.js"></script>
<script>
    var href1;
    var vector=[];
    // DECLARARE VECTOR CU TOATE PAGINILE
    vector[11]=0;
     vector[12]=0;
     vector[13]=0;
     vector[21]=0;
     vector[22]=0;
     vector[23]=0;
    //

    $(document).ready( function(){
                  var username= "<?php echo  $row[1]?>";
//alert(username);
        // loadHref(id1,username);
                      })
    var meniuInceput=1;
    var id1=0;
    $("#inceput").click(function(){
      var username= "<?php echo  $row[1]?>";

        //var username= "<?php echo  $row[1]?>";
//alert(username);
       id1=1;
      $(location).attr('href', loadHref(id1,username,vector));
//alert(loadHref(id1,username,vector))
      if (meniuInceput==0){
        $("#sub-menu").show();
        meniuInceput=1;
      }else
          {$("#sub-menu").hide();
        meniuInceput=0;

          }
        $(".menu-item").css("border-bottom-width","1px");
    })



</script>

</html>
