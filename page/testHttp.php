<?php
include("functions.php");
//var $id2;

//echo $_POST["Id"];

$id=$_SESSION['id'];
$doi=2;

//$query1="insert into `completed` set  `complete` = '".$doi."'";;
//if (mysqli_query($link, $query1)){
  //  echo "heelo";
//}else{
//echo "dv";
//}
$query="SELECT *FROM completat WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
    //echo $row[2];
     
    
}
$newId=$row[1]*1000+$_POST["Id"];
echo $newId;
$query = "UPDATE completat SET complet=7 , save=8 WHERE id='$id'";
if (mysqli_query($link, $query)) {
                
                  
                  
}











?>
