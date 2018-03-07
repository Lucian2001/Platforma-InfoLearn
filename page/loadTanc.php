<?php
$id=$_SESSION['id'];
$query="SELECT *FROM Tancuri WHERE id = $id";

if ($result2 = mysqli_query($link,$query)){
   $row2 = mysqli_fetch_array($result2);
   //echo $row[2];


}
?>
