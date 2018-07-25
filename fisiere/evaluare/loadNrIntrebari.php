<?php 
$_POST = json_decode(file_get_contents('php://input'), true);
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$email=$row3[2];

$query="SELECT *FROM elevi WHERE numeElev = '$email'";
if ($result = mysqli_query($link,$query)){
    $row1 = mysqli_fetch_array($result);
   } 

if($row1[7]=="" or $row1[7]==NULL or $row1[7]>30 or $row1[7] <5){
echo 10;
} else {
echo $row1[7];
}
?>