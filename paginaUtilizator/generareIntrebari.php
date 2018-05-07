<?php
$_POST = json_decode(file_get_contents('php://input'), true);
include ("functions.php");
$id1=$_POST['id1'];
$id2=$_POST['id2'];

$query="SELECT *FROM evaluare WHERE id = $id1";

if ($result = mysqli_query($link,$query)){
   $row = mysqli_fetch_array($result);
$i=$row[1];
$r1=$row[2];
$r2=$row[3];
$r3=$row[4];
$r4=$row[5];



}
$query="SELECT *FROM evaluare WHERE id = $id2";

if ($result = mysqli_query($link,$query)){
   $row = mysqli_fetch_array($result);
$i1=$row[1];
$r11=$row[2];
$r21=$row[3];
$r31=$row[4];
$r41=$row[5];


} 



$outp .= '{"Intrebare":"'.$i.'",';
$outp .= '"R1":"'.$r1.'",';
$outp .= '"R2":"'.$r2.'",';
$outp .= '"R3":"'.$r3.'",';
$outp .= '"R4":"'.$r4.'",';
$outp .= '"Intrebare1":"'.$i1.'",';
$outp .= '"R11":"'.$r11.'",';
$outp .= '"R21":"'.$r21.'",';
$outp .= '"R31":"'.$r31.'",';
$outp .= '"R41":"'.$r41.'"}';

echo $outp;


?>
