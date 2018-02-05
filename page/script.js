var x="",y="";var nr=0;
$("#butonsmecher").click(function(){
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
for (i=1;i<=y;i++){
    $( "#object1" ).animate({

    left: "+=60",
    
  }, 2000, function() {
   setTimeout(function (){},200);
  });  }         
              
              
              
},200);
})
 $(document).ready(function(){
   var height_of_window=0,width_of_window=0;
     height_of_window= $(document).height();
     width_of_window= $(document).width();
     if(height_of_window>900 && width_of_window>1800){
          
      $(".button_text").css("font-size","30px");  
        $(".image_button").css("height","40px"); 
         $(".image_button").css("width","40px"); 
           $(".image_button").css("margin-top","-10px");
    }
     else{
           
         $(".button_text").css("font-size","20px");  
     }
     
 });
    
 
   
