<?php
$_POST["username"]=ucfirst($_POST["username"]); 
$error=0;
if ($_POST["email"]=="" or $_POST["password"]=="" or $_POST["username"]=="" or $_POST["password1"]==""){

echo "Completeaza toate campurile.     ";
    $error=$error+1;
}else
if ( $_POST["tipul"]=="1" and  $_POST["varsta"]==""){
  
    $error=$error+1;
echo "Completeaza toate campurile.     ";
       
}else
     
if ( $_POST["tipul"]=="3" and $_POST["clasa"]==""){
echo "Completeaza toate campurile.      ";
 $error=$error+1;
}
if ( $_POST["tipul"]=="3" and $_POST["clasa"]!=""){
if(intval($_POST["clasa"])<5 or intval($_POST["clasa"])>12 ){
    echo "Clasa trebuie sa fie intre 5-12 ";
$error=$error+1;}
}

if($_POST["tipul"]=="0"){
    echo "Alege un tip de utilizator.       ";
$error=$error+1;}
    if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
     
}else {
   
        echo "Adresa de mail nu este valida. ";
    $error=$error+1;
    }
if ($_POST["password"]!=$_POST["password1"])
{
   echo "Cele doua parole nu coincid. ";
    $error=$error+1;
}
if ($_POST["varsta"]!="")
    if(intval($_POST["varsta"])<1  ){
        echo"Introduceti o varsta valida ";
$error=$error+1;}

if (strlen($_POST["username"]) < 6 or strlen($_POST["username"]) > 12   ){
  echo "Nume invalid (6-12 caractere)";
$error=$error+1;}

include("functions.php");
 
$query = "SELECT * FROM users WHERE email = '". mysqli_real_escape_string($link, $_POST['email'])."' LIMIT 1";
            $result = mysqli_query($link, $query);
            if (mysqli_num_rows($result) > 0)  {
                echo "Acest mail este deja folosit. ";
            $error=$error+1;
            }

if ($error==0){

$query = "INSERT INTO users (`username`, `email`,`password`,`tip`,`clasa`,`varsta`) VALUES ('". mysqli_real_escape_string($link, $_POST['username'])."', '". mysqli_real_escape_string($link, $_POST['email'])."','". mysqli_real_escape_string($link, $_POST['password'])."','". mysqli_real_escape_string($link, $_POST['tipul'])."','". mysqli_real_escape_string($link, $_POST['clasa'])."','". mysqli_real_escape_string($link, $_POST['varsta'])."')";
                
                if (mysqli_query($link, $query)) {
                    $_SESSION['id'] = mysqli_insert_id($link);
                     $query = "UPDATE users SET password = '". md5(md5($_SESSION['id']).$_POST['password']) ."' WHERE id = ".$_SESSION['id']." LIMIT 1";
                      mysqli_query($link, $query);
                    echo "Contul  a fost creat cu succes. ";
                    echo "   Puteti sa va logati acum! ";
                    $_SESSION['id'] = mysqli_insert_id($link);
                } else {
                    
                   echo "Nu s-a putut creea contul.Incearca mai tarziu!";
                    
                }


}

?>

