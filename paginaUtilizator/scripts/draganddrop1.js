
 

 function dragAndDrop(semn) {
   
    $( "#maiMic,#maiMare,#maiMicSauEgal,#maiMareSauEgal,#egal,#diferit").draggable({ revert: "invalid" });
    $( "#droppable" ).droppable({
        
    //accept: "#plus",

      drop: function( event, ui ) {
           var semn1=ui.draggable.attr('id');


          if(semn1==semn){
  $("#maiMic").draggable( 'disable' );
               $("#maiMare").draggable( 'disable' );
               $("#egal").draggable( 'disable' );
                $( "#maiMic,#maiMare,#maiMicSauEgal,#maiMareSauEgal,#egal,#diferit").draggable({ revert: "valid" });


corect();
          } else{ 
                $("#maiMic").draggable( 'disable' );
               $("#maiMare").draggable( 'disable' );
               $("#egal").draggable( 'disable' );
              $("#maiMic,#maiMare,#maiMicSauEgal,#maiMareSauEgal,#egal,#diferit").draggable({ revert: "valid" });
              gresit();
            };
          }


    });
 }
