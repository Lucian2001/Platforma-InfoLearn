<html>
<head>
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">


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
    
   
    

  <script type="text/javascript" src="page/scripts/head_script.js"></script>  
    

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