var eroare;
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
            eroare=0;
        username=$("#username").val();
            email=$("#email").val();
            parola=$("#password").val();
            parola1=$("#password1").val();
            username=clearSpaces(username);
            email=clearSpaces(email);
          parola=clearSpaces(parola);
             parola1=clearSpaces(parola1);
            
            if (username=="" || email=="" || post_tip==0 || parola=="" || parola1==""){
                eroare=1;
            }
             if(username.length<6 || username.length>12){
                 eroare=1;
             }
            if(testParola(parola)==false){
                
eroare=1;
            } 
            if (parola.length<8 || parola.length>24){
                eroare=1;
            } 
            if (parola!=parola1){
            eroare=1;
            }
            if(!validateEmail(email)){
                eroare=1;
            }
   
          $.ajax({   type:"POST",
                     url:"fisiere/php/signUp.php",  
                     data:"username=" + username + "&email=" + email + "&password=" + parola +"&password1="+parola1+ "&tipul=" + post_tip+"&eroare="+eroare+"&clasa=" + $("#clasa").val(),
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
                     url:"fisiere/php/logIn.php",  
                     data:"&email=" + $("#email").val() + "&password=" + $("#password").val() ,
                  success:function(result)  
                     {   
                          mesaj=result;
                        
                      if ((parseInt(mesaj)+1)!=2){
                          $( "#alert" ).text(result); 
                      }else{
                         window.location.assign("https://infolearn.ml/index.php");
                      }
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
   
    $("#loginVizitator").click(function(){
        
            if (inLogin==1){
                
                 $.ajax({   type:"POST",
                     url:"fisiere/php/logIn.php",  
                     data:"&email=" + "vizitator" + "&password=" + "vizitator" ,
                  success:function(result)  
                     { 
                          
                    
                          window.location.assign("https://infolearn.ml/index.php");
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
function clearSpaces(x){
for(i=1;i<x.length;i++){
    if (x[i]==" "){
         alert("Ai introdus spatii in casete, datele tale au fost validate fara saptii!");
    }
}
return x.replace(/\s/g,''); 
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function testString(s) {
  var re = /[a-z]\d|\d[a-z]/i;
  return re.test(s) && s.length > 3;
}
   
    function testParola(inputtxt) 
{ 
var passw= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
return passw.test(inputtxt);

}