<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
 $id1=$_SESSION['id']; 
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 




include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/saveProgres.php");
$data = array();

$query="SELECT *FROM completat WHERE id = '$id'";

if ($result2 = mysqli_query($link,$query)){
    $row2= mysqli_fetch_array($result2);
$data["save"]=$row2[1];


}


$query="SELECT *FROM users WHERE id = '$id'";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
   
    $data['username']=$row[1];
   $data['email']=$row[2];

    // echo "your username is ".$row[1] . "hello ".$row[1];

}
$data= json_encode($data);
echo $data; 
?>




