<?php
$_POST = json_decode(file_get_contents('php://input'), true);
include ("functions.php");
$id=$_SESSION['id'];
$clasa=$_POST['clasa'];
$nr=$_POST['nr'];

$nume="clasa".$nr;

$query= "ALTER TABLE clase ADD $nume TEXT NOT NULL";
if ( $result = mysqli_query($link,$query)){
    
}else {
}
$query= "UPDATE clase SET $nume ='".mysqli_real_escape_string($link, $clasa)."'WHERE id=$id";
if ( $result = mysqli_query($link,$query)){
    echo "eu";
}else {
    echo "nu";
}
$nr= intval($nr);
$nr=$nr+1;
$query= "UPDATE clase SET numar ='$nr' WHERE id=$id";
if ( $result = mysqli_query($link,$query)){
}else {
}
?>
