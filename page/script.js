var x="",y="";var nr=0;var  pasi=0;var urlNou=""; var capatUrl;var tancId;    var Id;
$("#butonsmecher").click(function(){
y="";
nr=0;
setTimeout(function (){

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

urlNou="http://infolearn-com.stackstaging.com/index.php?page=inceput#"+urlNou;

  window.location.replace(urlNou);

    if (window.location.href!="http://infolearn-com.stackstaging.com/index.php?page=inceput#/1/1#1"){

 for(var i=0;i<x.length;i++){
      if (nr==2){
          y=y+x[i];
       }
       if (x[i]=="#") {

           nr++;
       }

   }
  //alert(y);
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
    var targ = $( "#target" );
    var offset = targ.offset();
    var targetLimit = $( "#limit1" );
    var offsetLimit = targetLimit.offset();
    var targetLimit1 = $( "#limit2" );
    var offsetLimit1 = targetLimit1.offset();



 var target = $( "#object1" );
var offset1 = target.offset();
var pozitieInitiala;
    pozitieInitiala=offset1.left;
    alert(pozitieInitiala);

  var ok; var nr1=numarPasi,nr2=0,nr3=0,eroare=false;
   var $obiect = $("#object1"), degree=0,degree1=0 ,timer;

    if (y!=0){
  animatie(nr1);

    }

    function animatie(i){
         var target = $( "#object1" );
var offset1 = target.offset();
          if (i==-1){
                if ((offset1.left/($(document).width()/100))<((offset.left/($(document).width()/100))+1.5) && ((offset1.left/($(document).width()/100))>((offset.left/($(document).width()/100))-1.5)) && (offset1.top/($(document).width()/100))<((offset.top/($(document).width()/100))+1.5) && ((offset1.top/($(document).width()/100))>((offset.top/($(document).width()/100))-1.5))) {

                    Id="";
                    //alert(urlSave);
                    for(i=0;i<urlSave.length;i++){
                if (urlSave[i]!="/" && urlSave[i]!="#"){
                    Id=Id+urlSave[i];
                }
            }
                    $("#id-"+Id).css("background-color","#d8ffd6");
                    alert(Id);
            $.ajax({   type:"POST",
                     url:"page/testHttp.php",
                     data:"Id=" + Id ,
                  success:function(result)
                     {
                         alert(result);
                      }

                 });

                   //completat
                    alert("ok");


                }
    else {
        alert("eroare");
   $("#object1").css("left",pozitieInitiala-(9.5*pozitieInitiala)/100);
  //  alert(pozitieInitiala);

    }
          }
        if ((offset1.left/(($(document).width())/100))>(offsetLimit.left/(($(document).width())/100)) || (offset1.top/(($(document).width())/100))>(offsetLimit1.top/(($(document).width())/100))-1.1){
           eroare=true;
       alert("eroare fraiere");
       }
     // alert(degree);
        if (eroare !=true){

            if ((degree>360 && degree<361) ||(degree<(-360) && degree>(-361) )){
    degree=0;
            nr2=0;
     }
        if (pasiArray[i]==1){
        if((degree/90<1 && degree/90>=0)||(degree/90>-2 && degree/90<=0)){
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

   bottom: "+="+z1,

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










} else{
     tancId=(Math.floor(tancId/10));
      $.ajax({   type:"POST",
                     url:"page/uploadTancId.php",
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
                     url:"page/testHttp.php",
                     data:"Id=" + Id ,
                  success:function(result)
                     {
                      //   alert(result);
                      }

                 });


}

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

}
function hidethings(){

}
