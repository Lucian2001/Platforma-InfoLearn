<?php
 include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
 $id=$_SESSION["id"];

$query="SELECT *FROM completat WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);

  echo $row[1];

}



?>
