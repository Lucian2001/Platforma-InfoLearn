<?php 
$_POST = json_decode(file_get_contents('php://input'), true);
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);  
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
 
$enunt=mysqli_real_escape_string($link, $_POST['enunt']);
$r1=mysqli_real_escape_string($link, $_POST['r1']);
$r2=mysqli_real_escape_string($link, $_POST['r2']);
$r3=mysqli_real_escape_string($link, $_POST['r3']);
$r4=mysqli_real_escape_string($link, $_POST['r4']);

if ($enunt=="" || $r1=="" || $r2=="" || $r3=="" || $r4==""  ){
    echo 1;
} else{
 $query= "INSERT INTO evaluare (`intrebare`,`r1`,`r2`,`r3`,`r4`,`valid`) VALUES ('$enunt','$r1','$r2','$r3','$r4','0')";
             if ( $result = mysqli_query($link,$query)){
             
  for($i=1;$i<=4;$i++){
      $enunt="##&##".$i; 
      $query= "INSERT INTO evaluare (`intrebare`,`r1`,`r2`,`r3`,`r4`,`valid`) VALUES ('$enunt','2','3','4','5','1')";
        if ( $result = mysqli_query($link,$query)){}
  }
}else {
                 

}
        
}
?>