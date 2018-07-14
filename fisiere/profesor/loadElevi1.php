<?php
$_POST = json_decode(file_get_contents('php://input'), true);
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$data = array();
$data['nume'] = array();
$data['parola'] = array();
$data['numar'] = array();
$id1=$_SESSION['id'];
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$clasa=$_POST['clasa'];

$i=true;$nr=1;
$idElev=$id.$clasa.$nr;

while ($i==true){
$query = "SELECT * FROM elevi WHERE idProfesor = $idElev";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {
                   $row = mysqli_fetch_array($result);
          
$data['nume'][$nr]=$row[1];
$data['parola'][$nr]=$row[2];

$nr=$nr+1;
$idElev=$id.$clasa.$nr;
} else{
    
$i=false;
}
}



$data['numar'][1]=$nr;
$data= json_encode($data);
echo substr($data, 0, -2); 
?>