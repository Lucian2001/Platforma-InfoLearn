<?php
 include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
  $query="SELECT *FROM users WHERE token ='$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 

$query="SELECT *FROM completat WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);

  echo $row[1];

}



?>
