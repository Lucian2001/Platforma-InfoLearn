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
<script src="bower_components/jquery-ui/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="bower_components/jquery-ui/jquery-ui.min.css"> 

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="fisiere/css/style.css"> 

<script src="fisiere/scripts/head_script.js"></script>
    <script src="fisiere/scripts/resolutionScaling.js"></script>
     <script src="fisiere/scripts/alerte.js"></script>
<script src="fisiere/scripts/scor.js"></script>
<script src="fisiere/scripts/terminareExercitiu.js"></script>
      <script src="bower_components\sweetalert\docs\assets\sweetalert\sweetalert.min.js"></script>

</head>
<?php
include("fisiere/functions.php");

//($_GET['fisiere'] == 'timeline' and $_GET['tip_de_utilizator'] == 1 
$id1=$_SESSION['id'];
$query="SELECT *FROM users WHERE id = $id1";
if ($result1 = mysqli_query($link,$query)){
    $row1 = mysqli_fetch_array($result1);
   }  

if ( $_SESSION['id'] !="" and ($row1[4]==1||$row1[4]==3)) {
         include("fisiere/meniu.php");

        include("paginaUtilizator.php");
//include("fisiere/meniuDreapta.html");

}
else if ( $_SESSION['id'] !="" and $row1[4]==2){
        include("fisiere/meniu.php");
        include("paginaProfesor.php");
   
}else if ($_SESSION['id'] == -1){
    include("fisiere/meniu.php");

        include("paginaVizitator.php");
   
}else 
include("head.php");


?>