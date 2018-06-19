<?php 


session_start();
$link = mysqli_connect("shareddb-g.hosting.stackcp.net","InfolearnUsers-32374ebf","gigelfrone2001" ,"InfolearnUsers-32374ebf");

if (mysqli_connect_error()){
    print_r(mysqli_connect_error());
    exit();
}


    if ($_GET['function']== "logout"){
session_unset();
    
    }

  

?>



