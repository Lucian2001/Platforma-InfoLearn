<?php

$id=$_SESSION['id'];
$query="SELECT *FROM users WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
    $username=$row[1];
    
    // echo "your username is ".$row[1] . "hello ".$row[1];
   
}
?>
<html>
    
    <head><link rel="stylesheet" href="page/style.css"> 
     <script  href="jquery-3.2.1.min"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script> 
    </head>

<body>
<div id="pagina1">
        

    


<div id="account">
    <button id="myaccount" data-toggle="modal" data-target="#myModal"> 
            <p class="top-text" id="login-text"></p>   
            <img id="login-image" src="page/assets/images/user-icon-placeholder.png"  height="22" width="22">
    </button>
    <div id="panel">
    
    
        <p>Username</p>
        <p>Varsta</p>
        <p>Completat %</p>
        <button  id="" class="btn btn-warning">Incarca o imagine</button>
        <img  src="page/assets/images/user-icon-placeholder.png"  >
        <div class="progress">
  <div class="progress-bar" role="progressbar" style="width:90%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        <a  id="myaccount1" href="?function=logout" class="btn btn-warning">Logout</a>
    </div>
    
    </div>
    
    
    
     <p>utilizator</p>
    
    </div>
</body>
    <script>
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
    var username= "<?php echo $username?>"
    var n=username.length;
             var panelOn=false;
         var n1; 
     if (n<8){
         n1=n*22;  
     } else if(n<12){
             n1=n*19;
     } else if(n<15){
            n1=n*16;
     } else
         {
             n1=n*15;
         }
      
    $("#myaccount").css ("width",n1);    
    $("#login-text").text(username);
        
});
        
       
    </script>

    </html>