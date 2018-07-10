<?php 


session_start();
$link = mysqli_connect("localhost","lucian_infolearn","gigelfrone2001" ,"lucian_infolearn");

if (mysqli_connect_error()){
    print_r(mysqli_connect_error());
    exit();
}


    if ($_GET['function']== "logout"){
session_unset();
    
    }

  

?>



