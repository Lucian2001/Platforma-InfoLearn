<?php

include("functions.php");
include("loadTanc.php");

?>
<div id="animation-side">


 <div class="container12" >


  <div class="row" style="z-index:2;margin-top:0%;">
    <div  class="col1" ><img id="id-11" src="" width="100%" height="100%"></div>
    <div  class="col1" ><img id="id-12" src="" width="100%" height="100%"></div>
      <div  class="col1" ><img id="id-13" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-14" src="" width="100%" height="100%"></div>
      <div  class="col1" ><img id="id-15" src="" width="100%" height="100%"></div>
    <div  class="col1" id="limit1"><img id="id-16"  src="" width="100%" height="100%"></div>
   <div class="w-100"></div>
    <div  class="col1"><img id="id-21" src="" width="100%" height="100%"></div>
    <div  class="col1"><img  id="id-22" src="" width="100%" height="100%"></div>
      <div  class="col1"><img id="id-23" src="" width="100%" height="100%"></div>
    <div class="col1"><img id="id-24" src="" width="100%" height="100%"></div>
          <div  class="col1"><img  id="id-25" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-26" src="" width="100%" height="100%"></div>
      <div class="w-100"></div>
    <div  class="col1" id="pozitie"><img id="id-31" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-32" src="" width="100%" height="100%"></div>
      <div   class="col1"><img  id="id-33" src="" width="100%" height="100%"></div>
    <div class="col1" ><img id="id-34"  src="" width="100%" height="100%"></div>
          <div  class="col1" ><img id="id-35" src=""  width="100%" height="100%"></div>
    <div class="col1"><img id="id-36" src="" width="100%" height="100%"></div>
    <div class="w-100"></div>
    <div  class="col1"><img id="id-41" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-42" src="" width="100%" height="100%"></div>
    <div  class="col1"><img  id="id-43"src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-44" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-45" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-46" src="" width="100%" height="100%"></div>
      <div class="w-100"></div>
    <div  class="col1" ><img id="id-51" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-52" src="" width="100%" height="100%"></div>
      <div  class="col1"><img id="id-53" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-54" src="" width="100%" height="100%"></div>
          <div  class="col1"><img id="id-55" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-56" src="" width="100%" height="100%"></div>
     <div class="w-100"></div>
    <div  class="col1"><img id="id-61" src="" width="100%" height="100%"></div>
    <div class="col1" ><img  id="id-62"src="" width="100%" height="100%"></div>
      <div  class="col1"><img id="id-63" src="" width="100%" height="100%"></div>
    <div  class="col1"><img id="id-64" src="" width="100%" height="100%"></div>
          <div  class="col1"><img id="id-65" src="" width="100%" height="100%"></div>
    <div  class="col1" id="limit2"><img id="id-66" src="" width="100%" height="100%"></div>
       <div class="w-100"></div>
 <div id="errorPanel">
     <center id="textError">ATENTIE</center>
     <button id="butonError"type="button" class="btn btn-primary">Incearca din nou</button>
     </div>
  </div>

</div>

</div>
<div class="expl-box-fi2" ng-fi-text="    Producdtia de titei este de aproximativ 6,6 mil. tone iar exploatarea de gaz metan prin apropierea Clujului stinge 28.000"></div>
<style>
    .expl-box-fi2 {
		margin-top: -5%;;
            border-style: none;
			height: 18%;
            width:70%;
             text-align: left;
             margin-left:3%;
            color:black;
         text-indent: 10px;

		}

</style>
<script src="page/scripts/generareMapa.js"></script>

<script>
    //generate target
    var locatiiValide = new Array(34,35,36);
 var targetPlace= $( "#pozitie" );
    var offsettarget= targetPlace.offset();
    //alert((($(document).width()*1.33)/100));
    var target = $( "#object1" );

target.css("top",offsettarget.top-(($(document).width()*1.2)/100));

target.css("left",offsettarget.left-(($(document).width()*1.2)/100));
target1=generareTinta(locatiiValide,33,37,3);
    $("#id-"+target1).attr('src','page/assets/images/road_target.png');
generareTeren1(target1);
    var tanc;

$(".imagineComponentaTanc").hide();
//alert(($("#object1").attr('src')));
  //if (($("#object1").attr('src'))==""){
    //location.reload();
  //}
//if (reload==1){
//location.reload();
//reload=2;
//}
  tanc= "<?php echo $row2[1]?>";

$(document).ready(function(){
   // $("#id:35").attr("src","page/assets/images/road_target");
// $("#id-35").attr('id', 'target');


    $("#object1").attr('src','page/assets/images/'+tanc+'.png');
$("#object1").show();

})


</script>