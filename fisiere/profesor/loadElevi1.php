<?php
$_POST = json_decode(file_get_contents('php://input'), true);
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$data = array();
$data['nume'] = array();
$data['parola'] = array();
$data['numar'] = array();
$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$clasa=$_POST['clasa'];
$clasa=mysqli_real_escape_string($link, $clasa);  
$i=true;$nr=1;
if($nr<10){
   $idElev=$id.$clasa."0".$nr; 
} else
$idElev=$id.$clasa.$nr;

while ($i==true){
$query = "SELECT * FROM elevi WHERE idProfesor = $idElev";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {
                   $row = mysqli_fetch_array($result);
   $data['username'][$nr]=$row[2];       
$data['nume'][$nr]=$row[1];
$data['parola'][$nr]=$row[4];

$nr=$nr+1;
if($nr<10){
   $idElev=$id.$clasa."0".$nr; 
} else
$idElev=$id.$clasa.$nr;
} else{
    
$i=false;
}
}



$data['numar'][1]=$nr;
$data= json_encode($data);
echo substr($data, 0, -2); 
?>