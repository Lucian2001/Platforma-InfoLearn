<head>
<meta charset="utf-8">
 <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>InfoLearn</title>
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.min.js"></script>
    <script src="bower_components/dist/ng-fi-text.min.js"></script>
<script src="https://code.angularjs.org/1.4.0/angular-route.min.js"></script>
    <script src="bower_components/angular-animate/angular-animate.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="page/mama18.css"> 
<script src="page/head_script.js"></script>

</head>
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