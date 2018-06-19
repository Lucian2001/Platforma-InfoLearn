<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=$_SESSION['id'];
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