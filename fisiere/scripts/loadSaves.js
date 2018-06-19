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

function loadHref(nr,ids,vectorIds,id1){
var id; var ok=true;href="#/1/"+id1+"#1";
    //alert(nr);



 while(ids!=""){
   id= ids.substr(ids.length - 3);
  id=parseInt(id);
    if (Math.floor(id/100)==nr){
         vectorIds[id%100]= 1;

    }

      ids=  ids.substring(0, ids.length-3);

    }

 for ( var i=id1*10+1;i<id1*10+11 && ok==true;i++){
if (vectorIds[i]==0){
   ok=false;
    href="#/"+nr.toString()+"/"+Math.floor(i/10).toString()+"#"+(i%10).toString();
}
 }
    href="http://infolearnchestie-com.stackstaging.com/index.php?inceput=true"+href;
   
    return(href); 
 // return nr;
}

function submenuhref(id){
    var href1="http://infolearnchestie-com.stackstaging.com/index.php?inceput=true#";
    href1=href1+id;
    return href1;
}
