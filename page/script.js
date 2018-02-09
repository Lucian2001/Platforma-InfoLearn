var x="",y="";var nr=0;var  pasi=0;
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
  var targ = $( "#target" );
var offset = targ.offset();
     var targetLimit = $( "#limit1" );
var offsetLimit = targetLimit.offset();
//p.html( "left: " + offset.left + ", top: " + offset.top );
//alert(offset.left/($(document).width()/100));


    
  var ok; var nr1=numarPasi,nr2=0,nr3=0;
   var $obiect = $("#object1"), degree=0,degree1=0 ,timer;
    
    if (y!=0){    
  animatie(nr1);  

    }
    function animatie(i){
     if (pasiArray[i]==1){
        $( "#object1" ).animate({

   left: "+="+z,

  }, 2000, function() {
        nr1=nr1-1;  
        animatie(nr1);
    })
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

        
        /*for (i=numarPasi;i>=0;i--){
if (pasiArray[i]==1){
   
    nr1=nr1+1;
     setTimeout(function (){
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
 
});  },2000*nr2);
   } 
               
    else if (pasiArray[i]==2){
        var $obiect = $("#object1"), degree = 0, timer;
        
    setTimeout(function (){
    
    rotate();
    function rotate() {
         nr2=nr2+1;
        $obiect.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $obiect.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            degree=degree+0.2; 
            if (degree < 90)
            rotate();
        },5);
    }
    
      },2000*(nr1));
    
    
    }
    else if (pasiArray[i]==3){
        
    }
    
    

}  setTimeout(function(){
var target = $( "#object1" );
var offset1 = target.offset();
   // offset1 = target.offset();
    //  alert(offset1.left/($(document).width()/100));
       if ((offset1.left/($(document).width()/100))<((offset.left/($(document).width()/100))+1.5) && ((offset1.left/($(document).width()/100))>((offset.left/($(document).width()/100))-1.5))) {
          $( "#object1" ).stop(true);
        alert("pola");
       }  
    else alert("eroare");
             } ,2000*(numarPasi+1)+10);
        
} */     
              
           
            






} ,200); 

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
    
 
   
