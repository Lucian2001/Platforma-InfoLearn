<html>

<style>
#myaccount{
 margin-left:700px;
}
    #pagina{
         
       margin-top: 0px; 
    margin-left:14.5%;
    background-color: #f2f2f2;
    height: 100%;
        width: 85%;
        float:right;
    }
</style>
<body>
<div id="pagina">
        
<a  id="myaccount" href="?function=logout">Logout</a>
    
 <p>profesor</p>
</div>
    </body>
<?php

$id=$_SESSION['id'];
$query="SELECT *FROM users WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
   // echo "your username is ".$row[1] . "hello ".$row[1];
   
}
?>
    </html>