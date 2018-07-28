<?php

error_reporting(0);
$_POST = json_decode(file_get_contents('php://input'), true);
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$data = array();
$data['scoruri'] = array();
$clasa=$_POST['clasa'];
$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0];$counter; 
$ok=2;$idProfesor=$id.$clasa."01";

for($i=2;$i<=30;$i++){
$query="SELECT *FROM elevi WHERE idProfesor = '$idProfesor'";
if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
  if ($row[3]!=""){
$idElev= $row[3];
        $query="SELECT *FROM scor WHERE id = '$idElev'";
if ($result2 = mysqli_query($link,$query)){
    $rowScor = mysqli_fetch_array($result2);
 for($j=1;$j<=19;$j++)
    $data['scoruri'][$i][$j]=htmlspecialchars($rowScor[$j],ENT_QUOTES,'UTF-8');  
    //echo $rowScor[1]."&";
} else{
    
}
   } else{
//echo"*";
    }




}
    if ($i<10){
  $idProfesor=$id.$clasa."0".$i;  
} else{
    $idProfesor=$id.$clasa.$i;      
}
   
}



$data= json_encode($data);
echo $data;
?>
