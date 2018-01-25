<?php
include("page/functions.php");

//($_GET['page'] == 'timeline' and $_GET['tip_de_utilizator'] == 1 
$id1=$_SESSION['id'];
$query="SELECT *FROM users WHERE id = $id1";
if ($result1 = mysqli_query($link,$query)){
    $row1 = mysqli_fetch_array($result1);
   }  
if ( $_SESSION['id'] !="" and $row1[4]==1) {
         include("page/meniu.html");

        include("page/paginaUtilizator.php");
//include("page/meniuDreapta.html");

}
else if ( $_SESSION['id'] !="" and $row1[4]==2){
        include("page/meniu.html");
        include("page/paginaProfesor.php");
        include("page/meniuDreapta.html");
}
else if ( $_SESSION['id'] !="" and $row1[4]==3){
include("page/meniu.html");
        include("page/paginaElev.php");
include("page/meniuDreapta.html");
} else
include("page/head.php");

include("page/bottom.php");
?>