<?php 

echo "mama";
  /*$query = "INSERT INTO images (`image`) VALUES ('mama')";
                
                 if (mysqli_query($link, $query)) {
                    
                   
                     
                    echo "Contul  a fost creat cu succes. ";
                    echo "   Puteti sa va logati acum! ";
                    
                } else {
                    
                   echo "Nu s-a putut creea contul.Incearca mai tarziu!";
                    
                } */
if(isset($_POST['submitBtn']) && !empty($_POST['submitBtn'])) {
    if(isset($_FILES['uploadFile']['name']) && !empty($_FILES['uploadFile']['name'])) {
        
        
        $query="delete from `images` WHERE id = ".$id." LIMIT 1";
          mysqli_query($link, $query);
            //Allowed file type
        $allowed_extensions = array("jpg","jpeg","png","gif");
    
        //File extension
        $ext = strtolower(pathinfo($_FILES['uploadFile']['name'], PATHINFO_EXTENSION));
    
        //Check extension
        if(in_array($ext, $allowed_extensions)) {
           //Convert image to base64
           $encoded_image = base64_encode(file_get_contents($_FILES['uploadFile']['tmp_name']));
           $encoded_image = 'data:image/' . $ext . ';base64,' . $encoded_image;
           $query = "insert into `images` set `id` = '".$id."' , `encoded_image` = '".$encoded_image."'";
           mysqli_query($link, $query);
           
           if(mysqli_affected_rows($link) > 0) {
             
             
           } else {
             
           }
       } else {
           
       }
  }
}
?>