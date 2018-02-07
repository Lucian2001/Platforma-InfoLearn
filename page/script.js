var x="",y="";var nr=0;
$("#butonsmecher").click(function(){
y="";
nr=0;
setTimeout(function (){
x=window.location.href;
    
window.location.replace("http://infolearn-com.stackstaging.com/index.php?page=inceput#/1");
for(var i=0;i<x.length;i++){
      if (nr==2){
          y=y+x[i];         
       }
       if (x[i]=="#") {
        
           nr++;
       }
       
   }
 var z=(4.63*$(document).width())/100;
  var targ = $( "#target" );
var offset = targ.offset();
     var targetLimit = $( "#limit1" );
var offsetLimit = targetLimit.offset();
//p.html( "left: " + offset.left + ", top: " + offset.top );
//alert(offset.left/($(document).width()/100));


    
  var ok;
   
    
    if (y!=0){    
for (i=1;i<=y;i++){
$( "#object1" ).animate({

    left: "+="+z,

  }, 2000, function() {
  
   setTimeout(function (){
      var target = $( "#object1" );
var offset1 = target.offset();
       if ((offset1.left/(($(document).width())/100))>(offsetLimit.left/(($(document).width())/100))){
           $( "#object1" ).stop(true);
           alert("eroare fraiere");
       }
   },400);
 
});   

} setTimeout(function(){
var target = $( "#object1" );
var offset1 = target.offset();
   // offset1 = target.offset();
    //  alert(offset1.left/($(document).width()/100));
       if ((offset1.left/($(document).width()/100))<((offset.left/($(document).width()/100))+1.5) && ((offset1.left/($(document).width()/100))>((offset.left/($(document).width()/100))-1.5))) {
          $( "#object1" ).stop(true);
        alert("pola");
       }  
    else alert("eroare");
             } ,2000*y+10);
        
}      
              
           
            
},200);

})
 $(document).ready(function(){
  
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
    
 
   
