

 function dragAndDrop(semn) {
    $( "#plus,#minus,#divide,#multiply,#slash").draggable({ revert: "invalid" });
    $( "#droppable" ).droppable({
    //accept: "#plus",

      drop: function( event, ui ) {
           var semn1=ui.draggable.attr('id');


          if(semn1==semn){

                $( "#plus,#minus,#divide,#multiply,#slash").draggable({ revert: "valid" });


corect();
          } else{
              $( "#plus,#minus,#divide,#multiply,#slash").draggable({ revert: "valid" });
              incercari();
            };
          }


    });
 }
