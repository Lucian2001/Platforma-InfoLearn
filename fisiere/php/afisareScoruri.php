<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");

$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token ='$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$data['scor'] = array();
   $query="SELECT * FROM scor WHERE id = $id";
              if ($result = mysqli_query($link,$query)){
                 $row = mysqli_fetch_array($result);
                  
           } else{
                  
              }
for($i=1;$i<=17;$i++){
$data['scor'][$i]=$row[$i+1];
}

$data= json_encode($data);
echo $data;
//echo substr($data, 0, -2); 


 ?>