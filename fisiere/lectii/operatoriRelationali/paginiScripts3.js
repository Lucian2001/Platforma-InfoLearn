var semn;
function aplicatia1(){

  generareScor(8,35);
start();
timerCorect(1);

$(document).ready(function(){

      var randomNr1=Math.floor((Math.random() * 3) + 1);
generareNumere(randomNr1);
  semn= generareSemn(randomNr1);

    dragAndDrop(semn);

  redimensionare131();
  $("#maiMic").draggable( 'enable' );
                $("#maiMare").draggable( 'enable' );
                $("#egal").draggable( 'enable' );

})
    $("#generare3").click(function(){

        
         var randomNr1=Math.floor((Math.random() * 3) + 1);
generareNumere(randomNr1);
   var semn= generareSemn(randomNr1);
    dragAndDrop(semn);
    $("#gresit").hide();
     $("#corect").hide();
    raspuns=false;
    $("#maiMic").draggable( 'enable' );
                  $("#maiMare").draggable( 'enable' );
                  $("#egal").draggable( 'enable' );
                $("#maiMic,#egal,#maiMare").draggable({ revert: "invalid" });
        timerCorect(1);
    
    })

}
var buttonActive2=1; var numar1;
function aplicatia2(){

generareScor(9,25);
start();
timerCorect(1);
     numar1=Math.floor((Math.random() * 6) + 1);
$(document).ready(function(){
redimensionare132();
  afisareSemn(numar1)
})
    $("#generare4").click(function(){
        

        if (buttonActive2==1){

         buttonActive2=0;

        verificareRaspuns(numar1);
        }
                timerCorect(1);
    })
}