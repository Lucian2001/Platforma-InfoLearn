<?php
include("page/functions.php");
$id=$_SESSION['id'];
alert($_POST["Id"]);
if($_POST["Id"] == "dassda"){
$query = "SELECT * FROM Tancuri WHERE id = '". mysqli_real_escape_string($link, $_SESSION['id'])."' LIMIT 1";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {


            }else{
$query = "INSERT Tancuri(`id`) VALUES ('$id')";
if (mysqli_query($link, $query)) {

}else {

}

            }





$query = "UPDATE Tancuri SET tancId='$_POST["Id"]'
 WHERE id='$id'";
if (mysqli_query($link, $query)) {

                  echo "done";

}

}






?>
