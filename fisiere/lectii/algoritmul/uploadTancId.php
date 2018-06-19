<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=$_SESSION['id'];
$tancid=$_POST['Id'] ;
$query = "SELECT * FROM Tancuri WHERE id = '". mysqli_real_escape_string($link, $_SESSION['id'])."' LIMIT 1";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {


            }else{
$query = "INSERT Tancuri(`id`) VALUES ('$id')";
if (mysqli_query($link, $query)) {

}else {

}

            }





$query = "UPDATE Tancuri SET tancId='$tancid' WHERE id='$id'";
if (mysqli_query($link, $query)) {

                  echo "done";

} else{

}








?>
