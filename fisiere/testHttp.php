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
if($_POST["Id"] != 0){
$query = "SELECT * FROM completat WHERE id = '". mysqli_real_escape_string($link, $_SESSION['id'])."' LIMIT 1";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {


            }else{
$query = "INSERT completat(`id`) VALUES ('$id')";
if (mysqli_query($link, $query)) {

}else {

}

            }

$query="SELECT *FROM completat WHERE id = '$id'";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
    //echo $row[2];


}
settype($row[1], "string");
$oldId=$_POST["Id"];
settype($oldId, "string");
$newId=$row[1].$oldId;
settype($newId, "string");

$query = "UPDATE completat SET complet='$newId'
 WHERE id='$id'";
if (mysqli_query($link, $query)) {

                  echo "done";

}

}










?>
