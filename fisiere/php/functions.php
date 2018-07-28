<?php 


session_start();
$link = mysqli_connect("localhost","lucian_infolearn","gigelfrone2001" ,"lucian_infolearn");

if (mysqli_connect_error()){
    print_r(mysqli_connect_error());
    exit();
}


    if ($_GET['function']== "logout"){

        $id=$_SESSION['id'];
        $id1=mysqli_real_escape_string($link, $id1);  
        $query = "UPDATE users SET  token=NULL WHERE token='$id'";
                    
                if($result2 = mysqli_query($link, $query)) {
                       
                    } else{
                    
                    }
    session_unset();
    }

?>



