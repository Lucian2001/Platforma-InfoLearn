<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$query = "SELECT * FROM clase WHERE id = $id";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {
              $query="SELECT *FROM clase WHERE id = $id";
              if ($result = mysqli_query($link,$query)){
                 $row = mysqli_fetch_array($result);
          

              }

} else{
  $query = "INSERT clase(`id`,`numar`) VALUES ('$id','1')";
  if (mysqli_query($link, $query)) {

  }else {

  }
}
$clase1="";
$nr= intval($row[1]);
$nr=$nr+1;
for ($i = 2; $i <= $nr; $i++) {
    $clase1=$clase1.$row[$i]."#";
} 
$clase1=$clase1.$row[1];
echo htmlspecialchars($clase1,ENT_QUOTES,'UTF-8');
 ?>
