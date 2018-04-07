<?php

$id=$_SESSION['id'];

$query="SELECT *FROM users WHERE id = $id";

if ($result1 = mysqli_query($link,$query)){
    $row = mysqli_fetch_array($result1);
    $username=$row[1];
     $varsta=$row[5];
    $email=$row[2];

    // echo "your username is ".$row[1] . "hello ".$row[1];

}
include("imageUpload.php")
?>
 <?php

  $query = "select `encoded_image` from `images` where `id`=". $id;
  $result = mysqli_query($link, $query);
  if(mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_object($result);
    //echo "<br><br>";
    $image= $row->encoded_image;

}
?>

<html>



<body>
<div id="pagina1">
    <div id="continutInfo">
     <h1 id="titluInfo">Platforma InfoLearn</h1>
        <ul id="listaInfo">
  <li class="componentaLista"><h5 class="textLista">&nbsp;&nbsp;&nbsp;Societatea actuală este într-o continuă modernizare, iar domeniul IT cunoaște o dezvoltare rapidă. Informatica devine tot mai mult o necesitate, iar formarea competențelor în această direcție este o preocupare constantă la nivelul sistemului de învățământ. </h5></li>
  <li class="componentaLista"><h5 class="textLista">&nbsp;&nbsp;&nbsp;Această platformă a fost creată avându-se în vedere această orientare și tendința actuală de a iniția elevii de vârste cât mai mici în tainele informaticii. Ea a fost gândită în forma unui site pentru a fi orcând la îndemâna oricărui utilizator, accesul făcându-se rapid, nefiind nevoie de instalarea unor programe adiționale.</h5></li>
  <ul style="  list-style-type:circle;"><h5 class="textLista">Pentru realizarea acestui proiect s-au folosit:
      <li class="componentaLista1" style="margin-top:1.5%;"><h5 class="textLista">Html</h5 class="textLista"></li>
      <li class="componentaLista1"><h5 class="textLista">Css</h5></li>
      <li class="componentaLista1"><h5 class="textLista">Bootstrap</h5></li>
      <li class="componentaLista1"><h5 class="textLista">JavaScript</h5></li>
      <li class="componentaLista1"><h5 class="textLista">jQuery</h5></li>
      <li class="componentaLista1"><h5 class="textLista">AngularJs</h5></li>
      <li class="componentaLista1"><h5 class="textLista">mySql</h5></li>
      <li class="componentaLista1"><h5 class="textLista">Php</h5></li></h5></ul>
    <li class="componentaLista"><h5 class="textLista">&nbsp;&nbsp;&nbsp;Platforma oferă aplicații simple și atractive, ușor de folosit de elevii de clasa a V-a cărora le este destinată. Este o formă interactivă de învățare, o modalitate de dezvoltare a compentențelor IT care, cu siguranță, îi va atrage și îi va face să înțeleagă conținuturile mai bine.</h5></li>    
    <li class="componentaLista"><h5 class="textLista">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Realizator: Busuioc Lucian – Gabriel</h5></li> 
    <li><h5 class="textLista">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact: gabriellucian@rocketmail.com</h5></li> 
    <li><h5 class="textLista">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telefon: 0722382454  </h5></li> 
 </ul>
    </div>
<div id="panel2">
    </div>



<div id="account">
    <div id="myaccount" data-toggle="modal" data-target="#myModal">
            <p   font-weight= "normal;" id="login-text"></p>
            <img id="login-image" src="page/assets/images/user-icon-placeholder.png"  height="22" width="22">
    </div>
    <div id="panel">

        <img id ="profileImage" >


        <ul id="lista">

 <p class="listaText"  id="profil">    Profil utilizator</p>
 <li class="listaText" id="username1">Username:</li>
            <li class="listaText"  id="email1" style="font-size:16px;">Email:</li>

  <li class="listaText"  id="varsta1">Varsta:</li>

</ul>  <div class="clear-float"></div>
      <div id="butoane">
 <form method="post" action="index.php" enctype="multipart/form-data">

   <button id="fileupload-example-5"  class="btn btn-primary" >
    <input type="file"  name="uploadFile"  class="btn btn-primary">
    <span>Add image</span>
</button>
   <!-- <input type="file"  name="uploadFile" value="" id="addImage" />
   -->


<button  type="submit" name="submitBtn" value="Upload" class="btn btn-primary">Upload</button>

          </form>
     </div>
  <div class="clear-float"></div>
       <b id="completat">Completat %</b >
        <div class="clear-float"></div>
     <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>



        <a  id="myaccount1" href="?function=logout" class="btn btn-default">Logout</a>

    </div>

    </div>


    <?php
    if ($_GET['page'] == 'inceput'){
    include("main.html");

    } else if( $_GET['page'] == 'compilator'){
include("compilator.php");
    }


    ?>


    </div>

</body>
    <script>
      $("#myaccount").mouseout(function(){

        $(this).css("background-color","#2669d6");
        $("#login-text").css ("color","white")  ;
    })

     $("#myaccount").mouseover(function(){

        $(this).css("background-color","white");
        $("#login-text").css ("color","#2669d6") ;
    })
    var panelOn=false;

        $("#myaccount").click(function(){
           if (panelOn == false){
            $("#panel").show();
           panelOn=true;
           }else{
             $("#panel").hide();
           panelOn=false;
           }

    })
        $( document ).ready(function() {
             var height=$(document).height();
        var width=$(document).width();
     if (width<1800&&height<900&&width>1400&&height>890){
         $(".textLista").css("font-size","18px");
     } else if(width<1400&&height<890){
          $(".textLista").css("font-size","15px");
}
            
            if ( window.location.href=="http://infolearn-com.stackstaging.com/index.php"){
                $("#continutInfo").show();
            } else{
                    $("#continutInfo").hide();
            }
    var username= "<?php echo $username?>"
    var varsta="<?php echo $varsta?>"
    var email="<?php echo $email?>"
    var image="<?php echo $image ?>"
    var n=username.length;
             var panelOn=false;
         var n1;
     n1=n*(29-n);


    $("#myaccount").css ("width",n1);
    $("#login-text").text(username);
    $("#username1").text("Username: "+username);
    $("#varsta1").text("Varsta: "+varsta);
    $("#email1").text("Email: "+email);
    $("#profileImage" ).attr("src",image);

});


    </script>


    </html>
