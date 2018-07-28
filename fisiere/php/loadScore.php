<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$nr=$_POST['nr'];
$nr=mysqli_real_escape_string($link, $nr);  

              $query="SELECT * FROM scor WHERE id = $id";
              if ($result = mysqli_query($link,$query)){
                 $row = mysqli_fetch_array($result);
                  
           } else{
                  
              }



echo htmlspecialchars($row[$nr],ENT_QUOTES,'UTF-8');
 ?>