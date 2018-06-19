<?php
$_POST = json_decode(file_get_contents('php://input'), true);
include ($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=$_SESSION['id'];
$elev=$_POST['elev'];
$clasa=$_POST['clasa'];
$idElev=$_POST['idElev'];
$parola=$id.$idElev;
$elev=$elev."_".$id.$idElev."@elev.ro";
$id=$id.$idElev;
for ($x = 0; $x < strlen($parola); $x++) {
  $y=$parola[$x];
   
    $y=intval($y);
    $y=$y+96;
    $z=chr($y);
    $parolaNoua.=$z;
} 

$query = "INSERT INTO users (`username`, `email`,`password`,`tip`) VALUES ('". mysqli_real_escape_string($link, "elev")."', '". mysqli_real_escape_string($link, $elev)."','". mysqli_real_escape_string($link,$parolaNoua)."','". mysqli_real_escape_string($link, "3")."')";
if ( $result = mysqli_query($link,$query)){
     $newId = mysqli_insert_id($link);
$parola= md5(md5($newId).$parolaNoua);
    $query = "UPDATE users SET password = '$parola' WHERE id = $newId LIMIT 1";
                      if ( $result = mysqli_query($link,$query)){
                       
                      }else{
                       
                      }
                    
                   
}else {
    
}
$query = "INSERT INTO elevi (`numeElev`, `parolaElev`,`clasa`,`idProfesor`) VALUES ('". mysqli_real_escape_string($link, $elev)."', '". mysqli_real_escape_string($link, $parolaNoua)."','". mysqli_real_escape_string($link,$clasa)."','". mysqli_real_escape_string($link, $id)."')";
if ( $result = mysqli_query($link,$query)){
   
}else {
    
}


?>
