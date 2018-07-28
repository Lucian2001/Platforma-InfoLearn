<?php 
$_POST = json_decode(file_get_contents('php://input'), true);
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 

$nrIntrebari=mysqli_real_escape_string($link, $_POST['numarIntrebari']);
$clasa=mysqli_real_escape_string($link, $_POST['clasa']);
$numar=mysqli_real_escape_string($link, $_POST['numar']);

if ($nrIntrebari<6 or $nrIntrebari>25 ){
    echo 1;
} else{
   
    for($i=1;$i<=$numar;$i++){
         if($i<10){
     $idProfesor=$id.$clasa."0".$i;
             $query= "UPDATE elevi SET numarIntrebari ='".mysqli_real_escape_string($link, $nrIntrebari)."'WHERE idProfesor=$idProfesor";
             if ( $result = mysqli_query($link,$query)){
                 
  
}else {
 
}
             
             
$query= "UPDATE elevi SET scorEvaluare=NULL WHERE idProfesor=$idProfesor";
             if ( $result = mysqli_query($link,$query)){
                 
  
}else {
 
}
         }else{
              $idProfesor=$id.$clasa.$i;
             $query= "UPDATE elevi SET numarIntrebari ='".mysqli_real_escape_string($link, $nrIntrebari)."'WHERE idProfesor=$idProfesor";
             if ( $result = mysqli_query($link,$query)){
                 
  
}else {
 
}
             $query= "UPDATE elevi SET scorEvaluare='".NULL."'WHERE idProfesor=$idProfesor";
             if ( $result = mysqli_query($link,$query)){
                 
  
}else {
 
}
             
         }
    }
}
?>