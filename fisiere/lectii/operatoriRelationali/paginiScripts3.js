function aplicatia1(){
var semn;
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
        timerCorect(1);
    })

}
function aplicatia2(){
var buttonActive=1;
generareScor(9,25);
start();
timerCorect(1);
    var numar=Math.floor((Math.random() * 6) + 1);
$(document).ready(function(){
redimensionare132();
  afisareSemn(numar)
})
    $("#generare4").click(function(){
        

        if (buttonActive==1){

         buttonActive=0;

        verificareRaspuns(numar);
        }
                timerCorect(1);
    })
}