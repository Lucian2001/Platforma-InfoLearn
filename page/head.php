<html>
<head>
    
<title>InfoLearn</title>
<meta charset="utf-8">
 <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
 <link rel="stylesheet" href="page/s.css"> 
    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
 
  <script  href="jquery-3.2.1.min"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script> 
</head>

<body>
    
    
     <div id="left-bar">
        
       <img id="title" src="page/assets/images/titlu.png" width="90%"
        height= "6%" >
        
   
    </div>      
        <?php 
         include("functions.php");if ($_SESSION['id']) { ?>
      
      
            
         <a  id="myaccount" href="?function=logout">Logout</a>
      
      <?php } else { ?>
      
    <button id="myaccount" data-toggle="modal" data-target="#myModal"> 
            <p class="top-text" id="login-text"   font-weight=" normal;">Contul meu</p>   
            <img id="login-image" src="page/assets/images/user-icon-placeholder.png"  height="22" width="22">
         </button>
   
      
      <?php } 
         ?>
   
    

 <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="loginModalTitle" >Login</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        
      </div>
      <div class="modal-body">
          <form>
               <div  id="alert" ></div>
              
   <fieldset class="showLogin1">
    <label for="email">Username</label>
    <input type="usernam" class="form-control" id="username" placeholder="Username">
  </fieldset>
 <fieldset class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Email address">
  </fieldset>
  <fieldset class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </fieldset>
 <fieldset class="showLogin1">
    <label for="password">Confirm Password</label>
    <input type="password" class="form-control" id="password1" placeholder="Password">
  </fieldset>    
<p>   </p>
<fieldset class="showLogin1">

<div class="showLogin1" >
   <label for="password">Alege tipul de utilizator</label>
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Utilizator
                      
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" id="utilizator1">Utilizator normal</a>
    <a class="dropdown-item" href="#" id="utilizator2">Profesor</a>
    <a class="dropdown-item" href="#" id="utilizator3">Elev</a>
  </div>
</div>

 </fieldset>
  <fieldset id="showLogin2">
    <label for="varsta">Varsta</label>
    <input type="text" class="form-control" id="varsta" placeholder="Varsta dumneavoastra">
  </fieldset>
    <fieldset id="showLogin3" >
    <label for="clasa">Clasa</label>
    <input type="text" class="form-control" id="clasa" placeholder="Clasa dumneavoastra(5-12)">
  </fieldset>
</form>
      </div>
      
        <div class="modal-footer" class="showLogin">
          <a class="Signup">Nu ai un cont?Creaza unul acum!</a>
            <button class="btn btn-primary"  class="Signup" id="SignUp">Sign Up</button> 
      
        <button type="button" id="loginSignupButton"  class="btn btn-primary" >Login</button>
        </div>
    </div>
  </div>
</div>
    
   
    

    
    
<script type="text/javascript">

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
                     url:"page/signUp.php",  
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
                     url:"page/logIn.php",  
                     data:"&email=" + $("#email").val() + "&password=" + $("#password").val() ,
                  success:function(result)  
                     {   mesaj=result;
                          
                      if ((parseInt(mesaj)+1)!=2){
                          $( "#alert" ).text(result); 
                      }else{
                          window.location.assign("http://infolearn-com.stackstaging.com/index.php");
                      }}
                         
                      
               
                 });
         
                            
            } else if (inLogin == 0){
          $(".showLogin1").hide();  
          $("#loginModalTitle").text("Sign In");
          $(".Signup").text("Nu ai un cont?Creaza unul acum!");
            $("#showLogin2").hide();  
           $("#showLogin3").hide();
            inLogin=1;
            $( "#alert" ).text("");}
        
          
})
   
     
  $( document ).ready(function() {
   
    $("#myaccount").css ("width","180px");    

        
});
    
    
     
    
    
    </script>
  

<div id="pagina">

    
  <div class="column1">
        <p class="text"> &nbsp;        &nbsp;Logheaza-te pentru a invata sa programezi prin cele mai usoare si intuitive metode.</p>
  </div>
 
 
  
  <div class="row">
    <div class="col-sm">
      <div class="presentation-panel" id="presentation-panel1">
       <img class="presentation-image" src="page/assets/images/test1.png"  >
          <b align="center" class="text-presentation">-Pe aceasta platforma poti sa faci orice cpe care il vrea muschii  tai</b>
</div>
    <div class="presentation-panel"id="presentation-panel1">
        <img class="presentation-image" src="page/assets/images/test1.png"  >
    <b align="center" class="text-presentation">-Pe aceasta platforma poti sa faci orice  pe care il vrea muschii  tai</b>
        
</div>
      </div>
    <div class="col-sm">
      <div class="presentation-panel" id="presentation-panel2">
          <img class="presentation-image" src="page/assets/images/test1.png"  >
     <b align="center" class="text-presentation">-Pe aceasta platforma poti sa faci orice  pe care il vrea muschii  tai</b>
</div>
    <div class="presentation-panel" id="presentation-panel2">
        <img class="presentation-image" src="page/assets/images/test1.png"  >
    <b align="center" class="text-presentation">-Pe aceasta platforma poti sa faci orice  pe care il vrea muschii  tai</b>
</div>
    </div>
    <div class="col-sm">
     <div class="presentation-panel"id="presentation-panel3">
         <img class="presentation-image" src="page/assets/images/test1.png"  >
    <b align="center" class="text-presentation">-Pe aceasta platforma poti sa faci orice pe care il vrea muschii  tai</b>
</div>
    <div class="presentation-panel" id="presentation-panel3">
        <img class="presentation-image" src="page/assets/images/test1.png"  >
   <b align="center" class="text-presentation">-Pe aceasta platforma poti sa faci orice  pe care il vrea muschii  tai</b>
</div>
    </div>
  </div>

    
</div>
</body>

</html>