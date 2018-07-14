<?php

include("functions.php");
$query = "SELECT * FROM users WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."' LIMIT 1";
                    if($result2 = mysqli_query($link, $query)) {
                      $row1 = mysqli_fetch_array($result2);  
                        $incercari=$row1[5]; //echo $incercari;
                    } else{
                      
                    }

 if ($_POST['email']=="vizitator" and  $_POST['password']=="vizitator"){
     $_SESSION['id'] = -1;
 } else{
    
$query = "SELECT * FROM users WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."' LIMIT 1";
            
            $result = mysqli_query($link, $query);
            
            $row = mysqli_fetch_assoc($result);
    
                if ($row['password'] == md5(md5($row['id']).$_POST['password'])) {
                   
               echo "1";
                    $incercari=1;
                     
                   $current_timestamp = time();
                   
                $salt=openssl_random_pseudo_bytes(20);
                  $token = openssl_random_pseudo_bytes(16);
                $token=$token.base64_encode($email);                    
              $token1 = bin2hex($token);
              $token2=bin2hex($salt.base64_encode($row[2]));    
          
                    $token=$token1.$token2;
      
                    $query = "UPDATE users SET time=$current_timestamp, token='$token' WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."'";
                    
                if($result2 = mysqli_query($link, $query)) {
                       
                    } else{
                    
                    }
                    
                    
                    $_SESSION['id'] =$token;
                    $query = "UPDATE users SET incercari=$incercari WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."' LIMIT 1";
                
                } else {
                    
                    
                   
                    $incercari=$incercari+1;
                    if ($incercari>10){
                        $incercari=1;
                        $query = "UPDATE users SET incercari=$incercari WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."' LIMIT 1";
                    if($result1 = mysqli_query($link, $query)) {
                        
                    } else{
                       
                    }
                        echo "1";
                    } else{
                        echo "Datele sunt incorecte!";
            

                    }
                    $query = "UPDATE users SET incercari=$incercari WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."' LIMIT 1";
                    if($result1 = mysqli_query($link, $query)) {
                        
                    } else{
                       
                    }
                       }
 }

?>

