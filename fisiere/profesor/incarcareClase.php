<?php
$_POST = json_decode(file_get_contents('php://input'), true);
include ($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=$_SESSION['id'];
$clasa=$_POST['clasa'];
$nr=$_POST['nr'];
echo $nr;
$nume="clasa".$nr;
echo $nume;
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
