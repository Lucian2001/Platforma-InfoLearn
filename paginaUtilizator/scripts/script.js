
var x="",y="";var nr=0;var  pasi=0;var urlNou=""; var capatUrl;var tancId; var  eroareDegree;   var Id; var limite = new Array();var okSpatiu;butonActiv=1;
$("#butonsmecher").click(function(){

y="";
nr=0;
okSpatiu=true;
setTimeout(function (){
 if (window.location.href!="http://infolearnchestie-com.stackstaging.com/index.php?paginaUtilizator=inceput#/1/1#2" || window.location.href!="http://infolearnchestie-com.stackstaging.com/index.php?paginaUtilizator=inceput#/1/1#3"|| window.location.href!="http://infolearnchestie-com.stackstaging.com/index.php?paginaUtilizator=inceput#/1/1#4"){
x=window.location.href;

tancId=x.substr(x.length - 4);

capatUrl=x[x.length-1];
urlNou="";
    x = x.substr(0, x.length-1);
    //alert(x);
  var ok,nr4;
  ok=true;nr4=0;
  for(i=x.length;i>1 && ok==true;i--){
    if (x[i] == "/" && nr4<2){
        urlNou="/"+x[i+1]+urlNou;
      nr4=nr4+1;
    }

      if (nr4==2){
          ok=false;
      }

  }
    var urlSave;
 urlNou=urlNou+"#"+capatUrl;
   urlSave=urlNou;

urlNou="http://infolearnchestie-com.stackstaging.com/index.php?paginaUtilizator=inceput#"+urlNou;

  window.location.replace(urlNou);
  if (butonActiv==1){
    butonActiv=0;
    if (window.location.href!="http://infolearnchestie-com.stackstaging.com/index.php?paginaUtilizator=inceput#/1/1#1" && urlNou!="-1"){


 for(var i=0;i<x.length;i++){
      if (nr==2){
          y=y+x[i];
       }
       if (x[i]=="#") {

           nr++;
       }

   }

  pasi=parseInt(y);

    //lert(Math.floor(pasi/10));
    //creere vector de miscari
    var c=0,numarPasi=-1;
    var  pasiArray= new Array();
    while(pasi!=0){
        c=pasi%10;
        numarPasi=numarPasi+1;
        pasiArray[numarPasi]=c;
        pasi=Math.floor(pasi/10);
    }





    var z=(4.63*$(document).width())/100;
    var z1=(6.9*$(document).height())/100;
    var targ = $( "#id-"+target1 );
    var offset = targ.offset();
    var targetLimit = $( "#limit1" );
    var offsetLimit = targetLimit.offset();
    var targetLimit1 = $( "#limit2" );
    var offsetLimit1 = targetLimit1.offset();
         var targetLimit3 = $( "#limit3" );
    var offsetLimit3 = targetLimit3.offset();
         var targetLimit4 = $( "#limit4" );
    var offsetLimit4 = targetLimit4.offset();


 var target = $( "#object1" );
var offset1 = target.offset();
var pozitieInitiala;
    pozitieInitiala=offset1.left;
        pozitieInitiala1=offset1.top;

  var ok; var nr1=numarPasi,nr2=0,nr3=0,eroare=false;
   var $obiect = $("#object1"), degree=0,degree1=0 ,timer;

    if (y!=0){
  animatie(nr1);

    }

    function animatie(i){
      verificareLimita(offset1.top,offset1.left);

offset1 = target.offset();
          if (i==-1){
                if ((offset1.left/($(document).width()/100))<((offset.left/($(document).width()/100))+1.5) && ((offset1.left/($(document).width()/100))>((offset.left/($(document).width()/100))-1.5)) && (offset1.top/($(document).width()/100))<((offset.top/($(document).width()/100))+1.5) && ((offset1.top/($(document).width()/100))>((offset.top/($(document).width()/100))-1.5))) {
                    if (okSpatiu==1){
                    Id="";
                    //alert(urlSave);
                    for(i=0;i<urlSave.length;i++){
                if (urlSave[i]!="/" && urlSave[i]!="#"){
                    Id=Id+urlSave[i];
                }
            }
                    $("#id-"+Id).css("background-color","#d8ffd6");

            $.ajax({   type:"POST",
                     url:"paginaUtilizator/testHttp.php",
                     data:"Id=" + Id ,
                  success:function(result)
                     {   butonActiv=1;
                    swal({
  title: "Bravo!",
  text: "Ai terminat această aplicație.Acum poți sa-ți continui aventura.",
  icon: "success",
  button: "Ok",
});

                      }

                 });

                   //completat
return 0;
                    } else{
                         eroareDegree=true;


        if (degree!=0 || degree1!=0){
            eroareDegree=false;
        }
 butonActiv=1;
   eroareShow("Incearca alt drum!") ;



        if (window.location.href=="http://infolearnchestie-com.stackstaging.com/index.php?paginaUtilizator=inceput#/1/1#2" || window.location.href=="http://infolearnchestie-com.stackstaging.com/index.php?paginaUtilizator=inceput#/1/5#1" ){
   $("#object1").css("left",pozitieInitiala-(6.7*pozitieInitiala)/100);
          $("#object1").css("top",pozitieInitiala1-(5.4*pozitieInitiala1)/100);
        } else{
               $("#object1").css("left",pozitieInitiala-(6.7*pozitieInitiala)/100);
          $("#object1").css("top",pozitieInitiala1-(7.7*pozitieInitiala1)/100);
        }


                    }

                }
    else {
        eroareDegree=true;


        if (degree!=0 || degree1!=0){
            eroareDegree=false;
        }

        if (okSpatiu==1){
            $("#object1").css({'transform': 'rotate(0deg)'});
           butonActiv=1;
         eroareShow("Nu ai ajuns in locul indicat!");
        }
        else{
           butonActiv=1;
            $("#object1").css({'transform': 'rotate(0deg)'});
eroareShow("Nu ai reușit să ajungi în locul indicat!.Ar trebui sa urmezi drumul.");

        }
          var urlPozitie="";

                    for(i=0;i<urlSave.length;i++){
                if (urlSave[i]!="/" && urlSave[i]!="#"){
                    urlPozitie=urlPozitie+urlSave[i];
                }
            }

     if (urlPozitie=="162" || urlPozitie=="164"){
         $("#object1").css("left",pozitieInitiala-(8*pozitieInitiala)/100);
          $("#object1").css("top",pozitieInitiala1-(5.4*pozitieInitiala1)/100);

     } else if (urlPozitie=="112"|| urlPozitie=="151"  ){
   $("#object1").css("left",pozitieInitiala-(6.7*pozitieInitiala)/100);
          $("#object1").css("top",pozitieInitiala1-(5.4*pozitieInitiala1)/100);
        } else{
               $("#object1").css("left",pozitieInitiala-(6.7*pozitieInitiala)/100);
          $("#object1").css("top",pozitieInitiala1-(7.7*pozitieInitiala1)/100);
        }


  //  alert(pozitieInitiala);

    }
          }
        if ((offset1.left/(($(document).width())/100))>(offsetLimit.left/(($(document).width())/100)+1) || (offset1.top/(($(document).width())/100))>(offsetLimit1.top/(($(document).width())/100))+1.1 ||(offset1.left/(($(document).width())/100))<(offsetLimit3.left/(($(document).width())/100)-1.5) || (offset1.top/(($(document).width())/100))<(offsetLimit4.top/(($(document).width())/100))-1.5){
        
            eroare=true;

              $("#object1").css("top",pozitieInitiala1-(6.7*pozitieInitiala1)/100);
$("#object1").css({'transform': 'rotate(0deg)'});
        eroareShow("Comenzile pe care le-ai dat au scos tancul în afara spațiului de lucru.Incearcă alt algoritm!");
         butonActiv=1;
     
              $("#object1").css("left",pozitieInitiala-(7*pozitieInitiala)/100);
       }
     // alert(degree);
        if (eroare !=true){

            if ((degree>360 && degree<361) ||(degree<(-360) && degree>(-361) )){
    degree=0;
            nr2=0;
     }
        if (pasiArray[i]==1){
        if((degree/90<1 && degree/90>=0)||(degree/90>-0.8 && degree/90<=0)){

         $( "#object1" ).animate({

  left: "+="+z,

  }, 2000, function() {
        nr1=nr1-1;


        animatie(nr1);
    })

     } else if ((degree/90>=1 && degree/90<2) || (degree/90<=-3 && degree/90>-4)){

                $( "#object1" ).animate({

   top: "+="+z1,

  }, 2000, function() {
        nr1=nr1-1;
        animatie(nr1);
    })
     }
            else if((degree/90>=2 && degree/90<3)|| (degree/90<=-2 && degree/90>-3)){

                $( "#object1" ).animate({

   left: "-="+z,

  }, 2000, function() {

                    nr1=nr1-1;
        animatie(nr1);
    })
     }
            else if((degree/90<=-1 && degree/90>-2) || (degree/90>=3 && degree/90<4)){

                $( "#object1" ).animate({

   top: "-="+z1,

  }, 2000, function() {
        nr1=nr1-1;
        animatie(nr1);
    })
     }


     } else if (pasiArray[i]==2){

      rotate();
    function rotate() {

        $obiect.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        $obiect.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
        timer = setTimeout(function() {
            degree=degree+0.2;
            if (degree < 90+nr2)
            rotate();else{ nr2=degree;
                nr1=nr1-1;
        animatie(nr1);
            }
        },5);
    }


    }

        else if (pasiArray[i]==3){
       nr3=nr3+1;
      rotate1();
    function rotate1() {

        $obiect.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        $obiect.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
        timer = setTimeout(function() {
            degree=degree-0.2;
            if (degree > nr2-90)
            rotate1();else{ nr2=degree;
                nr1=nr1-1;
        animatie(nr1);
            }
        },5);
    }


    }
    }

    }










}else if (window.location.href=="http://infolearnchestie-com.stackstaging.com/index.php?paginaUtilizator=inceput#/1/1#1"){
     tancId=(Math.floor(tancId/10));
     if (tancId%1000>100){
      $.ajax({   type:"POST",
                     url:"paginaUtilizator/uploadTancId.php",
                     data:"Id=" + tancId ,
                  success:function(result)
                     {

                      }

                 });

     Id="";
                    //alert(urlSave);
                    for(i=0;i<urlSave.length;i++){
                if (urlSave[i]!="/" && urlSave[i]!="#"){
                    Id=Id+urlSave[i];
                }
            }
                    $("#id-"+Id).css("background-color","#d8ffd6");
                  //  alert(Id);
    $.ajax({   type:"POST",
                     url:"paginaUtilizator/testHttp.php",
                     data:"Id=" + Id ,
                  success:function(result)
                     {
                      //   alert(result);
                      }

                 });
               } else{
                 eroareShow("Trebuie sa introduci toate componentele");
               }


}
}}
} ,200);

})
     var tabs;

