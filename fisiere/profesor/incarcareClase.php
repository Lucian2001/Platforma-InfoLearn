<?php
$_POST = json_decode(file_get_contents('php://input'), true);
include ($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$clasa=$_POST['clasa'];
$nr=$_POST['nr'];
$nr=mysqli_real_escape_string($link, $nr);  
$nume="clasa".$nr;

$query= "ALTER TABLE clase ADD $nume TEXT NOT NULL";
if ( $result = mysqli_query($link,$query)){
   
}else {

}
$query= "UPDATE clase SET $nume ='".mysqli_real_escape_string($link, $clasa)."'WHERE id=$id";
if ( $result = mysqli_query($link,$query)){
   
}else {
 
}
$nr= intval($nr);
$nr=$nr+1;
$query= "UPDATE clase SET numar ='$nr' WHERE id=$id";
if ( $result = mysqli_query($link,$query)){
   
}else {
  
} 
?>
