<?php

$_POST["username"]=ucfirst($_POST["username"]);
$error=0;
if ($_POST["email"]=="" or $_POST["password"]=="" or $_POST["username"]=="" or $_POST["password1"]==""){

echo "Completează toate câmpurile.     ";
    $error=$error+1;
}else
if ( $_POST["tipul"]=="1" and  $_POST["varsta"]==""){

    $error=$error+1;
echo "Completează toate câmpurile.     ";

}else



if($_POST["tipul"]=="0"){
    echo "Alege un tip de utilizator.       ";
$error=$error+1;}
    if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {

}else {

        echo "Adresa de mail nu este validă. ";
    $error=$error+1;
    }
if(!preg_match("#[0-9]+#",$_POST["password"])) {
    $error=$error+1;   
    echo "Parola necesita cateva cifre!";
    }
    else if(!preg_match("#[A-Z]+#",$_POST["password"])) {
        $error=$error+1;
        echo "Parola necesita o litera mica!";
    }
    else if(!preg_match("#[a-z]+#",$_POST["password"])) {
       $error=$error+1;
        echo "Parola necesita o litera mare!";
    }
if (strlen($_POST["password"])<8 or strlen($_POST["password"])>24)
{
   echo "Parola nu este valida!";
    $error=$error+1;
}
if ($_POST["password"]!=$_POST["password1"])
{
   echo "Cele două parole nu coincid. ";
    $error=$error+1;
}


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

if ($error==0 and $_POST["eroare"]==0){

$query = "INSERT INTO users (`username`, `email`,`password`,`tip`,`clasa`,`varsta`) VALUES ('". mysqli_real_escape_string($link, $_POST['username'])."', '". mysqli_real_escape_string($link, $_POST['email'])."','". mysqli_real_escape_string($link, $_POST['password'])."','". mysqli_real_escape_string($link, $_POST['tipul'])."','". mysqli_real_escape_string($link, $_POST['clasa'])."','". mysqli_real_escape_string($link, $_POST['varsta'])."')";

                if (mysqli_query($link, $query)) {
                    $_SESSION['id'] = mysqli_insert_id($link);
                     $query = "UPDATE users SET password = '". md5(md5($_SESSION['id']).$_POST['password']) ."' WHERE id = ".$_SESSION['id']." LIMIT 1";
                      mysqli_query($link, $query);
                    echo "Contul  a fost creat cu succes. ";
                    echo "   Puteți să vă logați acum! ";
                    $_SESSION['id'] = mysqli_insert_id($link);
                } else {

                   echo "Nu s-a putut creea contul.Incearcă mai târziu!";

                }


}else if($error==0) {
echo "Eroare!";
} 

?>