function tabsActive (pagina,tabs){


   if (tabs==1){
         $( "#id-1"+pagina+"1" ).addClass( "nav-item nav-link active" );
         $( "#id-1"+pagina+"3" ).removeClass( "nav-item nav-link active" );
         $( "#id-1"+pagina+"2" ).removeClass( "nav-item nav-link active" );
          $( "#id-1"+pagina+"2" ).addClass( "nav-item nav-link " );
          $( "#id-1"+pagina+"3" ).addClass( "nav-item nav-link " );
     } else if (tabs==2){
         $( "#id-1"+pagina+"2" ).addClass( "nav-item nav-link active" );
         $( "#id-1"+pagina+"1" ).removeClass( "nav-item nav-link active" );
         $( "#id-1"+pagina+"3" ).removeClass( "nav-item nav-link active" );
         $( "#id-1"+pagina+"1" ).addClass( "nav-item nav-link " );
          $( "#id-1"+pagina+"3" ).addClass( "nav-item nav-link " );
} else if (tabs==3){
         $( "#id-1"+pagina+"3" ).addClass( "nav-item nav-link active" );
         $( "#id-1"+pagina+"1" ).removeClass( "nav-item nav-link active" );
         $( "#id-1"+pagina+"2" ).removeClass( "nav-item nav-link active" );
         $( "#id-1"+pagina+"1" ).addClass( "nav-item nav-link " );
          $( "#id-1"+pagina+"2" ).addClass( "nav-item nav-link " );
}


}

