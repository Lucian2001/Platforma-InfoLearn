<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$query="SELECT *FROM Tancuri WHERE id = $id";

if ($result2 = mysqli_query($link,$query)){
   $row2 = mysqli_fetch_array($result2);
   echo htmlspecialchars($row2[1],ENT_QUOTES,'UTF-8');


}

?>
