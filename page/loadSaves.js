 function loadsaves(username) {
     
username=username.toString();
   // alert((username.length)/3);
    var usernameLength=username.length;
    var id1; 
    for( i=1;i<=usernameLength/3;i++){
      id1=username.substr(username.length - 3);
        username=username.slice(0,-3);
       // alert(username);
        
         $("#id-"+id1).css("background-color","#d8ffd6");
     }
 }

function loadHref(nr,ids,vectorIds){
var id; var ok=true;href="";
    //alert(nr);
   
    while(ids!=0){
    id=ids%1000; //alert(Math.floor(id/100));
    if (Math.floor(id/100)==nr){
         vectorIds[id%100]= 1;
    
    } 
    
        ids=Math.floor(ids/1000);  
     //alert(ids);
    }
 for ( var i=11;i<20 && ok==true;i++){
if (vectorIds[i]==0){
   ok=false;
    href="#/"+nr.toString()+"/"+Math.floor(i/10).toString()+"#"+(i%10).toString();
}
 }
    href="http://infolearn-com.stackstaging.com/index.php?page=inceput"+href;
    return(href);
 // return nr;
}