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
           }else{
             $("#panel").hide();
           panelOn=false;
           }

    })
        $( document ).ready(function() {
             var height=$(document).height();
        var width=$(document).width();
     if (width<1800&&height<900&&width>1400&&height>890){
         $(".textLista").css("font-size","18px");
     } else if(width<1400&&height<890){
          $(".textLista").css("font-size","15px");
}
            
            if ( window.location.href=="https://infolearn.ml/index.php"){
                $("#continutInfo").show();
            } else{
                    $("#continutInfo").hide();
            }
  
    var n=username.length;
             var panelOn=false;
         var n1;
     n1=n*(29-n);


    $("#myaccount").css ("width",n1);
    $("#login-text").text(username);
    $("#username1").text("Username: "+username);
 
    $("#email1").text("Email: "+email);
    $("#profileImage" ).attr("src",image);

});