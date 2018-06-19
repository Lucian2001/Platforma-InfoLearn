<?php

include("functions.php");

 if ($_POST['email']=="vizitator" and  $_POST['password']=="vizitator"){
     $_SESSION['id'] = -1;
 } else{
    
$query = "SELECT * FROM users WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."' LIMIT 1";
            
            $result = mysqli_query($link, $query);
            
            $row = mysqli_fetch_assoc($result);
    
                if ($row['password'] == md5(md5($row['id']).$_POST['password'])) {
                   
                    echo "1";
                    $_SESSION['id'] = $row['id'];
                    
                } else {
                    
                    echo "Datele sunt incorecte!";
                    
                }
 }

?>

