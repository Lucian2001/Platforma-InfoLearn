
var mesaj="";
    var post_tip=0;
    var inLogin=1;
    $("#myaccount").mouseover(function(){
       
        $(this).css("background-color","white"); 
        $("#login-text").css ("color","#2669d6") ; 
    })
    
      $("#myaccount").mouseout(function(){
       
        $(this).css("background-color","#2669d6"); 
        $("#login-text").css ("color","white")  ;
    })
    $("#SignUp").click(function(){
        $( "#alert" ).text(""); 
        if (inLogin==1){
         inLogin=0;
         $(".showLogin1").show();
         $("#loginModalTitle").text("Sign Up");
         $(".Signup").text("Daca ai deja un cont logeaza-te aici!");}
        else if (inLogin==0){
       
         
          $.ajax({   type:"POST",
                     url:"paginaUtilizator/signUp.php",  
                     data:"username=" + $("#username").val() + "&email=" + $("#email").val() + "&password=" + $("#password").val() +"&password1="+$("#password1").val()+ "&tipul=" + post_tip+"&varsta="+$("#varsta").val()+"&clasa=" + $("#clasa").val(), 
                  success:function(result)  
                     {   
                         $( "#alert" ).text(result);
                      }  
                
                 });
          
            
            
         
            
                       
      }
    })

     
      $("#utilizator1").click(function(){
         $("#dropdownMenuButton").text("Utilizator normal");
        $("#showLogin2").show();  
           $("#showLogin3").hide();
           post_tip=1;
      })
     $("#utilizator2").click(function(){
         $("#dropdownMenuButton").text("Profesor"); 
         $("#showLogin2").hide();
         $("#showLogin3").hide();
         post_tip=2;
     })
     $("#utilizator3").click(function(){
         $("#dropdownMenuButton").text("Elev");
          $("#showLogin3").show();
         $("#showLogin2").hide();
     post_tip=3;
     })

    $("#loginSignupButton").click(function(){
        
            if (inLogin==1){
                
                 $.ajax({   type:"POST",
                     url:"paginaUtilizator/logIn.php",  
                     data:"&email=" + $("#email").val() + "&password=" + $("#password").val() ,
                  success:function(result)  
                     {   mesaj=result;
                          
                      if ((parseInt(mesaj)+1)!=2){
                          $( "#alert" ).text(result); 
                      }else{
                          window.location.assign("http://infolearnchestie-com.stackstaging.com/index.php");
                      }}
                         
                      
               
                 });
         
                            
            } else if (inLogin == 0){
          $(".showLogin1").hide();  
          $("#loginModalTitle").text("Sign In");
          $(".Signup").text("Nu ai un cont?Crează unul acum!");
            $("#showLogin2").hide();  
           $("#showLogin3").hide();
            inLogin=1;
            $( "#alert" ).text("");}
        
          
})
   
    $("#loginVizitator").click(function(){
        
            if (inLogin==1){
                
                 $.ajax({   type:"POST",
                     url:"paginaUtilizator/logIn.php",  
                     data:"&email=" + "vizitator" + "&password=" + "vizitator" ,
                  success:function(result)  
                     { 
                          
                    
                          window.location.assign("http://infolearnchestie-com.stackstaging.com/index.php");
                      }
                         
                      
               
                 });
         
                            
            } else if (inLogin == 0){
          $(".showLogin1").hide();  
          $("#loginModalTitle").text("Sign In");
          $(".Signup").text("Nu ai un cont?Crează unul acum!");
            $("#showLogin2").hide();  
           $("#showLogin3").hide();
            inLogin=1;
            $( "#alert" ).text("");}
        
          
})
     
  $( document ).ready(function() {
   
    $("#myaccount").css ("width","180px");    

        
});
    
    