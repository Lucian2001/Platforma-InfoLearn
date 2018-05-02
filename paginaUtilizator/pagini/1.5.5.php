<?php

include("functions.php");
include("loadTanc.php");

?>
<div id="animation-side" style="z-index:2;">

 <div class="container12"style="z-index:1;">

  <div class="row" id ="rowMatrice" style="z-index:2;margin-top:0%;">
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


<div class="expl-box-fi7" ng-fi-text="   Acum trebuie sa te folosești de încă un bloc care întoarce tancul. Tu trebuie să-ți conduci tancul în punctul care trebuie urmând drumul fără sa te duci pe iarbă."></div>
<style>
    .expl-box-fi7 {
		margin-top: -3%;;
            border-style: none;
			height: 18%;
            width:70%;
            text-align:justify;
             margin-left:3%;
            color:black;
         text-indent: 10px;

		}

</style>
<script src="paginaUtilizator/scripts/generareMapa.js"></script>
<script>
   var locatiiValide = new Array(33,34,35,36,23,24,25,26,43,44,45,46,54,53,55,56,63,64,65,66);
 var targetPlace= $( "#pozitie" );
    var offsettarget= targetPlace.offset();
    //alert((($(document).width()*1.33)/100));
    var target = $( "#object1" );

target.css("top",offsettarget.top-(($(document).width()*8.2)/100));

target.css("left",offsettarget.left-(($(document).width()*1.2)/100));
target1=generareTinta(locatiiValide,12,67,20);
    $("#id-"+target1).attr('src','paginaUtilizator/assets/images/road_target.png');
generareTeren2(target1);
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

$(document).ready(function(){
    for(var i=1;i<=66;i++)
        limite[i]=0;
   // $("#id:35").attr("src","paginaUtilizator/assets/images/road_target");
// $("#id-35").attr('id', 'target');
  tanc= "<?php echo $row2[1]?>";

    $("#object1").attr('src','paginaUtilizator/assets/images/'+tanc+'.png');
$("#object1").show();
  var height=$(document).height();
        var width=$(document).width();
       if (width<1900&&height<950&&width>1500&&height>700){
         $("#textError").css("font-size","15px");
      $("#textError").css("margin-top","10%");
          $("#butonError").css("margin-left","14%");
          $("#butonError").css("margin-left","16%");
     }
    else if (width<1500&&height<800){
         $("#textError").css("font-size","13px");
      $("#textError").css("margin-top","15%");
          $("#butonError").css("margin-left","15%");
     }
})

$("#butonError").click(function(){
 hidethings();
});


</script>
