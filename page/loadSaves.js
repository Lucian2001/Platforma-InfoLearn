 function loadsaves(username) {
     
username=username.toString();
   // alert((username.length)/3);
    if (username!=""){
     var usernameLength=username.length;
    var id1; 
    for( i=1;i<=usernameLength/3;i++){
      id1=username.substr(username.length - 3);
        username=username.slice(0,-3);
       // alert(username);
        
         $("#id-"+id1).css("background-color","#d8ffd6");
     }
    }
 }

function loadHref(nr,ids,vectorIds){
var id; var ok=true;href="#/1/1#1";
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

function submenuhref(id){
    var href1="http://infolearn-com.stackstaging.com/index.php?page=inceput#";
    href1=href1+id;
    return href1;
}