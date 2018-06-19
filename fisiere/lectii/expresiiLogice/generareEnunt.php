<?php
include ($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=rand(1,8);

$query="SELECT *FROM ExpresiiLogiceA1 WHERE id = $id";

if ($result = mysqli_query($link,$query)){
   $row = mysqli_fetch_array($result);
$intrebare=$row[1];
$raspuns=$row[2];


}
$outp .= '{"Intrebare":"'.$intrebare.'",';
   $outp .= '"Raspuns":"'.$raspuns.'"}';

echo $outp;

?>
