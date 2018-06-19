$("#myaccount").mouseout(function(){
         

        $(this).css("background-color","#2669d6");
        $("#login-text").css ("color","white")  ;
    })

     $("#myaccount").mouseover(function(){

        $(this).css("background-color","white");
        $("#login-text").css ("color","#2669d6") ;
    })
    var panelOn=false;

        $("#myaccount").click(function(){
     
            
            
           if (panelOn == false){
            $("#panel").show();
           panelOn=true;
                      progres(); 
           }else{
             $("#panel").hide();
           panelOn=false;
           }

    })
        $( document ).ready(function() {
            
            
            $.ajax({   type:"GET",
  url:"pagini/scripts/loadDateUtilizator.php",
success:function(result)
  {
             
var data = jQuery.parseJSON(result);

 
 
      
      var height=$(document).height();
        var width=$(document).width(); 
     if (width<1800&&height<900&&width>1400&&height>750){
         $(".textLista").css("font-size","18px");
     } else if(width<1400&&height<890){
          $(".textLista").css("font-size","15px");
}
            
            if ( window.location.href=="http://infolearnchestie-com.stackstaging.com/index.php"){
                $("#continutInfo").show();
            } else{
                    $("#continutInfo").hide();
            }
    var username= data.username;
    var email=data.email;
    
    var image=data.image;
    var n=username.length;
             var panelOn=false;
         var n1;
     n1=n*(29-n);


    $("#myaccount").css ("width",n1);
    $("#login-text").text(username);
    $("#username1").text("Username: "+username);
   
    $("#email1").text("Email: "+email);
    $("#profileImage" ).attr("src",image);
  }});
            

});

    var vector1=[];
    // DECLARARE VECTOR CU TOATE PAGINILE
    vector1[11]=0;
     vector1[12]=0;
     vector1[13]=0;
     vector1[21]=0;
     vector1[22]=0;
     vector1[23]=0;
     vector1[31]=0;
     vector1[32]=0;
     vector1[41]=0;
     vector1[51]=0;
     vector1[52]=0;
     vector1[53]=0;
     vector1[54]=0;
     vector1[61]=0;
     vector1[62]=0;
     vector1[63]=0;
     vector1[64]=0;
    //
        
function progres(){ var x=0;
                    $.ajax({   type:"GET",
  url:"pagini/scripts/loadDateUtilizator.php",
success:function(result)
  {
      var data = jQuery.parseJSON(result);
  username=data.save;
    username=username.toString();
   // alert((username.length)/3);
    if (username!=""){
     var usernameLength=username.length;
    var id1; 
    for( i=1;i<=usernameLength/3;i++){
      id1=username.substr(username.length - 3);
        username=username.slice(0,-3);
       // alert(username);

id1=parseInt(id1);
        id1=id1%100;
    
        vector1[id1]++;
     }
    for(var i=10;i<=64;i++){
 if(vector1[i]==0){
x++;
 }
        
    }
   x=((18-x)/18)*100;
    x=parseInt(x);
        $("#completat").html("Completat: "+x+"%");
        $("#progresTotal").css("width",x+"%");
    } else{
x=0;
        $("#completat").html("Completat: "+x+"%");
        $("#progresTotal").css("width",x+"%");
    }
  }
                           })
    
}        
        