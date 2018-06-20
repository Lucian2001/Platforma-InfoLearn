function algoritmul(){

 
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
function pagina111(){
 generareScor(1,8);    
$("#object1").hide();
    $(".imagineComponentaTanc").show();
   timer();

}
function pagina112(){
   
     isRunning=false;
     generareScor(2,20);  
    //generate target
    var locatiiValide = new Array(34,35,36);
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

     $("#butonsmecher").show();
  $("#resetareAplicatie").hide();
start();

 
        if (tanc==0 ){

     noTank();
   }
  redimensionare13();
   // $("#id:35").attr("src","fisiere/assets/images/road_target");
// $("#id-35").attr('id', 'target');


    $("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');
$("#object1").show();


$("#butonError").click(function(){

    $("#errorPanel").hide();
})
  function redimensionare4(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1500&&height<800&&width>1400&&height>1000){

     }} 
}

function pagina113(){
       isRunning=false;
start();
    generareScor(3,52); 
  //start();
   

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
  
  $("#butonsmecher").show();
  $("#resetareAplicatie").hide();
   redimensionare13();
   // $("#id:35").attr("src","fisiere/assets/images/road_target");
// $("#id-35").attr('id', 'target');

    $("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');
$("#object1").show();

})
if (tanc==0||tanc==undefined){
    
  noTank();
}
}
function pagina114(){
    isRunning=false;
   generareScor(4,52); 
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
  $("#butonsmecher").show();
  $("#resetareAplicatie").hide();
   // $("#id:35").attr("src","fisiere/assets/images/road_target");
// $("#id-35").attr('id', 'target');


    $("#object1").attr('src','fisiere/assets/images/'+tanc+'.png');
$("#object1").show();
redimensionare13();
})

$("#butonError").click(function(){
 hidethings();
});



}

