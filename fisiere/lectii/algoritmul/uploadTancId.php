<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
$id1=mysqli_real_escape_string($link, $id1);
  $query="SELECT *FROM users WHERE token = '$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
$tancid=$_POST['Id'] ;
$tancid=mysqli_real_escape_string($link, $tancid);
$query = "SELECT * FROM Tancuri WHERE id = '". mysqli_real_escape_string($link,$id)."' LIMIT 1";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {
                echo "1";
$query = "UPDATE Tancuri SET tancId='$tancid' WHERE id='$id'";
if (mysqli_query($link, $query)) {

                  
} else{

}


            }else{
                echo "2";
$query = "INSERT Tancuri(`id`,`tancId`) VALUES ('$id','$tancid')";
if (mysqli_query($link, $query)) {
   


}else {
 
}

            }













?>
