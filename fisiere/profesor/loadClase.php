<?php
include($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id=$_SESSION['id'];
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
echo $clase1;
 ?>
