<html>
<head>
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
<script src="paginaUtilizator/scripts/angularscript11.js"></script>

</head>
    
<body ng-app="myApp">
    
    
     <div id="left-bar">
        
       <img id="title" src="paginaUtilizator/assets/images/titlu.png" width="90%"
        height= "6%" >
        
   
    </div>      
        <?php 
         include("paginaUtilizator/functions.php");if ($_SESSION['id']) { ?>
      
      
            
         <a  id="myaccount" href="?function=logout">Logout</a>
      
      <?php } else { ?>
      
    <div id="myaccount" data-toggle="modal" data-target="#myModal"> 
            <p class="top-text" id="login-text"   font-weight=" normal;">Contul meu</p>   
            <img id="login-image" src="paginaUtilizator/assets/images/user-icon-placeholder.png"  height="22" width="22">
         </div>
   
      
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
 <!--   <a class="dropdown-item" href="#" id="utilizator2">Profesor</a>
    <a class="dropdown-item" href="#" id="utilizator3">Elev</a> -->
  </div>
</div>

 </fieldset>
  <fieldset id="showLogin2">
    <label for="varsta">Vârstă</label>
    <input type="text" class="form-control" id="varsta" placeholder="Vârsta dumneavoastră">
  </fieldset>
    <fieldset id="showLogin3" >
    <label for="clasa">Clasă</label>
    <input type="text" class="form-control" id="clasa" placeholder="Clasa dumneavoastra(5-12)">
  </fieldset>
</form>
      </div>
      
        <div class="modal-footer" class="showLogin">
          
            <button class="btn btn-primary"  class="Signup" id="SignUp">Sign Up</button> 
    
        <button type="button" id="loginSignupButton"  class="btn btn-primary" >Login</button>
              <button type="button" id="loginVizitator"  class="btn btn-primary" >Logheaza-te ca vizitator</button>
        </div>
    </div>
  </div>
</div>
    
   
    

  <script type="text/javascript" src="paginaUtilizator/scripts/head_script.js"></script>  
    

<div id="pagina">

    
  <div class="column1">
        <p class="text"> &nbsp;        &nbsp;Loghează-te pentru a învăța informatica prin cele mai ușoare și intuitive metode.</p>
  </div>
 
 
  
  <div class="row">
    <div class="col-sm">
      <div class="presentation-panel" id="presentation-panel1">
       <img class="presentation-image" src="paginaUtilizator/assets/images/imaginiPrezentare/1.PNG"  >
        <div class="expl-box-fi-text" ng-fi-text="Interfața este atractivă și ușor de folosit. Butoanele sunt bine plasate și facilitează rezolvarea exercițiilor, sarcinilor de lucru, ele devenind astfel nu doar ușoare, ci și atractive."></div>
</div>
    <div class="presentation-panel"id="presentation-panel1">
        <img class="presentation-image" src="paginaUtilizator/assets/images/imaginiPrezentare/2.PNG"  >
   <div class="expl-box-fi-text" ng-fi-text="Informația pentru fiecare lecție este clară și organizată în așa fel încât să permită o descriere foarte bună. Sursa de unde a fost preluată o constituie manualul de informatică de clasa a V-a, ceea ce asigură corectitudinea infomației. "></div>
        
</div>
      </div>
    <div class="col-sm">
      <div class="presentation-panel" id="presentation-panel2">
          <img class="presentation-image" src="paginaUtilizator/assets/images/imaginiPrezentare/3.PNG"  >
     <div class="expl-box-fi-text" ng-fi-text="Pentru înțelegerea căt mai bună a conținutului, au fost create aplicații ușor de utilizat de către elev. Folosirea acestora îi ușurează învățarea, ajutându-l, într-o formă interactivă, să rețină informațiile importante."></div>
</div>
    <div class="presentation-panel" id="presentation-panel2">
        <img class="presentation-image" src="paginaUtilizator/assets/images/imaginiPrezentare/4.PNG"  >
  <div class="expl-box-fi-text" ng-fi-text="Un alt avantaj al aplicațiilor create este acela că ele diferă de la un utilizator la altul, evitându-se astfel preluarea informației fără efort.Deoarece acestea se generează aleatoriu și nu sunt identice, fiecare elev este pus în ipostaza de a rezolva singur."></div>
</div>
    </div>
    <div class="col-sm">
     <div class="presentation-panel"id="presentation-panel3">
         <img class="presentation-image" src="paginaUtilizator/assets/images/imaginiPrezentare/5.PNG"  >
   <div class="expl-box-fi-text" ng-fi-text="Platforma are un sistem de logare, ceea ce oferă fiecărui elev o serie de beneficii, cum ar fi : exercițiile rezolvate vor fi salvate,se rețin o serie de date despre utilizator care au anumite utilizări."></div>
</div>
    <div class="presentation-panel" id="presentation-panel3">
        <img class="presentation-image" src="paginaUtilizator/assets/images/imaginiPrezentare/6.PNG"  >
  <div class="expl-box-fi-text" ng-fi-text="Pentru fiecare exercițiu rezolvat elevul va primi un feedback, putându-se astfel evalua nivelul cunoștințelor în acel moment."></div>
</div>
    </div>
  </div>

    
</div>
</body>

</html>