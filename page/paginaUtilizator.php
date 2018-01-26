<?php

$id=$_SESSION['id'];
$query="SELECT *FROM users WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
    $username=$row[1];
     $varsta=$row[5];
    $email=$row[2];
   
    // echo "your username is ".$row[1] . "hello ".$row[1];
   
}
include("imageUpload.php")
?>
 <?php

  $query = "select `encoded_image` from `images` where `id`=". $id;
  $result = mysqli_query($link, $query);
  if(mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_object($result);
    //echo "<br><br>";
    $image= $row->encoded_image;
  
}
?>
 
<html>
    
    <head><link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:600" rel="stylesheet">
        <link rel="stylesheet" href="page/mama11.css"> 
       <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet">  
     <script  href="jquery-3.2.1.min"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script> 
     <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    </head>

<body>
<div id="pagina1">
        
<div id="panel2">
    </div>
   


<div id="account">
    <button id="myaccount" data-toggle="modal" data-target="#myModal"> 
            <p   font-weight= "normal;" id="login-text"></p>   
            <img id="login-image" src="page/assets/images/user-icon-placeholder.png"  height="22" width="22">
    </button>
    <div id="panel">
  
        <img id ="profileImage" >
     
        
        <ul id="lista">
    
 <p class="listaText"  id="profil">    Profil utilizator</p>
 <li class="listaText" id="username1">Username:</li>
            <li class="listaText"  id="email1">Email:</li>
  
  <li class="listaText"  id="varsta1">Varsta:</li>
 
</ul>  <div class="clear-float"></div>
      <div id="butoane">
 <form method="post" action="index.php" enctype="multipart/form-data">
  
   <button id="fileupload-example-5"  class="btn btn-primary" >
    <input type="file"  name="uploadFile"  class="btn btn-primary">
    <span>Add image</span>
</button>
   <!-- <input type="file"  name="uploadFile" value="" id="addImage" />
   -->
        
 
<button  type="submit" name="submitBtn" value="Upload" class="btn btn-primary">Upload</button>
        
          </form>
     </div>
  <div class="clear-float"></div>
       <b id="completat">Completat %</b >  
        <div class="clear-float"></div>    
     <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>

           

        <a  id="myaccount1" href="?function=logout" class="btn btn-default">Logout</a>

    </div>
    
    </div>
    
    
    <?php
    if ($_GET['page'] == 'inceput'){
    include("test.html");
    }
    
    
    ?>
    
        
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
    var varsta="<?php echo $varsta?>"
    var email="<?php echo $email?>"
    var image="<?php echo $image ?>"
    var n=username.length;
             var panelOn=false;
         var n1; 
     n1=n*(29-n);
            
      
    $("#myaccount").css ("width",n1);    
    $("#login-text").text(username);
    $("#username1").text("Username: "+username);
    $("#varsta1").text("Varsta: "+varsta);
    $("#email1").text("Email: "+email);
    $("#profileImage" ).attr("src",image);
        
});
        
       
    </script>

    </html>