$(document).ready(function(){


setTimeout(function (){
tabs=window.location.href[window.location.href.length -1];
pagina=window.location.href[window.location.href.length -3];
    //alert(pagina);
    tabsActive(pagina,tabs);
} ,200);
     var height_of_window=0,width_of_window=0;
     height_of_window= $(document).height();
     width_of_window= $(document).width();
     if(height_of_window>900 && width_of_window>1800){

      $(".button_text").css("font-size","30px");
          $("#clear").css("font-size","23px");
        $(".image_button").css("height","40px");
         $(".image_button").css("width","40px");
           $(".image_button").css("margin-top","-10px");
    }
     else{
           $("#clear").css("font-size","18px");
         $(".button_text").css("font-size","20px");
     }

 });

function showthings(){
$( "#errorPanel" ).fadeIn( "slow" );

}
$("#butonError").click(function(){

 hidethings();
});

function hidethings(){

    if (eroareDegree==false){
       location.reload();

   }
$( "#errorPanel" ).hide();
}

function errorDisplay(text){

    $("#textError").html(text);
}
function verificareLimita(x,y){
var nr=0,nr1=0;
   for (var i=10;i<=66;i++){
       if (limite[i]==1){nr++;
           var drum = $( "#id-"+i);

    var drumOffset = drum.offset();
  if (Math.abs(drumOffset.left-y)<20 && Math.abs(drumOffset.top-x)<30){

  }
else {
 nr1++;
}
       }
   }

    if (nr==nr1){
        okSpatiu=0;
    }
}
