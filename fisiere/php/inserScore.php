<?php
include ($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=$_SESSION['id'];
$scor=  $_POST['scor'];


$name="scor".$_POST['nr'];

$query = "SELECT * FROM scor WHERE id = $id";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {

$query = "UPDATE scor SET $name ='$scor' WHERE id=$id";
if (mysqli_query($link, $query)) {

}else {

}
            }else{
$query = "INSERT scor(`id`) VALUES ('$id')";
if (mysqli_query($link, $query)) {
$query = "UPDATE scor SET $name ='$scor' WHERE id=$id";
if (mysqli_query($link, $query)) {

}else {

}
}else {

}
}

?>
