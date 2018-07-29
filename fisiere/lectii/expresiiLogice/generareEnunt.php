<?php
include ($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=rand(1,8);

$query="SELECT *FROM ExpresiiLogiceA1 WHERE id = $id";

if ($result = mysqli_query($link,$query)){
   $row = mysqli_fetch_array($result);
$intrebare=htmlspecialchars($row[1],ENT_QUOTES,'UTF-8');

$raspuns=htmlspecialchars($row[2],ENT_QUOTES,'UTF-8');


}
$outp .= '{"Intrebare":"'.$intrebare.'",';
   $outp .= '"Raspuns":"'.$raspuns.'"}';

echo $outp;

?>
