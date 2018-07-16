function structuraAlternativa(){
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
    var buttonActive=1; 
    var raspuns;

      generareScor(11,35);
start();
timerCorect(1); 
$(document).ready(function(){
  redimensionare151();
    $("#object1").hide();
    $("#butonsmecher").hide();
     $("#resetareAplicatie").hide();
})
var dificultate;
    dificultate=10;
   raspuns=generareNumere(dificultate);

    $("#true2").click(function(){
  
        
        if (buttonActive==1){
        buttonActive=0; 
        if (raspuns==true){
            corect();
            timerCorect(1);
        } else{
            gresit();
             timerCorect(1);
        }
        }
    })
        $("#false2").click(function(){
           

            if (buttonActive==1){
        buttonActive=0; 
        if (raspuns!=true){
            corect();
        timerCorect(1);
        } else{
            gresit();
             timerCorect(1);
        }
            }
    })

}
function aplicatia2(){
    generareScor(11,34);  
start();
    
if (tanc==0){
  noTank();
}
for(var i=1;i<=66;i++)
   limite[i]=0;
    //generate target
    var locatiiValide = new Array(36);
 var targetPlace= $( "#pozitie" );
    var offsettarget= targetPlace.offset();
    //alert((($(document).width()*1.33)/100));
    var target = $( "#object1" );

target.css("top",offsettarget.top-(($(document).width()*1.2)/100));

target.css("left",offsettarget.left-(($(document).width()*1.2)/100));
target1=36;



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
  function redimensionare4(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1500&&height<800&&width>1400&&height>1000){

     }}
}
function aplicatia3(){
      generareScor(12,53);
start();
timerCorect(1);
 var dificultate=10;   var raspuns;var buttonActive=1;
    $(document).ready(function(){

       raspuns=generareNumere(dificultate);

        $("#object1").hide();
    $("#butonsmecher").hide();
         $("#resetareAplicatie").hide();
redimensionare153();
    });
    $("#generare").click(function(){
     

if (buttonActive==1){
    buttonActive=0;
  if ($("#input").val()!=parseInt($("#input").val()).toString()){
gresit();
$("#input").val("");

  } else
        if ($("#input").val()==raspuns){
            corect();
$("#input").val("");
        } else{
            gresit();
            $("#input").val("");
        }
}
                timerCorect(1);
    })
}
function aplicatia4(){
     swal("Pentru a face acestă aplicație ar trebui mai întâi sa faci exercțiile de la capitolul următor!");
start();
      generareScor(13,35);  
if (tanc==0){
  noTank();
}
for(var i=1;i<=66;i++)
   limite[i]=0;
    //generate target
    var locatiiValide = new Array(36);
 var targetPlace= $( "#pozitie" );
    var offsettarget= targetPlace.offset();
    //alert((($(document).width()*1.33)/100));
    var target = $( "#object1" );

target.css("top",offsettarget.top-(($(document).width()*1.2)/100));

target.css("left",offsettarget.left-(($(document).width()*1.2)/100));
target1=36;




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
  function redimensionare4(){
        var height=$(document).height();
        var width=$(document).width();
     if (width<1500&&height<800&&width>1400&&height>1000){

     }}
}