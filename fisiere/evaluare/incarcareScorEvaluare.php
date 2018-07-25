<?php 
$_POST = json_decode(file_get_contents('php://input'), true);
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$scor=mysqli_real_escape_string($link, $_POST['scor']);
$query="SELECT * FROM elevi WHERE numeElev = '$row3[2]'";
if ($result = mysqli_query($link,$query)){
    $row2 = mysqli_fetch_array($result);
   } 
$oldScor=$row2[8];

 if ($oldScor==NULL){

     $newScor=$scor;
     $query="UPDATE elevi SET scorEvaluare='$newScor' WHERE numeElev = '$row3[2]'";
if ( mysqli_query($link,$query)){
    
   } else{

}
 } else{
     
     $newScor=$oldScor.$scor;
        $query="UPDATE  elevi SET scorEvaluare='$newScor' WHERE numeElev = '$row3[2]'";
if ( mysqli_query($link,$query)){
    
   }else{

} 
 }
?>