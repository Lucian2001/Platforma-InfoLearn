<?php
include ($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_SESSION['id'];
  $query="SELECT *FROM users WHERE token ='$id1'";
if ($result1 = mysqli_query($link,$query)){
    $row3 = mysqli_fetch_array($result1);
   } 
$id=$row3[0]; 
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
