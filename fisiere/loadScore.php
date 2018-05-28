<?php
include("functions.php");
$id=$_SESSION['id'];
$nr=$_POST['nr'];

              $query="SELECT * FROM scor WHERE id = $id";
              if ($result = mysqli_query($link,$query)){
                 $row = mysqli_fetch_array($result);
                  
           } else{
                  
              }



echo $row[$nr];
 ?>