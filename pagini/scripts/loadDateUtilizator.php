<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=$_SESSION['id'];
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/saveProgres.php");
$data = array();

$query="SELECT *FROM completat WHERE id = $id";

if ($result2 = mysqli_query($link,$query)){
    $row2= mysqli_fetch_array($result2);
$data["save"]=$row2[1];


}


$query="SELECT *FROM users WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
   $data['username']=$row[1];
   $data['email']=$row[2];

    // echo "your username is ".$row[1] . "hello ".$row[1];

}
include("fisiere/php/imageUpload.php")
?>
 <?php

  $query = "select `encoded_image` from `images` where `id`=". $id;
  $result = mysqli_query($link, $query);
  if(mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_object($result);
    //echo "<br><br>";
    $image= $row->encoded_image;
$data['image'] = $image;
}

$data= json_encode($data);
echo $data;
?>
