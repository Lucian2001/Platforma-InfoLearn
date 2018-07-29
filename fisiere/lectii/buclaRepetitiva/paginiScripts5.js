function buclaRepetitiva(){
    
  if ( window.location.href=="https://infolearn.ml/index.php"){
                $("#continutInfo").show();
            } else{
                    $("#continutInfo").hide();
            }
$(".expl-box-fi").css("height","95%");
      $.ajax({   type:"GET",
  url:"fisiere/lectii/loadTanc.php",
success:function(result)
  {
tanc=result;

if (tanc!="")
    $("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');
  }

             });
$('.dropdown-toggle').dropdown();
loadsaves(progresul);
$("#sub-menu").show();
}

function aplicatia1(){
     setTimeout(function(){
     generareScor(14,20);   
start();
if (tanc==0){
  noTank();
}
    //generate target
    var locatiiValide = new Array(35,36);
 var targetPlace= $( "#pozitie" );
    var offsettarget= targetPlace.offset();
    //alert((($(document).width()*1.33)/100));
    var target = $( "#object1" );

target.css("top",offsettarget.top-(($(document).width()*1.2)/100));

target.css("left",offsettarget.left-(($(document).width()*1.2)/100));
target1=generareTinta(locatiiValide,33,37,3);
    $("#id-"+target1).attr('src','fisiere/assets/images/road_target.png');
generareTeren1(target1);


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
    redimensionare151();
   // $("#id:35").attr("src","fisiere/assets/images/road_target");
// $("#id-35").attr('id', 'target');


    $("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');
$("#object1").show();

})
$("#butonError").click(function(){

    $("#errorPanel").hide();
})
         },50);
}
function aplicatia2(){
          setTimeout(function(){
     redimensionare151()
 generareScor(15,58);   
start();
if (tanc==0){
  noTank();
}
    //generate target
    var locatiiValide = new Array(55);
 var targetPlace= $( "#pozitie" );
    var offsettarget= targetPlace.offset();
    //alert((($(document).width()*1.33)/100));
    var target = $( "#object1" );

target.css("top",offsettarget.top-(($(document).width()*8)/100));

target.css("left",offsettarget.left-(($(document).width()*1.2)/100));
target1=55;
    $("#id-"+target1).attr('src','fisiere/assets/images/curba.png');


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
    generareTeren();
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
   // $("#id:35").attr("src","fisiere/assets/images/road_target");
// $("#id-35").attr('id', 'target');


    $("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');
$("#object1").show();

})
$("#butonError").click(function(){

    $("#errorPanel").hide();
})
              },50);
}
function aplicatia3(){
               setTimeout(function(){
     redimensionare151()
     generareScor(16,55);   
start();
if (tanc==0){
  noTank();
}
  //generate target
    var locatiiValide = new Array(51);
 var targetPlace= $( "#pozitie" );
    var offsettarget= targetPlace.offset();
    //alert((($(document).width()*1.33)/100));
    var target = $( "#object1" );

target.css("top",offsettarget.top-(($(document).width()*8)/100));

target.css("left",offsettarget.left-(($(document).width()*1.2)/100));
target1=55;
    $("#id-"+target1).attr('src','fisiere/assets/images/curba.png');



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
    generareTeren1();
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
   // $("#id:35").attr("src","fisiere/assets/images/road_target");
// $("#id-35").attr('id', 'target');


    $("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');
$("#object1").show();

})
$("#butonError").click(function(){

    $("#errorPanel").hide();
})
  function redimensionare4(){
       redimensionare151()
        var height=$(document).height();
        var width=$(document).width();
     if (width<1500&&height<800&&width>1400&&height>1000){

     }}
                },100);   
}
function aplicatia4(){
                    setTimeout(function(){
 generareScor(17,66); 
start();
if (tanc==0){
  noTank();
}
for(var i=1;i<=66;i++)
    limite[i]=0;
   var locatiiValide = new Array(33,34,35,36,23,24,25,26,43,44,45,46,54,53,55,56,63,64,65,66);
 var targetPlace= $( "#pozitie" );
    var offsettarget= targetPlace.offset();
    //alert((($(document).width()*1.33)/100));
    var target = $( "#object1" );

target.css("top",offsettarget.top-(($(document).width()*8.2)/100));

target.css("left",offsettarget.left-(($(document).width()*1.2)/100));
target1=generareTinta(locatiiValide,12,67,20);
    $("#id-"+target1).attr('src','fisiere/assets/images/road_target.png');
generareTeren2(target1);
    

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

   // $("#id:35").attr("src","fisiere/assets/images/road_target");
// $("#id-35").attr('id', 'target');


    $("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');
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
                    },50);
}
