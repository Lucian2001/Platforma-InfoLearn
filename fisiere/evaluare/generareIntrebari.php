<?php
$_POST = json_decode(file_get_contents('php://input'), true);
include ($_SERVER['DOCUMENT_ROOT']."/fisiere/php/functions.php");
$id1=$_POST['id1'];
$id2=$_POST['id2'];
$id1=mysqli_real_escape_string($link, $id1);
$id2=mysqli_real_escape_string($link, $id2);
mysqli_real_escape_string($link, $_POST['r1']);
$query="SELECT *FROM evaluare WHERE id = $id1";
if ($result = mysqli_query($link,$query)){
   $row = mysqli_fetch_array($result);
$i=htmlspecialchars($row[1],ENT_QUOTES,'UTF-8');
$r1=htmlspecialchars($row[2],ENT_QUOTES,'UTF-8');
$r2=htmlspecialchars($row[3],ENT_QUOTES,'UTF-8');
$r3=htmlspecialchars($row[4],ENT_QUOTES,'UTF-8');
$r4=htmlspecialchars($row[5],ENT_QUOTES,'UTF-8');
}
$query="SELECT *FROM evaluare WHERE id = $id2";
if ($result = mysqli_query($link,$query)){
   $row = mysqli_fetch_array($result);
$i1=htmlspecialchars($row[1],ENT_QUOTES,'UTF-8');
$r11=htmlspecialchars($row[2],ENT_QUOTES,'UTF-8');
$r21=htmlspecialchars($row[3],ENT_QUOTES,'UTF-8');
$r31=htmlspecialchars($row[4],ENT_QUOTES,'UTF-8');
$r41=htmlspecialchars($row[5],ENT_QUOTES,'UTF-8');
}
$outp .= '{"Intrebare":"'.$i.'",';
$outp .= '"R1":"'.$r1.'",';
$outp .= '"R2":"'.$r2.'",';
$outp .= '"R3":"'.$r3.'",';
$outp .= '"R4":"'.$r4.'",';
$outp .= '"Intrebare1":"'.$i1.'",';
$outp .= '"R11":"'.$r11.'",';
$outp .= '"R21":"'.$r21.'",';
$outp .= '"R31":"'.$r31.'",';
$outp .= '"R41":"'.$r41.'"}';
echo $outp;
?>
