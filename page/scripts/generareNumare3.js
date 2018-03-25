function generareNumere4(){
  var numar=Math.floor((Math.random() * 8) + 1);
  var numar1=Math.floor((Math.random() * 6) + 1);
  var numar3=Math.floor((Math.random() * 100) + 1);
 var numar4=Math.floor((Math.random() * 4) + 1);
 if (numar4>2){
   $("#id--12").html("/");
 } else{
   $("#id--12").html("%");
 }
  $("#id-11").html(numar3);
   if (numar>2){
     if (numar1>2){
         var numar3=Math.floor((Math.random() * 100) + 1);
     $("#id-21").html(10);}
     else {
         var numar3=Math.floor((Math.random() * 1000) + 1);
        $("#id-21").html(100);
     }
   }
   else {
     var numar2=Math.floor((Math.random() * 100) + 1);
       $("#id-21").html(100);
   }
}
function rezultat(){
  a=$("#id-11").html();
  b=$("#id-21").html();
  c=$("#id--12").html();
if (c=="/"){
  return Math.floor(a/b);
} else {
  return a%b;
}

}

function gresit(){
  $("#gresit1").show();
  setTimeout(function(){
        generareNumere4();
      $("#gresit1").hide();


  } ,1500);


}

function corect(){
  $("#corect1").show();
  setTimeout(function(){
        generareNumere4();
      $("#corect1").hide();


  } ,1500);
  var nr=$("#exercitiiRezolvate1").html();
  var nr1=parseInt(nr);
if (nr1>=0 && nr1<=5){
 nr1++;
 $("#exercitiiRezolvate1").html(nr1);
}
if (nr1==6){
   $("#exercitiiRezolvate").html(6);
var Id="";
 var url= window.location.href;
 for(i=0;i<url.length;i++){
if (url[i]!="/" && url[i]!="#" && (url[i]==1 || url[i]==2 || url[i]==3)){
 Id=Id+url[i];
}
}
 $("#id-"+Id).css("background-color","#d8ffd6");

$.ajax({   type:"POST",
  url:"page/testHttp.php",
  data:"Id=" + Id ,
success:function(result)
  {
      alert("Ai terminat aceasta aplicatie");
   }

});
}
}
